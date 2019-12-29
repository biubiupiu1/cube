import {
  _decorator,
  Component,
  systemEvent,
  Touch,
  Quat,
  Vec3,
  EventTouch,
  SystemEventType,
  Node,
  Prefab,
  instantiate,
  Vec2,
  v3,
  CameraComponent,
  AnimationComponent,
  Color,
  SpriteFrame,
  Texture2D,
  SpriteComponent,
  ImageAsset,
  Material,
  ModelComponent
} from 'cc';
const { ccclass, property } = _decorator;
import { v2_t, quat_t, v3_t } from '../lib/TempConst';

import { data, getXYZ, dataitem } from '../Test';
import action from '../lib/Action';
import { InstanceMgr } from '../lib/InstanceMgr';
import { CubeCtr } from './CubeCtr';
import KEY from '../config/KEY';
import { modeInf } from '../config/MODE';

enum EGameSate {
  LOBBY,
  GAMING,
  GAMEOVER
}

@ccclass('GameCtr')
export class GameCtr extends Component {
  /* class member could be defined like this */
  // dummy = '';

  /* use `property` decorator if your want the member to be serializable */
  // @property
  // serializableDummy = 0;

  @property({ type: Prefab })
  cubePrefab: Prefab = null;

  @property({ type: Prefab })
  targetPrefab: Prefab = null;

  @property({ type: Material })
  cubeMtl: Material = null;

  @property({ type: Material })
  targetMtl: Material = null;

  @property({ type: Node })
  cube_wrap: Node = null;

  @property({ type: Node })
  gameUI: Node = null;

  @property({ type: Node })
  testNode: Node = null;

  @property
  row_col = 9;

  @property({ type: Node })
  targetNode: Node = null;

  @property({ type: Node })
  cubeRoot: Node = null;

  @property({ type: CameraComponent })
  camera: CameraComponent = null;

  private _testNode: Node = null;
  private _cubes = {};
  private _level: number = 2;
  private _curState = EGameSate.LOBBY;
  private _isFirst = true;

  /* 当前是否处在构建中，主要是防止模式切换时的防止多次点击 */
  isBuilding = false;

  /* 
    用v3来表示当前target虚拟位置 
    三维数组来表示当前边长为九的立方体
    [y值
        [x值
            [z值]
        ]
    ]
    */
  targetPos: Vec3 = null;
  gameData: dataitem = null;

  onLoad() {
    InstanceMgr.registerInstance('GameCtr', this);
  }

  start() {
    // Your initialization goes here.

    let level = localStorage.getItem(KEY.LEVEL);
    if (level) {
      this._level = +level;
    } else {
      this._level = 1;
      localStorage.setItem(KEY.LEVEL, this._level + '');
    }

    //InstanceMgr.WxRankList.uploadLevelOpen(2);

    /* 延迟至下个事件循环执行，因为modeChange需要改变mtl */
    setTimeout(() => {
      this.init();
    });
  }

  set curState(value: EGameSate) {
    switch (value) {
      case EGameSate.LOBBY:
        break;
      case EGameSate.GAMING:
        break;
      case EGameSate.GAMEOVER:
        break;
    }
    this._curState = value;
  }

  init() {
    //this.gameUI.active = false;
    InstanceMgr.UICtr.initLevelTitle(this._level);
    this.gameData = JSON.parse(JSON.stringify(data[this._level - 1]));
    this.buildCube().then(() => {
      if (!this._isFirst) InstanceMgr.TargetCtr.enabled = true;
    });
  }

  startGame() {
    // 针对第一次初始化的特殊处理

    this.curState = EGameSate.GAMING;

    InstanceMgr.UICtr.hideStartUI();
    if (!this._isFirst) this.init();
    else {
      InstanceMgr.TargetCtr.enabled = true;
      this._isFirst = false;
    }

    InstanceMgr.MusicCtr.play('start');
  }

  reStart() {
    //TODO
    InstanceMgr.UICtr.hideOverUI();
    this.curState = EGameSate.GAMING;
    this.init();
    InstanceMgr.MusicCtr.play('start');
  }

  gameOver(promiseS) {
    InstanceMgr.TargetCtr.enabled = false;
    promiseS &&
      promiseS.then(() => {
        InstanceMgr.UICtr.showOverUI();
      });
  }

  onTouchMove(touch: Touch, event: EventTouch): void {
    touch.getDelta(v2_t);
    if (v2_t.x != 0) {
      Quat.fromEuler(quat_t, 0, v2_t.x * 0.75, 0);
      this.cube_wrap.rotate(quat_t);
    }
  }

