import {
  _decorator,
  Component,
  Texture2D,
  Node,
  SpriteFrame,
  SpriteComponent
} from 'cc';
const { ccclass, property } = _decorator;
import { InstanceMgr } from '../lib/InstanceMgr';

let Consts = {
  OpenDataKeys: {
    InitKey: 'initKey',
    Grade: 'testkey',
    LevelKey: 'reachlevel',
    ScoreKey: 'levelScore' // json.string
  },
  DomainAction: {
    FetchFriend: 'FetchFriend',
    FetchGroup: 'FetchGroup',
    FetchFriendLevel: 'FetchFriendLevel', //好友关卡进度排行
    FetchFriendScore: 'FetchFriendScore', //好友关卡得分排行
    HorConmpar: 'HorConmpar', //横向比较 horizontal comparison
    Paging: 'Paging',
    Scrolling: 'Scrolling'
  }
};

// 这个换成自己的逻辑
let utils = {
  curLevel: 1,
  getScore: _ => {
    return 1;
  }
};

@ccclass('WxRankList')
export class WxRankList extends Component {
  @property({ type: Node })
  rankRender: Node = null;

  @property({ type: Node })
  rankListNode: Node = null;

  @property({ type: Node })
  rankBgNode: Node = null;

  @property({ type: Node })
  touchLayer: Node = null;

  enableScroll = true;
  _timeCounter = 0;
  rendInterval = 0.5;
  rankTexture: Texture2D = null;
  rankSpriteFrame: SpriteFrame = null;
  closeBackRank = 0;

  scale = 1;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    InstanceMgr.registerInstance('WxRankList', this);

