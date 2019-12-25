"use strict";

System.register(["cc", "../lib/Action.ts", "../lib/TempConst.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, ModelComponent, Color, Vec3, action, v3_t, _dec, _class, _temp, ccclass, property, CubeCtr;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
    }, function (_libActionTs) {
      action = _libActionTs.default;
    }, function (_libTempConstTs) {
      v3_t = _libTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "41c389wVjhLYbFyQNkcUKAF", "CubeCtr"); // begin CubeCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CubeCtr", CubeCtr = (_dec = ccclass('CubeCtr'), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CubeCtr, _Component);

        function CubeCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CubeCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CubeCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._downAct = null;
          _this._downDis = 3;
          _this._downTarget = null;
          return _this;
        }

        babelHelpers.createClass(CubeCtr, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "addDownAct",
          value: function addDownAct() {} // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }], [{
          key: "down",
          value: function down(target, callback) {
            var com = target.getComponent(ModelComponent);
            var mat = com.material;
            var pass = mat.passes[0];
            var hColor = pass.getHandle('albedo');
            var orginColor = new Color();
            pass.getUniform(hColor, orginColor);
            var r = orginColor.r,
                g = orginColor.g,
                b = orginColor.b;
            var act = action.addAction({
              updateHandle: function updateHandle(ratio, deltaTime) {
                var pass = mat.passes[0];
                var hColor = pass.getHandle('albedo');
                var color = new Color();
                Color.set(color, r, g, b, 255 - ratio * 200);
                pass.setUniform(hColor, color);
                com.material = mat;
                v3_t.set(target.position);
                v3_t.y -= deltaTime * 8;
                target.position = v3_t;
              },
              overHandle: function overHandle() {
                callback && callback();
              }
            });
            act.run();
          }
          /* 方块显示动画 */

        }, {
          key: "showCube",
          value: function showCube(target, callback) {
            var com = target.getComponent(ModelComponent);
            var mat = com.material;
            var pass = mat.passes[0];
            var hColor = pass.getHandle('albedo');
            var orginColor = new Color();
            pass.getUniform(hColor, orginColor);
            var r = orginColor.r,
                g = orginColor.g,
                b = orginColor.b;
            var y = 1;
            var color = new Color();
            var act = action.addAction({
              updateHandle: function updateHandle(ratio, deltaTime) {
                Color.set(color, r, g, b, ratio * 250);
                pass.setUniform(hColor, color);
                v3_t.set(target.position);
                v3_t.y = y * (1 - ratio);
                target.position = v3_t;
              },
              overHandle: function overHandle() {
                target.position = Vec3.ZERO;
                Color.set(color, r, g, b, 255);
                pass.setUniform(hColor, color);
                callback && callback();
              }
            });
            act.run();
          }
        }]);
        return CubeCtr;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end CubeCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvQ3ViZUN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTW9kZWxDb21wb25lbnQiLCJDb2xvciIsIlZlYzMiLCJhY3Rpb24iLCJ2M190IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ3ViZUN0ciIsIl9kb3duQWN0IiwiX2Rvd25EaXMiLCJfZG93blRhcmdldCIsInRhcmdldCIsImNhbGxiYWNrIiwiY29tIiwiZ2V0Q29tcG9uZW50IiwibWF0IiwibWF0ZXJpYWwiLCJwYXNzIiwicGFzc2VzIiwiaENvbG9yIiwiZ2V0SGFuZGxlIiwib3JnaW5Db2xvciIsImdldFVuaWZvcm0iLCJyIiwiZyIsImIiLCJhY3QiLCJhZGRBY3Rpb24iLCJ1cGRhdGVIYW5kbGUiLCJyYXRpbyIsImRlbHRhVGltZSIsImNvbG9yIiwic2V0Iiwic2V0VW5pZm9ybSIsInBvc2l0aW9uIiwieSIsIm92ZXJIYW5kbGUiLCJydW4iLCJaRVJPIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOztBQUV0REMsTUFBQUEsTTs7QUFDRUMsTUFBQUEsSSxtQkFBQUEsSTs7OzhFQURnRTs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzt5QkFLSkMsTyxXQURaRixPQUFPLENBQUMsU0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFFRUcsUSxHQUFXLEk7Z0JBQ1hDLFEsR0FBVyxDO2dCQUNYQyxXLEdBQW9CLEk7Ozs7OztrQ0FFcEIsQ0FDTjtBQUNEOzs7dUNBNkRZLENBQUUsQyxDQUVmO0FBQ0E7QUFDQTs7OzsrQkEvRFlDLE0sRUFBY0Ms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QUQsRUFBUUMsU0FBUixFQUFzQjtBQUNsQzdCLGdCQUFBQSxLQUFLLENBQUMrQixHQUFOLENBQVVELEtBQVYsRUFBaUJSLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJJLEtBQUssR0FBRyxHQUFsQztBQUNBWixnQkFBQUEsSUFBSSxDQUFDZ0IsVUFBTCxDQUFnQmQsTUFBaEIsRUFBd0JZLEtBQXhCO0FBRUEzQixnQkFBQUEsSUFBSSxDQUFDNEIsR0FBTCxDQUFTckIsTUFBTSxDQUFDdUIsUUFBaEI7QUFDQTlCLGdCQUFBQSxJQUFJLENBQUMrQixDQUFMLEdBQVNBLENBQUMsSUFBSSxJQUFJTixLQUFSLENBQVY7QUFDQWxCLGdCQUFBQSxNQUFNLENBQUN1QixRQUFQLEdBQWtCOUIsSUFBbEI7QUFDRCxlQVJ3QjtBQVN6QmdDLGNBQUFBLFVBQVUsRUFBRSxzQkFBTTtBQUNoQnpCLGdCQUFBQSxNQUFNLENBQUN1QixRQUFQLEdBQWtCaEMsSUFBSSxDQUFDb0MsSUFBdkI7QUFDQXJDLGdCQUFBQSxLQUFLLENBQUMrQixHQUFOLENBQVVELEtBQVYsRUFBaUJSLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEIsR0FBMUI7QUFDQVIsZ0JBQUFBLElBQUksQ0FBQ2dCLFVBQUwsQ0FBZ0JkLE1BQWhCLEVBQXdCWSxLQUF4QjtBQUVBbkIsZ0JBQUFBLFFBQVEsSUFBSUEsUUFBUSxFQUFwQjtBQUNEO0FBZndCLGFBQWpCLENBQVY7QUFpQkFjLFlBQUFBLEdBQUcsQ0FBQ1csR0FBSjtBQUNEOzs7UUFsRTBCdEMsUzs7b0JBSlgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIE1vZGVsQ29tcG9uZW50LCBDb2xvciwgVmVjMyB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IGFjdGlvbiBmcm9tICcuLi9saWIvQWN0aW9uJztcclxuaW1wb3J0IHsgdjNfdCwgcXVhdF90IH0gZnJvbSAnLi4vbGliL1RlbXBDb25zdCc7XHJcblxyXG5AY2NjbGFzcygnQ3ViZUN0cicpXHJcbmV4cG9ydCBjbGFzcyBDdWJlQ3RyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9kb3duQWN0ID0gbnVsbDtcclxuICBwcml2YXRlIF9kb3duRGlzID0gMztcclxuICBwcml2YXRlIF9kb3duVGFyZ2V0OiBOb2RlID0gbnVsbDtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkb3duKHRhcmdldDogTm9kZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBjb20gPSB0YXJnZXQuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcclxuICAgIGNvbnN0IG1hdCA9IGNvbS5tYXRlcmlhbDtcclxuICAgIGNvbnN0IHBhc3MgPSBtYXQucGFzc2VzWzBdO1xyXG4gICAgY29uc3QgaENvbG9yID0gcGFzcy5nZXRIYW5kbGUoJ2FsYmVkbycpO1xyXG4gICAgbGV0IG9yZ2luQ29sb3IgPSBuZXcgQ29sb3IoKTtcclxuICAgIHBhc3MuZ2V0VW5pZm9ybShoQ29sb3IsIG9yZ2luQ29sb3IpO1xyXG4gICAgbGV0IHsgciwgZywgYiB9ID0gb3JnaW5Db2xvcjtcclxuICAgIGxldCBhY3QgPSBhY3Rpb24uYWRkQWN0aW9uKHtcclxuICAgICAgdXBkYXRlSGFuZGxlOiAocmF0aW8sIGRlbHRhVGltZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhc3MgPSBtYXQucGFzc2VzWzBdO1xyXG4gICAgICAgIGNvbnN0IGhDb2xvciA9IHBhc3MuZ2V0SGFuZGxlKCdhbGJlZG8nKTtcclxuICAgICAgICBsZXQgY29sb3IgPSBuZXcgQ29sb3IoKTtcclxuICAgICAgICBDb2xvci5zZXQoY29sb3IsIHIsIGcsIGIsIDI1NSAtIHJhdGlvICogMjAwKTtcclxuICAgICAgICBwYXNzLnNldFVuaWZvcm0oaENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgY29tLm1hdGVyaWFsID0gbWF0O1xyXG5cclxuICAgICAgICB2M190LnNldCh0YXJnZXQucG9zaXRpb24pO1xyXG4gICAgICAgIHYzX3QueSAtPSBkZWx0YVRpbWUgKiA4O1xyXG4gICAgICAgIHRhcmdldC5wb3NpdGlvbiA9IHYzX3Q7XHJcbiAgICAgIH0sXHJcbiAgICAgIG92ZXJIYW5kbGU6ICgpID0+IHtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFjdC5ydW4oKTtcclxuICB9XHJcblxyXG4gIC8qIOaWueWdl+aYvuekuuWKqOeUuyAqL1xyXG4gIHN0YXRpYyBzaG93Q3ViZSh0YXJnZXQ6IE5vZGUsIGNhbGxiYWNrPykge1xyXG4gICAgbGV0IGNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xyXG4gICAgY29uc3QgbWF0ID0gY29tLm1hdGVyaWFsO1xyXG4gICAgY29uc3QgcGFzcyA9IG1hdC5wYXNzZXNbMF07XHJcbiAgICBjb25zdCBoQ29sb3IgPSBwYXNzLmdldEhhbmRsZSgnYWxiZWRvJyk7XHJcbiAgICBsZXQgb3JnaW5Db2xvciA9IG5ldyBDb2xvcigpO1xyXG4gICAgcGFzcy5nZXRVbmlmb3JtKGhDb2xvciwgb3JnaW5Db2xvcik7XHJcbiAgICBsZXQgeyByLCBnLCBiIH0gPSBvcmdpbkNvbG9yO1xyXG4gICAgbGV0IHkgPSAxO1xyXG4gICAgbGV0IGNvbG9yID0gbmV3IENvbG9yKCk7XHJcbiAgICBsZXQgYWN0ID0gYWN0aW9uLmFkZEFjdGlvbih7XHJcbiAgICAgIHVwZGF0ZUhhbmRsZTogKHJhdGlvLCBkZWx0YVRpbWUpID0+IHtcclxuICAgICAgICBDb2xvci5zZXQoY29sb3IsIHIsIGcsIGIsIHJhdGlvICogMjUwKTtcclxuICAgICAgICBwYXNzLnNldFVuaWZvcm0oaENvbG9yLCBjb2xvcik7XHJcblxyXG4gICAgICAgIHYzX3Quc2V0KHRhcmdldC5wb3NpdGlvbik7XHJcbiAgICAgICAgdjNfdC55ID0geSAqICgxIC0gcmF0aW8pO1xyXG4gICAgICAgIHRhcmdldC5wb3NpdGlvbiA9IHYzX3Q7XHJcbiAgICAgIH0sXHJcbiAgICAgIG92ZXJIYW5kbGU6ICgpID0+IHtcclxuICAgICAgICB0YXJnZXQucG9zaXRpb24gPSBWZWMzLlpFUk87XHJcbiAgICAgICAgQ29sb3Iuc2V0KGNvbG9yLCByLCBnLCBiLCAyNTUpO1xyXG4gICAgICAgIHBhc3Muc2V0VW5pZm9ybShoQ29sb3IsIGNvbG9yKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhY3QucnVuKCk7XHJcbiAgfVxyXG5cclxuICBhZGREb3duQWN0KCkge31cclxuXHJcbiAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==