  buildCube() {
    this.isBuilding = true;

    this.cube_wrap.removeAllChildren();

    let { data, x, y, z } = this.gameData;

    this._cubes = {};

    let arr = data;

    let offsetX = this.row_col / 2 - (x % 2 ? 0.5 : 0);
    let offsetY = this.row_col / 2 - (y % 2 ? 0.5 : 0);
    let offsetZ = this.row_col / 2 - (z % 2 ? 0.5 : 0);

    let nodeArr: Node[] = [];

    //InstanceMgr.TargetCtr.hide();

    for (let i = 0; i < this.row_col; i++) {
      if (!arr[i] || !arr[i].length) continue;
      for (let j = 0; j < this.row_col; j++) {
        if (!arr[i][j] || !arr[i][j].length) continue;
        for (let k = 0; k < this.row_col; k++) {
          let item = arr[i][j][k];
          if (item) {
            v3_t.set(j - offsetX, i - offsetY, k - offsetZ);
            if (!(item % 2)) {
              this.targetPos = new Vec3(j, i, k);
              InstanceMgr.TargetCtr.init(v3_t);
            } else {
              let node: Node = instantiate(this.cubePrefab);
              node
                .getChildByName('Cube')
                .getComponent(ModelComponent).material = this.cubeMtl;
              node.position = v3_t;
              nodeArr.push(node);
              //this.cube_wrap.addChild(node);
              //使用yxz形式记录cube node
              this._cubes[`${j}${i}${k}`] = node;
            }
          }
        }
      }
    }

    //将target添加进动画队列
    //对target Cube做出特殊处理
    InstanceMgr.TargetCtr.node.getChildByName('Cube').active = false;
    nodeArr.push(InstanceMgr.TargetCtr.node as Node);
    let len = nodeArr.length;

    //方块生成开始动画
    let pro = nodeArr.reduce((acc, item, index) => {
      return acc.then(
        () =>
          new Promise((resolve, reject) => {
            if (index !== len - 1) this.cube_wrap.addChild(item);
            else {
              //构建结束
              this.isBuilding = false;
            }

            //对target做出单独处理
            let cube = item.getChildByName('Cube');
            cube.active = true;

            CubeCtr.showCube(cube);
            setTimeout(resolve, 40);
          })
      );
    }, Promise.resolve());

    return pro;
  }

  destroyCube(newDir: number) {
    //根据当前target的坐标销毁脚下的方块

    let targetPos = this.targetPos;
    v3_t.set(targetPos);
    v3_t.y--;
    let curKey = `${v3_t.x}${v3_t.y}${v3_t.z}`;
    let desNode = this._cubes[curKey];
    this.gameData.data[v3_t.y][v3_t.x][v3_t.z] = 0;
    delete this._cubes[curKey];
    CubeCtr.down(desNode.getChildByName('Cube'), () => {
      desNode.destroy();
    });

    if (newDir % 2) {
      targetPos.z += newDir % 4 === 3 ? -1 : 1;
    } else {
      targetPos.x += newDir % 4 ? 1 : -1;
    }
    if (newDir > 4 && newDir < 9) {
      targetPos.y++;
    } else if (newDir > 8) {
      targetPos.y--;
    }

    //做一个延时处理
    setTimeout(() => {
      this.checkGameOver();
    }, 200);
  }

  nextLevel() {
    this._level = this._level + 1 > data.length ? data.length : this._level + 1;
    localStorage.setItem(KEY.LEVEL, this._level + '');
  }

  checkGameOver() {
    if (Object.keys(this._cubes).length === 1) {
      console.log('nextLevel');
      this.nextLevel();
      //个结束动画
      this.overShake().then(res => {
        let handle = null;
        let promiseS = new Promise(reslove => (handle = reslove));
        this.gameOver(promiseS);
        let arr = [InstanceMgr.TargetCtr.overAni()];
        setTimeout(() => {
          arr.push(InstanceMgr.ParticleCtr.playOverParticle());
          Promise.all(arr).then(handle);
        }, 1000);
      });
      return;
    }

    let newDir = 0;
    for (let i = 1; i <= 4; i++) {
      let around = InstanceMgr.TargetCtr.getCubeAround(i);
      if (around[0] && !around[1]) newDir = i;
      else if (around[1] && !around[2]) newDir = i + 4;
      else if (around[3] && !around[1] && !around[0]) newDir = i + 8;
    }
    if (!newDir) {
      console.log('gameOver');
      let handle = null;
      let promiseS = new Promise(reslove => (handle = reslove));
      this.gameOver(promiseS);
      this.dieAni().then(handle);
    }
  }

  /* 死亡结束动画 */
  dieAni() {
    let com = this.camera.getComponent(AnimationComponent);
    let color = new Color().set(this.camera.color);
    com.play();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        this.camera.color = color;
        com.stop();
      }, 1500);
    });
  }

  /* 结束抖动 */
  overShake() {
    let com = this.cubeRoot.getComponent(AnimationComponent);
    com.play();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        com.stop();
      }, 1500);
    });
  }

  /* 模式变换需要作出的改动 
        @param mode 当前模式
        @param flag 是否需要重新build cube
    */
  modeChange(mode: modeInf, flag?: boolean) {
    console.log('modeChange');
    const mat = this.cubeMtl;
    mat.setProperty('albedo', new Color(mode.cube));
    if (flag) this.buildCube();
  }

  update(deltaTime: number) {
    action.update(deltaTime);

    // Your update function goes here.
    // this.RotateAround(v3_t, Vec3.UNIT_X, deltaTime)
    // let squat: Quat = this.targetNode.getRotation();
    // Quat.rotateAroundLocal(quat_t, squat, this.targetNode.getWorldPosition().normalize(), 1 * deltaTime);
    // //Quat.rotateAround(quat_t, squat, Vec3.UNIT_X, 1 * deltaTime);
    // //this._testNode.setRotation(quat_t);
    // this.targetNode.setRotation(quat_t);
  }
}
