import { _decorator, Component, Node, ModelComponent, Color, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import action from '../lib/Action';
import { v3_t, quat_t } from '../lib/TempConst';

@ccclass('CubeCtr')
export class CubeCtr extends Component {
  private _downAct = null;
  private _downDis = 3;
  private _downTarget: Node = null;

  start() {
    // Your initialization goes here.
  }

  static down(target: Node, callback) {
    let com = target.getComponent(ModelComponent);
    const mat = com.material;
    const pass = mat.passes[0];
    const hColor = pass.getHandle('albedo');
    let orginColor = new Color();
    pass.getUniform(hColor, orginColor);
    let { r, g, b } = orginColor;
    let act = action.addAction({
      updateHandle: (ratio, deltaTime) => {
        const pass = mat.passes[0];
        const hColor = pass.getHandle('albedo');
        let color = new Color();
        Color.set(color, r, g, b, 255 - ratio * 200);
        pass.setUniform(hColor, color);
        com.material = mat;

        v3_t.set(target.position);
        v3_t.y -= deltaTime * 8;
        target.position = v3_t;
      },
      overHandle: () => {
        callback && callback();
      }
    });
    act.run();
  }

  /* 方块显示动画 */
  static showCube(target: Node, callback?) {
    let com = target.getComponent(ModelComponent);
    const mat = com.material;
    const pass = mat.passes[0];
    const hColor = pass.getHandle('albedo');
    let orginColor = new Color();
    pass.getUniform(hColor, orginColor);
    let { r, g, b } = orginColor;
    let y = 1;
    let color = new Color();
    let act = action.addAction({
      updateHandle: (ratio, deltaTime) => {
        Color.set(color, r, g, b, ratio * 250);
        pass.setUniform(hColor, color);

        v3_t.set(target.position);
        v3_t.y = y * (1 - ratio);
        target.position = v3_t;
      },
      overHandle: () => {
        target.position = Vec3.ZERO;
        Color.set(color, r, g, b, 255);
        pass.setUniform(hColor, color);

        callback && callback();
      }
    });
    act.run();
  }

  addDownAct() {}

  // update (deltaTime: number) {
  //     // Your update function goes here.
  // }
}
