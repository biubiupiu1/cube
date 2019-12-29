import {
  _decorator,
  find,
  Component,
  Node,
  AnimationComponent,
  EventTouch,
  SystemEventType,
  LabelComponent,
  SpriteFrame,
  CameraComponent,
  Color,
  SpriteComponent,
  view
} from 'cc';
import { InstanceMgr } from '../lib/InstanceMgr';
const { ccclass, property } = _decorator;
import KEY from '../config/KEY';
import { MODE, modeInf } from '../config/MODE';
import utils from '../lib/Utils';
import { v3_t } from '../lib/TempConst';

@ccclass('UICtr')
export class UICtr extends Component {
  @property({ type: Node })
  startUI: Node = null;

  @property({ type: Node })
  overtUI: Node = null;

  @property({ type: Node })
  btnNode: Node = null;

  @property({ type: Node })
  levelText: Node = null;

  @property({ type: Node })
  startBtn: Node = null;

  @property({ type: Node })
  restartBtn: Node = null;

  @property({ type: Node })
  voiceOpenNode: Node = null;

  @property({ type: Node })
  voiceCloseNode: Node = null;

  @property({ type: Node })
  coverNode: Node = null;

  @property({ type: Node })
  rankRenderNode: Node = null;

  @property({ type: Node })
  rankWrap: Node = null;

  @property({ type: Node })
  resetBtn: Node = null;

  @property({ type: SpriteFrame })
  title_black: SpriteFrame = null;

  @property({ type: SpriteFrame })
  title_white: SpriteFrame = null;

  @property({ type: SpriteFrame })
  mode_moon: SpriteFrame = null;

  @property({ type: SpriteFrame })
  mode_sun: SpriteFrame = null;

  @property({ type: SpriteFrame })
  mode_moon_icon: SpriteFrame = null;

  @property({ type: SpriteFrame })
  mode_sun_icon: SpriteFrame = null;

  private _btnAni: AnimationComponent = null;

  mode = 'white';

  theme: modeInf = null;

  isVoice: boolean = false;

  onLoad() {
    InstanceMgr.registerInstance('UICtr', this);
    this._btnAni = this.btnNode.getComponent(AnimationComponent);
  }

  start() {
    // Your initialization goes here.
    this.coverNode.on(SystemEventType.TOUCH_START, () => {
      this.hideSub();
    });
    this.rankWrap.on(SystemEventType.TOUCH_START, () => {
      console.log('click = rankWrap');
    });
    this.init();
    let { width, height } = view.getVisibleSize();
    v3_t.set(0.7, 0.7, 0.7);
    let scale = width / height;
    console.log(scale, width, height);
    if (scale > 0.7) {
      this.btnNode.setScale(v3_t);
      this.startUI.setScale(v3_t);
      this.overtUI.setScale(v3_t);
      this.resetBtn.setScale(v3_t);
      this.rankWrap.setScale(v3_t);
    }
  }

  init() {
    let vocie = localStorage.getItem(KEY.IS_VOICE);
    this.isVoice = !vocie || vocie == '1' ? true : false;
    this.setVoiceIcon();
    let mode = localStorage.getItem(KEY.MODE);
    if (mode) this.mode = mode;

    this.theme = MODE[this.mode];

    this.initModeUI();
  }

  initModeUI(flag?: boolean) {
    let cameraCom = cc.find('Camera').getComponent(CameraComponent);
    cameraCom.color = new Color(this.theme.bg);
    find('Title/best', this.startUI).getComponent(
      LabelComponent
    ).color = new Color(this.theme.level);
    this.startUI
      .getChildByName('Title')
      .getComponent(SpriteComponent).spriteFrame = this['title_' + this.mode];

    this.levelText.getComponent(LabelComponent).color = new Color(
      this.theme.level
    );

    let modeNode: Node = this.btnNode.getChildByName('mode');
    let modeIcon: Node = cc.find('items/mode/wrap/icon', this.overtUI);
    if (this.mode === 'white') {
      modeNode.getComponent(SpriteComponent).spriteFrame = this.mode_moon;
      modeIcon.getComponent(SpriteComponent).spriteFrame = this.mode_moon_icon;
    } else if (this.mode === 'black') {
      modeNode.getComponent(SpriteComponent).spriteFrame = this.mode_sun;
      modeIcon.getComponent(SpriteComponent).spriteFrame = this.mode_sun_icon;
    }

    InstanceMgr.GameCtr.modeChange(this.theme, flag);
  }

