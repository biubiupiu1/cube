import { _decorator, Component, Node, AudioClip } from 'cc';
import { InstanceMgr } from '../lib/InstanceMgr';
const { ccclass, property } = _decorator;

@ccclass('MusicCtr')
export class MusicCtr extends Component {
  @property([AudioClip])
  music: AudioClip[] = [];

  onLoad() {
    InstanceMgr.registerInstance('MusicCtr', this);
  }

  start() {
    // Your initialization goes here.
  }

  play(name) {
    if (!InstanceMgr.UICtr.isVoice) return;
    this.music.find(item => item.name === name).play();
  }

  // update (deltaTime: number) {
  //     // Your update function goes here.
  // }
}