    this.rankTexture = new Texture2D();
    this.rankSpriteFrame = new cc.SpriteFrame();
    this.resizeSharedCanvas(this.rankRender.width, this.rankRender.height);
    this.loadLevelOpenRank();
  }

  // start() {
  // }

  update(dt) {
    // this._timeCounter += dt
    // if (this._timeCounter < this.rendInterval) return
    // this._timeCounter = 0
    this.updateRankList();
  }

  resizeSharedCanvas(width, height) {
    if (!window['wx']) return;
    let sharedCanvas = window['wx'].getOpenDataContext().canvas;
    sharedCanvas.width = width;
    sharedCanvas.height = height;
    console.log(sharedCanvas);
  }

  changeRender(renderNode) {
    if (renderNode.name === 'sprHorRank') {
      this.rankListNode.active = false;
      this.rankBgNode.active = false;
    } else if (renderNode.name === 'sprRankList') {
      this.rankListNode.active = true;
      this.rankBgNode.active = true;
    }
    this.rankRender.width = renderNode.width;
    this.rankRender.height = renderNode.height;
    this.rankRender.position = renderNode.position;
    this.resizeSharedCanvas(renderNode.width, renderNode.height);
  }

  updateRankList() {
    if (!window['wx']) return;
    if (!this.rankTexture) return;
    let sharedCanvas = window['wx'].getOpenDataContext().canvas;
    this.rankTexture.uploadData(sharedCanvas);
    this.rankSpriteFrame.texture = this.rankTexture;
    this.rankRender.getComponent(
      SpriteComponent
    ).spriteFrame = this.rankSpriteFrame;
  }

  onEnable() {
    this.touchLayer.active = true;
    if (this.enableScroll) {
      this.rankRender.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    // this.postMessage(Consts.DomainAction.FetchFriendLevel)
  }

  onDisable() {
    if (this.enableScroll) {
      this.rankRender.off(cc.Node.EventType.TOUCH_MOVE);
    }
  }

  onViewDetailRank() {
    this.closeBackRank = 1;
    this.loadLevelScoreRank(utils.curLevel);
  }

  onPageUp() {
    cc.log(this);
    this.postMessage('Paging', -1);
  }

  onPageDown() {
    this.postMessage('Paging', 1);
  }

  onClose() {
    if (this.closeBackRank === 1) {
      this.closeBackRank = 0;
      this.loadHorRank(utils.curLevel);
      return;
    }
    this.node.active = false;
  }

  onTouchMove(event) {
    const deltaY = event.getDeltaY();
    // console.log("rank touchmove:", deltaY);
    this.postMessage('Scrolling', deltaY);
  }

  //获取关卡得分排行
  loadLevelScoreRank(level) {
    this.node.active = true;
    this.touchLayer.active = true;
    this.onEnable();
    this.changeRender(this.rankListNode);
    this.postMessage(Consts.DomainAction.FetchFriendScore, level);
  }

  //获取关卡进度排行
  loadLevelOpenRank() {
    //this.touchLayer.active = true
    this.onEnable();
    this.changeRender(this.rankListNode);
    this.postMessage(Consts.DomainAction.FetchFriendLevel, this.scale);
  }

  //横向比较
  loadHorRank(level = 1) {
    this.node.active = true;
    this.touchLayer.active = false;
    this.onDisable();
    this.postMessage(
      Consts.DomainAction.HorConmpar,
      level,
      utils.getScore(level)
    );
  }

  //向子域发送消息
  postMessage(action, data = null, dataEx = null) {
    if (!window['wx']) return;
    let openDataContext = window['wx'].getOpenDataContext();
    openDataContext.postMessage({
      action: action,
      data: data,
      dataEx: dataEx
    });
  }

  // //检查得分
  // checkScore(key, callback){
  //     if (!window.wx) return
  //     wx.getUserCloudStorage({
  //         keyList:[key],
  //         success:res=>{
  //             res.data.
  //         }
  //     })
  // }

  //wx api
  // 上传关卡分数
  uploadScore(level, score) {
    if (!window['wx']) return;
    score = score.toString();
    window['wx'].setUserCloudStorage({
      KVDataList: [{ key: Consts.OpenDataKeys.ScoreKey + level, value: score }],
      success: res => {
        console.log('uploadScore success:res=>', res);
      },
      fail: res => {
        console.log('uploadScore fail:res=>', res);
      }
    });
  }

  // 上传关卡开启进度
  uploadLevelOpen(level) {
    console.log('uploadLevelOpen', level);
    if (!window.window['wx']) return;
    level = level.toString();
    window['wx'].setUserCloudStorage({
      KVDataList: [{ key: Consts.OpenDataKeys.LevelKey, value: level }],
      success: res => {
        console.log('uploadScore success:res=>', res);
        this.loadLevelOpenRank();
      },
      fail: res => {
        console.log('uploadScore fail:res=>', res);
      }
    });
  }

  //删除微信数据
  removeUserKey(key_or_keys) {
    if (!window.window['wx']) return;
    if (typeof key_or_keys === 'string') {
      key_or_keys = [key_or_keys];
    }
    window['wx'].removeUserCloudStorage({
      keyList: key_or_keys,
      success: res => {
        console.log('uploadScore success:res=>', res);
      },
      fail: res => {
        console.log('uploadScore fail:res=>', res);
      }
    });
  }

  // 分享
  /* args:{
                title: string
                imageUrl: string
                query: string
                success: func
                fail: func
            }
    */
  share(args) {
    if (!window.window['wx']) return;
    if (!args) args = {};
    args.imageUrl =
      args.imageUrl ||
      'http://img.zcool.cn/community/01c2ac57beb18d0000012e7eaa6d19.jpg@1280w_1l_2o_100sh.jpg';
    window['wx'].shareAppMessage({
      title: '好多砖块啊，快来一起打',
      // imageUrl: "res/raw-assets/res/shengming.25929.png",
      imageUrl: args.imageUrl,
      query: 'key=testshare',
      success: res => {
        console.log('success:', res);
        if (args.success) {
          args.success(res);
        }
      },
      fail: res => {
        console.log('fail:', res);
        if (args.fail) {
          args.fail(res);
        }
      }
    });
  }

  setScale(scale) {
    this.scale = scale;
    this.node.setScale(scale);
  }

  initRank() {}

  snapshotSync() {
    if (!window['wx']) return;
    var canvas = cc.game.canvas;
    var width = cc.winSize.width;
    var height = cc.winSize.height;

    return canvas['toTempFilePathSync']({
      x: 0,
      y: 0,
      width: width * 1.5,
      height: height,
      destWidth: width * 1.5,
      destHeight: height
    });
  }
}
