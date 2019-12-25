"use strict";

System.register(["cc", "../lib/TempConst.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec3, Quat, quat_t, v3_t, _dec, _class, _temp, ccclass, property, translate, CubeMove;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
    }, function (_libTempConstTs) {
      quat_t = _libTempConstTs.quat_t;
      v3_t = _libTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "1dcc468y5BDGrx/UaJJ3OHc", "CubeMove"); // begin CubeMove


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      translate = [new Vec3(0, 0.5, -0.5), new Vec3(-0.5, 0.5, 0), new Vec3(0, 0.5, 0.5), new Vec3(0.5, 0.5, 0), new Vec3(0, -0.5, -0.5), new Vec3(-0.5, -0.5, 0), new Vec3(0, -0.5, 0.5), new Vec3(0.5, -0.5, 0)];

      _export("CubeMove", CubeMove = (_dec = ccclass('CubeMove'), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CubeMove, _Component);

        function CubeMove() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CubeMove);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CubeMove)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._testNode = null;
          _this._isMove = false;
          return _this;
        }

        babelHelpers.createClass(CubeMove, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this._testNode = this.node.parent.getChildByName('test');
          }
        }, {
          key: "cubeRotate",
          value: function cubeRotate(direction, callback) {
            if (this._isMove) return;
            this._isMove = true;
            this.node.removeFromParent();
            var v32 = new Vec3(this.node.position);
            var o_v = new Vec3(this.node.position);
            var curTranslate = translate[direction - 1];
            v32.subtract(curTranslate);
            this.node.position = curTranslate;
            this._testNode.position = v32;

            this._testNode.addChild(this.node);

            var angle = 0;
            var max = direction > 4 ? 180 : 90;

            var move = function move() {
              if (angle >= max) {
                clearInterval(timer);
                this.node.removeFromParent();
                this.node.rotation = Quat.IDENTITY;

                if (direction > 4) {
                  v3_t.set(-2 * curTranslate.x, 1, -2 * curTranslate.z);
                } else {
                  v3_t.set(-2 * curTranslate.x, 0, -2 * curTranslate.z);
                }

                o_v.add(v3_t);
                this.node.position = o_v;

                this._testNode.parent.addChild(this.node);

                this._testNode.position = Vec3.ZERO;
                this._testNode.rotation = Quat.IDENTITY;
                this._isMove = false;
                callback && callback();
                return;
              }

              angle += 2;
              var rotateX = direction % 2 ? direction % 4 === 1 ? 1 : -1 : 0;
              var rotateZ = direction % 2 ? 0 : direction % 4 === 2 ? -1 : 1;
              Quat.fromEuler(quat_t, rotateX * 2, 0, rotateZ * 2);

              this._testNode.rotate(quat_t);
            };

            var timer = setInterval(move.bind(this), direction > 4 ? 1 : 2);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);
        return CubeMove;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end CubeMove

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvQ3ViZU1vdmUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJRdWF0IiwicXVhdF90IiwidjNfdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInRyYW5zbGF0ZSIsIkN1YmVNb3ZlIiwiX3Rlc3ROb2RlIiwiX2lzTW92ZSIsIm5vZGUiLCJwYXJlbnQiLCJnZXRDaGlsZEJ5TmFtZSIsImRpcmVjdGlvbiIsImNhbGxiYWNrIiwicmVtb3ZlRnJvbVBhcmVudCIsInYzMiIsInBvc2l0aW9uIiwib192IiwiY3VyVHJhbnNsYXRlIiwic3VidHJhY3QiLCJhZGRDaGlsZCIsImFuZ2xlIiwibWF4IiwibW92ZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsInJvdGF0aW9uIiwiSURFTlRJVFkiLCJzZXQiLCJ4IiwieiIsImFkZCIsIlpFUk8iLCJyb3RhdGVYIiwicm90YXRlWiIsImZyb21FdWxlciIsInJvdGF0ZSIsInNldEludGVydmFsIiwiYmluZCIsImRlbHRhVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLEksT0FBQUEsSTs7QUFDN0JDLE1BQUFBLE0sbUJBQUFBLE07QUFBUUMsTUFBQUEsSSxtQkFBQUEsSTs7OytFQUNrRDs7O0FBQWpFQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxRO0FBRVhDLE1BQUFBLFMsR0FBWSxDQUNoQixJQUFJTixJQUFKLENBQVMsQ0FBVCxFQUFZLEdBQVosRUFBaUIsQ0FBQyxHQUFsQixDQURnQixFQUVoQixJQUFJQSxJQUFKLENBQVMsQ0FBQyxHQUFWLEVBQWUsR0FBZixFQUFvQixDQUFwQixDQUZnQixFQUdoQixJQUFJQSxJQUFK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ZixHQUEwQjFCLElBQUksQ0FBQzJCLFFBQS9CO0FBQ0EscUJBQUtuQixPQUFMLEdBQWUsS0FBZjtBQUNBSyxnQkFBQUEsUUFBUSxJQUFJQSxRQUFRLEVBQXBCO0FBQ0E7QUFDRDs7QUFDRFEsY0FBQUEsS0FBSyxJQUFJLENBQVQ7QUFDQSxrQkFBSVksT0FBTyxHQUFHckIsU0FBUyxHQUFHLENBQVosR0FBaUJBLFNBQVMsR0FBRyxDQUFaLEtBQWtCLENBQWxCLEdBQXNCLENBQXRCLEdBQTBCLENBQUMsQ0FBNUMsR0FBaUQsQ0FBL0Q7QUFDQSxrQkFBSXNCLE9BQU8sR0FBR3RCLFNBQVMsR0FBRyxDQUFaLEdBQWdCLENBQWhCLEdBQW9CQSxTQUFTLEdBQUcsQ0FBWixLQUFrQixDQUFsQixHQUFzQixDQUFDLENBQXZCLEdBQTJCLENBQTdEO0FBQ0FaLGNBQUFBLElBQUksQ0FBQ21DLFNBQUwsQ0FBZWxDLE1BQWYsRUFBdUJnQyxPQUFPLEdBQUcsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUNDLE9BQU8sR0FBRyxDQUFqRDs7QUFDQSxtQkFBSzNCLFNBQUwsQ0FBZTZCLE1BQWYsQ0FBc0JuQyxNQUF0QjtBQUNELGFBeEJEOztBQXlCQSxnQkFBSXdCLEtBQUssR0FBR1ksV0FBVyxDQUFDZCxJQUFJLENBQUNlLElBQUwsQ0FBVSxJQUFWLENBQUQsRUFBa0IxQixTQUFTLEdBQUcsQ0FBWixHQUFnQixDQUFoQixHQUFvQixDQUF0QyxDQUF2QjtBQUNEOzs7aUNBRU0yQixTLEVBQW1CLENBQ3hCO0FBQ0Q7OztRQXBEMkJ6QyxTOztvQkFkWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgVmVjMywgTm9kZSwgUXVhdCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgdjJfdCwgcXVhdF90LCB2M190IH0gZnJvbSAnLi4vbGliL1RlbXBDb25zdCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCB0cmFuc2xhdGUgPSBbXHJcbiAgbmV3IFZlYzMoMCwgMC41LCAtMC41KSxcclxuICBuZXcgVmVjMygtMC41LCAwLjUsIDApLFxyXG4gIG5ldyBWZWMzKDAsIDAuNSwgMC41KSxcclxuICBuZXcgVmVjMygwLjUsIDAuNSwgMCksXHJcbiAgbmV3IFZlYzMoMCwgLTAuNSwgLTAuNSksXHJcbiAgbmV3IFZlYzMoLTAuNSwgLTAuNSwgMCksXHJcbiAgbmV3IFZlYzMoMCwgLTAuNSwgMC41KSxcclxuICBuZXcgVmVjMygwLjUsIC0wLjUsIDApXHJcbl07XHJcblxyXG5AY2NjbGFzcygnQ3ViZU1vdmUnKVxyXG5leHBvcnQgY2xhc3MgQ3ViZU1vdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIF90ZXN0Tm9kZSA9IG51bGw7XHJcbiAgX2lzTW92ZSA9IGZhbHNlO1xyXG5cclxuICBzdGFydCgpIHtcclxuICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgdGhpcy5fdGVzdE5vZGUgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCd0ZXN0Jyk7XHJcbiAgfVxyXG5cclxuICBjdWJlUm90YXRlKGRpcmVjdGlvbjogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAodGhpcy5faXNNb3ZlKSByZXR1cm47XHJcbiAgICB0aGlzLl9pc01vdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgIGxldCB2MzIgPSBuZXcgVmVjMyh0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgbGV0IG9fdiA9IG5ldyBWZWMzKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICBsZXQgY3VyVHJhbnNsYXRlID0gdHJhbnNsYXRlW2RpcmVjdGlvbiAtIDFdO1xyXG4gICAgdjMyLnN1YnRyYWN0KGN1clRyYW5zbGF0ZSk7XHJcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjdXJUcmFuc2xhdGU7XHJcbiAgICB0aGlzLl90ZXN0Tm9kZS5wb3NpdGlvbiA9IHYzMjtcclxuICAgIHRoaXMuX3Rlc3ROb2RlLmFkZENoaWxkKHRoaXMubm9kZSk7XHJcbiAgICBsZXQgYW5nbGUgPSAwO1xyXG4gICAgbGV0IG1heCA9IGRpcmVjdGlvbiA+IDQgPyAxODAgOiA5MDtcclxuICAgIGxldCBtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChhbmdsZSA+PSBtYXgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IFF1YXQuSURFTlRJVFk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA+IDQpIHtcclxuICAgICAgICAgIHYzX3Quc2V0KC0yICogY3VyVHJhbnNsYXRlLngsIDEsIC0yICogY3VyVHJhbnNsYXRlLnopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2M190LnNldCgtMiAqIGN1clRyYW5zbGF0ZS54LCAwLCAtMiAqIGN1clRyYW5zbGF0ZS56KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb192LmFkZCh2M190KTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBvX3Y7XHJcbiAgICAgICAgdGhpcy5fdGVzdE5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5fdGVzdE5vZGUucG9zaXRpb24gPSBWZWMzLlpFUk87XHJcbiAgICAgICAgdGhpcy5fdGVzdE5vZGUucm90YXRpb24gPSBRdWF0LklERU5USVRZO1xyXG4gICAgICAgIHRoaXMuX2lzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFuZ2xlICs9IDI7XHJcbiAgICAgIGxldCByb3RhdGVYID0gZGlyZWN0aW9uICUgMiA/IChkaXJlY3Rpb24gJSA0ID09PSAxID8gMSA6IC0xKSA6IDA7XHJcbiAgICAgIGxldCByb3RhdGVaID0gZGlyZWN0aW9uICUgMiA/IDAgOiBkaXJlY3Rpb24gJSA0ID09PSAyID8gLTEgOiAxO1xyXG4gICAgICBRdWF0LmZyb21FdWxlcihxdWF0X3QsIHJvdGF0ZVggKiAyLCAwLCByb3RhdGVaICogMik7XHJcbiAgICAgIHRoaXMuX3Rlc3ROb2RlLnJvdGF0ZShxdWF0X3QpO1xyXG4gICAgfTtcclxuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKG1vdmUuYmluZCh0aGlzKSwgZGlyZWN0aW9uID4gNCA/IDEgOiAyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gIH1cclxufVxyXG4iXX0=