import { _decorator, Component, Vec3, Node, Quat } from 'cc';
import { v2_t, quat_t, v3_t } from '../lib/TempConst';
const { ccclass, property } = _decorator;

const translate = [
  new Vec3(0, 0.5, -0.5),
  new Vec3(-0.5, 0.5, 0),
  new Vec3(0, 0.5, 0.5),
  new Vec3(0.5, 0.5, 0),
  new Vec3(0, -0.5, -0.5),
  new Vec3(-0.5, -0.5, 0),
  new Vec3(0, -0.5, 0.5),
  new Vec3(0.5, -0.5, 0)
];

@ccclass('CubeMove')
export class CubeMove extends Component {
  _testNode = null;
  _isMove = false;

  start() {
    // Your initialization goes here.
    this._testNode = this.node.parent.getChildByName('test');
  }

  cubeRotate(direction: number, callback?: Function) {
    if (this._isMove) return;
    this._isMove = true;
    this.node.removeFromParent();
    let v32 = new Vec3(this.node.position);
    let o_v = new Vec3(this.node.position);
    let curTranslate = translate[direction - 1];
    v32.subtract(curTranslate);
    this.node.position = curTranslate;
    this._testNode.position = v32;
    this._testNode.addChild(this.node);
    let angle = 0;
    let max = direction > 4 ? 180 : 90;
    let move = function() {
      if (angle >= max) {
        clearInterval(timer);
        this.node.removeFromParent();
        this.node.rotation = Quat.IDENTITY;
        if (direction > 4) {
          v3_t.set(-2 * curTranslate.x, 1, -2 * curTranslate.z);
        } else {
          v3_t.set(-2 * curTranslate.x, 0, -2 * curTranslate.z);
        }
        o_v.add(v3_t);
        this.node.position = o_v;
        this._testNode.parent.addChild(this.node);
        this._testNode.position = Vec3.ZERO;
        this._testNode.rotation = Quat.IDENTITY;
        this._isMove = false;
        callback && callback();
        return;
      }
      angle += 2;
      let rotateX = direction % 2 ? (direction % 4 === 1 ? 1 : -1) : 0;
      let rotateZ = direction % 2 ? 0 : direction % 4 === 2 ? -1 : 1;
      Quat.fromEuler(quat_t, rotateX * 2, 0, rotateZ * 2);
      this._testNode.rotate(quat_t);
    };
    let timer = setInterval(move.bind(this), direction > 4 ? 1 : 2);
  }

  update(deltaTime: number) {
    // Your update function goes here.
  }
}
