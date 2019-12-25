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

            console.log(width / height);
            v3_t.set(0.7, 0.7, 0.7);
            this.btnNode.setScale(v3_t);
            this.startUI.setScale(v3_t);
            this.overtUI.setScale(v3_t);
            this.resetBtn.setScale(v3_t);
            this.rankWrap.setScale(v3_t);
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
            var aniCom = target.getComponent(AnimationComponent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvVUlDdHIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImZpbmQiLCJDb21wb25lbnQiLCJOb2RlIiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiU3lzdGVtRXZlbnRUeXBlIiwiTGFiZWxDb21wb25lbnQiLCJTcHJpdGVGcmFtZSIsIkNhbWVyYUNvbXBvbmVudCIsIkNvbG9yIiwiU3ByaXRlQ29tcG9uZW50IiwidmlldyIsIkluc3RhbmNlTWdyIiwiS0VZIiwiTU9ERSIsInV0aWxzIiwidjNfdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJQ3RyIiwidHlwZSIsIl9idG5BbmkiLCJtb2RlIiwidGhlbWUiLCJpc1ZvaWNlIiwicmVnaXN0ZXJJbnN0YW5jZSIsImJ0bk5vZGUiLCJnZXRDb21wb25lbnQiLCJjb3Zlck5vZGUiLCJvbiIsIlRPVUNIX1NUQVJUIiwiaGlkZVN1YiIsInJhbmtXcmFwIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0Iiwic2V0U2NhbGUiLCJzdGFydFVJIiwib3ZlcnRVSSIsInJlc2V0QnRuIiwidm9jaWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSVNfVk9JQ0UiLCJzZXRWb2ljZUljb24iLCJpbml0TW9kZVVJIiwiZmxhZyIsImNhbWVyYUNvbSIsImNjIiwiY29sb3IiLCJiZyIsImxldmVsIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzcHJpdGVGcmFtZSIsImxldmVsVGV4dCIsIm1vZGVOb2RlIiwibW9kZUljb24iLCJtb2RlX21vb24iLCJtb2RlX21vb25faWNvbiIsIm1vZGVfc3VuIiwibW9kZV9zdW5faWNvbiIsIkdhbWVDdHIiLCJtb2RlQ2hhbmdlIiwiYWN0aXZlIiwic3RhcnRCdG4iLCJyZXN0YXJ0QnRuIiwic2hvd0J0biIsImhpZGVCdG4iLCJhbmlDb20iLCJwbGF5Iiwic2V0VGltZW91dCIsInNob3dSZXNldEJ0biIsIm9uY2UiLCJzdHJpbmciLCJ2b2ljZUNsb3NlTm9kZSIsInZvaWNlT3Blbk5vZGUiLCJhbmkiLCJ3aW5kb3ciLCJzaG93VG9hc3QiLCJyYW5rUmVuZGVyTm9kZSIsIm9wZW5EYXRhQ29udGV4dCIsImdldE9wZW5EYXRhQ29udGV4dCIsInBvc3RNZXNzYWdlIiwiYWN0aW9uIiwiaGlkZUNvdmVyIiwiaXNCdWlsZGluZyIsIk11c2ljQ3RyIiwic2V0SXRlbSIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInNob3dTdWIiLCJzaG93U2hhcmUiLCJ0b29nbGVNb2RlIiwidG9vZ2xlVm9pY2UiLCJudW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLGtCLE9BQUFBLGtCO0FBRUFDLE1BQUFBLGUsT0FBQUEsZTtBQUNBQyxNQUFBQSxjLE9BQUFBLGM7QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBQ0FDLE1BQUFBLGUsT0FBQUEsZTtBQUNBQyxNQUFBQSxLLE9BQUFBLEs7QUFDQUMsTUFBQUEsZSxPQUFBQSxlO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTs7QUFFT0MsTUFBQUEsVyxxQkFBQUEsVzs7QUFFRkMsTUFBQUEsRzs7QUFDRUMsTUFBQUEsSSxpQkFBQUEsSTs7QUFDRkMsTUFBQUEsSzs7QUFDRUMsTUFBQUEsSSxtQkFBQUEsSTs7OzRFQWxCZ0U7OztBQWNqRUMsTUFBQUEsTyxHQUFzQmpCLFUsQ0FBdEJpQixPO0FBQVNDLE1BQUFBLFEsR0FBYWxCLFUsQ0FBYmtCLFE7O3VCQU9KQyxLLFdBRFpGLE9BQU8sQ0FBQyxPQUFELEMsVUFFTEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWpCO0FBQVIsT0FBRCxDLFVB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QVgsRUFBYyxDQUNwQjs7QUFDRDNCLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVo7QUFDRDs7O3dDQUVhbUIsSyxFQUFtQnhFLEksRUFBTTtBQUNyQyxnQkFBSXlFLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxhQUFuQjtBQUNBLGdCQUFJdEIsTUFBTSxHQUFHcUIsTUFBTSxDQUFDbEUsWUFBUCxDQUFvQnZCLGtCQUFwQixDQUFiO0FBQ0FRLFlBQUFBLFdBQVcsQ0FBQ3FELE9BQVosQ0FBb0I5QixJQUFwQjtBQUNBdkIsWUFBQUEsV0FBVyxDQUFDOEUsUUFBWixDQUFxQmpCLElBQXJCLENBQTBCLE9BQTFCO0FBQ0FELFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVo7QUFDRCxXLENBRUQ7QUFDQTtBQUNBOzs7O1FBNVN5QnZFLFM7Ozs7O2lCQUVULEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0QsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdHLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHTCxJOzs7Ozs7O2lCQUdLLEk7Ozs7Ozs7aUJBR04sSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdVLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdELEk7Ozs7Ozs7aUJBR00sSTs7Ozs7OztpQkFHRCxJOzs7O29CQTFFYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgX2RlY29yYXRvcixcclxuICBmaW5kLFxyXG4gIENvbXBvbmVudCxcclxuICBOb2RlLFxyXG4gIEFuaW1hdGlvbkNvbXBvbmVudCxcclxuICBFdmVudFRvdWNoLFxyXG4gIFN5c3RlbUV2ZW50VHlwZSxcclxuICBMYWJlbENvbXBvbmVudCxcclxuICBTcHJpdGVGcmFtZSxcclxuICBDYW1lcmFDb21wb25lbnQsXHJcbiAgQ29sb3IsXHJcbiAgU3ByaXRlQ29tcG9uZW50LFxyXG4gIHZpZXdcclxufSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEluc3RhbmNlTWdyIH0gZnJvbSAnLi4vbGliL0luc3RhbmNlTWdyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IEtFWSBmcm9tICcuLi9jb25maWcvS0VZJztcclxuaW1wb3J0IHsgTU9ERSwgbW9kZUluZiB9IGZyb20gJy4uL2NvbmZpZy9NT0RFJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL2xpYi9VdGlscyc7XHJcbmltcG9ydCB7IHYzX3QgfSBmcm9tICcuLi9saWIvVGVtcENvbnN0JztcclxuXHJcbkBjY2NsYXNzKCdVSUN0cicpXHJcbmV4cG9ydCBjbGFzcyBVSUN0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHN0YXJ0VUk6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgb3ZlcnRVSTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICBidG5Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIGxldmVsVGV4dDogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICBzdGFydEJ0bjogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICByZXN0YXJ0QnRuOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHZvaWNlT3Blbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgdm9pY2VDbG9zZU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgY292ZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHJhbmtSZW5kZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHJhbmtXcmFwOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHJlc2V0QnRuOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICB0aXRsZV9ibGFjazogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gIHRpdGxlX3doaXRlOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgbW9kZV9tb29uOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgbW9kZV9zdW46IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICBtb2RlX21vb25faWNvbjogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gIG1vZGVfc3VuX2ljb246IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfYnRuQW5pOiBBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICBtb2RlID0gJ3doaXRlJztcclxuXHJcbiAgdGhlbWU6IG1vZGVJbmYgPSBudWxsO1xyXG5cclxuICBpc1ZvaWNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIEluc3RhbmNlTWdyLnJlZ2lzdGVySW5zdGFuY2UoJ1VJQ3RyJywgdGhpcyk7XHJcbiAgICB0aGlzLl9idG5BbmkgPSB0aGlzLmJ0bk5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgdGhpcy5jb3Zlck5vZGUub24oU3lzdGVtRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGlkZVN1YigpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJhbmtXcmFwLm9uKFN5c3RlbUV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2xpY2sgPSByYW5rV3JhcCcpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgIGNvbnNvbGUubG9nKHdpZHRoIC8gaGVpZ2h0KTtcclxuICAgIHYzX3Quc2V0KDAuNywgMC43LCAwLjcpO1xyXG4gICAgdGhpcy5idG5Ob2RlLnNldFNjYWxlKHYzX3QpO1xyXG4gICAgdGhpcy5zdGFydFVJLnNldFNjYWxlKHYzX3QpO1xyXG4gICAgdGhpcy5vdmVydFVJLnNldFNjYWxlKHYzX3QpO1xyXG4gICAgdGhpcy5yZXNldEJ0bi5zZXRTY2FsZSh2M190KTtcclxuICAgIHRoaXMucmFua1dyYXAuc2V0U2NhbGUodjNfdCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgbGV0IHZvY2llID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZLklTX1ZPSUNFKTtcclxuICAgIHRoaXMuaXNWb2ljZSA9ICF2b2NpZSB8fCB2b2NpZSA9PSAnMScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB0aGlzLnNldFZvaWNlSWNvbigpO1xyXG4gICAgbGV0IG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkuTU9ERSk7XHJcbiAgICBpZiAobW9kZSkgdGhpcy5tb2RlID0gbW9kZTtcclxuXHJcbiAgICB0aGlzLnRoZW1lID0gTU9ERVt0aGlzLm1vZGVdO1xyXG5cclxuICAgIHRoaXMuaW5pdE1vZGVVSSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdE1vZGVVSShmbGFnPzogYm9vbGVhbikge1xyXG4gICAgbGV0IGNhbWVyYUNvbSA9IGNjLmZpbmQoJ0NhbWVyYScpLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpO1xyXG4gICAgY2FtZXJhQ29tLmNvbG9yID0gbmV3IENvbG9yKHRoaXMudGhlbWUuYmcpO1xyXG4gICAgZmluZCgnVGl0bGUvYmVzdCcsIHRoaXMuc3RhcnRVSSkuZ2V0Q29tcG9uZW50KFxyXG4gICAgICBMYWJlbENvbXBvbmVudFxyXG4gICAgKS5jb2xvciA9IG5ldyBDb2xvcih0aGlzLnRoZW1lLmxldmVsKTtcclxuICAgIHRoaXMuc3RhcnRVSVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoJ1RpdGxlJylcclxuICAgICAgLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpc1sndGl0bGVfJyArIHRoaXMubW9kZV07XHJcblxyXG4gICAgdGhpcy5sZXZlbFRleHQuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5jb2xvciA9IG5ldyBDb2xvcihcclxuICAgICAgdGhpcy50aGVtZS5sZXZlbFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgbW9kZU5vZGU6IE5vZGUgPSB0aGlzLmJ0bk5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21vZGUnKTtcclxuICAgIGxldCBtb2RlSWNvbjogTm9kZSA9IGNjLmZpbmQoJ2l0ZW1zL21vZGUvd3JhcC9pY29uJywgdGhpcy5vdmVydFVJKTtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3aGl0ZScpIHtcclxuICAgICAgbW9kZU5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm1vZGVfbW9vbjtcclxuICAgICAgbW9kZUljb24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm1vZGVfbW9vbl9pY29uO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdibGFjaycpIHtcclxuICAgICAgbW9kZU5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm1vZGVfc3VuO1xyXG4gICAgICBtb2RlSWNvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMubW9kZV9zdW5faWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBJbnN0YW5jZU1nci5HYW1lQ3RyLm1vZGVDaGFuZ2UodGhpcy50aGVtZSwgZmxhZyk7XHJcbiAgfVxyXG5cclxuICBzaG93U3RhcnRVSSgpIHtcclxuICAgIHRoaXMub3ZlcnRVSS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RhcnRVSS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5sZXZlbFRleHQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zdGFydEJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5yZXN0YXJ0QnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2hvd0J0bigpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVN0YXJ0VUkoKSB7XHJcbiAgICB0aGlzLmxldmVsVGV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFVJLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuaGlkZUJ0bigpO1xyXG4gIH1cclxuXHJcbiAgc2hvd092ZXJVSSgpIHtcclxuICAgIHRoaXMuc3RhcnRVSS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMub3ZlcnRVSS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMucmVzdGFydEJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydEJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvL+a4uOaIj+S4remHjee9ruaMiemSruWHuueOsFxyXG4gICAgdGhpcy5yZXNldEJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgYW5pQ29tID0gdGhpcy5vdmVydFVJLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgYW5pQ29tLnBsYXkoJ3Nob3dPdmVyJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93QnRuKCk7XHJcbiAgICB9LCA2MDApO1xyXG4gIH1cclxuXHJcbiAgaGlkZU92ZXJVSSgpIHtcclxuICAgIHRoaXMubGV2ZWxUZXh0LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zaG93UmVzZXRCdG4oKTtcclxuICAgIGxldCBhbmlDb20gPSB0aGlzLm92ZXJ0VUkuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAvL1RPRE8gYnVn5Zyo5paH5Lu25Lit5oyH5a6a55qE5Yqo55S75YW25a6e5pivaGlkZU92ZXJcclxuICAgIGFuaUNvbS5wbGF5KCdoaWRlSXRlbXMyJyk7XHJcbiAgICBhbmlDb20ub25jZSgnc3RvcCcsICgpID0+IHtcclxuICAgICAgdGhpcy5vdmVydFVJLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5oaWRlQnRuKCk7XHJcbiAgfVxyXG5cclxuICBzaG93QnRuKCkge1xyXG4gICAgdGhpcy5fYnRuQW5pLnBsYXkoKTtcclxuICAgIHRoaXMuYnRuTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGlkZUJ0bigpIHtcclxuICAgIHRoaXMuc2hvd1Jlc2V0QnRuKCk7XHJcbiAgICB0aGlzLmJ0bk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpbml0TGV2ZWxUaXRsZShsZXZlbCkge1xyXG4gICAgdGhpcy5sZXZlbFRleHQuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBgJHtsZXZlbH1gO1xyXG4gICAgZmluZCgndG9wL2Jlc3Qvd3JhcC9udW0nLCB0aGlzLm92ZXJ0VUkpLmdldENvbXBvbmVudChcclxuICAgICAgTGFiZWxDb21wb25lbnRcclxuICAgICkuc3RyaW5nID0gYCR7bGV2ZWx9YDtcclxuICAgIGZpbmQoJ1RpdGxlL2Jlc3QnLCB0aGlzLnN0YXJ0VUkpLmdldENvbXBvbmVudChcclxuICAgICAgTGFiZWxDb21wb25lbnRcclxuICAgICkuc3RyaW5nID0gYOWFs+WNoe+8miR7bGV2ZWx9YDtcclxuICB9XHJcblxyXG4gIHNldFZvaWNlSWNvbigpIHtcclxuICAgIHRoaXMudm9pY2VDbG9zZU5vZGUuYWN0aXZlID0gIXRoaXMuaXNWb2ljZTtcclxuICAgIHRoaXMudm9pY2VPcGVuTm9kZS5hY3RpdmUgPSB0aGlzLmlzVm9pY2U7XHJcbiAgfVxyXG5cclxuICBzaG93Q292ZXIoKSB7XHJcbiAgICB0aGlzLmNvdmVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNvdmVyKCkge1xyXG4gICAgdGhpcy5jb3Zlck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzaG93UmVzZXRCdG4oKSB7XHJcbiAgICAvLyDmuLjmiI/kuK3ph43nva7mjInpkq7lh7rnjrBcclxuICAgIGxldCBhbmkgPSB0aGlzLnJlc2V0QnRuLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgdGhpcy5yZXNldEJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8g6L+Z6YeM5pivIGNvY29zIOeahGJ1ZyAsIOmHjeWRveWQjeWQjui/mOW+l+S9v+eUqOS7peWJjeeahOWQjeWtl1xyXG4gICAgYW5pLnBsYXkoJ3Jlc2VyJyk7XHJcbiAgfVxyXG5cclxuICBzaG93U3ViKCkge1xyXG4gICAgaWYgKCF3aW5kb3dbJ3d4J10pIHtcclxuICAgICAgdXRpbHMuc2hvd1RvYXN0KCflvZPliY3lubPlj7DmmoLkuI3mlK/mjIHkvb/nlKgnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yYW5rUmVuZGVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5yYW5rUmVuZGVyTm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KS5wbGF5KCk7XHJcbiAgICBsZXQgb3BlbkRhdGFDb250ZXh0ID0gd2luZG93Wyd3eCddLmdldE9wZW5EYXRhQ29udGV4dCgpO1xyXG4gICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgYWN0aW9uOiAndXBkYXRlJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93U2hhcmUoKSB7XHJcbiAgICBpZiAoIXdpbmRvd1snd3gnXSkge1xyXG4gICAgICB1dGlscy5zaG93VG9hc3QoJ+W9k+WJjeW5s+WPsOaaguS4jeaUr+aMgeS9v+eUqCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlU3ViKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2hpZGVTdWInKTtcclxuICAgIHRoaXMuaGlkZUNvdmVyKCk7XHJcbiAgICB0aGlzLnJhbmtSZW5kZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9vZ2xlTW9kZSgpIHtcclxuICAgIGlmIChJbnN0YW5jZU1nci5HYW1lQ3RyLmlzQnVpbGRpbmcpIHJldHVybjtcclxuICAgIEluc3RhbmNlTWdyLk11c2ljQ3RyLnBsYXkoJ2NsaWNrJyk7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2hpdGUnKSB7XHJcbiAgICAgIHRoaXMubW9kZSA9ICdibGFjayc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2JsYWNrJykge1xyXG4gICAgICB0aGlzLm1vZGUgPSAnd2hpdGUnO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLk1PREUsIHRoaXMubW9kZSk7XHJcbiAgICB0aGlzLnRoZW1lID0gTU9ERVt0aGlzLm1vZGVdO1xyXG4gICAgdGhpcy5pbml0TW9kZVVJKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdG9vZ2xlVm9pY2UoKSB7XHJcbiAgICB0aGlzLmlzVm9pY2UgPSAhdGhpcy5pc1ZvaWNlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLklTX1ZPSUNFLCB0aGlzLmlzVm9pY2UgPyAnMScgOiAnMCcpO1xyXG4gICAgaWYgKHRoaXMuaXNWb2ljZSkge1xyXG4gICAgICBJbnN0YW5jZU1nci5NdXNpY0N0ci5wbGF5KCdjbGljaycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWb2ljZUljb24oKTtcclxuICB9XHJcblxyXG4gIGJ0bkNsaWNrKGV2ZW50OiBFdmVudFRvdWNoLCB0eXBlKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBOb2RlO1xyXG4gICAgbGV0IGFuaUNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgIGlmICh0eXBlID09ICdyYW5rJykge1xyXG4gICAgICB0aGlzLnNob3dTdWIoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnc2hhcmUnKSB7XHJcbiAgICAgIHRoaXMuc2hvd1NoYXJlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ21vZGUnKSB7XHJcbiAgICAgIHRoaXMudG9vZ2xlTW9kZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09ICd2b2ljZScpIHtcclxuICAgICAgdGhpcy50b29nbGVWb2ljZSgpO1xyXG4gICAgfVxyXG4gICAgYW5pQ29tLnBsYXkoJ2J0bkNsaWNrJyk7XHJcbiAgfVxyXG5cclxuICBpdGVtQ2xpY2soZXZlbnQ6IEV2ZW50VG91Y2gsIG51bSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgTm9kZTtcclxuICAgIGxldCBhbmlDb20gPSB0YXJnZXQuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICBpZiAobnVtID09IDEpIHtcclxuICAgICAgdGhpcy50b29nbGVNb2RlKCk7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA9PSAyKSB7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA9PSAzKSB7XHJcbiAgICB9XHJcbiAgICBhbmlDb20ucGxheSgnY2xpY2tJdGVtJyk7XHJcbiAgfVxyXG5cclxuICByZXNldEJ0bkNsaWNrKGV2ZW50OiBFdmVudFRvdWNoLCB0eXBlKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBOb2RlO1xyXG4gICAgbGV0IGFuaUNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgIEluc3RhbmNlTWdyLkdhbWVDdHIuaW5pdCgpO1xyXG4gICAgSW5zdGFuY2VNZ3IuTXVzaWNDdHIucGxheSgnY2xpY2snKTtcclxuICAgIGFuaUNvbS5wbGF5KCdidG5DbGljaycpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==