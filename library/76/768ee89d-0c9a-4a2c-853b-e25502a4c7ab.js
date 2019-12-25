"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var InstanceMgr;
  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "768eeidDJpKLIU74lUCpMer", "InstanceMgr"); // begin InstanceMgr


      /**
       * Hack 的做法，避免循环引用，并可以方便的在各个文件访问具体的实例和减少模块间的导入耦合
       */
      _export("InstanceMgr", InstanceMgr =
      /*#__PURE__*/
      function () {
        function InstanceMgr() {
          babelHelpers.classCallCheck(this, InstanceMgr);
        }

        babelHelpers.createClass(InstanceMgr, null, [{
          key: "registerInstance",
          value: function registerInstance(name, entity) {
            if (InstanceMgr[name] != null) {
              console.error(name, 'is duplicate');
            } else {
              InstanceMgr[name] = entity;
            }
          }
        }]);
        return InstanceMgr;
      }());

      cc._RF.pop(); // end InstanceMgr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbGliL0luc3RhbmNlTWdyLnRzIl0sIm5hbWVzIjpbIkluc3RhbmNlTWdyIiwibmFtZSIsImVudGl0eSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tGQUV5RTs7O0FBT3pFOzs7NkJBSWFBLFc7Ozs7Ozs7OzsyQ0FpQmFDLEksRUFBY0MsTSxFQUFhO0FBQ2pELGdCQUFJRixXQUFXLENBQUNDLElBQUQsQ0FBWCxJQUFxQixJQUF6QixFQUErQjtBQUM3QkUsY0FBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNILElBQWQsRUFBb0IsY0FBcEI7QUFDRCxhQUZELE1BRU87QUFDTEQsY0FBQUEsV0FBVyxDQUFDQyxJQUFELENBQVgsR0FBb0JDLE1BQXBCO0FBQ0Q7QUFDRjs7Ozs7b0JBbENlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFyZ2V0Q3RyIH0gZnJvbSAnLi4vZ2FtZVBsYXkvVGFyZ2V0Q3RyJztcclxuaW1wb3J0IHsgR2FtZUN0ciB9IGZyb20gJy4uL2dhbWVQbGF5L0dhbWVDdHInO1xyXG5pbXBvcnQgeyBDdWJlTW92ZSB9IGZyb20gJy4uL2dhbWVQbGF5L0N1YmVNb3ZlJztcclxuaW1wb3J0IHsgQ3ViZUN0ciB9IGZyb20gJy4uL2dhbWVQbGF5L0N1YmVDdHInO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUN0ciB9IGZyb20gJy4uL2dhbWVQbGF5L1BhcnRpY2xlQ3RyJztcclxuaW1wb3J0IHsgVUlDdHIgfSBmcm9tICcuLi9nYW1lUGxheS9VSUN0cic7XHJcbmltcG9ydCB7IE11c2ljQ3RyIH0gZnJvbSAnLi4vZ2FtZVBsYXkvTXVzaWNDdHInO1xyXG5pbXBvcnQgeyBXeFJhbmtMaXN0IH0gZnJvbSAnLi4vZ2FtZVBsYXkvV3hSYW5rTGlzdCc7XHJcblxyXG4vKipcclxuICogSGFjayDnmoTlgZrms5XvvIzpgb/lhY3lvqrnjq/lvJXnlKjvvIzlubblj6/ku6Xmlrnkvr/nmoTlnKjlkITkuKrmlofku7borr/pl67lhbfkvZPnmoTlrp7kvovlkozlh4/lsJHmqKHlnZfpl7TnmoTlr7zlhaXogKblkIhcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VNZ3Ige1xyXG4gIHN0YXRpYyByZWFkb25seSBHYW1lQ3RyOiBHYW1lQ3RyO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgVGFyZ2V0Q3RyOiBUYXJnZXRDdHI7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBDdWJlTW92ZTogQ3ViZU1vdmU7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBDdWJlQ3RyOiBDdWJlQ3RyO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgUGFydGljbGVDdHI6IFBhcnRpY2xlQ3RyO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgVUlDdHI6IFVJQ3RyO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgTXVzaWNDdHI6IE11c2ljQ3RyO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgV3hSYW5rTGlzdDogV3hSYW5rTGlzdDtcclxuXHJcbiAgc3RhdGljIHJlZ2lzdGVySW5zdGFuY2UobmFtZTogc3RyaW5nLCBlbnRpdHk6IGFueSkge1xyXG4gICAgaWYgKEluc3RhbmNlTWdyW25hbWVdICE9IG51bGwpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihuYW1lLCAnaXMgZHVwbGljYXRlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBJbnN0YW5jZU1ncltuYW1lXSA9IGVudGl0eTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19