"use strict";

System.register(["cc", "../lib/InstanceMgr.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, AudioClip, InstanceMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, MusicCtr;

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
      AudioClip = _cc.AudioClip;
    }, function (_libInstanceMgrTs) {
      InstanceMgr = _libInstanceMgrTs.InstanceMgr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "6b312inzlZClKCPawU6SJP6", "MusicCtr"); // begin MusicCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MusicCtr", MusicCtr = (_dec = ccclass('MusicCtr'), _dec2 = property([AudioClip]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(MusicCtr, _Component);

        function MusicCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MusicCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MusicCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "music", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(MusicCtr, [{
          key: "onLoad",
          value: function onLoad() {
            InstanceMgr.registerInstance('MusicCtr', this);
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "play",
          value: function play(name) {
            if (!InstanceMgr.UICtr.isVoice) return;
            this.music.find(function (item) {
              return item.name === name;
            }).play();
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return MusicCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end MusicCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZVBsYXkvTXVzaWNDdHIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIkF1ZGlvQ2xpcCIsIkluc3RhbmNlTWdyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXVzaWNDdHIiLCJyZWdpc3Rlckluc3RhbmNlIiwibmFtZSIsIlVJQ3RyIiwiaXNWb2ljZSIsIm11c2ljIiwiZmluZCIsIml0ZW0iLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsUyxPQUFBQSxTOztBQUM3QkMsTUFBQUEsVyxxQkFBQUEsVzs7OytFQUNnRTs7O0FBQWpFQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBRUxDLFFBQVEsQ0FBQyxDQUFDSCxTQUFELENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR0E7QUFDUEMsWUFBQUEsV0FBVyxDQUFDSSxnQkFBWixDQUE2QixVQUE3QixFQUF5QyxJQUF6QztBQUNEOzs7a0NBRU8sQ0FDTjtBQUNEOzs7K0JBRUlDLEksRUFBTTtBQUNULGdCQUFJLENBQUNMLFdBQVcsQ0FBQ00sS0FBWixDQUFrQkMsT0FBdkIsRUFBZ0M7QUFDaEMsaUJBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixVQUFBQyxJQUFJO0FBQUEscUJBQUlBLElBQUksQ0FBQ0wsSUFBTCxLQUFjQSxJQUFsQjtBQUFBLGFBQXBCLEVBQTRDTSxJQUE1QztBQUNELFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUFuQjRCYixTOzs7OztpQkFFUCxFOzs7O29CQUxMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBdWRpb0NsaXAgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEluc3RhbmNlTWdyIH0gZnJvbSAnLi4vbGliL0luc3RhbmNlTWdyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdNdXNpY0N0cicpXHJcbmV4cG9ydCBjbGFzcyBNdXNpY0N0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KFtBdWRpb0NsaXBdKVxyXG4gIG11c2ljOiBBdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBJbnN0YW5jZU1nci5yZWdpc3Rlckluc3RhbmNlKCdNdXNpY0N0cicsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICB9XHJcblxyXG4gIHBsYXkobmFtZSkge1xyXG4gICAgaWYgKCFJbnN0YW5jZU1nci5VSUN0ci5pc1ZvaWNlKSByZXR1cm47XHJcbiAgICB0aGlzLm11c2ljLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gIC8vIH1cclxufVxyXG4iXX0=