import {
  _decorator,
  Component,
  Node,
  systemEvent,
  SystemEventType,
  ModelComponent,
  Vec2,
  Touch,
  EventTouch,
  AnimationComponent,
  ParticleSystemComponent,
  Quat,
  Vec3,
  Color
} from 'cc';
import { v3_t, quat_t } from '../lib/TempConst';
const { ccclass, property } = _decorator;
import action from '../lib/Action';
import { InstanceMgr } from '../lib/InstanceMgr';

const tempVec3: Vec3 = new Vec3();
const tempQuat: Quat = new Quat();

const translate = [
  new Vec3(0, -0.5, 0.5),
  new Vec3(0.5, -0.5, 0),
  new Vec3(0, -0.5, -0.5),
  new Vec3(-0.5, -0.5, 0),
  new Vec3(0, 0.5, 0.5),
  new Vec3(0.5, 0.5, 0),
  new Vec3(0, 0.5, -0.5),
  new Vec3(-0.5, 0.5, 0),
  new Vec3(0, -0.5, 0.5),
  new Vec3(0.5, -0.5, 0),
  new Vec3(0, -0.5, -0.5),
  new Vec3(-0.5, -0.5, 0)
];

@ccclass('CubeRotate')
export class TargetCtr extends Component {
  /* class member could be defined like this */
  // dummy = '';

  /* use `property` decorator if your want the member to be serializable */
  // @property
  // serializableDummy = 0;
  private _onceAngle = -Math.PI / 2;
  private _forwardAnchor: Vec3 = new Vec3(0, -0.5, 0.5);
  private _startPos: Vec3 = new Vec3();
  private _startRot: Quat = new Quat();
  private _anchorPos: Vec3 = new Vec3();
  private _curRotAxis: Vec3 = Vec3.UNIT_X;
  private _cube: Node = null;
  private _trailParCom: ParticleSystemComponent = null;
  private _forward: number = 1;

  //当前选择动作对象
  private _rotateAct = null;

  @property({ type: AnimationComponent })
  overAnicom: AnimationComponent = null;

  @property({ type: Node })
  trailParticle: Node = null;

  onLoad() {
    InstanceMgr.registerInstance('TargetCtr', this);
    this._cube = this.node.getChildByName('Cube') as Node;
    this._trailParCom = this.trailParticle.getComponent(
      ParticleSystemComponent
    );
  }

  start() {
    // Your initialization goes here.
    //生成旋转action
    this.addRotaeAct();
  }

  onEnable() {
    systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
    systemEvent.on(SystemEventType.TOUCH_END, this.onTouchEnd, this);
  }

