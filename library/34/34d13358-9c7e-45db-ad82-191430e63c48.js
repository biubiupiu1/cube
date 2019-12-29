"use strict";

System.register(["cc", "../lib/TempConst.ts", "../Test.ts", "../lib/Action.ts", "../lib/InstanceMgr.ts", "./CubeCtr.ts", "../config/KEY.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Quat, Vec3, Node, Prefab, instantiate, CameraComponent, AnimationComponent, Color, Material, ModelComponent, v2_t, quat_t, v3_t, data, action, InstanceMgr, CubeCtr, KEY, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, ccclass, property, EGameSate, GameCtr;

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
    _temp: void 0,
    EGameSate: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CameraComponent = _cc.CameraComponent;
      AnimationComponent = _cc.AnimationComponent;
      Color = _cc.Color;
      Material = _cc.Material;
      ModelComponent = _cc.ModelComponent;
    }, function (_libTempConstTs) {
      v2_t = _libTempConstTs.v2_t;
      quat_t = _libTempConstTs.quat_t;
      v3_t = _libTempConstTs.v3_t;
    }, function (_TestTs) {
      data = _TestTs.data;
    }, function (_libActionTs) {
      action = _libActionTs.default;
    }, function (_libInstanceMgrTs) {
      InstanceMgr = _libInstanceMgrTs.InstanceMgr;
    }, function (_CubeCtrTs) {
      CubeCtr = _CubeCtrTs.CubeCtr;
    }, function (_configKEYTs) {
      KEY = _configKEYTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "34d13NYnH5F262CGRQw5jxI", "GameCtr"); // begin GameCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (EGameSate) {
        EGameSate[EGameSate["LOBBY"] = 0] = "LOBBY";
        EGameSate[EGameSate["GAMING"] = 1] = "GAMING";
        EGameSate[EGameSate["GAMEOVER"] = 2] = "GAMEOVER";
      })(EGameSate || (EGameSate = {}));

      _export("GameCtr", GameCtr = (_dec = ccclass('GameCtr'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Material
      }), _dec5 = property({
        type: Material
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
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameCtr, _Component);

        function GameCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "cubePrefab", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "targetPrefab", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cubeMtl", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "targetMtl", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cube_wrap", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameUI", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "testNode", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "row_col", _descriptor8, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "targetNode", _descriptor9, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cubeRoot", _descriptor10, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "camera", _descriptor11, babelHelpers.assertThisInitialized(_this));
          _this._testNode = null;
          _this._cubes = {};
          _this._level = 2;
          _this._curState = EGameSate.LOBBY;
          _this._isFirst = true;
          _this.isBuilding = false;
          _this.targetPos = null;
          _this.gameData = null;
          return _this;
        }

        babelHelpers.createClass(GameCtr, [{
          key: "onLoad",
          value: function onLoad() {
            InstanceMgr.registerInstance('GameCtr', this);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            var level = localStorage.getItem(KEY.LEVEL);

            if (level) {
              this._level = +level;
            } else {
              this._level = 1;
              localStorage.setItem(KEY.LEVEL, this._level + '');
            } //InstanceMgr.WxRankList.uploadLevelOpen(2);

            /* 延迟至下个事件循环执行，因为modeChange需要改变mtl */


            setTimeout(function () {
              _this2.init();
            });
          }
        }, {
          key: "init",
          value: function init() {
            var _this3 = this;

            //this.gameUI.active = false;
            InstanceMgr.UICtr.initLevelTitle(this._level);
            this.gameData = JSON.parse(JSON.stringify(data[this._level - 1]));
            this.buildCube().then(function () {
              if (!_this3._isFirst) InstanceMgr.TargetCtr.enabled = true;
            });
          }
        }, {
          key: "startGame",
          value: function startGame() {
            // 针对第一次初始化的特殊处理
            this.curState = EGameSate.GAMING;
            InstanceMgr.UICtr.hideStartUI();
            if (!this._isFirst) this.init();else {
              InstanceMgr.TargetCtr.enabled = true;
              this._isFirst = false;
            }
            InstanceMgr.MusicCtr.play('start');
          }
        }, {
          key: "reStart",
          value: function reStart() {
            //TODO
            InstanceMgr.UICtr.hideOverUI();
            this.curState = EGameSate.GAMING;
            this.init();
            InstanceMgr.MusicCtr.play('start');
          }
        }, {
          key: "gameOver",
          value: function gameOver(promiseS) {
            InstanceMgr.TargetCtr.enabled = false;
            promiseS && promiseS.then(function () {
              InstanceMgr.UICtr.showOverUI();
            });
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(touch, event) {
            touch.getDelta(v2_t);

            if (v2_t.x != 0) {
              Quat.fromEuler(quat_t, 0, v2_t.x * 0.75, 0);
              this.cube_wrap.rotate(quat_t);
            }
          }
        }, {
          key: "buildCube",
          value: function buildCube() {
            var _this4 = this;

            this.isBuilding = true;
            this.cube_wrap.removeAllChildren();
            var _this$gameData = this.gameData,
                data = _this$gameData.data,
                x = _this$gameData.x,
                y = _this$gameData.y,
                z = _this$gameData.z;
            this._cubes = {};
            var arr = data;
            var offsetX = this.row_col / 2 - (x % 2 ? 0.5 : 0);
            var offsetY = this.row_col / 2 - (y % 2 ? 0.5 : 0);
            var offsetZ = this.row_col / 2 - (z % 2 ? 0.5 : 0);
            var nodeArr = []; //InstanceMgr.TargetCtr.hide();

            for (var i = 0; i < this.row_col; i++) {
              if (!arr[i] || !arr[i].length) continue;

              for (var j = 0; j < this.row_col; j++) {
                if (!arr[i][j] || !arr[i][j].length) continue;

                for (var k = 0; k < this.row_col; k++) {
                  var item = arr[i][j][k];

                  if (item) {
                    v3_t.set(j - offsetX, i - offsetY, k - offsetZ);

                    if (!(item % 2)) {
                      this.targetPos = new Vec3(j, i, k);
                      InstanceMgr.TargetCtr.init(v3_t);
                    } else {
                      var node = instantiate(this.cubePrefab);
                      node.getChildByName('Cube').getComponent(ModelComponent).material = this.cubeMtl;
                      node.position = v3_t;
                      nodeArr.push(node); //this.cube_wrap.addChild(node);
                      //使用yxz形式记录cube node

                      this._cubes["".concat(j).concat(i).concat(k)] = node;
                    }
                  }
                }
              }
            } //将target添加进动画队列
            //对target Cube做出特殊处理


            InstanceMgr.TargetCtr.node.getChildByName('Cube').active = false;
            nodeArr.push(InstanceMgr.TargetCtr.node);
            var len = nodeArr.length; //方块生成开始动画

            var pro = nodeArr.reduce(function (acc, item, index) {
              return acc.then(function () {
                return new Promise(function (resolve, reject) {
                  if (index !== len - 1) _this4.cube_wrap.addChild(item);else {
                    //构建结束
                    _this4.isBuilding = false;
                  } //对target做出单独处理

                  var cube = item.getChildByName('Cube');
                  cube.active = true;
                  CubeCtr.showCube(cube);
                  setTimeout(resolve, 40);
                });
              });
            }, Promise.resolve());
            return pro;
          }
        }, {
          key: "destroyCube",
          value: function destroyCube(newDir) {
            var _this5 = this;

            //根据当前target的坐标销毁脚下的方块
            var targetPos = this.targetPos;
            v3_t.set(targetPos);
            v3_t.y--;
            var curKey = "".concat(v3_t.x).concat(v3_t.y).concat(v3_t.z);
            var desNode = this._cubes[curKey];
            this.gameData.data[v3_t.y][v3_t.x][v3_t.z] = 0;
            delete this._cubes[curKey];
            CubeCtr.down(desNode.getChildByName('Cube'), function () {
              desNode.destroy();
            });

            if (newDir % 2) {
              targetPos.z += newDir % 4 === 3 ? -1 : 1;
            } else {
              targetPos.x += newDir % 4 ? 1 : -1;
            }

            if (newDir > 4 && newDir < 9) {
              targetPos.y++;
            } else if (newDir > 8) {
              targetPos.y--;
            } //做一个延时处理


            setTimeout(function () {
              _this5.checkGameOver();
            }, 200);
          }
        }, {
          key: "nextLevel",
          value: function nextLevel() {
            this._level = this._level + 1 > data.length ? data.length : this._level + 1;
            localStorage.setItem(KEY.LEVEL, this._level + '');
          }
        }, {
          key: "checkGameOver",
          value: function checkGameOver() {
            var _this6 = this;

            if (Object.keys(this._cubes).length === 1) {
              console.log('nextLevel');
              this.nextLevel(); //个结束动画

              this.overShake().then(function (res) {
                var handle = null;
                var promiseS = new Promise(function (reslove) {
                  return handle = reslove;
                });

                _this6.gameOver(promiseS);

                var arr = [InstanceMgr.TargetCtr.overAni()];
                setTimeout(function () {
                  arr.push(InstanceMgr.ParticleCtr.playOverParticle());
                  Promise.all(arr).then(handle);
                }, 1000);
              });
              return;
            }

            var newDir = 0;

            for (var i = 1; i <= 4; i++) {
              var around = InstanceMgr.TargetCtr.getCubeAround(i);
              if (around[0] && !around[1]) newDir = i;else if (around[1] && !around[2]) newDir = i + 4;else if (around[3] && !around[1] && !around[0]) newDir = i + 8;
            }

            if (!newDir) {
              console.log('gameOver');
              var handle = null;
              var promiseS = new Promise(function (reslove) {
                return handle = reslove;
              });
              this.gameOver(promiseS);
              this.dieAni().then(handle);
            }
          }
          /* 死亡结束动画 */

        }, {
          key: "dieAni",
          value: function dieAni() {
            var _this7 = this;

            var com = this.camera.getComponent(AnimationComponent);
            var color = new Color().set(this.camera.color);
            com.play();
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
                _this7.camera.color = color;
                com.stop();
              }, 1500);
            });
          }
          /* 结束抖动 */

        }, {
          key: "overShake",
          value: function overShake() {
            var com = this.cubeRoot.getComponent(AnimationComponent);
            com.play();
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
                com.stop();
              }, 1500);
            });
          }
          /* 模式变换需要作出的改动 
                @param mode 当前模式
                @param flag 是否需要重新build cube
            */

        }, {
          key: "modeChange",
          value: function modeChange(mode, flag) {
            console.log('modeChange');
            var mat = this.cubeMtl;
            mat.setProperty('albedo', new Color(mode.cube));
            if (flag) this.buildCube();
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            action.update(deltaTime); // Your update function goes here.
            // this.RotateAround(v3_t, Vec3.UNIT_X, deltaTime)
            // let squat: Quat = this.targetNode.getRotation();
            // Quat.rotateAroundLocal(quat_t, squat, this.targetNode.getWorldPosition().normalize(), 1 * deltaTime);
            // //Quat.rotateAround(quat_t, squat, Vec3.UNIT_X, 1 * deltaTime);
            // //this._testNode.setRotation(quat_t);
            // this.targetNode.setRotation(quat_t);
          }
        }, {
          key: "curState",
          set: function set(value) {
            switch (value) {
              case EGameSate.LOBBY:
                break;

              case EGameSate.GAMING:
                break;

              case EGameSate.GAMEOVER:
                break;
            }

            this._curState = value;
          }
        }]);
        return GameCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubeMtl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetMtl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cube_wrap", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "row_col", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 9;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubeRoot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "camera", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvR2FtZUN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUXVhdCIsIlZlYzMiLCJOb2RlIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJDYW1lcmFDb21wb25lbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJDb2xvciIsIk1hdGVyaWFsIiwiTW9kZWxDb21wb25lbnQiLCJ2Ml90IiwicXVhdF90IiwidjNfdCIsImRhdGEiLCJhY3Rpb24iLCJJbnN0YW5jZU1nciIsIkN1YmVDdHIiLCJLRVkiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFR2FtZVNhdGUiLCJHYW1lQ3RyIiwidHlwZSIsIl90ZXN0Tm9kZSIsIl9jdWJlcyIsIl9sZXZlbCIsIl9jdXJTdGF0ZSIsIkxPQkJZIiwiX2lzRmlyc3QiLCJpc0J1aWxkaW5nIiwidGFyZ2V0UG9zIiwiZ2FtZURhdGEiLCJyZWdpc3Rlckluc3RhbmNlIiwibGV2ZWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTEVWRUwiLCJzZXRJdGVtIiwic2V0VGltZW91dCIsImluaXQiLCJVSUN0ciIsImluaXRMZXZlbFRpdGxlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYnVpbGRDdWJlIiwidGhlbiIsIlRhcmdldEN0ciIsImVuYWJsZWQiLCJjdXJTdGF0ZSIsIkdBTUlORyIsImhpZGVTdGFydFVJIiwiTXVzaWNDdHIiLCJwbGF5IiwiaGlkZU92ZXJVSSIsInByb21pc2VTIiwic2hvd092ZXJVSSIsInRvdWNoIiwiZXZlbnQiLCJnZXREZWx0YSIsIngiLCJmcm9tRXVsZXIiLCJjdWJlX3dyYXAiLCJyb3RhdGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsInkiLCJ6IiwiYXJyIiwib2Zmc2V0WCIsInJvd19jb2wiLCJvZmZzZXRZIiwib2Zmc2V0WiIsIm5vZGVBcnIiLCJpIiwibGVuZ3RoIiwiaiIsImsiLCJpdGVtIiwic2V0Iiwibm9kZSIsImN1YmVQcmVmYWIiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIm1hdGVyaWFsIiwiY3ViZU10bCIsInBvc2l0aW9uIiwicHVzaCIsImFjdGl2ZSIsImxlbiIsInBybyIsInJlZHVjZSIsImFjYyIsImluZGV4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGRDaGlsZCIsImN1YmUiLCJzaG93Q3ViZSIsIm5ld0RpciIsImN1cktleSIsImRlc05vZGUiLCJkb3duIiwiZGVzdHJveSIsImNoZWNrR2FtZU92ZXIiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsIm5leHRMZXZlbCIsIm92ZXJTaGFrZSIsInJlcyIsImhhbmRsZSIsInJlc2xvdmUiLCJnYW1lT3ZlciIsIm92ZXJBbmkiLCJQYXJ0aWNsZUN0ciIsInBsYXlPdmVyUGFydGljbGUiLCJhbGwiLCJhcm91bmQiLCJnZXRDdWJlQXJvdW5kIiwiZGllQW5pIiwiY29tIiwiY2FtZXJhIiwiY29sb3IiLCJzdG9wIiwiY3ViZVJvb3QiLCJtb2RlIiwiZmxhZyIsIm1hdCIsInNldFByb3BlcnR5IiwiZGVsdGFUaW1lIiwidXBkYXRlIiwidmFsdWUiLCJHQU1FT1ZFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUztBQUdBQyxNQUFBQSxJLE9BQUFBLEk7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBR0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxNLE9BQUFBLE07QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBR0FDLE1BQUFBLGUsT0FBQUEsZTtBQUNBQyxNQUFBQSxrQixPQUFBQSxrQjtBQUNBQyxNQUFBQSxLLE9BQUFBLEs7QUFLQUMsTUFBQUEsUSxPQUFBQSxRO0FBQ0FDLE1BQUFBLGMsT0FBQUEsYzs7QUFHT0MsTUFBQUEsSSxtQkFBQUEsSTtBQUFNQyxNQUFBQSxNLG1CQUFB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QUEwQixJQUFJM0gsS0FBSixDQUFVd0gsSUFBSSxDQUFDOUIsSUFBZixDQUExQjtBQUNBLGdCQUFJK0IsSUFBSixFQUFVLEtBQUtuRixTQUFMO0FBQ1g7OztpQ0FFTXNGLFMsRUFBbUI7QUFDeEJySCxZQUFBQSxNQUFNLENBQUNzSCxNQUFQLENBQWNELFNBQWQsRUFEd0IsQ0FHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OzRCQTdQWUUsSyxFQUFrQjtBQUM3QixvQkFBUUEsS0FBUjtBQUNFLG1CQUFLakgsU0FBUyxDQUFDTyxLQUFmO0FBQ0U7O0FBQ0YsbUJBQUtQLFNBQVMsQ0FBQzhCLE1BQWY7QUFDRTs7QUFDRixtQkFBSzlCLFNBQVMsQ0FBQ2tILFFBQWY7QUFDRTtBQU5KOztBQVFBLGlCQUFLNUcsU0FBTCxHQUFpQjJHLEtBQWpCO0FBQ0Q7OztRQS9GMEJ0SSxTOzs7OztpQkFTTixJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdKLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFHRSxJOzs4RkFFaEJvQixROzs7OztpQkFDUyxDOzs7Ozs7O2lCQUdTLEk7Ozs7Ozs7aUJBR0YsSTs7Ozs7OztpQkFHUyxJOzs7O29CQTlFViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgX2RlY29yYXRvcixcclxuICBDb21wb25lbnQsXHJcbiAgc3lzdGVtRXZlbnQsXHJcbiAgVG91Y2gsXHJcbiAgUXVhdCxcclxuICBWZWMzLFxyXG4gIEV2ZW50VG91Y2gsXHJcbiAgU3lzdGVtRXZlbnRUeXBlLFxyXG4gIE5vZGUsXHJcbiAgUHJlZmFiLFxyXG4gIGluc3RhbnRpYXRlLFxyXG4gIFZlYzIsXHJcbiAgdjMsXHJcbiAgQ2FtZXJhQ29tcG9uZW50LFxyXG4gIEFuaW1hdGlvbkNvbXBvbmVudCxcclxuICBDb2xvcixcclxuICBTcHJpdGVGcmFtZSxcclxuICBUZXh0dXJlMkQsXHJcbiAgU3ByaXRlQ29tcG9uZW50LFxyXG4gIEltYWdlQXNzZXQsXHJcbiAgTWF0ZXJpYWwsXHJcbiAgTW9kZWxDb21wb25lbnRcclxufSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmltcG9ydCB7IHYyX3QsIHF1YXRfdCwgdjNfdCB9IGZyb20gJy4uL2xpYi9UZW1wQ29uc3QnO1xyXG5cclxuaW1wb3J0IHsgZGF0YSwgZ2V0WFlaLCBkYXRhaXRlbSB9IGZyb20gJy4uL1Rlc3QnO1xyXG5pbXBvcnQgYWN0aW9uIGZyb20gJy4uL2xpYi9BY3Rpb24nO1xyXG5pbXBvcnQgeyBJbnN0YW5jZU1nciB9IGZyb20gJy4uL2xpYi9JbnN0YW5jZU1ncic7XHJcbmltcG9ydCB7IEN1YmVDdHIgfSBmcm9tICcuL0N1YmVDdHInO1xyXG5pbXBvcnQgS0VZIGZyb20gJy4uL2NvbmZpZy9LRVknO1xyXG5pbXBvcnQgeyBtb2RlSW5mIH0gZnJvbSAnLi4vY29uZmlnL01PREUnO1xyXG5cclxuZW51bSBFR2FtZVNhdGUge1xyXG4gIExPQkJZLFxyXG4gIEdBTUlORyxcclxuICBHQU1FT1ZFUlxyXG59XHJcblxyXG5AY2NjbGFzcygnR2FtZUN0cicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ3RyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgLy8gQHByb3BlcnR5XHJcbiAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICBjdWJlUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICB0YXJnZXRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE1hdGVyaWFsIH0pXHJcbiAgY3ViZU10bDogTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBNYXRlcmlhbCB9KVxyXG4gIHRhcmdldE10bDogTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgY3ViZV93cmFwOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIGdhbWVVSTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICB0ZXN0Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIHJvd19jb2wgPSA5O1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgdGFyZ2V0Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICBjdWJlUm9vdDogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IENhbWVyYUNvbXBvbmVudCB9KVxyXG4gIGNhbWVyYTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgX2N1YmVzID0ge307XHJcbiAgcHJpdmF0ZSBfbGV2ZWw6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBfY3VyU3RhdGUgPSBFR2FtZVNhdGUuTE9CQlk7XHJcbiAgcHJpdmF0ZSBfaXNGaXJzdCA9IHRydWU7XHJcblxyXG4gIC8qIOW9k+WJjeaYr+WQpuWkhOWcqOaehOW7uuS4re+8jOS4u+imgeaYr+mYsuatouaooeW8j+WIh+aNouaXtueahOmYsuatouWkmuasoeeCueWHuyAqL1xyXG4gIGlzQnVpbGRpbmcgPSBmYWxzZTtcclxuXHJcbiAgLyogXHJcbiAgICDnlKh2M+adpeihqOekuuW9k+WJjXRhcmdldOiZmuaLn+S9jee9riBcclxuICAgIOS4iee7tOaVsOe7hOadpeihqOekuuW9k+WJjei+uemVv+S4uuS5neeahOeri+aWueS9k1xyXG4gICAgW3nlgLxcclxuICAgICAgICBbeOWAvFxyXG4gICAgICAgICAgICBbeuWAvF1cclxuICAgICAgICBdXHJcbiAgICBdXHJcbiAgICAqL1xyXG4gIHRhcmdldFBvczogVmVjMyA9IG51bGw7XHJcbiAgZ2FtZURhdGE6IGRhdGFpdGVtID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgSW5zdGFuY2VNZ3IucmVnaXN0ZXJJbnN0YW5jZSgnR2FtZUN0cicsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuXHJcbiAgICBsZXQgbGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkuTEVWRUwpO1xyXG4gICAgaWYgKGxldmVsKSB7XHJcbiAgICAgIHRoaXMuX2xldmVsID0gK2xldmVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGV2ZWwgPSAxO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVkuTEVWRUwsIHRoaXMuX2xldmVsICsgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSW5zdGFuY2VNZ3IuV3hSYW5rTGlzdC51cGxvYWRMZXZlbE9wZW4oMik7XHJcblxyXG4gICAgLyog5bu26L+f6Iez5LiL5Liq5LqL5Lu25b6q546v5omn6KGM77yM5Zug5Li6bW9kZUNoYW5nZemcgOimgeaUueWPmG10bCAqL1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgY3VyU3RhdGUodmFsdWU6IEVHYW1lU2F0ZSkge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIEVHYW1lU2F0ZS5MT0JCWTpcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFR2FtZVNhdGUuR0FNSU5HOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVHYW1lU2F0ZS5HQU1FT1ZFUjpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuX2N1clN0YXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgLy90aGlzLmdhbWVVSS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIEluc3RhbmNlTWdyLlVJQ3RyLmluaXRMZXZlbFRpdGxlKHRoaXMuX2xldmVsKTtcclxuICAgIHRoaXMuZ2FtZURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFbdGhpcy5fbGV2ZWwgLSAxXSkpO1xyXG4gICAgdGhpcy5idWlsZEN1YmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9pc0ZpcnN0KSBJbnN0YW5jZU1nci5UYXJnZXRDdHIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIC8vIOmSiOWvueesrOS4gOasoeWIneWni+WMlueahOeJueauiuWkhOeQhlxyXG5cclxuICAgIHRoaXMuY3VyU3RhdGUgPSBFR2FtZVNhdGUuR0FNSU5HO1xyXG5cclxuICAgIEluc3RhbmNlTWdyLlVJQ3RyLmhpZGVTdGFydFVJKCk7XHJcbiAgICBpZiAoIXRoaXMuX2lzRmlyc3QpIHRoaXMuaW5pdCgpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIEluc3RhbmNlTWdyLlRhcmdldEN0ci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5faXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEluc3RhbmNlTWdyLk11c2ljQ3RyLnBsYXkoJ3N0YXJ0Jyk7XHJcbiAgfVxyXG5cclxuICByZVN0YXJ0KCkge1xyXG4gICAgLy9UT0RPXHJcbiAgICBJbnN0YW5jZU1nci5VSUN0ci5oaWRlT3ZlclVJKCk7XHJcbiAgICB0aGlzLmN1clN0YXRlID0gRUdhbWVTYXRlLkdBTUlORztcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgSW5zdGFuY2VNZ3IuTXVzaWNDdHIucGxheSgnc3RhcnQnKTtcclxuICB9XHJcblxyXG4gIGdhbWVPdmVyKHByb21pc2VTKSB7XHJcbiAgICBJbnN0YW5jZU1nci5UYXJnZXRDdHIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgcHJvbWlzZVMgJiZcclxuICAgICAgcHJvbWlzZVMudGhlbigoKSA9PiB7XHJcbiAgICAgICAgSW5zdGFuY2VNZ3IuVUlDdHIuc2hvd092ZXJVSSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hNb3ZlKHRvdWNoOiBUb3VjaCwgZXZlbnQ6IEV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIHRvdWNoLmdldERlbHRhKHYyX3QpO1xyXG4gICAgaWYgKHYyX3QueCAhPSAwKSB7XHJcbiAgICAgIFF1YXQuZnJvbUV1bGVyKHF1YXRfdCwgMCwgdjJfdC54ICogMC43NSwgMCk7XHJcbiAgICAgIHRoaXMuY3ViZV93cmFwLnJvdGF0ZShxdWF0X3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRDdWJlKCkge1xyXG4gICAgdGhpcy5pc0J1aWxkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmN1YmVfd3JhcC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgIGxldCB7IGRhdGEsIHgsIHksIHogfSA9IHRoaXMuZ2FtZURhdGE7XHJcblxyXG4gICAgdGhpcy5fY3ViZXMgPSB7fTtcclxuXHJcbiAgICBsZXQgYXJyID0gZGF0YTtcclxuXHJcbiAgICBsZXQgb2Zmc2V0WCA9IHRoaXMucm93X2NvbCAvIDIgLSAoeCAlIDIgPyAwLjUgOiAwKTtcclxuICAgIGxldCBvZmZzZXRZID0gdGhpcy5yb3dfY29sIC8gMiAtICh5ICUgMiA/IDAuNSA6IDApO1xyXG4gICAgbGV0IG9mZnNldFogPSB0aGlzLnJvd19jb2wgLyAyIC0gKHogJSAyID8gMC41IDogMCk7XHJcblxyXG4gICAgbGV0IG5vZGVBcnI6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vSW5zdGFuY2VNZ3IuVGFyZ2V0Q3RyLmhpZGUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93X2NvbDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJyW2ldIHx8ICFhcnJbaV0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvd19jb2w7IGorKykge1xyXG4gICAgICAgIGlmICghYXJyW2ldW2pdIHx8ICFhcnJbaV1bal0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMucm93X2NvbDsgaysrKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IGFycltpXVtqXVtrXTtcclxuICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHYzX3Quc2V0KGogLSBvZmZzZXRYLCBpIC0gb2Zmc2V0WSwgayAtIG9mZnNldFopO1xyXG4gICAgICAgICAgICBpZiAoIShpdGVtICUgMikpIHtcclxuICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvcyA9IG5ldyBWZWMzKGosIGksIGspO1xyXG4gICAgICAgICAgICAgIEluc3RhbmNlTWdyLlRhcmdldEN0ci5pbml0KHYzX3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGxldCBub2RlOiBOb2RlID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcclxuICAgICAgICAgICAgICBub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoJ0N1YmUnKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkubWF0ZXJpYWwgPSB0aGlzLmN1YmVNdGw7XHJcbiAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzX3Q7XHJcbiAgICAgICAgICAgICAgbm9kZUFyci5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgIC8vdGhpcy5jdWJlX3dyYXAuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgLy/kvb/nlKh5eHrlvaLlvI/orrDlvZVjdWJlIG5vZGVcclxuICAgICAgICAgICAgICB0aGlzLl9jdWJlc1tgJHtqfSR7aX0ke2t9YF0gPSBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lsIZ0YXJnZXTmt7vliqDov5vliqjnlLvpmJ/liJdcclxuICAgIC8v5a+5dGFyZ2V0IEN1YmXlgZrlh7rnibnmrorlpITnkIZcclxuICAgIEluc3RhbmNlTWdyLlRhcmdldEN0ci5ub2RlLmdldENoaWxkQnlOYW1lKCdDdWJlJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBub2RlQXJyLnB1c2goSW5zdGFuY2VNZ3IuVGFyZ2V0Q3RyLm5vZGUgYXMgTm9kZSk7XHJcbiAgICBsZXQgbGVuID0gbm9kZUFyci5sZW5ndGg7XHJcblxyXG4gICAgLy/mlrnlnZfnlJ/miJDlvIDlp4vliqjnlLtcclxuICAgIGxldCBwcm8gPSBub2RlQXJyLnJlZHVjZSgoYWNjLCBpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gYWNjLnRoZW4oXHJcbiAgICAgICAgKCkgPT5cclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBsZW4gLSAxKSB0aGlzLmN1YmVfd3JhcC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy/mnoTlu7rnu5PmnZ9cclxuICAgICAgICAgICAgICB0aGlzLmlzQnVpbGRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lr7l0YXJnZXTlgZrlh7rljZXni6zlpITnkIZcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdDdWJlJyk7XHJcbiAgICAgICAgICAgIGN1YmUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIEN1YmVDdHIuc2hvd0N1YmUoY3ViZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgNDApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcclxuXHJcbiAgICByZXR1cm4gcHJvO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveUN1YmUobmV3RGlyOiBudW1iZXIpIHtcclxuICAgIC8v5qC55o2u5b2T5YmNdGFyZ2V055qE5Z2Q5qCH6ZSA5q+B6ISa5LiL55qE5pa55Z2XXHJcblxyXG4gICAgbGV0IHRhcmdldFBvcyA9IHRoaXMudGFyZ2V0UG9zO1xyXG4gICAgdjNfdC5zZXQodGFyZ2V0UG9zKTtcclxuICAgIHYzX3QueS0tO1xyXG4gICAgbGV0IGN1cktleSA9IGAke3YzX3QueH0ke3YzX3QueX0ke3YzX3Quen1gO1xyXG4gICAgbGV0IGRlc05vZGUgPSB0aGlzLl9jdWJlc1tjdXJLZXldO1xyXG4gICAgdGhpcy5nYW1lRGF0YS5kYXRhW3YzX3QueV1bdjNfdC54XVt2M190LnpdID0gMDtcclxuICAgIGRlbGV0ZSB0aGlzLl9jdWJlc1tjdXJLZXldO1xyXG4gICAgQ3ViZUN0ci5kb3duKGRlc05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0N1YmUnKSwgKCkgPT4ge1xyXG4gICAgICBkZXNOb2RlLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChuZXdEaXIgJSAyKSB7XHJcbiAgICAgIHRhcmdldFBvcy56ICs9IG5ld0RpciAlIDQgPT09IDMgPyAtMSA6IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXRQb3MueCArPSBuZXdEaXIgJSA0ID8gMSA6IC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld0RpciA+IDQgJiYgbmV3RGlyIDwgOSkge1xyXG4gICAgICB0YXJnZXRQb3MueSsrO1xyXG4gICAgfSBlbHNlIGlmIChuZXdEaXIgPiA4KSB7XHJcbiAgICAgIHRhcmdldFBvcy55LS07XHJcbiAgICB9XHJcblxyXG4gICAgLy/lgZrkuIDkuKrlu7bml7blpITnkIZcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrR2FtZU92ZXIoKTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0TGV2ZWwoKSB7XHJcbiAgICB0aGlzLl9sZXZlbCA9IHRoaXMuX2xldmVsICsgMSA+IGRhdGEubGVuZ3RoID8gZGF0YS5sZW5ndGggOiB0aGlzLl9sZXZlbCArIDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVkuTEVWRUwsIHRoaXMuX2xldmVsICsgJycpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tHYW1lT3ZlcigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9jdWJlcykubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCduZXh0TGV2ZWwnKTtcclxuICAgICAgdGhpcy5uZXh0TGV2ZWwoKTtcclxuICAgICAgLy/kuKrnu5PmnZ/liqjnlLtcclxuICAgICAgdGhpcy5vdmVyU2hha2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByb21pc2VTID0gbmV3IFByb21pc2UocmVzbG92ZSA9PiAoaGFuZGxlID0gcmVzbG92ZSkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIocHJvbWlzZVMpO1xyXG4gICAgICAgIGxldCBhcnIgPSBbSW5zdGFuY2VNZ3IuVGFyZ2V0Q3RyLm92ZXJBbmkoKV07XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhcnIucHVzaChJbnN0YW5jZU1nci5QYXJ0aWNsZUN0ci5wbGF5T3ZlclBhcnRpY2xlKCkpO1xyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoYXJyKS50aGVuKGhhbmRsZSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld0RpciA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgbGV0IGFyb3VuZCA9IEluc3RhbmNlTWdyLlRhcmdldEN0ci5nZXRDdWJlQXJvdW5kKGkpO1xyXG4gICAgICBpZiAoYXJvdW5kWzBdICYmICFhcm91bmRbMV0pIG5ld0RpciA9IGk7XHJcbiAgICAgIGVsc2UgaWYgKGFyb3VuZFsxXSAmJiAhYXJvdW5kWzJdKSBuZXdEaXIgPSBpICsgNDtcclxuICAgICAgZWxzZSBpZiAoYXJvdW5kWzNdICYmICFhcm91bmRbMV0gJiYgIWFyb3VuZFswXSkgbmV3RGlyID0gaSArIDg7XHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld0Rpcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2FtZU92ZXInKTtcclxuICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgIGxldCBwcm9taXNlUyA9IG5ldyBQcm9taXNlKHJlc2xvdmUgPT4gKGhhbmRsZSA9IHJlc2xvdmUpKTtcclxuICAgICAgdGhpcy5nYW1lT3Zlcihwcm9taXNlUyk7XHJcbiAgICAgIHRoaXMuZGllQW5pKCkudGhlbihoYW5kbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyog5q275Lqh57uT5p2f5Yqo55S7ICovXHJcbiAgZGllQW5pKCkge1xyXG4gICAgbGV0IGNvbSA9IHRoaXMuY2FtZXJhLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgbGV0IGNvbG9yID0gbmV3IENvbG9yKCkuc2V0KHRoaXMuY2FtZXJhLmNvbG9yKTtcclxuICAgIGNvbS5wbGF5KCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICBjb20uc3RvcCgpO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyog57uT5p2f5oqW5YqoICovXHJcbiAgb3ZlclNoYWtlKCkge1xyXG4gICAgbGV0IGNvbSA9IHRoaXMuY3ViZVJvb3QuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICBjb20ucGxheSgpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIGNvbS5zdG9wKCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiDmqKHlvI/lj5jmjaLpnIDopoHkvZzlh7rnmoTmlLnliqggXHJcbiAgICAgICAgQHBhcmFtIG1vZGUg5b2T5YmN5qih5byPXHJcbiAgICAgICAgQHBhcmFtIGZsYWcg5piv5ZCm6ZyA6KaB6YeN5pawYnVpbGQgY3ViZVxyXG4gICAgKi9cclxuICBtb2RlQ2hhbmdlKG1vZGU6IG1vZGVJbmYsIGZsYWc/OiBib29sZWFuKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbW9kZUNoYW5nZScpO1xyXG4gICAgY29uc3QgbWF0ID0gdGhpcy5jdWJlTXRsO1xyXG4gICAgbWF0LnNldFByb3BlcnR5KCdhbGJlZG8nLCBuZXcgQ29sb3IobW9kZS5jdWJlKSk7XHJcbiAgICBpZiAoZmxhZykgdGhpcy5idWlsZEN1YmUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgYWN0aW9uLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIHRoaXMuUm90YXRlQXJvdW5kKHYzX3QsIFZlYzMuVU5JVF9YLCBkZWx0YVRpbWUpXHJcbiAgICAvLyBsZXQgc3F1YXQ6IFF1YXQgPSB0aGlzLnRhcmdldE5vZGUuZ2V0Um90YXRpb24oKTtcclxuICAgIC8vIFF1YXQucm90YXRlQXJvdW5kTG9jYWwocXVhdF90LCBzcXVhdCwgdGhpcy50YXJnZXROb2RlLmdldFdvcmxkUG9zaXRpb24oKS5ub3JtYWxpemUoKSwgMSAqIGRlbHRhVGltZSk7XHJcbiAgICAvLyAvL1F1YXQucm90YXRlQXJvdW5kKHF1YXRfdCwgc3F1YXQsIFZlYzMuVU5JVF9YLCAxICogZGVsdGFUaW1lKTtcclxuICAgIC8vIC8vdGhpcy5fdGVzdE5vZGUuc2V0Um90YXRpb24ocXVhdF90KTtcclxuICAgIC8vIHRoaXMudGFyZ2V0Tm9kZS5zZXRSb3RhdGlvbihxdWF0X3QpO1xyXG4gIH1cclxufVxyXG4iXX0=