  showStartUI() {
    this.overtUI.active = false;
    this.startUI.active = true;
    this.levelText.active = false;

    this.startBtn.active = true;
    this.restartBtn.active = false;

    this.showBtn();
  }

  hideStartUI() {
    this.levelText.active = true;
    this.startUI.active = false;

    this.hideBtn();
  }

  showOverUI() {
    this.startUI.active = false;
    this.overtUI.active = true;

    this.restartBtn.active = true;
    this.startBtn.active = false;

    //游戏中重置按钮出现
    this.resetBtn.active = false;

    let aniCom = this.overtUI.getComponent(AnimationComponent);
    aniCom.play('showOver');
    setTimeout(() => {
      this.showBtn();
    }, 600);
  }

  hideOverUI() {
    this.levelText.active = true;

    this.showResetBtn();
    let aniCom = this.overtUI.getComponent(AnimationComponent);
    //TODO bug在文件中指定的动画其实是hideOver
    aniCom.play('hideItems2');
    aniCom.once('stop', () => {
      this.overtUI.active = false;
    });

    this.hideBtn();
  }

  showBtn() {
    this._btnAni.play();
    this.btnNode.active = true;
  }

  hideBtn() {
    this.showResetBtn();
    this.btnNode.active = false;
  }

  initLevelTitle(level) {
    this.levelText.getComponent(LabelComponent).string = `${level}`;
    find('top/best/wrap/num', this.overtUI).getComponent(
      LabelComponent
    ).string = `${level}`;
    find('Title/best', this.startUI).getComponent(
      LabelComponent
    ).string = `关卡：${level}`;
  }

  setVoiceIcon() {
    this.voiceCloseNode.active = !this.isVoice;
    this.voiceOpenNode.active = this.isVoice;
  }

  showCover() {
    this.coverNode.active = true;
  }

  hideCover() {
    this.coverNode.active = false;
  }

  showResetBtn() {
    // 游戏中重置按钮出现
    let ani = this.resetBtn.getComponent(AnimationComponent);
    this.resetBtn.active = true;
    // 这里是 cocos 的bug , 重命名后还得使用以前的名字
    ani.play('reser');
  }

  showSub() {
    if (!window['wx']) {
      utils.showToast('当前平台暂不支持使用');
      return;
    }
    this.rankRenderNode.active = true;
    this.rankRenderNode.getComponent(AnimationComponent).play();
    let openDataContext = window['wx'].getOpenDataContext();
    openDataContext.postMessage({
      action: 'update'
    });
  }

  showShare() {
    if (!window['wx']) {
      utils.showToast('当前平台暂不支持使用');
      return;
    }
  }

  hideSub() {
    console.log('hideSub');
    this.hideCover();
    this.rankRenderNode.active = false;
  }

  toogleMode() {
    if (InstanceMgr.GameCtr.isBuilding) return;
    InstanceMgr.MusicCtr.play('click');
    if (this.mode === 'white') {
      this.mode = 'black';
    } else if (this.mode === 'black') {
      this.mode = 'white';
    }
    localStorage.setItem(KEY.MODE, this.mode);
    this.theme = MODE[this.mode];
    this.initModeUI(true);
  }

  toogleVoice() {
    this.isVoice = !this.isVoice;
    localStorage.setItem(KEY.IS_VOICE, this.isVoice ? '1' : '0');
    if (this.isVoice) {
      InstanceMgr.MusicCtr.play('click');
    }
    this.setVoiceIcon();
  }

  btnClick(event: EventTouch, type) {
    let target = event.currentTarget as Node;
    let aniCom = target.getComponent(AnimationComponent);
    if (type == 'rank') {
      this.showSub();
    } else if (type == 'share') {
      this.showShare();
    } else if (type == 'mode') {
      this.toogleMode();
    } else if (type == 'voice') {
      this.toogleVoice();
    }
    aniCom.play('btnClick');
  }

  itemClick(event: EventTouch, num) {
    let target = event.currentTarget as Node;
    let aniCom = target.getComponent(AnimationComponent);
    if (num == 1) {
      this.toogleMode();
    } else if (num == 2) {
    } else if (num == 3) {
    }
    aniCom.play('clickItem');
  }

  resetBtnClick(event: EventTouch, type) {
    let target = event.currentTarget as Node;
    let aniCom = target.getComponent(AnimationComponent);

    // 防止重置游戏的时候触摸事件
    InstanceMgr.TargetCtr.enabled = false;

    InstanceMgr.GameCtr.init();
    InstanceMgr.MusicCtr.play('click');
    aniCom.play('btnClick');
  }

  // update (deltaTime: number) {
  //     // Your update function goes here.
  // }
}
