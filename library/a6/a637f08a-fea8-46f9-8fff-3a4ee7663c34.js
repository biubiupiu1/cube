"use strict";

System.register(["cc", "../lib/InstanceMgr.ts", "../config/KEY.ts", "../config/MODE.ts", "../lib/Utils.ts", "../lib/TempConst.ts"], function (_export, _context) {
  "use strict";

  var _decorator, find, Component, Node, AnimationComponent, SystemEventType, LabelComponent, SpriteFrame, CameraComponent, Color, SpriteComponent, view, InstanceMgr, KEY, MODE, utils, v3_t, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp, ccclass, property, UICtr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
    _dec17: void 0,
    _dec18: void 0,
    _dec19: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _descriptor16: void 0,
    _descriptor17: void 0,
    _descriptor18: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      find = _cc.find;
      Component = _cc.Component;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
      SystemEventType = _cc.SystemEventType;
      LabelComponent = _cc.LabelComponent;
      SpriteFrame = _cc.SpriteFrame;
      CameraComponent = _cc.CameraComponent;
      Color = _cc.Color;
      SpriteComponent = _cc.SpriteComponent;
      view = _cc.view;
    }, function (_libInstanceMgrTs) {
      InstanceMgr = _libInstanceMgrTs.InstanceMgr;
    }, function (_configKEYTs) {
      KEY = _configKEYTs.default;
    }, function (_configMODETs) {
      MODE = _configMODETs.MODE;
    }, function (_libUtilsTs) {
      utils = _libUtilsTs.default;
    }, function (_libTempConstTs) {
      v3_t = _libTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "a637fCK/qhG+Y//Ok7nZjw0", "UICtr"); // begin UICtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UICtr", UICtr = (_dec = ccclass('UICtr'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: SpriteFrame
      }), _dec15 = property({
        type: SpriteFrame
      }), _dec16 = property({
        type: SpriteFrame
      }), _dec17 = property({
        type: SpriteFrame
      }), _dec18 = property({
        type: SpriteFrame
      }), _dec19 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(UICtr, _Component);

        function UICtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, UICtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(UICtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "startUI", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "overtUI", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "btnNode", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "levelText", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "startBtn", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "restartBtn", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "voiceOpenNode", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "voiceCloseNode", _descriptor8, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "coverNode", _descriptor9, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rankRenderNode", _descriptor10, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rankWrap", _descriptor11, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "resetBtn", _descriptor12, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "title_black", _descriptor13, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "title_white", _descriptor14, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mode_moon", _descriptor15, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mode_sun", _descriptor16, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mode_moon_icon", _descriptor17, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mode_sun_icon", _descriptor18, babelHelpers.assertThisInitialized(_this));
          _this._btnAni = null;
          _this.mode = 'white';
          _this.theme = null;
          _this.isVoice = false;
          return _this;
        }

        babelHelpers.createClass(UICtr, [{
          key: "onLoad",
          value: function onLoad() {
            InstanceMgr.registerInstance('UICtr', this);
            this._btnAni = this.btnNode.getComponent(AnimationComponent);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.coverNode.on(SystemEventType.TOUCH_START, function () {
              _this2.hideSub();
            });
            this.rankWrap.on(SystemEventType.TOUCH_START, function () {
              console.log('click = rankWrap');
            });
            this.init();

            var _view$getVisibleSize = view.getVisibleSize(),
                width = _view$getVisibleSize.width,
                height = _view$getVisibleSize.height;

            v3_t.set(0.7, 0.7, 0.7);
            var scale = width / height;
            console.log(scale, width, height);

            if (scale > 0.7) {
              this.btnNode.setScale(v3_t);
              this.startUI.setScale(v3_t);
              this.overtUI.setScale(v3_t);
              this.resetBtn.setScale(v3_t);
              this.rankWrap.setScale(v3_t);
            }
          }
        }, {
          key: "init",
          value: function init() {
            var vocie = localStorage.getItem(KEY.IS_VOICE);
            this.isVoice = !vocie || vocie == '1' ? true : false;
            this.setVoiceIcon();
            var mode = localStorage.getItem(KEY.MODE);
            if (mode) this.mode = mode;
            this.theme = MODE[this.mode];
            this.initModeUI();
          }
        }, {
          key: "initModeUI",
          value: function initModeUI(flag) {
            var cameraCom = cc.find('Camera').getComponent(CameraComponent);
            cameraCom.color = new Color(this.theme.bg);
            find('Title/best', this.startUI).getComponent(LabelComponent).color = new Color(this.theme.level);
            this.startUI.getChildByName('Title').getComponent(SpriteComponent).spriteFrame = this['title_' + this.mode];
            this.levelText.getComponent(LabelComponent).color = new Color(this.theme.level);
            var modeNode = this.btnNode.getChildByName('mode');
            var modeIcon = cc.find('items/mode/wrap/icon', this.overtUI);

            if (this.mode === 'white') {
              modeNode.getComponent(SpriteComponent).spriteFrame = this.mode_moon;
              modeIcon.getComponent(SpriteComponent).spriteFrame = this.mode_moon_icon;
            } else if (this.mode === 'black') {
              modeNode.getComponent(SpriteComponent).spriteFrame = this.mode_sun;
              modeIcon.getComponent(SpriteComponent).spriteFrame = this.mode_sun_icon;
            }

            InstanceMgr.GameCtr.modeChange(this.theme, flag);
          }
        }, {
          key: "showStartUI",
          value: function showStartUI() {
            this.overtUI.active = false;
            this.startUI.active = true;
            this.levelText.active = false;
            this.startBtn.active = true;
            this.restartBtn.active = false;
            this.showBtn();
          }
        }, {
          key: "hideStartUI",
          value: function hideStartUI() {
            this.levelText.active = true;
            this.startUI.active = false;
            this.hideBtn();
          }
        }, {
          key: "showOverUI",
          value: function showOverUI() {
            var _this3 = this;

            this.startUI.active = false;
            this.overtUI.active = true;
            this.restartBtn.active = true;
            this.startBtn.active = false; //游戏中重置按钮出现

            this.resetBtn.active = false;
            var aniCom = this.overtUI.getComponent(AnimationComponent);
            aniCom.play('showOver');
            setTimeout(function () {
              _this3.showBtn();
            }, 600);
          }
        }, {
          key: "hideOverUI",
          value: function hideOverUI() {
            var _this4 = this;

            this.levelText.active = true;
            this.showResetBtn();
            var aniCom = this.overtUI.getComponent(AnimationComponent); //TODO bug在文件中指定的动画其实是hideOver

            aniCom.play('hideItems2');
            aniCom.once('stop', function () {
              _this4.overtUI.active = false;
            });
            this.hideBtn();
          }
        }, {
          key: "showBtn",
          value: function showBtn() {
            this._btnAni.play();

            this.btnNode.active = true;
          }
        }, {
          key: "hideBtn",
          value: function hideBtn() {
            this.showResetBtn();
            this.btnNode.active = false;
          }
        }, {
          key: "initLevelTitle",
          value: function initLevelTitle(level) {
            this.levelText.getComponent(LabelComponent).string = "".concat(level);
            find('top/best/wrap/num', this.overtUI).getComponent(LabelComponent).string = "".concat(level);
            find('Title/best', this.startUI).getComponent(LabelComponent).string = "\u5173\u5361\uFF1A".concat(level);
          }
        }, {
          key: "setVoiceIcon",
          value: function setVoiceIcon() {
            this.voiceCloseNode.active = !this.isVoice;
            this.voiceOpenNode.active = this.isVoice;
          }
        }, {
          key: "showCover",
          value: function showCover() {
            this.coverNode.active = true;
          }
        }, {
          key: "hideCover",
          value: function hideCover() {
            this.coverNode.active = false;
          }
        }, {
          key: "showResetBtn",
          value: function showResetBtn() {
            // 游戏中重置按钮出现
            var ani = this.resetBtn.getComponent(AnimationComponent);
            this.resetBtn.active = true; // 这里是 cocos 的bug , 重命名后还得使用以前的名字

            ani.play('reser');
          }
        }, {
          key: "showSub",
          value: function showSub() {
            if (!window['wx']) {
              utils.showToast('当前平台暂不支持使用');
              return;
            }

            this.rankRenderNode.active = true;
            this.rankRenderNode.getComponent(AnimationComponent).play();
            var openDataContext = window['wx'].getOpenDataContext();
            openDataContext.postMessage({
              action: 'update'
            });
          }
        }, {
          key: "showShare",
          value: function showShare() {
            if (!window['wx']) {
              utils.showToast('当前平台暂不支持使用');
              return;
            }
          }
        }, {
          key: "hideSub",
          value: function hideSub() {
            console.log('hideSub');
            this.hideCover();
            this.rankRenderNode.active = false;
          }
        }, {
          key: "toogleMode",
          value: function toogleMode() {
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
        }, {
          key: "toogleVoice",
          value: function toogleVoice() {
            this.isVoice = !this.isVoice;
            localStorage.setItem(KEY.IS_VOICE, this.isVoice ? '1' : '0');

            if (this.isVoice) {
              InstanceMgr.MusicCtr.play('click');
            }

            this.setVoiceIcon();
          }
        }, {
          key: "btnClick",
          value: function btnClick(event, type) {
            var target = event.currentTarget;
            var aniCom = target.getComponent(AnimationComponent);

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
        }, {
          key: "itemClick",
          value: function itemClick(event, num) {
            var target = event.currentTarget;
            var aniCom = target.getComponent(AnimationComponent);

            if (num == 1) {
              this.toogleMode();
            } else if (num == 2) {} else if (num == 3) {}

            aniCom.play('clickItem');
          }
        }, {
          key: "resetBtnClick",
          value: function resetBtnClick(event, type) {
            var target = event.currentTarget;
            var aniCom = target.getComponent(AnimationComponent); // 防止重置游戏的时候触摸事件

            InstanceMgr.TargetCtr.enabled = false;
            InstanceMgr.GameCtr.init();
            InstanceMgr.MusicCtr.play('click');
            aniCom.play('btnClick');
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return UICtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "startUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "overtUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "levelText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "restartBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "voiceOpenNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "voiceCloseNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "coverNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankRenderNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankWrap", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "resetBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "title_black", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "title_white", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mode_moon", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mode_sun", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mode_moon_icon", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mode_sun_icon", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end UICtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvVUlDdHIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImZpbmQiLCJDb21wb25lbnQiLCJOb2RlIiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiU3lzdGVtRXZlbnRUeXBlIiwiTGFiZWxDb21wb25lbnQiLCJTcHJpdGVGcmFtZSIsIkNhbWVyYUNvbXBvbmVudCIsIkNvbG9yIiwiU3ByaXRlQ29tcG9uZW50IiwidmlldyIsIkluc3RhbmNlTWdyIiwiS0VZIiwiTU9ERSIsInV0aWxzIiwidjNfdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJQ3RyIiwidHlwZSIsIl9idG5BbmkiLCJtb2RlIiwidGhlbWUiLCJpc1ZvaWNlIiwicmVnaXN0ZXJJbnN0YW5jZSIsImJ0bk5vZGUiLCJnZXRDb21wb25lbnQiLCJjb3Zlck5vZGUiLCJvbiIsIlRPVUNIX1NUQVJUIiwiaGlkZVN1YiIsInJhbmtXcmFwIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0Iiwic2NhbGUiLCJzZXRTY2FsZSIsInN0YXJ0VUkiLCJvdmVydFVJIiwicmVzZXRCdG4iLCJ2b2NpZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJJU19WT0lDRSIsInNldFZvaWNlSWNvbiIsImluaXRNb2RlVUkiLCJmbGFnIiwiY2FtZXJhQ29tIiwiY2MiLCJjb2xvciIsImJnIiwibGV2ZWwiLCJnZXRDaGlsZEJ5TmFtZSIsInNwcml0ZUZyYW1lIiwibGV2ZWxUZXh0IiwibW9kZU5vZGUiLCJtb2RlSWNvbiIsIm1vZGVfbW9vbiIsIm1vZGVfbW9vbl9pY29uIiwibW9kZV9zdW4iLCJtb2RlX3N1bl9pY29uIiwiR2FtZUN0ciIsIm1vZGVDaGFuZ2UiLCJhY3RpdmUiLCJzdGFydEJ0biIsInJlc3RhcnRCdG4iLCJzaG93QnRuIiwiaGlkZUJ0biIsImFuaUNvbSIsInBsYXkiLCJzZXRUaW1lb3V0Iiwic2hvd1Jlc2V0QnRuIiwib25jZSIsInN0cmluZyIsInZvaWNlQ2xvc2VOb2RlIiwidm9pY2VPcGVuTm9kZSIsImFuaSIsIndpbmRvdyIsInNob3dUb2FzdCIsInJhbmtSZW5kZXJOb2RlIiwib3BlbkRhdGFDb250ZXh0IiwiZ2V0T3BlbkRhdGFDb250ZXh0IiwicG9zdE1lc3NhZ2UiLCJhY3Rpb24iLCJoaWRlQ292ZXIiLCJpc0J1aWxkaW5nIiwiTXVzaWNDdHIiLCJzZXRJdGVtIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwic2hvd1N1YiIsInNob3dTaGFyZSIsInRvb2dsZU1vZGUiLCJ0b29nbGVWb2ljZSIsIm51bSIsIlRhcmdldEN0ciIsImVuYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLGtCLE9BQUFBLGtCO0FBRUFDLE1BQUFBLGUsT0FBQUEsZTtBQUNBQyxNQUFBQSxjLE9BQUFBLGM7QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBQ0FDLE1BQUFBLGUsT0FBQUEsZTtBQUNBQyxNQUFBQSxLLE9BQUFBLEs7QUFDQUMsTUFBQUEsZSxPQUFBQSxlO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTs7QUFFT0MsTUFBQUEsVyxxQkFBQUEsVzs7QUFFRkMsTUFBQUEsRzs7QUFDRUMsTUFBQUEsSSxpQkFBQUEsSTs7QUFDRkMsTUFBQUEsSzs7QUFDRUMsTUFBQUEsSSxtQkFBQUEsSTs7OzRFQWxCZ0U7OztBQWNqRUMsTUFBQUEsTyxHQUFzQmpCLFUsQ0FBdEJpQixPO0FBQVNDLE1BQUFBLFEsR0FBYWxCLFUsQ0FBYmtCLFE7O3VCQU9KQyxLLFdBRFpGLE9BQU8sQ0FBQyxPQUFELEMsVUFFTEMsUUFBUSxDQUFDO0FBQUVFLFFB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O0FBQ0EsZ0JBQUlnRyxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1osbUJBQUtGLFVBQUw7QUFDRCxhQUZELE1BRU8sSUFBSUUsR0FBRyxJQUFJLENBQVgsRUFBYyxDQUNwQixDQURNLE1BQ0EsSUFBSUEsR0FBRyxJQUFJLENBQVgsRUFBYyxDQUNwQjs7QUFDRDNCLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVo7QUFDRDs7O3dDQUVhbUIsSyxFQUFtQnpFLEksRUFBTTtBQUNyQyxnQkFBSTBFLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxhQUFuQjtBQUNBLGdCQUFJdEIsTUFBTSxHQUFHcUIsTUFBTSxDQUFDbkUsWUFBUCxDQUFvQnZCLGtCQUFwQixDQUFiLENBRnFDLENBSXJDOztBQUNBUSxZQUFBQSxXQUFXLENBQUN5RixTQUFaLENBQXNCQyxPQUF0QixHQUFnQyxLQUFoQztBQUVBMUYsWUFBQUEsV0FBVyxDQUFDc0QsT0FBWixDQUFvQi9CLElBQXBCO0FBQ0F2QixZQUFBQSxXQUFXLENBQUMrRSxRQUFaLENBQXFCakIsSUFBckIsQ0FBMEIsT0FBMUI7QUFDQUQsWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksVUFBWjtBQUNELFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUFuVHlCeEUsUzs7Ozs7aUJBRVQsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFHRCxJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0csSTs7Ozs7OztpQkFHQyxJOzs7Ozs7O2lCQUdMLEk7Ozs7Ozs7aUJBR0ssSTs7Ozs7OztpQkFHTixJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR1UsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0QsSTs7Ozs7OztpQkFHTSxJOzs7Ozs7O2lCQUdELEk7Ozs7b0JBMUViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBfZGVjb3JhdG9yLFxyXG4gIGZpbmQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIE5vZGUsXHJcbiAgQW5pbWF0aW9uQ29tcG9uZW50LFxyXG4gIEV2ZW50VG91Y2gsXHJcbiAgU3lzdGVtRXZlbnRUeXBlLFxyXG4gIExhYmVsQ29tcG9uZW50LFxyXG4gIFNwcml0ZUZyYW1lLFxyXG4gIENhbWVyYUNvbXBvbmVudCxcclxuICBDb2xvcixcclxuICBTcHJpdGVDb21wb25lbnQsXHJcbiAgdmlld1xyXG59IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgSW5zdGFuY2VNZ3IgfSBmcm9tICcuLi9saWIvSW5zdGFuY2VNZ3InO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnQgS0VZIGZyb20gJy4uL2NvbmZpZy9LRVknO1xyXG5pbXBvcnQgeyBNT0RFLCBtb2RlSW5mIH0gZnJvbSAnLi4vY29uZmlnL01PREUnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vbGliL1V0aWxzJztcclxuaW1wb3J0IHsgdjNfdCB9IGZyb20gJy4uL2xpYi9UZW1wQ29uc3QnO1xyXG5cclxuQGNjY2xhc3MoJ1VJQ3RyJylcclxuZXhwb3J0IGNsYXNzIFVJQ3RyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgc3RhcnRVSTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICBvdmVydFVJOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIGJ0bk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgbGV2ZWxUZXh0OiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHN0YXJ0QnRuOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHJlc3RhcnRCdG46IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgdm9pY2VPcGVuTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICB2b2ljZUNsb3NlTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICBjb3Zlck5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgcmFua1JlbmRlck5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgcmFua1dyYXA6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgcmVzZXRCdG46IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gIHRpdGxlX2JsYWNrOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgdGl0bGVfd2hpdGU6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICBtb2RlX21vb246IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICBtb2RlX3N1bjogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gIG1vZGVfbW9vbl9pY29uOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgbW9kZV9zdW5faWNvbjogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9idG5Bbmk6IEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gIG1vZGUgPSAnd2hpdGUnO1xyXG5cclxuICB0aGVtZTogbW9kZUluZiA9IG51bGw7XHJcblxyXG4gIGlzVm9pY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgSW5zdGFuY2VNZ3IucmVnaXN0ZXJJbnN0YW5jZSgnVUlDdHInLCB0aGlzKTtcclxuICAgIHRoaXMuX2J0bkFuaSA9IHRoaXMuYnRuTm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB0aGlzLmNvdmVyTm9kZS5vbihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgdGhpcy5oaWRlU3ViKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmFua1dyYXAub24oU3lzdGVtRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljayA9IHJhbmtXcmFwJyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgdjNfdC5zZXQoMC43LCAwLjcsIDAuNyk7XHJcbiAgICBsZXQgc2NhbGUgPSB3aWR0aCAvIGhlaWdodDtcclxuICAgIGNvbnNvbGUubG9nKHNjYWxlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGlmIChzY2FsZSA+IDAuNykge1xyXG4gICAgICB0aGlzLmJ0bk5vZGUuc2V0U2NhbGUodjNfdCk7XHJcbiAgICAgIHRoaXMuc3RhcnRVSS5zZXRTY2FsZSh2M190KTtcclxuICAgICAgdGhpcy5vdmVydFVJLnNldFNjYWxlKHYzX3QpO1xyXG4gICAgICB0aGlzLnJlc2V0QnRuLnNldFNjYWxlKHYzX3QpO1xyXG4gICAgICB0aGlzLnJhbmtXcmFwLnNldFNjYWxlKHYzX3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCB2b2NpZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWS5JU19WT0lDRSk7XHJcbiAgICB0aGlzLmlzVm9pY2UgPSAhdm9jaWUgfHwgdm9jaWUgPT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRWb2ljZUljb24oKTtcclxuICAgIGxldCBtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZLk1PREUpO1xyXG4gICAgaWYgKG1vZGUpIHRoaXMubW9kZSA9IG1vZGU7XHJcblxyXG4gICAgdGhpcy50aGVtZSA9IE1PREVbdGhpcy5tb2RlXTtcclxuXHJcbiAgICB0aGlzLmluaXRNb2RlVUkoKTtcclxuICB9XHJcblxyXG4gIGluaXRNb2RlVUkoZmxhZz86IGJvb2xlYW4pIHtcclxuICAgIGxldCBjYW1lcmFDb20gPSBjYy5maW5kKCdDYW1lcmEnKS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KTtcclxuICAgIGNhbWVyYUNvbS5jb2xvciA9IG5ldyBDb2xvcih0aGlzLnRoZW1lLmJnKTtcclxuICAgIGZpbmQoJ1RpdGxlL2Jlc3QnLCB0aGlzLnN0YXJ0VUkpLmdldENvbXBvbmVudChcclxuICAgICAgTGFiZWxDb21wb25lbnRcclxuICAgICkuY29sb3IgPSBuZXcgQ29sb3IodGhpcy50aGVtZS5sZXZlbCk7XHJcbiAgICB0aGlzLnN0YXJ0VUlcclxuICAgICAgLmdldENoaWxkQnlOYW1lKCdUaXRsZScpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXNbJ3RpdGxlXycgKyB0aGlzLm1vZGVdO1xyXG5cclxuICAgIHRoaXMubGV2ZWxUZXh0LmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuY29sb3IgPSBuZXcgQ29sb3IoXHJcbiAgICAgIHRoaXMudGhlbWUubGV2ZWxcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG1vZGVOb2RlOiBOb2RlID0gdGhpcy5idG5Ob2RlLmdldENoaWxkQnlOYW1lKCdtb2RlJyk7XHJcbiAgICBsZXQgbW9kZUljb246IE5vZGUgPSBjYy5maW5kKCdpdGVtcy9tb2RlL3dyYXAvaWNvbicsIHRoaXMub3ZlcnRVSSk7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2hpdGUnKSB7XHJcbiAgICAgIG1vZGVOb2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5tb2RlX21vb247XHJcbiAgICAgIG1vZGVJY29uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5tb2RlX21vb25faWNvbjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnYmxhY2snKSB7XHJcbiAgICAgIG1vZGVOb2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5tb2RlX3N1bjtcclxuICAgICAgbW9kZUljb24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm1vZGVfc3VuX2ljb247XHJcbiAgICB9XHJcblxyXG4gICAgSW5zdGFuY2VNZ3IuR2FtZUN0ci5tb2RlQ2hhbmdlKHRoaXMudGhlbWUsIGZsYWcpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1N0YXJ0VUkoKSB7XHJcbiAgICB0aGlzLm92ZXJ0VUkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXJ0VUkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubGV2ZWxUZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc3RhcnRCdG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMucmVzdGFydEJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNob3dCdG4oKTtcclxuICB9XHJcblxyXG4gIGhpZGVTdGFydFVJKCkge1xyXG4gICAgdGhpcy5sZXZlbFRleHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRVSS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmhpZGVCdG4oKTtcclxuICB9XHJcblxyXG4gIHNob3dPdmVyVUkoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VUkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm92ZXJ0VUkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnJlc3RhcnRCdG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRCdG4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgLy/muLjmiI/kuK3ph43nva7mjInpkq7lh7rnjrBcclxuICAgIHRoaXMucmVzZXRCdG4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGFuaUNvbSA9IHRoaXMub3ZlcnRVSS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgIGFuaUNvbS5wbGF5KCdzaG93T3ZlcicpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0J0bigpO1xyXG4gICAgfSwgNjAwKTtcclxuICB9XHJcblxyXG4gIGhpZGVPdmVyVUkoKSB7XHJcbiAgICB0aGlzLmxldmVsVGV4dC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd1Jlc2V0QnRuKCk7XHJcbiAgICBsZXQgYW5pQ29tID0gdGhpcy5vdmVydFVJLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgLy9UT0RPIGJ1Z+WcqOaWh+S7tuS4reaMh+WumueahOWKqOeUu+WFtuWunuaYr2hpZGVPdmVyXHJcbiAgICBhbmlDb20ucGxheSgnaGlkZUl0ZW1zMicpO1xyXG4gICAgYW5pQ29tLm9uY2UoJ3N0b3AnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcnRVSS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaGlkZUJ0bigpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0J0bigpIHtcclxuICAgIHRoaXMuX2J0bkFuaS5wbGF5KCk7XHJcbiAgICB0aGlzLmJ0bk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhpZGVCdG4oKSB7XHJcbiAgICB0aGlzLnNob3dSZXNldEJ0bigpO1xyXG4gICAgdGhpcy5idG5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaW5pdExldmVsVGl0bGUobGV2ZWwpIHtcclxuICAgIHRoaXMubGV2ZWxUZXh0LmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gYCR7bGV2ZWx9YDtcclxuICAgIGZpbmQoJ3RvcC9iZXN0L3dyYXAvbnVtJywgdGhpcy5vdmVydFVJKS5nZXRDb21wb25lbnQoXHJcbiAgICAgIExhYmVsQ29tcG9uZW50XHJcbiAgICApLnN0cmluZyA9IGAke2xldmVsfWA7XHJcbiAgICBmaW5kKCdUaXRsZS9iZXN0JywgdGhpcy5zdGFydFVJKS5nZXRDb21wb25lbnQoXHJcbiAgICAgIExhYmVsQ29tcG9uZW50XHJcbiAgICApLnN0cmluZyA9IGDlhbPljaHvvJoke2xldmVsfWA7XHJcbiAgfVxyXG5cclxuICBzZXRWb2ljZUljb24oKSB7XHJcbiAgICB0aGlzLnZvaWNlQ2xvc2VOb2RlLmFjdGl2ZSA9ICF0aGlzLmlzVm9pY2U7XHJcbiAgICB0aGlzLnZvaWNlT3Blbk5vZGUuYWN0aXZlID0gdGhpcy5pc1ZvaWNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd0NvdmVyKCkge1xyXG4gICAgdGhpcy5jb3Zlck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhpZGVDb3ZlcigpIHtcclxuICAgIHRoaXMuY292ZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd1Jlc2V0QnRuKCkge1xyXG4gICAgLy8g5ri45oiP5Lit6YeN572u5oyJ6ZKu5Ye6546wXHJcbiAgICBsZXQgYW5pID0gdGhpcy5yZXNldEJ0bi5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgIHRoaXMucmVzZXRCdG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIOi/memHjOaYryBjb2NvcyDnmoRidWcgLCDph43lkb3lkI3lkI7ov5jlvpfkvb/nlKjku6XliY3nmoTlkI3lrZdcclxuICAgIGFuaS5wbGF5KCdyZXNlcicpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1N1YigpIHtcclxuICAgIGlmICghd2luZG93Wyd3eCddKSB7XHJcbiAgICAgIHV0aWxzLnNob3dUb2FzdCgn5b2T5YmN5bmz5Y+w5pqC5LiN5pSv5oyB5L2/55SoJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmFua1JlbmRlck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMucmFua1JlbmRlck5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCkucGxheSgpO1xyXG4gICAgbGV0IG9wZW5EYXRhQ29udGV4dCA9IHdpbmRvd1snd3gnXS5nZXRPcGVuRGF0YUNvbnRleHQoKTtcclxuICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIGFjdGlvbjogJ3VwZGF0ZSdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1NoYXJlKCkge1xyXG4gICAgaWYgKCF3aW5kb3dbJ3d4J10pIHtcclxuICAgICAgdXRpbHMuc2hvd1RvYXN0KCflvZPliY3lubPlj7DmmoLkuI3mlK/mjIHkvb/nlKgnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZVN1YigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoaWRlU3ViJyk7XHJcbiAgICB0aGlzLmhpZGVDb3ZlcigpO1xyXG4gICAgdGhpcy5yYW5rUmVuZGVyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvb2dsZU1vZGUoKSB7XHJcbiAgICBpZiAoSW5zdGFuY2VNZ3IuR2FtZUN0ci5pc0J1aWxkaW5nKSByZXR1cm47XHJcbiAgICBJbnN0YW5jZU1nci5NdXNpY0N0ci5wbGF5KCdjbGljaycpO1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3doaXRlJykge1xyXG4gICAgICB0aGlzLm1vZGUgPSAnYmxhY2snO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdibGFjaycpIHtcclxuICAgICAgdGhpcy5tb2RlID0gJ3doaXRlJztcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWS5NT0RFLCB0aGlzLm1vZGUpO1xyXG4gICAgdGhpcy50aGVtZSA9IE1PREVbdGhpcy5tb2RlXTtcclxuICAgIHRoaXMuaW5pdE1vZGVVSSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvb2dsZVZvaWNlKCkge1xyXG4gICAgdGhpcy5pc1ZvaWNlID0gIXRoaXMuaXNWb2ljZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWS5JU19WT0lDRSwgdGhpcy5pc1ZvaWNlID8gJzEnIDogJzAnKTtcclxuICAgIGlmICh0aGlzLmlzVm9pY2UpIHtcclxuICAgICAgSW5zdGFuY2VNZ3IuTXVzaWNDdHIucGxheSgnY2xpY2snKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Vm9pY2VJY29uKCk7XHJcbiAgfVxyXG5cclxuICBidG5DbGljayhldmVudDogRXZlbnRUb3VjaCwgdHlwZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgTm9kZTtcclxuICAgIGxldCBhbmlDb20gPSB0YXJnZXQuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICBpZiAodHlwZSA9PSAncmFuaycpIHtcclxuICAgICAgdGhpcy5zaG93U3ViKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3NoYXJlJykge1xyXG4gICAgICB0aGlzLnNob3dTaGFyZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdtb2RlJykge1xyXG4gICAgICB0aGlzLnRvb2dsZU1vZGUoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAndm9pY2UnKSB7XHJcbiAgICAgIHRoaXMudG9vZ2xlVm9pY2UoKTtcclxuICAgIH1cclxuICAgIGFuaUNvbS5wbGF5KCdidG5DbGljaycpO1xyXG4gIH1cclxuXHJcbiAgaXRlbUNsaWNrKGV2ZW50OiBFdmVudFRvdWNoLCBudW0pIHtcclxuICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIE5vZGU7XHJcbiAgICBsZXQgYW5pQ29tID0gdGFyZ2V0LmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgaWYgKG51bSA9PSAxKSB7XHJcbiAgICAgIHRoaXMudG9vZ2xlTW9kZSgpO1xyXG4gICAgfSBlbHNlIGlmIChudW0gPT0gMikge1xyXG4gICAgfSBlbHNlIGlmIChudW0gPT0gMykge1xyXG4gICAgfVxyXG4gICAgYW5pQ29tLnBsYXkoJ2NsaWNrSXRlbScpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRCdG5DbGljayhldmVudDogRXZlbnRUb3VjaCwgdHlwZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgTm9kZTtcclxuICAgIGxldCBhbmlDb20gPSB0YXJnZXQuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcblxyXG4gICAgLy8g6Ziy5q2i6YeN572u5ri45oiP55qE5pe25YCZ6Kem5pG45LqL5Lu2XHJcbiAgICBJbnN0YW5jZU1nci5UYXJnZXRDdHIuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIEluc3RhbmNlTWdyLkdhbWVDdHIuaW5pdCgpO1xyXG4gICAgSW5zdGFuY2VNZ3IuTXVzaWNDdHIucGxheSgnY2xpY2snKTtcclxuICAgIGFuaUNvbS5wbGF5KCdidG5DbGljaycpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==