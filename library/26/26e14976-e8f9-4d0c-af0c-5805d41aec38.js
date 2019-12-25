"use strict";

System.register(["cc", "../lib/InstanceMgr.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, ParticleSystemComponent, InstanceMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, ParticleCtr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_libInstanceMgrTs) {
      InstanceMgr = _libInstanceMgrTs.InstanceMgr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "26e14l26PlNDK8MWAXUGuw4", "ParticleCtr"); // begin ParticleCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ParticleCtr", ParticleCtr = (_dec = ccclass('ParticleCtr'), _dec2 = property({
        type: ParticleSystemComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ParticleCtr, _Component);

        function ParticleCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ParticleCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ParticleCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "over", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ParticleCtr, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            InstanceMgr.registerInstance('ParticleCtr', this);
          }
        }, {
          key: "playOverParticle",
          value: function playOverParticle() {
            var _this2 = this;

            return new Promise(function (reslove) {
              _this2.over.forEach(function (item) {
                item.enabled = false;
                item.enabled = true;
              });

              setTimeout(reslove, 3000);
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return ParticleCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "over", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ParticleCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvUGFydGljbGVDdHIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IiwiSW5zdGFuY2VNZ3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQYXJ0aWNsZUN0ciIsInR5cGUiLCJyZWdpc3Rlckluc3RhbmNlIiwiUHJvbWlzZSIsInJlc2xvdmUiLCJvdmVyIiwiZm9yRWFjaCIsIml0ZW0iLCJlbmFibGVkIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsdUIsT0FBQUEsdUI7O0FBRXZCQyxNQUFBQSxXLHFCQUFBQSxXOzs7a0ZBQWdFOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzZCQUlKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMsVUFFTEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdEO0FBQ047QUFDQUMsWUFBQUEsV0FBVyxDQUFDSyxnQkFBWixDQUE2QixhQUE3QixFQUE0QyxJQUE1QztBQUNEOzs7NkNBRWtCO0FBQUE7O0FBQ2pCLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUIsY0FBQSxNQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBVixDQUFrQixVQUFBQyxJQUFJLEVBQUk7QUFDeEJBLGdCQUFBQSxJQUFJLENBQUNDLE9BQUwsR0FBZSxLQUFmO0FBQ0FELGdCQUFBQSxJQUFJLENBQUNDLE9BQUwsR0FBZSxJQUFmO0FBQ0QsZUFIRDs7QUFJQUMsY0FBQUEsVUFBVSxDQUFDTCxPQUFELEVBQVUsSUFBVixDQUFWO0FBQ0QsYUFOTSxDQUFQO0FBT0QsVyxDQUVEO0FBQ0E7QUFDQTs7OztRQXJCK0JULFM7Ozs7O2lCQUVHLEU7Ozs7b0JBTGxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgSW5zdGFuY2VNZ3IgfSBmcm9tICcuLi9saWIvSW5zdGFuY2VNZ3InO1xyXG5cclxuQGNjY2xhc3MoJ1BhcnRpY2xlQ3RyJylcclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlQ3RyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCB9KVxyXG4gIG92ZXI6IFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIEluc3RhbmNlTWdyLnJlZ2lzdGVySW5zdGFuY2UoJ1BhcnRpY2xlQ3RyJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwbGF5T3ZlclBhcnRpY2xlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc2xvdmUgPT4ge1xyXG4gICAgICB0aGlzLm92ZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBpdGVtLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dChyZXNsb3ZlLCAzMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==