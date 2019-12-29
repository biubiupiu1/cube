"use strict";

System.register(["cc", "../lib/InstanceMgr.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Texture2D, Node, SpriteComponent, InstanceMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, Consts, utils, WxRankList;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Texture2D = _cc.Texture2D;
      Node = _cc.Node;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_libInstanceMgrTs) {
      InstanceMgr = _libInstanceMgrTs.InstanceMgr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c1469sYWDpMtJccU8XBH61a", "WxRankList"); // begin WxRankList


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      Consts = {
        OpenDataKeys: {
          InitKey: 'initKey',
          Grade: 'testkey',
          LevelKey: 'reachlevel',
          ScoreKey: 'levelScore' // json.string

        },
        DomainAction: {
          FetchFriend: 'FetchFriend',
          FetchGroup: 'FetchGroup',
          FetchFriendLevel: 'FetchFriendLevel',
          //好友关卡进度排行
          FetchFriendScore: 'FetchFriendScore',
          //好友关卡得分排行
          HorConmpar: 'HorConmpar',
          //横向比较 horizontal comparison
          Paging: 'Paging',
          Scrolling: 'Scrolling'
        }
      }; // 这个换成自己的逻辑

      utils = {
        curLevel: 1,
        getScore: function getScore(_) {
          return 1;
        }
      };

      _export("WxRankList", WxRankList = (_dec = ccclass('WxRankList'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(WxRankList, _Component);

        function WxRankList() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, WxRankList);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(WxRankList)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "rankRender", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rankListNode", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rankBgNode", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "touchLayer", _descriptor4, babelHelpers.assertThisInitialized(_this));
          _this.enableScroll = true;
          _this._timeCounter = 0;
          _this.rendInterval = 0.5;
          _this.rankTexture = null;
          _this.rankSpriteFrame = null;
          _this.closeBackRank = 0;
          _this.scale = 1;
          return _this;
        }

        babelHelpers.createClass(WxRankList, [{
          key: "onLoad",
          // LIFE-CYCLE CALLBACKS:
          value: function onLoad() {
            InstanceMgr.registerInstance('WxRankList', this);
            this.rankTexture = new Texture2D();
            this.rankSpriteFrame = new cc.SpriteFrame();
            this.resizeSharedCanvas(this.rankRender.width, this.rankRender.height);
            this.loadLevelOpenRank();
          } // start() {
          // }

        }, {
          key: "update",
          value: function update(dt) {
            // this._timeCounter += dt
            // if (this._timeCounter < this.rendInterval) return
            // this._timeCounter = 0
            this.updateRankList();
          }
        }, {
          key: "resizeSharedCanvas",
          value: function resizeSharedCanvas(width, height) {
            if (!window['wx']) return;
            var sharedCanvas = window['wx'].getOpenDataContext().canvas;
            sharedCanvas.width = width;
            sharedCanvas.height = height;
            console.log(sharedCanvas);
          }
        }, {
          key: "changeRender",
          value: function changeRender(renderNode) {
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
        }, {
          key: "updateRankList",
          value: function updateRankList() {
            if (!window['wx']) return;
            if (!this.rankTexture) return;
            var sharedCanvas = window['wx'].getOpenDataContext().canvas;
            this.rankTexture.uploadData(sharedCanvas);
            this.rankSpriteFrame.texture = this.rankTexture;
            this.rankRender.getComponent(SpriteComponent).spriteFrame = this.rankSpriteFrame;
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            this.touchLayer.active = true;

            if (this.enableScroll) {
              this.rankRender.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            } // this.postMessage(Consts.DomainAction.FetchFriendLevel)

          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            if (this.enableScroll) {
              this.rankRender.off(cc.Node.EventType.TOUCH_MOVE);
            }
          }
        }, {
          key: "onViewDetailRank",
          value: function onViewDetailRank() {
            this.closeBackRank = 1;
            this.loadLevelScoreRank(utils.curLevel);
          }
        }, {
          key: "onPageUp",
          value: function onPageUp() {
            cc.log(this);
            this.postMessage('Paging', -1);
          }
        }, {
          key: "onPageDown",
          value: function onPageDown() {
            this.postMessage('Paging', 1);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.closeBackRank === 1) {
              this.closeBackRank = 0;
              this.loadHorRank(utils.curLevel);
              return;
            }

            this.node.active = false;
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(event) {
            var deltaY = event.getDeltaY(); // console.log("rank touchmove:", deltaY);

            this.postMessage('Scrolling', deltaY);
          } //获取关卡得分排行

        }, {
          key: "loadLevelScoreRank",
          value: function loadLevelScoreRank(level) {
            this.node.active = true;
            this.touchLayer.active = true;
            this.onEnable();
            this.changeRender(this.rankListNode);
            this.postMessage(Consts.DomainAction.FetchFriendScore, level);
          } //获取关卡进度排行

        }, {
          key: "loadLevelOpenRank",
          value: function loadLevelOpenRank() {
            //this.touchLayer.active = true
            this.onEnable();
            this.changeRender(this.rankListNode);
            this.postMessage(Consts.DomainAction.FetchFriendLevel, this.scale);
          } //横向比较

        }, {
          key: "loadHorRank",
          value: function loadHorRank() {
            var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.node.active = true;
            this.touchLayer.active = false;
            this.onDisable();
            this.postMessage(Consts.DomainAction.HorConmpar, level, utils.getScore(level));
          } //向子域发送消息

        }, {
          key: "postMessage",
          value: function postMessage(action) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var dataEx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (!window['wx']) return;
            var openDataContext = window['wx'].getOpenDataContext();
            openDataContext.postMessage({
              action: action,
              data: data,
              dataEx: dataEx
            });
          } // //检查得分
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

        }, {
          key: "uploadScore",
          value: function uploadScore(level, score) {
            if (!window['wx']) return;
            score = score.toString();
            window['wx'].setUserCloudStorage({
              KVDataList: [{
                key: Consts.OpenDataKeys.ScoreKey + level,
                value: score
              }],
              success: function success(res) {
                console.log('uploadScore success:res=>', res);
              },
              fail: function fail(res) {
                console.log('uploadScore fail:res=>', res);
              }
            });
          } // 上传关卡开启进度

        }, {
          key: "uploadLevelOpen",
          value: function uploadLevelOpen(level) {
            var _this2 = this;

            console.log('uploadLevelOpen', level);
            if (!window.window['wx']) return;
            level = level.toString();
            window['wx'].setUserCloudStorage({
              KVDataList: [{
                key: Consts.OpenDataKeys.LevelKey,
                value: level
              }],
              success: function success(res) {
                console.log('uploadScore success:res=>', res);

                _this2.loadLevelOpenRank();
              },
              fail: function fail(res) {
                console.log('uploadScore fail:res=>', res);
              }
            });
          } //删除微信数据

        }, {
          key: "removeUserKey",
          value: function removeUserKey(key_or_keys) {
            if (!window.window['wx']) return;

            if (typeof key_or_keys === 'string') {
              key_or_keys = [key_or_keys];
            }

            window['wx'].removeUserCloudStorage({
              keyList: key_or_keys,
              success: function success(res) {
                console.log('uploadScore success:res=>', res);
              },
              fail: function fail(res) {
                console.log('uploadScore fail:res=>', res);
              }
            });
          } // 分享

          /* args:{
                        title: string
                        imageUrl: string
                        query: string
                        success: func
                        fail: func
                    }
            */

        }, {
          key: "share",
          value: function share(args) {
            if (!window.window['wx']) return;
            if (!args) args = {};
            args.imageUrl = args.imageUrl || 'http://img.zcool.cn/community/01c2ac57beb18d0000012e7eaa6d19.jpg@1280w_1l_2o_100sh.jpg';
            window['wx'].shareAppMessage({
              title: '好多砖块啊，快来一起打',
              // imageUrl: "res/raw-assets/res/shengming.25929.png",
              imageUrl: args.imageUrl,
              query: 'key=testshare',
              success: function success(res) {
                console.log('success:', res);

                if (args.success) {
                  args.success(res);
                }
              },
              fail: function fail(res) {
                console.log('fail:', res);

                if (args.fail) {
                  args.fail(res);
                }
              }
            });
          }
        }, {
          key: "setScale",
          value: function setScale(scale) {
            this.scale = scale;
            this.node.setScale(scale);
          }
        }, {
          key: "initRank",
          value: function initRank() {}
        }, {
          key: "snapshotSync",
          value: function snapshotSync() {
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
        }]);
        return WxRankList;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankRender", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankListNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankBgNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "touchLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end WxRankList

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvV3hSYW5rTGlzdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVGV4dHVyZTJEIiwiTm9kZSIsIlNwcml0ZUNvbXBvbmVudCIsIkluc3RhbmNlTWdyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ29uc3RzIiwiT3BlbkRhdGFLZXlzIiwiSW5pdEtleSIsIkdyYWRlIiwiTGV2ZWxLZXkiLCJTY29yZUtleSIsIkRvbWFpbkFjdGlvbiIsIkZldGNoRnJpZW5kIiwiRmV0Y2hHcm91cCIsIkZldGNoRnJpZW5kTGV2ZWwiLCJGZXRjaEZyaWVuZFNjb3JlIiwiSG9yQ29ubXBhciIsIlBhZ2luZyIsIlNjcm9sbGluZyIsInV0aWxzIiwiY3VyTGV2ZWwiLCJnZXRTY29yZSIsIl8iLCJXeFJhbmtMaXN0IiwidHlwZSIsImVuYWJsZVNjcm9sbCIsIl90aW1lQ291bnRlciIsInJlbmRJbnRlcnZhbCIsInJhbmtUZXh0dXJlIiwicmFua1Nwcml0ZUZyYW1lIiwiY2xvc2VCYWNrUmFuayIsInNjYWxlIiwicmVnaXN0ZXJJbnN0YW5jZSIsImNjIiwiU3ByaXRlRnJhbWUiLCJyZXNpemVTaGFyZWRDYW52YXMiLCJyYW5rUmVuZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkTGV2ZWxPcGVuUmFuayIsImR0IiwidXBkYXRlUmFua0xpc3QiLCJ3aW5kb3ciLCJzaGFyZWRDYW52YXMiLCJnZXRPcGVuRGF0YUNvbnRleHQiLCJjYW52YXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyTm9kZSIsIm5hbWUiLCJyYW5rTGlzdE5vZGUiLCJhY3RpdmUiLCJyYW5rQmdOb2RlIiwicG9zaXRpb24iLCJ1cGxvYWREYXRhIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwidG91Y2hMYXllciIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwib2ZmIiwibG9hZExldmVsU2NvcmVSYW5rIiwicG9zdE1lc3NhZ2UiLCJsb2FkSG9yUmFuayIsIm5vZGUiLCJldmVudCIsImRlbHRhWSIsImdldERlbHRhWSIsImxldmVsIiwib25FbmFibGUiLCJjaGFuZ2VSZW5kZXIiLCJvbkRpc2FibGUiLCJhY3Rpb24iLCJkYXRhIiwiZGF0YUV4Iiwib3BlbkRhdGFDb250ZXh0Iiwic2NvcmUiLCJ0b1N0cmluZyIsInNldFVzZXJDbG91ZFN0b3JhZ2UiLCJLVkRhdGFMaXN0Iiwia2V5IiwidmFsdWUiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImtleV9vcl9rZXlzIiwicmVtb3ZlVXNlckNsb3VkU3RvcmFnZSIsImtleUxpc3QiLCJhcmdzIiwiaW1hZ2VVcmwiLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5Iiwic2V0U2NhbGUiLCJnYW1lIiwid2luU2l6ZSIsIngiLCJ5IiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0VBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUVBQyxNQUFBQSxlLE9BQUFBLGU7O0FBR09DLE1BQUFBLFcscUJBQUFBLFc7OztpRkFQZ0U7OztBQU1qRUMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTtBQUdiQyxNQUFBQSxNLEdBQVM7QUFDWEMsUUFBQUEsWUFBWSxFQUFFO0FBQ1pDLFVBQUFBLE9BQU8sRUFBRSxTQURHO0FBRVpDLFVBQUFBLEtBQUssRUFBRSxTQUZLO0FBR1pDLFVBQUFBLFFBQVEsRUFBRSxZQUhFO0FBSVpDLFVBQUFBLFFBQVEsRUFBRSxZQUpFLENBSVc7O0FBSlgsU0FESDtBQU9YQyxRQUFBQSxZQUFZLEVBQUU7QUFDWkMsVUFBQUEsV0FBVyxFQUFFLGFBREQ7QUFFWkMsVUFBQUEsVUFB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LEVBQXFCdUMsR0FBckI7O0FBQ0Esb0JBQUlLLElBQUksQ0FBQ0osSUFBVCxFQUFlO0FBQ2JJLGtCQUFBQSxJQUFJLENBQUNKLElBQUwsQ0FBVUQsR0FBVjtBQUNEO0FBQ0Y7QUFoQjBCLGFBQTdCO0FBa0JEOzs7bUNBRVF2RCxLLEVBQU87QUFDZCxpQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsaUJBQUtvQyxJQUFMLENBQVU2QixRQUFWLENBQW1CakUsS0FBbkI7QUFDRDs7O3FDQUVVLENBQUU7Ozt5Q0FFRTtBQUNiLGdCQUFJLENBQUNXLE1BQU0sQ0FBQyxJQUFELENBQVgsRUFBbUI7QUFDbkIsZ0JBQUlHLE1BQU0sR0FBR1osRUFBRSxDQUFDZ0UsSUFBSCxDQUFRcEQsTUFBckI7QUFDQSxnQkFBSVIsS0FBSyxHQUFHSixFQUFFLENBQUNpRSxPQUFILENBQVc3RCxLQUF2QjtBQUNBLGdCQUFJQyxNQUFNLEdBQUdMLEVBQUUsQ0FBQ2lFLE9BQUgsQ0FBVzVELE1BQXhCO0FBRUEsbUJBQU9PLE1BQU0sQ0FBQyxvQkFBRCxDQUFOLENBQTZCO0FBQ2xDc0QsY0FBQUEsQ0FBQyxFQUFFLENBRCtCO0FBRWxDQyxjQUFBQSxDQUFDLEVBQUUsQ0FGK0I7QUFHbEMvRCxjQUFBQSxLQUFLLEVBQUVBLEtBQUssR0FBRyxHQUhtQjtBQUlsQ0MsY0FBQUEsTUFBTSxFQUFFQSxNQUowQjtBQUtsQytELGNBQUFBLFNBQVMsRUFBRWhFLEtBQUssR0FBRyxHQUxlO0FBTWxDaUUsY0FBQUEsVUFBVSxFQUFFaEU7QUFOc0IsYUFBN0IsQ0FBUDtBQVFEOzs7UUFyUjZCeEMsUzs7Ozs7aUJBRVgsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0EsSTs7OztvQkEvQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIF9kZWNvcmF0b3IsXHJcbiAgQ29tcG9uZW50LFxyXG4gIFRleHR1cmUyRCxcclxuICBOb2RlLFxyXG4gIFNwcml0ZUZyYW1lLFxyXG4gIFNwcml0ZUNvbXBvbmVudFxyXG59IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgSW5zdGFuY2VNZ3IgfSBmcm9tICcuLi9saWIvSW5zdGFuY2VNZ3InO1xyXG5cclxubGV0IENvbnN0cyA9IHtcclxuICBPcGVuRGF0YUtleXM6IHtcclxuICAgIEluaXRLZXk6ICdpbml0S2V5JyxcclxuICAgIEdyYWRlOiAndGVzdGtleScsXHJcbiAgICBMZXZlbEtleTogJ3JlYWNobGV2ZWwnLFxyXG4gICAgU2NvcmVLZXk6ICdsZXZlbFNjb3JlJyAvLyBqc29uLnN0cmluZ1xyXG4gIH0sXHJcbiAgRG9tYWluQWN0aW9uOiB7XHJcbiAgICBGZXRjaEZyaWVuZDogJ0ZldGNoRnJpZW5kJyxcclxuICAgIEZldGNoR3JvdXA6ICdGZXRjaEdyb3VwJyxcclxuICAgIEZldGNoRnJpZW5kTGV2ZWw6ICdGZXRjaEZyaWVuZExldmVsJywgLy/lpb3lj4vlhbPljaHov5vluqbmjpLooYxcclxuICAgIEZldGNoRnJpZW5kU2NvcmU6ICdGZXRjaEZyaWVuZFNjb3JlJywgLy/lpb3lj4vlhbPljaHlvpfliIbmjpLooYxcclxuICAgIEhvckNvbm1wYXI6ICdIb3JDb25tcGFyJywgLy/mqKrlkJHmr5TovoMgaG9yaXpvbnRhbCBjb21wYXJpc29uXHJcbiAgICBQYWdpbmc6ICdQYWdpbmcnLFxyXG4gICAgU2Nyb2xsaW5nOiAnU2Nyb2xsaW5nJ1xyXG4gIH1cclxufTtcclxuXHJcbi8vIOi/meS4quaNouaIkOiHquW3seeahOmAu+i+kVxyXG5sZXQgdXRpbHMgPSB7XHJcbiAgY3VyTGV2ZWw6IDEsXHJcbiAgZ2V0U2NvcmU6IF8gPT4ge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG59O1xyXG5cclxuQGNjY2xhc3MoJ1d4UmFua0xpc3QnKVxyXG5leHBvcnQgY2xhc3MgV3hSYW5rTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHJhbmtSZW5kZXI6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgcmFua0xpc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHJhbmtCZ05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgdG91Y2hMYXllcjogTm9kZSA9IG51bGw7XHJcblxyXG4gIGVuYWJsZVNjcm9sbCA9IHRydWU7XHJcbiAgX3RpbWVDb3VudGVyID0gMDtcclxuICByZW5kSW50ZXJ2YWwgPSAwLjU7XHJcbiAgcmFua1RleHR1cmU6IFRleHR1cmUyRCA9IG51bGw7XHJcbiAgcmFua1Nwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgY2xvc2VCYWNrUmFuayA9IDA7XHJcblxyXG4gIHNjYWxlID0gMTtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIEluc3RhbmNlTWdyLnJlZ2lzdGVySW5zdGFuY2UoJ1d4UmFua0xpc3QnLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnJhbmtUZXh0dXJlID0gbmV3IFRleHR1cmUyRCgpO1xyXG4gICAgdGhpcy5yYW5rU3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgIHRoaXMucmVzaXplU2hhcmVkQ2FudmFzKHRoaXMucmFua1JlbmRlci53aWR0aCwgdGhpcy5yYW5rUmVuZGVyLmhlaWdodCk7XHJcbiAgICB0aGlzLmxvYWRMZXZlbE9wZW5SYW5rKCk7XHJcbiAgfVxyXG5cclxuICAvLyBzdGFydCgpIHtcclxuICAvLyB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgLy8gdGhpcy5fdGltZUNvdW50ZXIgKz0gZHRcclxuICAgIC8vIGlmICh0aGlzLl90aW1lQ291bnRlciA8IHRoaXMucmVuZEludGVydmFsKSByZXR1cm5cclxuICAgIC8vIHRoaXMuX3RpbWVDb3VudGVyID0gMFxyXG4gICAgdGhpcy51cGRhdGVSYW5rTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplU2hhcmVkQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICghd2luZG93Wyd3eCddKSByZXR1cm47XHJcbiAgICBsZXQgc2hhcmVkQ2FudmFzID0gd2luZG93Wyd3eCddLmdldE9wZW5EYXRhQ29udGV4dCgpLmNhbnZhcztcclxuICAgIHNoYXJlZENhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgc2hhcmVkQ2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIGNvbnNvbGUubG9nKHNoYXJlZENhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VSZW5kZXIocmVuZGVyTm9kZSkge1xyXG4gICAgaWYgKHJlbmRlck5vZGUubmFtZSA9PT0gJ3NwckhvclJhbmsnKSB7XHJcbiAgICAgIHRoaXMucmFua0xpc3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJhbmtCZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHJlbmRlck5vZGUubmFtZSA9PT0gJ3NwclJhbmtMaXN0Jykge1xyXG4gICAgICB0aGlzLnJhbmtMaXN0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJhbmtCZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMucmFua1JlbmRlci53aWR0aCA9IHJlbmRlck5vZGUud2lkdGg7XHJcbiAgICB0aGlzLnJhbmtSZW5kZXIuaGVpZ2h0ID0gcmVuZGVyTm9kZS5oZWlnaHQ7XHJcbiAgICB0aGlzLnJhbmtSZW5kZXIucG9zaXRpb24gPSByZW5kZXJOb2RlLnBvc2l0aW9uO1xyXG4gICAgdGhpcy5yZXNpemVTaGFyZWRDYW52YXMocmVuZGVyTm9kZS53aWR0aCwgcmVuZGVyTm9kZS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmFua0xpc3QoKSB7XHJcbiAgICBpZiAoIXdpbmRvd1snd3gnXSkgcmV0dXJuO1xyXG4gICAgaWYgKCF0aGlzLnJhbmtUZXh0dXJlKSByZXR1cm47XHJcbiAgICBsZXQgc2hhcmVkQ2FudmFzID0gd2luZG93Wyd3eCddLmdldE9wZW5EYXRhQ29udGV4dCgpLmNhbnZhcztcclxuICAgIHRoaXMucmFua1RleHR1cmUudXBsb2FkRGF0YShzaGFyZWRDYW52YXMpO1xyXG4gICAgdGhpcy5yYW5rU3ByaXRlRnJhbWUudGV4dHVyZSA9IHRoaXMucmFua1RleHR1cmU7XHJcbiAgICB0aGlzLnJhbmtSZW5kZXIuZ2V0Q29tcG9uZW50KFxyXG4gICAgICBTcHJpdGVDb21wb25lbnRcclxuICAgICkuc3ByaXRlRnJhbWUgPSB0aGlzLnJhbmtTcHJpdGVGcmFtZTtcclxuICB9XHJcblxyXG4gIG9uRW5hYmxlKCkge1xyXG4gICAgdGhpcy50b3VjaExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5lbmFibGVTY3JvbGwpIHtcclxuICAgICAgdGhpcy5yYW5rUmVuZGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5GZXRjaEZyaWVuZExldmVsKVxyXG4gIH1cclxuXHJcbiAgb25EaXNhYmxlKCkge1xyXG4gICAgaWYgKHRoaXMuZW5hYmxlU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMucmFua1JlbmRlci5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblZpZXdEZXRhaWxSYW5rKCkge1xyXG4gICAgdGhpcy5jbG9zZUJhY2tSYW5rID0gMTtcclxuICAgIHRoaXMubG9hZExldmVsU2NvcmVSYW5rKHV0aWxzLmN1ckxldmVsKTtcclxuICB9XHJcblxyXG4gIG9uUGFnZVVwKCkge1xyXG4gICAgY2MubG9nKHRoaXMpO1xyXG4gICAgdGhpcy5wb3N0TWVzc2FnZSgnUGFnaW5nJywgLTEpO1xyXG4gIH1cclxuXHJcbiAgb25QYWdlRG93bigpIHtcclxuICAgIHRoaXMucG9zdE1lc3NhZ2UoJ1BhZ2luZycsIDEpO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmNsb3NlQmFja1JhbmsgPT09IDEpIHtcclxuICAgICAgdGhpcy5jbG9zZUJhY2tSYW5rID0gMDtcclxuICAgICAgdGhpcy5sb2FkSG9yUmFuayh1dGlscy5jdXJMZXZlbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICBjb25zdCBkZWx0YVkgPSBldmVudC5nZXREZWx0YVkoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicmFuayB0b3VjaG1vdmU6XCIsIGRlbHRhWSk7XHJcbiAgICB0aGlzLnBvc3RNZXNzYWdlKCdTY3JvbGxpbmcnLCBkZWx0YVkpO1xyXG4gIH1cclxuXHJcbiAgLy/ojrflj5blhbPljaHlvpfliIbmjpLooYxcclxuICBsb2FkTGV2ZWxTY29yZVJhbmsobGV2ZWwpIHtcclxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50b3VjaExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm9uRW5hYmxlKCk7XHJcbiAgICB0aGlzLmNoYW5nZVJlbmRlcih0aGlzLnJhbmtMaXN0Tm9kZSk7XHJcbiAgICB0aGlzLnBvc3RNZXNzYWdlKENvbnN0cy5Eb21haW5BY3Rpb24uRmV0Y2hGcmllbmRTY29yZSwgbGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgLy/ojrflj5blhbPljaHov5vluqbmjpLooYxcclxuICBsb2FkTGV2ZWxPcGVuUmFuaygpIHtcclxuICAgIC8vdGhpcy50b3VjaExheWVyLmFjdGl2ZSA9IHRydWVcclxuICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgIHRoaXMuY2hhbmdlUmVuZGVyKHRoaXMucmFua0xpc3ROb2RlKTtcclxuICAgIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5GZXRjaEZyaWVuZExldmVsLCB0aGlzLnNjYWxlKTtcclxuICB9XHJcblxyXG4gIC8v5qiq5ZCR5q+U6L6DXHJcbiAgbG9hZEhvclJhbmsobGV2ZWwgPSAxKSB7XHJcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMub25EaXNhYmxlKCk7XHJcbiAgICB0aGlzLnBvc3RNZXNzYWdlKFxyXG4gICAgICBDb25zdHMuRG9tYWluQWN0aW9uLkhvckNvbm1wYXIsXHJcbiAgICAgIGxldmVsLFxyXG4gICAgICB1dGlscy5nZXRTY29yZShsZXZlbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL+WQkeWtkOWfn+WPkemAgea2iOaBr1xyXG4gIHBvc3RNZXNzYWdlKGFjdGlvbiwgZGF0YSA9IG51bGwsIGRhdGFFeCA9IG51bGwpIHtcclxuICAgIGlmICghd2luZG93Wyd3eCddKSByZXR1cm47XHJcbiAgICBsZXQgb3BlbkRhdGFDb250ZXh0ID0gd2luZG93Wyd3eCddLmdldE9wZW5EYXRhQ29udGV4dCgpO1xyXG4gICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGRhdGFFeDogZGF0YUV4XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC8v5qOA5p+l5b6X5YiGXHJcbiAgLy8gY2hlY2tTY29yZShrZXksIGNhbGxiYWNrKXtcclxuICAvLyAgICAgaWYgKCF3aW5kb3cud3gpIHJldHVyblxyXG4gIC8vICAgICB3eC5nZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAvLyAgICAgICAgIGtleUxpc3Q6W2tleV0sXHJcbiAgLy8gICAgICAgICBzdWNjZXNzOnJlcz0+e1xyXG4gIC8vICAgICAgICAgICAgIHJlcy5kYXRhLlxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy93eCBhcGlcclxuICAvLyDkuIrkvKDlhbPljaHliIbmlbBcclxuICB1cGxvYWRTY29yZShsZXZlbCwgc2NvcmUpIHtcclxuICAgIGlmICghd2luZG93Wyd3eCddKSByZXR1cm47XHJcbiAgICBzY29yZSA9IHNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB3aW5kb3dbJ3d4J10uc2V0VXNlckNsb3VkU3RvcmFnZSh7XHJcbiAgICAgIEtWRGF0YUxpc3Q6IFt7IGtleTogQ29uc3RzLk9wZW5EYXRhS2V5cy5TY29yZUtleSArIGxldmVsLCB2YWx1ZTogc2NvcmUgfV0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZFNjb3JlIHN1Y2Nlc3M6cmVzPT4nLCByZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRTY29yZSBmYWlsOnJlcz0+JywgcmVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDkuIrkvKDlhbPljaHlvIDlkK/ov5vluqZcclxuICB1cGxvYWRMZXZlbE9wZW4obGV2ZWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1cGxvYWRMZXZlbE9wZW4nLCBsZXZlbCk7XHJcbiAgICBpZiAoIXdpbmRvdy53aW5kb3dbJ3d4J10pIHJldHVybjtcclxuICAgIGxldmVsID0gbGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIHdpbmRvd1snd3gnXS5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAgS1ZEYXRhTGlzdDogW3sga2V5OiBDb25zdHMuT3BlbkRhdGFLZXlzLkxldmVsS2V5LCB2YWx1ZTogbGV2ZWwgfV0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZFNjb3JlIHN1Y2Nlc3M6cmVzPT4nLCByZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZExldmVsT3BlblJhbmsoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkU2NvcmUgZmFpbDpyZXM9PicsIHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/liKDpmaTlvq7kv6HmlbDmja5cclxuICByZW1vdmVVc2VyS2V5KGtleV9vcl9rZXlzKSB7XHJcbiAgICBpZiAoIXdpbmRvdy53aW5kb3dbJ3d4J10pIHJldHVybjtcclxuICAgIGlmICh0eXBlb2Yga2V5X29yX2tleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleV9vcl9rZXlzID0gW2tleV9vcl9rZXlzXTtcclxuICAgIH1cclxuICAgIHdpbmRvd1snd3gnXS5yZW1vdmVVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAga2V5TGlzdDoga2V5X29yX2tleXMsXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZFNjb3JlIHN1Y2Nlc3M6cmVzPT4nLCByZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRTY29yZSBmYWlsOnJlcz0+JywgcmVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDliIbkuqtcclxuICAvKiBhcmdzOntcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmNcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmNcclxuICAgICAgICAgICAgfVxyXG4gICAgKi9cclxuICBzaGFyZShhcmdzKSB7XHJcbiAgICBpZiAoIXdpbmRvdy53aW5kb3dbJ3d4J10pIHJldHVybjtcclxuICAgIGlmICghYXJncykgYXJncyA9IHt9O1xyXG4gICAgYXJncy5pbWFnZVVybCA9XHJcbiAgICAgIGFyZ3MuaW1hZ2VVcmwgfHxcclxuICAgICAgJ2h0dHA6Ly9pbWcuemNvb2wuY24vY29tbXVuaXR5LzAxYzJhYzU3YmViMThkMDAwMDAxMmU3ZWFhNmQxOS5qcGdAMTI4MHdfMWxfMm9fMTAwc2guanBnJztcclxuICAgIHdpbmRvd1snd3gnXS5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICB0aXRsZTogJ+WlveWkmuegluWdl+WViu+8jOW/q+adpeS4gOi1t+aJkycsXHJcbiAgICAgIC8vIGltYWdlVXJsOiBcInJlcy9yYXctYXNzZXRzL3Jlcy9zaGVuZ21pbmcuMjU5MjkucG5nXCIsXHJcbiAgICAgIGltYWdlVXJsOiBhcmdzLmltYWdlVXJsLFxyXG4gICAgICBxdWVyeTogJ2tleT10ZXN0c2hhcmUnLFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzOicsIHJlcyk7XHJcbiAgICAgICAgaWYgKGFyZ3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsOicsIHJlcyk7XHJcbiAgICAgICAgaWYgKGFyZ3MuZmFpbCkge1xyXG4gICAgICAgICAgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFNjYWxlKHNjYWxlKSB7XHJcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgICB0aGlzLm5vZGUuc2V0U2NhbGUoc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFJhbmsoKSB7fVxyXG5cclxuICBzbmFwc2hvdFN5bmMoKSB7XHJcbiAgICBpZiAoIXdpbmRvd1snd3gnXSkgcmV0dXJuO1xyXG4gICAgdmFyIGNhbnZhcyA9IGNjLmdhbWUuY2FudmFzO1xyXG4gICAgdmFyIHdpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gY2FudmFzWyd0b1RlbXBGaWxlUGF0aFN5bmMnXSh7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIHdpZHRoOiB3aWR0aCAqIDEuNSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgIGRlc3RXaWR0aDogd2lkdGggKiAxLjUsXHJcbiAgICAgIGRlc3RIZWlnaHQ6IGhlaWdodFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==