  onDisable() {
    systemEvent.off(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
    systemEvent.off(SystemEventType.TOUCH_END, this.onTouchEnd, this);
  }

  onTouchMove(touch: Touch, event: EventTouch): void {}

  onTouchEnd(touch: Touch, event: EventTouch) {
    console.log('touch');
    if (this._rotateAct.isMove) return;

    let cur: Vec2 = touch.getLocation();
    let start = touch.getStartLocation();
    let v2_t = cur.subtract(start);
    let direction = 1;
    if (v2_t.x > 0 && v2_t.y < 0) {
      direction = 2;
    } else if (v2_t.x > 0 && v2_t.y > 0) {
      direction = 3;
    } else if (v2_t.x < 0 && v2_t.y > 0) {
      direction = 4;
    }
    let around = this.getCubeAround(direction);

    let newDir = 0;

    if (around[0] && !around[1]) newDir = direction;
    else if (around[1] && !around[2]) newDir = direction + 4;
    else if (around[3] && !around[1] && !around[0]) newDir = direction + 8;
    if (!newDir) return;

    this.rotateForward(newDir);
    InstanceMgr.GameCtr.destroyCube(newDir);

    InstanceMgr.MusicCtr.play('move');
  }

  init(v3: Vec3) {
    let com = this._cube.getComponent(ModelComponent);
    const mat = com.material;
    const pass = mat.passes[0];
    const hColor = pass.getHandle('albedo');
    let color = new Color();
    pass.getUniform(hColor, color);
    color.a = 0;
    pass.setUniform(hColor, color);
    com.material = mat;

    this.node.position = v3;
    this.node.scale = v3_t.set(1, 1, 1);
    this._cube.position = Vec3.ZERO;
  }

  //在生成前先隐藏target  改变透明度
  hide() {}

  rotateAround(
    startPos: Vec3,
    startRot: Quat,
    point: Vec3,
    axis: Vec3,
    angle: number
  ) {
    Quat.fromAxisAngle(tempQuat, axis, angle);

    Vec3.subtract(tempVec3, startPos, point);
    Vec3.transformQuat(tempVec3, tempVec3, tempQuat);
    Vec3.add(tempVec3, point, tempVec3);
    this.node.setPosition(tempVec3);

    Quat.rotateAround(tempQuat, startRot, axis, angle);
    Quat.normalize(tempQuat, tempQuat);
    this._cube.setRotation(tempQuat);
  }

  rotateForward(forward: number) {
    this._forward = forward;

    this._forwardAnchor = translate[forward - 1];
    this._curRotAxis = forward % 2 ? Vec3.UNIT_X : Vec3.UNIT_Z;

    let baseAngle = forward > 4 ? Math.PI : Math.PI / 2;
    if (forward % 4 === 1 || forward % 4 === 0) this._onceAngle = baseAngle;
    else this._onceAngle = -baseAngle;
    this.node.getPosition(this._startPos);
    Vec3.add(this._anchorPos, this._forwardAnchor, this._startPos);
    this._cube.getRotation(this._startRot);
    this._rotateAct.run();
  }

  /* 
       获取target周围的环境数组 
    */
  getCubeAround(forward) {
    let arr = InstanceMgr.GameCtr.gameData.data;
    let curPos = InstanceMgr.GameCtr.targetPos;
    let comPos;
    switch (forward) {
      case 1:
        comPos = new Vec3(curPos.x, curPos.y, curPos.z + 1);
        break;
      case 2:
        comPos = new Vec3(curPos.x + 1, curPos.y, curPos.z);
        break;
      case 3:
        comPos = new Vec3(curPos.x, curPos.y, curPos.z - 1);
        break;
      case 4:
        comPos = new Vec3(curPos.x - 1, curPos.y, curPos.z);
        break;
    }
    let fors = [comPos.y - 1, comPos.y, comPos.y + 1, comPos.y - 2];
    let res = [];
    fors.forEach(item => {
      if (
        arr[item] &&
        arr[item][comPos.x] &&
        arr[item][comPos.x][comPos.z] === 1
      ) {
        res.push(1);
      } else {
        res.push(0);
      }
    });

    return res;
  }

  /* 结束降落动画 */
  overAni() {
    // v3_t.set(this.node.scale);
    // v3_t.multiply3f(1.05, 1.05, 1.05);
    // this.node.scale = v3_t;
    return new Promise((resolve, reject) => {
      this.overAnicom.play();
      this.overAnicom.on('play', resolve, this);
    });
  }

  /* 添加旋转动画 */
  addRotaeAct() {
    this._rotateAct = action.addAction({
      updateHandle: ratio => {
        let angle = ratio * this._onceAngle;
        this.rotateAround(
          this._startPos,
          this._startRot,
          this._anchorPos,
          this._curRotAxis,
          angle
        );
      },
      overHandle: () => {
        this.showTrail();
        this.rotateAround(
          this._startPos,
          this._startRot,
          this._anchorPos,
          this._curRotAxis,
          this._onceAngle
        );
      },
      autoMove: false
    });
  }

  /* 显示拖尾特效 */
  showTrail() {
    let forward = this._forward % 4;
    if (forward === 1) {
      v3_t.set(0, 0, -0.5);
      this.trailParticle.setRotationFromEuler(0, 0, 0);
    } else if (forward === 2) {
      v3_t.set(-0.5, 0, 0);
      this.trailParticle.setRotationFromEuler(0, 90, 0);
    } else if (forward === 3) {
      v3_t.set(0, 0, 0.5);
      this.trailParticle.setRotationFromEuler(0, 180, 0);
    } else {
      v3_t.set(0.5, 0, 0);
      this.trailParticle.setRotationFromEuler(0, -90, 0);
    }
    this.trailParticle.position = v3_t;
    this._trailParCom.enabled = false;
    this._trailParCom.enabled = true;
  }

  down() {}

  update(deltaTime: number) {
    // Your update function goes here.
  }
}
