"use strict";

System.register(["cc", "../lib/TempConst.ts", "../lib/Action.ts", "../lib/InstanceMgr.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, systemEvent, SystemEventType, ModelComponent, AnimationComponent, ParticleSystemComponent, Quat, Vec3, Color, v3_t, action, InstanceMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, tempVec3, tempQuat, translate, TargetCtr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      ModelComponent = _cc.ModelComponent;
      AnimationComponent = _cc.AnimationComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
    }, function (_libTempConstTs) {
      v3_t = _libTempConstTs.v3_t;
    }, function (_libActionTs) {
      action = _libActionTs.default;
    }, function (_libInstanceMgrTs) {
      InstanceMgr = _libInstanceMgrTs.InstanceMgr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "51090x6WYNNipQMIjxIjiEh", "TargetCtr"); // begin TargetCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      tempVec3 = new Vec3();
      tempQuat = new Quat();
      translate = [new Vec3(0, -0.5, 0.5), new Vec3(0.5, -0.5, 0), new Vec3(0, -0.5, -0.5), new Vec3(-0.5, -0.5, 0), new Vec3(0, 0.5, 0.5), new Vec3(0.5, 0.5, 0), new Vec3(0, 0.5, -0.5), new Vec3(-0.5, 0.5, 0), new Vec3(0, -0.5, 0.5), new Vec3(0.5, -0.5, 0), new Vec3(0, -0.5, -0.5), new Vec3(-0.5, -0.5, 0)];

      _export("TargetCtr", TargetCtr = (_dec = ccclass('CubeRotate'), _dec2 = property({
        type: AnimationComponent
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(TargetCtr, _Component);

        function TargetCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, TargetCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(TargetCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._onceAngle = -Math.PI / 2;
          _this._forwardAnchor = new Vec3(0, -0.5, 0.5);
          _this._startPos = new Vec3();
          _this._startRot = new Quat();
          _this._anchorPos = new Vec3();
          _this._curRotAxis = Vec3.UNIT_X;
          _this._cube = null;
          _this._trailParCom = null;
          _this._forward = 1;
          _this._rotateAct = null;
          babelHelpers.initializerDefineProperty(_this, "overAnicom", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "trailParticle", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(TargetCtr, [{
          key: "onLoad",
          value: function onLoad() {
            InstanceMgr.registerInstance('TargetCtr', this);
            this._cube = this.node.getChildByName('Cube');
            this._trailParCom = this.trailParticle.getComponent(ParticleSystemComponent);
          }
        }, {
          key: "start",
          value: function start() {
            // Your initialization goes here.
            //生成旋转action
            this.addRotaeAct();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
            systemEvent.on(SystemEventType.TOUCH_END, this.onTouchEnd, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            systemEvent.off(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
            systemEvent.off(SystemEventType.TOUCH_END, this.onTouchEnd, this);
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(touch, event) {}
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(touch, event) {
            console.log('touch');
            if (this._rotateAct.isMove) return;
            var cur = touch.getLocation();
            var start = touch.getStartLocation();
            var v2_t = cur.subtract(start);
            var direction = 1;

            if (v2_t.x > 0 && v2_t.y < 0) {
              direction = 2;
            } else if (v2_t.x > 0 && v2_t.y > 0) {
              direction = 3;
            } else if (v2_t.x < 0 && v2_t.y > 0) {
              direction = 4;
            }

            var around = this.getCubeAround(direction);
            var newDir = 0;
            if (around[0] && !around[1]) newDir = direction;else if (around[1] && !around[2]) newDir = direction + 4;else if (around[3] && !around[1] && !around[0]) newDir = direction + 8;
            if (!newDir) return;
            this.rotateForward(newDir);
            InstanceMgr.GameCtr.destroyCube(newDir);
            InstanceMgr.MusicCtr.play('move');
          }
        }, {
          key: "init",
          value: function init(v3) {
            var com = this._cube.getComponent(ModelComponent);

            var mat = com.material;
            var pass = mat.passes[0];
            var hColor = pass.getHandle('albedo');
            var color = new Color();
            pass.getUniform(hColor, color);
            color.a = 0;
            pass.setUniform(hColor, color);
            com.material = mat;
            this.node.position = v3;
            this.node.scale = v3_t.set(1, 1, 1);
            this._cube.position = Vec3.ZERO;
          } //在生成前先隐藏target  改变透明度

        }, {
          key: "hide",
          value: function hide() {}
        }, {
          key: "rotateAround",
          value: function rotateAround(startPos, startRot, point, axis, angle) {
            Quat.fromAxisAngle(tempQuat, axis, angle);
            Vec3.subtract(tempVec3, startPos, point);
            Vec3.transformQuat(tempVec3, tempVec3, tempQuat);
            Vec3.add(tempVec3, point, tempVec3);
            this.node.setPosition(tempVec3);
            Quat.rotateAround(tempQuat, startRot, axis, angle);
            Quat.normalize(tempQuat, tempQuat);

            this._cube.setRotation(tempQuat);
          }
        }, {
          key: "rotateForward",
          value: function rotateForward(forward) {
            this._forward = forward;
            this._forwardAnchor = translate[forward - 1];
            this._curRotAxis = forward % 2 ? Vec3.UNIT_X : Vec3.UNIT_Z;
            var baseAngle = forward > 4 ? Math.PI : Math.PI / 2;
            if (forward % 4 === 1 || forward % 4 === 0) this._onceAngle = baseAngle;else this._onceAngle = -baseAngle;
            this.node.getPosition(this._startPos);
            Vec3.add(this._anchorPos, this._forwardAnchor, this._startPos);

            this._cube.getRotation(this._startRot);

            this._rotateAct.run();
          }
          /* 
               获取target周围的环境数组 
            */

        }, {
          key: "getCubeAround",
          value: function getCubeAround(forward) {
            var arr = InstanceMgr.GameCtr.gameData.data;
            var curPos = InstanceMgr.GameCtr.targetPos;
            var comPos;

            switch (forward) {
              case 1:
                comPos = new Vec3(curPos.x, curPos.y, curPos.z + 1);
                break;

              case 2:
                comPos = new Vec3(curPos.x + 1, curPos.y, curPos.z);
                break;

              case 3:
                comPos = new Vec3(curPos.x, curPos.y, curPos.z - 1);
                break;

              case 4:
                comPos = new Vec3(curPos.x - 1, curPos.y, curPos.z);
                break;
            }

            var fors = [comPos.y - 1, comPos.y, comPos.y + 1, comPos.y - 2];
            var res = [];
            fors.forEach(function (item) {
              if (arr[item] && arr[item][comPos.x] && arr[item][comPos.x][comPos.z] === 1) {
                res.push(1);
              } else {
                res.push(0);
              }
            });
            return res;
          }
          /* 结束降落动画 */

        }, {
          key: "overAni",
          value: function overAni() {
            var _this2 = this;

            // v3_t.set(this.node.scale);
            // v3_t.multiply3f(1.05, 1.05, 1.05);
            // this.node.scale = v3_t;
            return new Promise(function (resolve, reject) {
              _this2.overAnicom.play();

              _this2.overAnicom.on('play', resolve, _this2);
            });
          }
          /* 添加旋转动画 */

        }, {
          key: "addRotaeAct",
          value: function addRotaeAct() {
            var _this3 = this;

            this._rotateAct = action.addAction({
              updateHandle: function updateHandle(ratio) {
                var angle = ratio * _this3._onceAngle;

                _this3.rotateAround(_this3._startPos, _this3._startRot, _this3._anchorPos, _this3._curRotAxis, angle);
              },
              overHandle: function overHandle() {
                _this3.showTrail();

                _this3.rotateAround(_this3._startPos, _this3._startRot, _this3._anchorPos, _this3._curRotAxis, _this3._onceAngle);
              },
              autoMove: false
            });
          }
          /* 显示拖尾特效 */

        }, {
          key: "showTrail",
          value: function showTrail() {
            var forward = this._forward % 4;

            if (forward === 1) {
              v3_t.set(0, 0, -0.5);
              this.trailParticle.setRotationFromEuler(0, 0, 0);
            } else if (forward === 2) {
              v3_t.set(-0.5, 0, 0);
              this.trailParticle.setRotationFromEuler(0, 90, 0);
            } else if (forward === 3) {
              v3_t.set(0, 0, 0.5);
              this.trailParticle.setRotationFromEuler(0, 180, 0);
            } else {
              v3_t.set(0.5, 0, 0);
              this.trailParticle.setRotationFromEuler(0, -90, 0);
            }

            this.trailParticle.position = v3_t;
            this._trailParCom.enabled = false;
            this._trailParCom.enabled = true;
          }
        }, {
          key: "down",
          value: function down() {}
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);
        return TargetCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "overAnicom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "trailParticle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end TargetCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvVGFyZ2V0Q3RyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudFR5cGUiLCJNb2RlbENvbXBvbmVudCIsIkFuaW1hdGlvbkNvbXBvbmVudCIsIlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IiwiUXVhdCIsIlZlYzMiLCJDb2xvciIsInYzX3QiLCJhY3Rpb24iLCJJbnN0YW5jZU1nciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInRlbXBWZWMzIiwidGVtcFF1YXQiLCJ0cmFuc2xhdGUiLCJUYXJnZXRDdHIiLCJ0eXBlIiwiX29uY2VBbmdsZSIsIk1hdGgiLCJQSSIsIl9mb3J3YXJkQW5jaG9yIiwiX3N0YXJ0UG9zIiwiX3N0YXJ0Um90IiwiX2FuY2hvclBvcyIsIl9jdXJSb3RBeGlzIiwiVU5JVF9YIiwiX2N1YmUiLCJfdHJhaWxQYXJDb20iLCJfZm9yd2FyZCIsIl9yb3RhdGVBY3QiLCJyZWdpc3Rlckluc3RhbmNlIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwidHJhaWxQYXJ0aWNsZSIsImdldENvbXBvbmVudCIsImFkZFJvdGFlQWN0Iiwib24iLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwib2ZmIiwidG91Y2giLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJpc01vdmUiLCJjdXIiLCJnZXRMb2NhdGlvbiIsInN0YXJ0IiwiZ2V0U3RhcnRMb2NhdGlvbiIsInYyX3QiLCJzdWJ0cmFjdCIsImRpcmVjdGlvbiIsIngiLCJ5IiwiYXJvdW5kIiwiZ2V0Q3ViZUFyb3VuZCIsIm5ld0RpciIsInJvdGF0ZUZvcndhcmQiLCJHYW1lQ3RyIiwiZGVzdHJveUN1YmUiLCJNdXNpY0N0ciIsInBsYXkiLCJ2MyIsImNvbSIsIm1hdCIsIm1hdGVyaWFsIiwicGFzcyIsInBhc3NlcyIsImhDb2xvciIsImdldEhhbmRsZSIsImNvbG9yIiwiZ2V0VW5pZm9ybSIsImEiLCJzZXRVbmlmb3JtIiwicG9zaXRpb24iLCJzY2FsZSIsInNldCIsIlpFUk8iLCJzdGFydFBvcyIsInN0YXJ0Um90IiwicG9pbnQiLCJheGlzIiwiYW5nbGUiLCJmcm9tQXhpc0FuZ2xlIiwidHJhbnNmb3JtUXVhdCIsImFkZCIsInNldFBvc2l0aW9uIiwicm90YXRlQXJvdW5kIiwibm9ybWFsaXplIiwic2V0Um90YXRpb24iLCJmb3J3YXJkIiwiVU5JVF9aIiwiYmFzZUFuZ2xlIiwiZ2V0UG9zaXRpb24iLCJnZXRSb3RhdGlvbiIsInJ1biIsImFyciIsImdhbWVEYXRhIiwiZGF0YSIsImN1clBvcyIsInRhcmdldFBvcyIsImNvbVBvcyIsInoiLCJmb3JzIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvdmVyQW5pY29tIiwiYWRkQWN0aW9uIiwidXBkYXRlSGFuZGxlIiwicmF0aW8iLCJvdmVySGFuZGxlIiwic2hvd1RyYWlsIiwiYXV0b01vdmUiLCJzZXRSb3RhdGlvbkZyb21FdWxlciIsImVuYWJsZWQiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0VBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLFcsT0FBQUEsVztBQUNBQyxNQUFBQSxlLE9BQUFBLGU7QUFDQUMsTUFBQUEsYyxPQUFBQSxjO0FBSUFDLE1BQUFBLGtCLE9BQUFBLGtCO0FBQ0FDLE1BQUFBLHVCLE9BQUFBLHVCO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxJLE9BQUFBLEk7QUFDQUMsTUFBQUEsSyxPQUFBQSxLOztBQUVPQyxNQUFBQSxJLG1CQUFBQSxJOztBQUVGQyxNQUFBQSxNOztBQUNFQyxNQUFBQSxXLHFCQUFBQSxXOzs7Z0ZBakJnRTs7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RUFBbUIsQ0FDeEI7QUFDRDs7O1FBNU80QjdILFM7Ozs7O2lCQXFCSSxJOzs7Ozs7O2lCQUdYLEk7Ozs7b0JBOUROIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBfZGVjb3JhdG9yLFxyXG4gIENvbXBvbmVudCxcclxuICBOb2RlLFxyXG4gIHN5c3RlbUV2ZW50LFxyXG4gIFN5c3RlbUV2ZW50VHlwZSxcclxuICBNb2RlbENvbXBvbmVudCxcclxuICBWZWMyLFxyXG4gIFRvdWNoLFxyXG4gIEV2ZW50VG91Y2gsXHJcbiAgQW5pbWF0aW9uQ29tcG9uZW50LFxyXG4gIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LFxyXG4gIFF1YXQsXHJcbiAgVmVjMyxcclxuICBDb2xvclxyXG59IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgdjNfdCwgcXVhdF90IH0gZnJvbSAnLi4vbGliL1RlbXBDb25zdCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmltcG9ydCBhY3Rpb24gZnJvbSAnLi4vbGliL0FjdGlvbic7XHJcbmltcG9ydCB7IEluc3RhbmNlTWdyIH0gZnJvbSAnLi4vbGliL0luc3RhbmNlTWdyJztcclxuXHJcbmNvbnN0IHRlbXBWZWMzOiBWZWMzID0gbmV3IFZlYzMoKTtcclxuY29uc3QgdGVtcFF1YXQ6IFF1YXQgPSBuZXcgUXVhdCgpO1xyXG5cclxuY29uc3QgdHJhbnNsYXRlID0gW1xyXG4gIG5ldyBWZWMzKDAsIC0wLjUsIDAuNSksXHJcbiAgbmV3IFZlYzMoMC41LCAtMC41LCAwKSxcclxuICBuZXcgVmVjMygwLCAtMC41LCAtMC41KSxcclxuICBuZXcgVmVjMygtMC41LCAtMC41LCAwKSxcclxuICBuZXcgVmVjMygwLCAwLjUsIDAuNSksXHJcbiAgbmV3IFZlYzMoMC41LCAwLjUsIDApLFxyXG4gIG5ldyBWZWMzKDAsIDAuNSwgLTAuNSksXHJcbiAgbmV3IFZlYzMoLTAuNSwgMC41LCAwKSxcclxuICBuZXcgVmVjMygwLCAtMC41LCAwLjUpLFxyXG4gIG5ldyBWZWMzKDAuNSwgLTAuNSwgMCksXHJcbiAgbmV3IFZlYzMoMCwgLTAuNSwgLTAuNSksXHJcbiAgbmV3IFZlYzMoLTAuNSwgLTAuNSwgMClcclxuXTtcclxuXHJcbkBjY2NsYXNzKCdDdWJlUm90YXRlJylcclxuZXhwb3J0IGNsYXNzIFRhcmdldEN0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gIC8vIEBwcm9wZXJ0eVxyXG4gIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuICBwcml2YXRlIF9vbmNlQW5nbGUgPSAtTWF0aC5QSSAvIDI7XHJcbiAgcHJpdmF0ZSBfZm9yd2FyZEFuY2hvcjogVmVjMyA9IG5ldyBWZWMzKDAsIC0wLjUsIDAuNSk7XHJcbiAgcHJpdmF0ZSBfc3RhcnRQb3M6IFZlYzMgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX3N0YXJ0Um90OiBRdWF0ID0gbmV3IFF1YXQoKTtcclxuICBwcml2YXRlIF9hbmNob3JQb3M6IFZlYzMgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX2N1clJvdEF4aXM6IFZlYzMgPSBWZWMzLlVOSVRfWDtcclxuICBwcml2YXRlIF9jdWJlOiBOb2RlID0gbnVsbDtcclxuICBwcml2YXRlIF90cmFpbFBhckNvbTogUGFydGljbGVTeXN0ZW1Db21wb25lbnQgPSBudWxsO1xyXG4gIHByaXZhdGUgX2ZvcndhcmQ6IG51bWJlciA9IDE7XHJcblxyXG4gIC8v5b2T5YmN6YCJ5oup5Yqo5L2c5a+56LGhXHJcbiAgcHJpdmF0ZSBfcm90YXRlQWN0ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogQW5pbWF0aW9uQ29tcG9uZW50IH0pXHJcbiAgb3ZlckFuaWNvbTogQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gIHRyYWlsUGFydGljbGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBJbnN0YW5jZU1nci5yZWdpc3Rlckluc3RhbmNlKCdUYXJnZXRDdHInLCB0aGlzKTtcclxuICAgIHRoaXMuX2N1YmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0N1YmUnKSBhcyBOb2RlO1xyXG4gICAgdGhpcy5fdHJhaWxQYXJDb20gPSB0aGlzLnRyYWlsUGFydGljbGUuZ2V0Q29tcG9uZW50KFxyXG4gICAgICBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvL+eUn+aIkOaXi+i9rGFjdGlvblxyXG4gICAgdGhpcy5hZGRSb3RhZUFjdCgpO1xyXG4gIH1cclxuXHJcbiAgb25FbmFibGUoKSB7XHJcbiAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25EaXNhYmxlKCkge1xyXG4gICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaE1vdmUodG91Y2g6IFRvdWNoLCBldmVudDogRXZlbnRUb3VjaCk6IHZvaWQge31cclxuXHJcbiAgb25Ub3VjaEVuZCh0b3VjaDogVG91Y2gsIGV2ZW50OiBFdmVudFRvdWNoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndG91Y2gnKTtcclxuICAgIGlmICh0aGlzLl9yb3RhdGVBY3QuaXNNb3ZlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGN1cjogVmVjMiA9IHRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICBsZXQgc3RhcnQgPSB0b3VjaC5nZXRTdGFydExvY2F0aW9uKCk7XHJcbiAgICBsZXQgdjJfdCA9IGN1ci5zdWJ0cmFjdChzdGFydCk7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gMTtcclxuICAgIGlmICh2Ml90LnggPiAwICYmIHYyX3QueSA8IDApIHtcclxuICAgICAgZGlyZWN0aW9uID0gMjtcclxuICAgIH0gZWxzZSBpZiAodjJfdC54ID4gMCAmJiB2Ml90LnkgPiAwKSB7XHJcbiAgICAgIGRpcmVjdGlvbiA9IDM7XHJcbiAgICB9IGVsc2UgaWYgKHYyX3QueCA8IDAgJiYgdjJfdC55ID4gMCkge1xyXG4gICAgICBkaXJlY3Rpb24gPSA0O1xyXG4gICAgfVxyXG4gICAgbGV0IGFyb3VuZCA9IHRoaXMuZ2V0Q3ViZUFyb3VuZChkaXJlY3Rpb24pO1xyXG5cclxuICAgIGxldCBuZXdEaXIgPSAwO1xyXG5cclxuICAgIGlmIChhcm91bmRbMF0gJiYgIWFyb3VuZFsxXSkgbmV3RGlyID0gZGlyZWN0aW9uO1xyXG4gICAgZWxzZSBpZiAoYXJvdW5kWzFdICYmICFhcm91bmRbMl0pIG5ld0RpciA9IGRpcmVjdGlvbiArIDQ7XHJcbiAgICBlbHNlIGlmIChhcm91bmRbM10gJiYgIWFyb3VuZFsxXSAmJiAhYXJvdW5kWzBdKSBuZXdEaXIgPSBkaXJlY3Rpb24gKyA4O1xyXG4gICAgaWYgKCFuZXdEaXIpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJvdGF0ZUZvcndhcmQobmV3RGlyKTtcclxuICAgIEluc3RhbmNlTWdyLkdhbWVDdHIuZGVzdHJveUN1YmUobmV3RGlyKTtcclxuXHJcbiAgICBJbnN0YW5jZU1nci5NdXNpY0N0ci5wbGF5KCdtb3ZlJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KHYzOiBWZWMzKSB7XHJcbiAgICBsZXQgY29tID0gdGhpcy5fY3ViZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xyXG4gICAgY29uc3QgbWF0ID0gY29tLm1hdGVyaWFsO1xyXG4gICAgY29uc3QgcGFzcyA9IG1hdC5wYXNzZXNbMF07XHJcbiAgICBjb25zdCBoQ29sb3IgPSBwYXNzLmdldEhhbmRsZSgnYWxiZWRvJyk7XHJcbiAgICBsZXQgY29sb3IgPSBuZXcgQ29sb3IoKTtcclxuICAgIHBhc3MuZ2V0VW5pZm9ybShoQ29sb3IsIGNvbG9yKTtcclxuICAgIGNvbG9yLmEgPSAwO1xyXG4gICAgcGFzcy5zZXRVbmlmb3JtKGhDb2xvciwgY29sb3IpO1xyXG4gICAgY29tLm1hdGVyaWFsID0gbWF0O1xyXG5cclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzO1xyXG4gICAgdGhpcy5ub2RlLnNjYWxlID0gdjNfdC5zZXQoMSwgMSwgMSk7XHJcbiAgICB0aGlzLl9jdWJlLnBvc2l0aW9uID0gVmVjMy5aRVJPO1xyXG4gIH1cclxuXHJcbiAgLy/lnKjnlJ/miJDliY3lhYjpmpDol490YXJnZXQgIOaUueWPmOmAj+aYjuW6plxyXG4gIGhpZGUoKSB7fVxyXG5cclxuICByb3RhdGVBcm91bmQoXHJcbiAgICBzdGFydFBvczogVmVjMyxcclxuICAgIHN0YXJ0Um90OiBRdWF0LFxyXG4gICAgcG9pbnQ6IFZlYzMsXHJcbiAgICBheGlzOiBWZWMzLFxyXG4gICAgYW5nbGU6IG51bWJlclxyXG4gICkge1xyXG4gICAgUXVhdC5mcm9tQXhpc0FuZ2xlKHRlbXBRdWF0LCBheGlzLCBhbmdsZSk7XHJcblxyXG4gICAgVmVjMy5zdWJ0cmFjdCh0ZW1wVmVjMywgc3RhcnRQb3MsIHBvaW50KTtcclxuICAgIFZlYzMudHJhbnNmb3JtUXVhdCh0ZW1wVmVjMywgdGVtcFZlYzMsIHRlbXBRdWF0KTtcclxuICAgIFZlYzMuYWRkKHRlbXBWZWMzLCBwb2ludCwgdGVtcFZlYzMpO1xyXG4gICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRlbXBWZWMzKTtcclxuXHJcbiAgICBRdWF0LnJvdGF0ZUFyb3VuZCh0ZW1wUXVhdCwgc3RhcnRSb3QsIGF4aXMsIGFuZ2xlKTtcclxuICAgIFF1YXQubm9ybWFsaXplKHRlbXBRdWF0LCB0ZW1wUXVhdCk7XHJcbiAgICB0aGlzLl9jdWJlLnNldFJvdGF0aW9uKHRlbXBRdWF0KTtcclxuICB9XHJcblxyXG4gIHJvdGF0ZUZvcndhcmQoZm9yd2FyZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9mb3J3YXJkID0gZm9yd2FyZDtcclxuXHJcbiAgICB0aGlzLl9mb3J3YXJkQW5jaG9yID0gdHJhbnNsYXRlW2ZvcndhcmQgLSAxXTtcclxuICAgIHRoaXMuX2N1clJvdEF4aXMgPSBmb3J3YXJkICUgMiA/IFZlYzMuVU5JVF9YIDogVmVjMy5VTklUX1o7XHJcblxyXG4gICAgbGV0IGJhc2VBbmdsZSA9IGZvcndhcmQgPiA0ID8gTWF0aC5QSSA6IE1hdGguUEkgLyAyO1xyXG4gICAgaWYgKGZvcndhcmQgJSA0ID09PSAxIHx8IGZvcndhcmQgJSA0ID09PSAwKSB0aGlzLl9vbmNlQW5nbGUgPSBiYXNlQW5nbGU7XHJcbiAgICBlbHNlIHRoaXMuX29uY2VBbmdsZSA9IC1iYXNlQW5nbGU7XHJcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fc3RhcnRQb3MpO1xyXG4gICAgVmVjMy5hZGQodGhpcy5fYW5jaG9yUG9zLCB0aGlzLl9mb3J3YXJkQW5jaG9yLCB0aGlzLl9zdGFydFBvcyk7XHJcbiAgICB0aGlzLl9jdWJlLmdldFJvdGF0aW9uKHRoaXMuX3N0YXJ0Um90KTtcclxuICAgIHRoaXMuX3JvdGF0ZUFjdC5ydW4oKTtcclxuICB9XHJcblxyXG4gIC8qIFxyXG4gICAgICAg6I635Y+WdGFyZ2V05ZGo5Zu055qE546v5aKD5pWw57uEIFxyXG4gICAgKi9cclxuICBnZXRDdWJlQXJvdW5kKGZvcndhcmQpIHtcclxuICAgIGxldCBhcnIgPSBJbnN0YW5jZU1nci5HYW1lQ3RyLmdhbWVEYXRhLmRhdGE7XHJcbiAgICBsZXQgY3VyUG9zID0gSW5zdGFuY2VNZ3IuR2FtZUN0ci50YXJnZXRQb3M7XHJcbiAgICBsZXQgY29tUG9zO1xyXG4gICAgc3dpdGNoIChmb3J3YXJkKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICBjb21Qb3MgPSBuZXcgVmVjMyhjdXJQb3MueCwgY3VyUG9zLnksIGN1clBvcy56ICsgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICBjb21Qb3MgPSBuZXcgVmVjMyhjdXJQb3MueCArIDEsIGN1clBvcy55LCBjdXJQb3Mueik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBjb21Qb3MgPSBuZXcgVmVjMyhjdXJQb3MueCwgY3VyUG9zLnksIGN1clBvcy56IC0gMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICBjb21Qb3MgPSBuZXcgVmVjMyhjdXJQb3MueCAtIDEsIGN1clBvcy55LCBjdXJQb3Mueik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBsZXQgZm9ycyA9IFtjb21Qb3MueSAtIDEsIGNvbVBvcy55LCBjb21Qb3MueSArIDEsIGNvbVBvcy55IC0gMl07XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICBmb3JzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBhcnJbaXRlbV0gJiZcclxuICAgICAgICBhcnJbaXRlbV1bY29tUG9zLnhdICYmXHJcbiAgICAgICAgYXJyW2l0ZW1dW2NvbVBvcy54XVtjb21Qb3Muel0gPT09IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzLnB1c2goMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvKiDnu5PmnZ/pmY3okL3liqjnlLsgKi9cclxuICBvdmVyQW5pKCkge1xyXG4gICAgLy8gdjNfdC5zZXQodGhpcy5ub2RlLnNjYWxlKTtcclxuICAgIC8vIHYzX3QubXVsdGlwbHkzZigxLjA1LCAxLjA1LCAxLjA1KTtcclxuICAgIC8vIHRoaXMubm9kZS5zY2FsZSA9IHYzX3Q7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLm92ZXJBbmljb20ucGxheSgpO1xyXG4gICAgICB0aGlzLm92ZXJBbmljb20ub24oJ3BsYXknLCByZXNvbHZlLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyog5re75Yqg5peL6L2s5Yqo55S7ICovXHJcbiAgYWRkUm90YWVBY3QoKSB7XHJcbiAgICB0aGlzLl9yb3RhdGVBY3QgPSBhY3Rpb24uYWRkQWN0aW9uKHtcclxuICAgICAgdXBkYXRlSGFuZGxlOiByYXRpbyA9PiB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gcmF0aW8gKiB0aGlzLl9vbmNlQW5nbGU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVBcm91bmQoXHJcbiAgICAgICAgICB0aGlzLl9zdGFydFBvcyxcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Um90LFxyXG4gICAgICAgICAgdGhpcy5fYW5jaG9yUG9zLFxyXG4gICAgICAgICAgdGhpcy5fY3VyUm90QXhpcyxcclxuICAgICAgICAgIGFuZ2xlXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgb3ZlckhhbmRsZTogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd1RyYWlsKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVBcm91bmQoXHJcbiAgICAgICAgICB0aGlzLl9zdGFydFBvcyxcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Um90LFxyXG4gICAgICAgICAgdGhpcy5fYW5jaG9yUG9zLFxyXG4gICAgICAgICAgdGhpcy5fY3VyUm90QXhpcyxcclxuICAgICAgICAgIHRoaXMuX29uY2VBbmdsZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGF1dG9Nb3ZlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiDmmL7npLrmi5blsL7nibnmlYggKi9cclxuICBzaG93VHJhaWwoKSB7XHJcbiAgICBsZXQgZm9yd2FyZCA9IHRoaXMuX2ZvcndhcmQgJSA0O1xyXG4gICAgaWYgKGZvcndhcmQgPT09IDEpIHtcclxuICAgICAgdjNfdC5zZXQoMCwgMCwgLTAuNSk7XHJcbiAgICAgIHRoaXMudHJhaWxQYXJ0aWNsZS5zZXRSb3RhdGlvbkZyb21FdWxlcigwLCAwLCAwKTtcclxuICAgIH0gZWxzZSBpZiAoZm9yd2FyZCA9PT0gMikge1xyXG4gICAgICB2M190LnNldCgtMC41LCAwLCAwKTtcclxuICAgICAgdGhpcy50cmFpbFBhcnRpY2xlLnNldFJvdGF0aW9uRnJvbUV1bGVyKDAsIDkwLCAwKTtcclxuICAgIH0gZWxzZSBpZiAoZm9yd2FyZCA9PT0gMykge1xyXG4gICAgICB2M190LnNldCgwLCAwLCAwLjUpO1xyXG4gICAgICB0aGlzLnRyYWlsUGFydGljbGUuc2V0Um90YXRpb25Gcm9tRXVsZXIoMCwgMTgwLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHYzX3Quc2V0KDAuNSwgMCwgMCk7XHJcbiAgICAgIHRoaXMudHJhaWxQYXJ0aWNsZS5zZXRSb3RhdGlvbkZyb21FdWxlcigwLCAtOTAsIDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmFpbFBhcnRpY2xlLnBvc2l0aW9uID0gdjNfdDtcclxuICAgIHRoaXMuX3RyYWlsUGFyQ29tLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX3RyYWlsUGFyQ29tLmVuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZG93bigpIHt9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gIH1cclxufVxyXG4iXX0=