import { TargetCtr } from '../gamePlay/TargetCtr';
import { GameCtr } from '../gamePlay/GameCtr';
import { CubeMove } from '../gamePlay/CubeMove';
import { CubeCtr } from '../gamePlay/CubeCtr';
import { ParticleCtr } from '../gamePlay/ParticleCtr';
import { UICtr } from '../gamePlay/UICtr';
import { MusicCtr } from '../gamePlay/MusicCtr';
import { WxRankList } from '../gamePlay/WxRankList';

/**
 * Hack 的做法，避免循环引用，并可以方便的在各个文件访问具体的实例和减少模块间的导入耦合
 */

export class InstanceMgr {
  static readonly GameCtr: GameCtr;

  static readonly TargetCtr: TargetCtr;

  static readonly CubeMove: CubeMove;

  static readonly CubeCtr: CubeCtr;

  static readonly ParticleCtr: ParticleCtr;

  static readonly UICtr: UICtr;

  static readonly MusicCtr: MusicCtr;

  static readonly WxRankList: WxRankList;

  static registerInstance(name: string, entity: any) {
    if (InstanceMgr[name] != null) {
      console.error(name, 'is duplicate');
    } else {
      InstanceMgr[name] = entity;
    }
  }
}
