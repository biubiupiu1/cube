import { _decorator, Component, ParticleSystemComponent } from 'cc';
const { ccclass, property } = _decorator;
import { InstanceMgr } from '../lib/InstanceMgr';

@ccclass('ParticleCtr')
export class ParticleCtr extends Component {
  @property({ type: ParticleSystemComponent })
  over: ParticleSystemComponent[] = [];

  start() {
    // Your initialization goes here.
    InstanceMgr.registerInstance('ParticleCtr', this);
  }

  playOverParticle() {
    return new Promise(reslove => {
      this.over.forEach(item => {
        item.enabled = false;
        item.enabled = true;
      });
      setTimeout(reslove, 3000);
    });
  }

  // update (deltaTime: number) {
  //     // Your update function goes here.
  // }
}
