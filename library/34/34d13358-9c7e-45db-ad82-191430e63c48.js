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
            //this.gameUI.active = false;
            InstanceMgr.UICtr.initLevelTitle(this._level);
            this.gameData = JSON.parse(JSON.stringify(data[this._level - 1]));
            this.buildCube();
          }
        }, {
          key: "startGame",
          value: function startGame() {
            this.curState = EGameSate.GAMING;
            InstanceMgr.TargetCtr.enabled = true;
            InstanceMgr.UICtr.hideStartUI();
            if (!this._isFirst) this.init();else this._isFirst = false;
            InstanceMgr.MusicCtr.play('start');
          }
        }, {
          key: "reStart",
          value: function reStart() {
            //TODO
            InstanceMgr.UICtr.hideOverUI();
            this.curState = EGameSate.GAMING;
            InstanceMgr.TargetCtr.enabled = true;
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
            var _this3 = this;

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

            nodeArr.reduce(function (acc, item, index) {
              return acc.then(function () {
                return new Promise(function (resolve, reject) {
                  if (index !== len - 1) _this3.cube_wrap.addChild(item);else {
                    //构建结束
                    _this3.isBuilding = false;
                  } //对target做出单独处理

                  var cube = item.getChildByName('Cube');
                  cube.active = true;
                  CubeCtr.showCube(cube);
                  setTimeout(resolve, 40);
                });
              });
            }, Promise.resolve());
          }
        }, {
          key: "destroyCube",
          value: function destroyCube(newDir) {
            var _this4 = this;

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
              _this4.checkGameOver();
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
            var _this5 = this;

            if (Object.keys(this._cubes).length === 1) {
              console.log('nextLevel');
              this.nextLevel(); //个结束动画

              this.overShake().then(function (res) {
                var handle = null;
                var promiseS = new Promise(function (reslove) {
                  return handle = reslove;
                });

                _this5.gameOver(promiseS);

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
            var _this6 = this;

            var com = this.camera.getComponent(AnimationComponent);
            var color = new Color().set(this.camera.color);
            com.play();
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
                _this6.camera.color = color;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvR2FtZUN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUXVhdCIsIlZlYzMiLCJOb2RlIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJDYW1lcmFDb21wb25lbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJDb2xvciIsIk1hdGVyaWFsIiwiTW9kZWxDb21wb25lbnQiLCJ2Ml90IiwicXVhdF90IiwidjNfdCIsImRhdGEiLCJhY3Rpb24iLCJJbnN0YW5jZU1nciIsIkN1YmVDdHIiLCJLRVkiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFR2FtZVNhdGUiLCJHYW1lQ3RyIiwidHlwZSIsIl90ZXN0Tm9kZSIsIl9jdWJlcyIsIl9sZXZlbCIsIl9jdXJTdGF0ZSIsIkxPQkJZIiwiX2lzRmlyc3QiLCJpc0J1aWxkaW5nIiwidGFyZ2V0UG9zIiwiZ2FtZURhdGEiLCJyZWdpc3Rlckluc3RhbmNlIiwibGV2ZWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTEVWRUwiLCJzZXRJdGVtIiwic2V0VGltZW91dCIsImluaXQiLCJVSUN0ciIsImluaXRMZXZlbFRpdGxlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYnVpbGRDdWJlIiwiY3VyU3RhdGUiLCJHQU1JTkciLCJUYXJnZXRDdHIiLCJlbmFibGVkIiwiaGlkZVN0YXJ0VUkiLCJNdXNpY0N0ciIsInBsYXkiLCJoaWRlT3ZlclVJIiwicHJvbWlzZVMiLCJ0aGVuIiwic2hvd092ZXJVSSIsInRvdWNoIiwiZXZlbnQiLCJnZXREZWx0YSIsIngiLCJmcm9tRXVsZXIiLCJjdWJlX3dyYXAiLCJyb3RhdGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsInkiLCJ6IiwiYXJyIiwib2Zmc2V0WCIsInJvd19jb2wiLCJvZmZzZXRZIiwib2Zmc2V0WiIsIm5vZGVBcnIiLCJpIiwibGVuZ3RoIiwiaiIsImsiLCJpdGVtIiwic2V0Iiwibm9kZSIsImN1YmVQcmVmYWIiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIm1hdGVyaWFsIiwiY3ViZU10bCIsInBvc2l0aW9uIiwicHVzaCIsImFjdGl2ZSIsImxlbiIsInJlZHVjZSIsImFjYyIsImluZGV4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGRDaGlsZCIsImN1YmUiLCJzaG93Q3ViZSIsIm5ld0RpciIsImN1cktleSIsImRlc05vZGUiLCJkb3duIiwiZGVzdHJveSIsImNoZWNrR2FtZU92ZXIiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsIm5leHRMZXZlbCIsIm92ZXJTaGFrZSIsInJlcyIsImhhbmRsZSIsInJlc2xvdmUiLCJnYW1lT3ZlciIsIm92ZXJBbmkiLCJQYXJ0aWNsZUN0ciIsInBsYXlPdmVyUGFydGljbGUiLCJhbGwiLCJhcm91bmQiLCJnZXRDdWJlQXJvdW5kIiwiZGllQW5pIiwiY29tIiwiY2FtZXJhIiwiY29sb3IiLCJzdG9wIiwiY3ViZVJvb3QiLCJtb2RlIiwiZmxhZyIsIm1hdCIsInNldFByb3BlcnR5IiwiZGVsdGFUaW1lIiwidXBkYXRlIiwidmFsdWUiLCJHQU1FT1ZFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUztBQUdBQyxNQUFBQSxJLE9BQUFBLEk7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBR0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxNLE9BQUFBLE07QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBR0FDLE1BQUFBLGUsT0FBQUEsZTtBQUNBQyxNQUFBQSxrQixPQUFBQSxrQjtBQUNBQyxNQUFBQSxLLE9BQUFBLEs7QUFLQUMsTUFBQUEsUSxPQUFBQSxRO0FBQ0FDLE1BQUFBLGMsT0FBQUEsYzs7QUFHT0MsTUFBQUEsSSxtQkFBQUEsSTtBQUFNQyxNQUFBQSxNLG1CQUFBQSxNO0FB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cUgsTUFBUCxDQUFjRCxTQUFkLEVBRHdCLENBR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs0QkF0UFlFLEssRUFBa0I7QUFDN0Isb0JBQVFBLEtBQVI7QUFDRSxtQkFBS2hILFNBQVMsQ0FBQ08sS0FBZjtBQUNFOztBQUNGLG1CQUFLUCxTQUFTLENBQUMyQixNQUFmO0FBQ0U7O0FBQ0YsbUJBQUszQixTQUFTLENBQUNpSCxRQUFmO0FBQ0U7QUFOSjs7QUFRQSxpQkFBSzNHLFNBQUwsR0FBaUIwRyxLQUFqQjtBQUNEOzs7UUEvRjBCckksUzs7Ozs7aUJBU04sSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFHSixJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBR0UsSTs7OEZBRWhCb0IsUTs7Ozs7aUJBQ1MsQzs7Ozs7OztpQkFHUyxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR1MsSTs7OztvQkE5RVYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIF9kZWNvcmF0b3IsXHJcbiAgQ29tcG9uZW50LFxyXG4gIHN5c3RlbUV2ZW50LFxyXG4gIFRvdWNoLFxyXG4gIFF1YXQsXHJcbiAgVmVjMyxcclxuICBFdmVudFRvdWNoLFxyXG4gIFN5c3RlbUV2ZW50VHlwZSxcclxuICBOb2RlLFxyXG4gIFByZWZhYixcclxuICBpbnN0YW50aWF0ZSxcclxuICBWZWMyLFxyXG4gIHYzLFxyXG4gIENhbWVyYUNvbXBvbmVudCxcclxuICBBbmltYXRpb25Db21wb25lbnQsXHJcbiAgQ29sb3IsXHJcbiAgU3ByaXRlRnJhbWUsXHJcbiAgVGV4dHVyZTJELFxyXG4gIFNwcml0ZUNvbXBvbmVudCxcclxuICBJbWFnZUFzc2V0LFxyXG4gIE1hdGVyaWFsLFxyXG4gIE1vZGVsQ29tcG9uZW50XHJcbn0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnQgeyB2Ml90LCBxdWF0X3QsIHYzX3QgfSBmcm9tICcuLi9saWIvVGVtcENvbnN0JztcclxuXHJcbmltcG9ydCB7IGRhdGEsIGdldFhZWiwgZGF0YWl0ZW0gfSBmcm9tICcuLi9UZXN0JztcclxuaW1wb3J0IGFjdGlvbiBmcm9tICcuLi9saWIvQWN0aW9uJztcclxuaW1wb3J0IHsgSW5zdGFuY2VNZ3IgfSBmcm9tICcuLi9saWIvSW5zdGFuY2VNZ3InO1xyXG5pbXBvcnQgeyBDdWJlQ3RyIH0gZnJvbSAnLi9DdWJlQ3RyJztcclxuaW1wb3J0IEtFWSBmcm9tICcuLi9jb25maWcvS0VZJztcclxuaW1wb3J0IHsgbW9kZUluZiB9IGZyb20gJy4uL2NvbmZpZy9NT0RFJztcclxuXHJcbmVudW0gRUdhbWVTYXRlIHtcclxuICBMT0JCWSxcclxuICBHQU1JTkcsXHJcbiAgR0FNRU9WRVJcclxufVxyXG5cclxuQGNjY2xhc3MoJ0dhbWVDdHInKVxyXG5leHBvcnQgY2xhc3MgR2FtZUN0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gIC8vIEBwcm9wZXJ0eVxyXG4gIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgY3ViZVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgdGFyZ2V0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBNYXRlcmlhbCB9KVxyXG4gIGN1YmVNdGw6IE1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTWF0ZXJpYWwgfSlcclxuICB0YXJnZXRNdGw6IE1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIGN1YmVfd3JhcDogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICBnYW1lVUk6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHlcclxuICByb3dfY29sID0gOTtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHRhcmdldE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgY3ViZVJvb3Q6IE5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBDYW1lcmFDb21wb25lbnQgfSlcclxuICBjYW1lcmE6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX3Rlc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuICBwcml2YXRlIF9jdWJlcyA9IHt9O1xyXG4gIHByaXZhdGUgX2xldmVsOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgX2N1clN0YXRlID0gRUdhbWVTYXRlLkxPQkJZO1xyXG4gIHByaXZhdGUgX2lzRmlyc3QgPSB0cnVlO1xyXG5cclxuICAvKiDlvZPliY3mmK/lkKblpITlnKjmnoTlu7rkuK3vvIzkuLvopoHmmK/pmLLmraLmqKHlvI/liIfmjaLml7bnmoTpmLLmraLlpJrmrKHngrnlh7sgKi9cclxuICBpc0J1aWxkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qIFxyXG4gICAg55SodjPmnaXooajnpLrlvZPliY10YXJnZXTomZrmi5/kvY3nva4gXHJcbiAgICDkuInnu7TmlbDnu4TmnaXooajnpLrlvZPliY3ovrnplb/kuLrkuZ3nmoTnq4vmlrnkvZNcclxuICAgIFt55YC8XHJcbiAgICAgICAgW3jlgLxcclxuICAgICAgICAgICAgW3rlgLxdXHJcbiAgICAgICAgXVxyXG4gICAgXVxyXG4gICAgKi9cclxuICB0YXJnZXRQb3M6IFZlYzMgPSBudWxsO1xyXG4gIGdhbWVEYXRhOiBkYXRhaXRlbSA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIEluc3RhbmNlTWdyLnJlZ2lzdGVySW5zdGFuY2UoJ0dhbWVDdHInLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcblxyXG4gICAgbGV0IGxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZLkxFVkVMKTtcclxuICAgIGlmIChsZXZlbCkge1xyXG4gICAgICB0aGlzLl9sZXZlbCA9ICtsZXZlbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xldmVsID0gMTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLkxFVkVMLCB0aGlzLl9sZXZlbCArICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0luc3RhbmNlTWdyLld4UmFua0xpc3QudXBsb2FkTGV2ZWxPcGVuKDIpO1xyXG5cclxuICAgIC8qIOW7tui/n+iHs+S4i+S4quS6i+S7tuW+queOr+aJp+ihjO+8jOWboOS4um1vZGVDaGFuZ2XpnIDopoHmlLnlj5htdGwgKi9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1clN0YXRlKHZhbHVlOiBFR2FtZVNhdGUpIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBFR2FtZVNhdGUuTE9CQlk6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRUdhbWVTYXRlLkdBTUlORzpcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFR2FtZVNhdGUuR0FNRU9WRVI6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdXJTdGF0ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vdGhpcy5nYW1lVUkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBJbnN0YW5jZU1nci5VSUN0ci5pbml0TGV2ZWxUaXRsZSh0aGlzLl9sZXZlbCk7XHJcbiAgICB0aGlzLmdhbWVEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhW3RoaXMuX2xldmVsIC0gMV0pKTtcclxuICAgIHRoaXMuYnVpbGRDdWJlKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICB0aGlzLmN1clN0YXRlID0gRUdhbWVTYXRlLkdBTUlORztcclxuXHJcbiAgICBJbnN0YW5jZU1nci5UYXJnZXRDdHIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICBJbnN0YW5jZU1nci5VSUN0ci5oaWRlU3RhcnRVSSgpO1xyXG4gICAgaWYgKCF0aGlzLl9pc0ZpcnN0KSB0aGlzLmluaXQoKTtcclxuICAgIGVsc2UgdGhpcy5faXNGaXJzdCA9IGZhbHNlO1xyXG5cclxuICAgIEluc3RhbmNlTWdyLk11c2ljQ3RyLnBsYXkoJ3N0YXJ0Jyk7XHJcbiAgfVxyXG5cclxuICByZVN0YXJ0KCkge1xyXG4gICAgLy9UT0RPXHJcbiAgICBJbnN0YW5jZU1nci5VSUN0ci5oaWRlT3ZlclVJKCk7XHJcbiAgICB0aGlzLmN1clN0YXRlID0gRUdhbWVTYXRlLkdBTUlORztcclxuICAgIEluc3RhbmNlTWdyLlRhcmdldEN0ci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgSW5zdGFuY2VNZ3IuTXVzaWNDdHIucGxheSgnc3RhcnQnKTtcclxuICB9XHJcblxyXG4gIGdhbWVPdmVyKHByb21pc2VTKSB7XHJcbiAgICBJbnN0YW5jZU1nci5UYXJnZXRDdHIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgcHJvbWlzZVMgJiZcclxuICAgICAgcHJvbWlzZVMudGhlbigoKSA9PiB7XHJcbiAgICAgICAgSW5zdGFuY2VNZ3IuVUlDdHIuc2hvd092ZXJVSSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hNb3ZlKHRvdWNoOiBUb3VjaCwgZXZlbnQ6IEV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIHRvdWNoLmdldERlbHRhKHYyX3QpO1xyXG4gICAgaWYgKHYyX3QueCAhPSAwKSB7XHJcbiAgICAgIFF1YXQuZnJvbUV1bGVyKHF1YXRfdCwgMCwgdjJfdC54ICogMC43NSwgMCk7XHJcbiAgICAgIHRoaXMuY3ViZV93cmFwLnJvdGF0ZShxdWF0X3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRDdWJlKCkge1xyXG4gICAgdGhpcy5pc0J1aWxkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmN1YmVfd3JhcC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgIGxldCB7IGRhdGEsIHgsIHksIHogfSA9IHRoaXMuZ2FtZURhdGE7XHJcblxyXG4gICAgdGhpcy5fY3ViZXMgPSB7fTtcclxuXHJcbiAgICBsZXQgYXJyID0gZGF0YTtcclxuXHJcbiAgICBsZXQgb2Zmc2V0WCA9IHRoaXMucm93X2NvbCAvIDIgLSAoeCAlIDIgPyAwLjUgOiAwKTtcclxuICAgIGxldCBvZmZzZXRZID0gdGhpcy5yb3dfY29sIC8gMiAtICh5ICUgMiA/IDAuNSA6IDApO1xyXG4gICAgbGV0IG9mZnNldFogPSB0aGlzLnJvd19jb2wgLyAyIC0gKHogJSAyID8gMC41IDogMCk7XHJcblxyXG4gICAgbGV0IG5vZGVBcnI6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vSW5zdGFuY2VNZ3IuVGFyZ2V0Q3RyLmhpZGUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93X2NvbDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJyW2ldIHx8ICFhcnJbaV0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvd19jb2w7IGorKykge1xyXG4gICAgICAgIGlmICghYXJyW2ldW2pdIHx8ICFhcnJbaV1bal0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMucm93X2NvbDsgaysrKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IGFycltpXVtqXVtrXTtcclxuICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHYzX3Quc2V0KGogLSBvZmZzZXRYLCBpIC0gb2Zmc2V0WSwgayAtIG9mZnNldFopO1xyXG4gICAgICAgICAgICBpZiAoIShpdGVtICUgMikpIHtcclxuICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvcyA9IG5ldyBWZWMzKGosIGksIGspO1xyXG4gICAgICAgICAgICAgIEluc3RhbmNlTWdyLlRhcmdldEN0ci5pbml0KHYzX3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGxldCBub2RlOiBOb2RlID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcclxuICAgICAgICAgICAgICBub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoJ0N1YmUnKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkubWF0ZXJpYWwgPSB0aGlzLmN1YmVNdGw7XHJcbiAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzX3Q7XHJcbiAgICAgICAgICAgICAgbm9kZUFyci5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgIC8vdGhpcy5jdWJlX3dyYXAuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgLy/kvb/nlKh5eHrlvaLlvI/orrDlvZVjdWJlIG5vZGVcclxuICAgICAgICAgICAgICB0aGlzLl9jdWJlc1tgJHtqfSR7aX0ke2t9YF0gPSBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lsIZ0YXJnZXTmt7vliqDov5vliqjnlLvpmJ/liJdcclxuICAgIC8v5a+5dGFyZ2V0IEN1YmXlgZrlh7rnibnmrorlpITnkIZcclxuICAgIEluc3RhbmNlTWdyLlRhcmdldEN0ci5ub2RlLmdldENoaWxkQnlOYW1lKCdDdWJlJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBub2RlQXJyLnB1c2goSW5zdGFuY2VNZ3IuVGFyZ2V0Q3RyLm5vZGUgYXMgTm9kZSk7XHJcbiAgICBsZXQgbGVuID0gbm9kZUFyci5sZW5ndGg7XHJcblxyXG4gICAgLy/mlrnlnZfnlJ/miJDlvIDlp4vliqjnlLtcclxuICAgIG5vZGVBcnIucmVkdWNlKChhY2MsIGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiBhY2MudGhlbihcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGxlbiAtIDEpIHRoaXMuY3ViZV93cmFwLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAvL+aehOW7uue7k+adn1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNCdWlsZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WvuXRhcmdldOWBmuWHuuWNleeLrOWkhOeQhlxyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ0N1YmUnKTtcclxuICAgICAgICAgICAgY3ViZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgQ3ViZUN0ci5zaG93Q3ViZShjdWJlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCA0MCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveUN1YmUobmV3RGlyOiBudW1iZXIpIHtcclxuICAgIC8v5qC55o2u5b2T5YmNdGFyZ2V055qE5Z2Q5qCH6ZSA5q+B6ISa5LiL55qE5pa55Z2XXHJcblxyXG4gICAgbGV0IHRhcmdldFBvcyA9IHRoaXMudGFyZ2V0UG9zO1xyXG4gICAgdjNfdC5zZXQodGFyZ2V0UG9zKTtcclxuICAgIHYzX3QueS0tO1xyXG4gICAgbGV0IGN1cktleSA9IGAke3YzX3QueH0ke3YzX3QueX0ke3YzX3Quen1gO1xyXG4gICAgbGV0IGRlc05vZGUgPSB0aGlzLl9jdWJlc1tjdXJLZXldO1xyXG4gICAgdGhpcy5nYW1lRGF0YS5kYXRhW3YzX3QueV1bdjNfdC54XVt2M190LnpdID0gMDtcclxuICAgIGRlbGV0ZSB0aGlzLl9jdWJlc1tjdXJLZXldO1xyXG4gICAgQ3ViZUN0ci5kb3duKGRlc05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0N1YmUnKSwgKCkgPT4ge1xyXG4gICAgICBkZXNOb2RlLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChuZXdEaXIgJSAyKSB7XHJcbiAgICAgIHRhcmdldFBvcy56ICs9IG5ld0RpciAlIDQgPT09IDMgPyAtMSA6IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXRQb3MueCArPSBuZXdEaXIgJSA0ID8gMSA6IC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld0RpciA+IDQgJiYgbmV3RGlyIDwgOSkge1xyXG4gICAgICB0YXJnZXRQb3MueSsrO1xyXG4gICAgfSBlbHNlIGlmIChuZXdEaXIgPiA4KSB7XHJcbiAgICAgIHRhcmdldFBvcy55LS07XHJcbiAgICB9XHJcblxyXG4gICAgLy/lgZrkuIDkuKrlu7bml7blpITnkIZcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrR2FtZU92ZXIoKTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0TGV2ZWwoKSB7XHJcbiAgICB0aGlzLl9sZXZlbCA9IHRoaXMuX2xldmVsICsgMSA+IGRhdGEubGVuZ3RoID8gZGF0YS5sZW5ndGggOiB0aGlzLl9sZXZlbCArIDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVkuTEVWRUwsIHRoaXMuX2xldmVsICsgJycpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tHYW1lT3ZlcigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9jdWJlcykubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCduZXh0TGV2ZWwnKTtcclxuICAgICAgdGhpcy5uZXh0TGV2ZWwoKTtcclxuICAgICAgLy/kuKrnu5PmnZ/liqjnlLtcclxuICAgICAgdGhpcy5vdmVyU2hha2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByb21pc2VTID0gbmV3IFByb21pc2UocmVzbG92ZSA9PiAoaGFuZGxlID0gcmVzbG92ZSkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIocHJvbWlzZVMpO1xyXG4gICAgICAgIGxldCBhcnIgPSBbSW5zdGFuY2VNZ3IuVGFyZ2V0Q3RyLm92ZXJBbmkoKV07XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhcnIucHVzaChJbnN0YW5jZU1nci5QYXJ0aWNsZUN0ci5wbGF5T3ZlclBhcnRpY2xlKCkpO1xyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoYXJyKS50aGVuKGhhbmRsZSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld0RpciA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgbGV0IGFyb3VuZCA9IEluc3RhbmNlTWdyLlRhcmdldEN0ci5nZXRDdWJlQXJvdW5kKGkpO1xyXG4gICAgICBpZiAoYXJvdW5kWzBdICYmICFhcm91bmRbMV0pIG5ld0RpciA9IGk7XHJcbiAgICAgIGVsc2UgaWYgKGFyb3VuZFsxXSAmJiAhYXJvdW5kWzJdKSBuZXdEaXIgPSBpICsgNDtcclxuICAgICAgZWxzZSBpZiAoYXJvdW5kWzNdICYmICFhcm91bmRbMV0gJiYgIWFyb3VuZFswXSkgbmV3RGlyID0gaSArIDg7XHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld0Rpcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2FtZU92ZXInKTtcclxuICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgIGxldCBwcm9taXNlUyA9IG5ldyBQcm9taXNlKHJlc2xvdmUgPT4gKGhhbmRsZSA9IHJlc2xvdmUpKTtcclxuICAgICAgdGhpcy5nYW1lT3Zlcihwcm9taXNlUyk7XHJcbiAgICAgIHRoaXMuZGllQW5pKCkudGhlbihoYW5kbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyog5q275Lqh57uT5p2f5Yqo55S7ICovXHJcbiAgZGllQW5pKCkge1xyXG4gICAgbGV0IGNvbSA9IHRoaXMuY2FtZXJhLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgbGV0IGNvbG9yID0gbmV3IENvbG9yKCkuc2V0KHRoaXMuY2FtZXJhLmNvbG9yKTtcclxuICAgIGNvbS5wbGF5KCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICBjb20uc3RvcCgpO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyog57uT5p2f5oqW5YqoICovXHJcbiAgb3ZlclNoYWtlKCkge1xyXG4gICAgbGV0IGNvbSA9IHRoaXMuY3ViZVJvb3QuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICBjb20ucGxheSgpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIGNvbS5zdG9wKCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiDmqKHlvI/lj5jmjaLpnIDopoHkvZzlh7rnmoTmlLnliqggXHJcbiAgICAgICAgQHBhcmFtIG1vZGUg5b2T5YmN5qih5byPXHJcbiAgICAgICAgQHBhcmFtIGZsYWcg5piv5ZCm6ZyA6KaB6YeN5pawYnVpbGQgY3ViZVxyXG4gICAgKi9cclxuICBtb2RlQ2hhbmdlKG1vZGU6IG1vZGVJbmYsIGZsYWc/OiBib29sZWFuKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbW9kZUNoYW5nZScpO1xyXG4gICAgY29uc3QgbWF0ID0gdGhpcy5jdWJlTXRsO1xyXG4gICAgbWF0LnNldFByb3BlcnR5KCdhbGJlZG8nLCBuZXcgQ29sb3IobW9kZS5jdWJlKSk7XHJcbiAgICBpZiAoZmxhZykgdGhpcy5idWlsZEN1YmUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgYWN0aW9uLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIHRoaXMuUm90YXRlQXJvdW5kKHYzX3QsIFZlYzMuVU5JVF9YLCBkZWx0YVRpbWUpXHJcbiAgICAvLyBsZXQgc3F1YXQ6IFF1YXQgPSB0aGlzLnRhcmdldE5vZGUuZ2V0Um90YXRpb24oKTtcclxuICAgIC8vIFF1YXQucm90YXRlQXJvdW5kTG9jYWwocXVhdF90LCBzcXVhdCwgdGhpcy50YXJnZXROb2RlLmdldFdvcmxkUG9zaXRpb24oKS5ub3JtYWxpemUoKSwgMSAqIGRlbHRhVGltZSk7XHJcbiAgICAvLyAvL1F1YXQucm90YXRlQXJvdW5kKHF1YXRfdCwgc3F1YXQsIFZlYzMuVU5JVF9YLCAxICogZGVsdGFUaW1lKTtcclxuICAgIC8vIC8vdGhpcy5fdGVzdE5vZGUuc2V0Um90YXRpb24ocXVhdF90KTtcclxuICAgIC8vIHRoaXMudGFyZ2V0Tm9kZS5zZXRSb3RhdGlvbihxdWF0X3QpO1xyXG4gIH1cclxufVxyXG4iXX0=