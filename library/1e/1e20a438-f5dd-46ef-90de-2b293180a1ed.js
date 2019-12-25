"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var EventBus;
  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "1e20aQ49d1G75DeKykxgKHt", "EventBus"); // begin EventBus


      _export("EventBus", EventBus =
      /*#__PURE__*/
      function () {
        function EventBus() {
          babelHelpers.classCallCheck(this, EventBus);
        }

        babelHelpers.createClass(EventBus, null, [{
          key: "on",
          value: function on(name, handle) {
            if (!this.events[name]) {
              this.events = [handle];
            } else {
              this.events[name].push(handle);
            }
          }
        }, {
          key: "off",
          value: function off(name, handle) {
            if (!this.events[name]) {
              return;
            } else {
              var index = this.events.indexOf(handle);
              if (index !== -1) this.events.splice(index, 1);
            }
          }
        }, {
          key: "emit",
          value: function emit(name) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            if (!this.events[name]) return;
            var handles = this.events[name];
            handles.forEach(function (element) {
              element.apply(void 0, args);
            });
          }
        }, {
          key: "once",
          value: function once(name, handle) {
            var _this = this;

            this.on(name, function () {
              handle();

              _this.off(name, handle);
            });
          }
        }]);
        return EventBus;
      }());

      EventBus.events = [];

      cc._RF.pop(); // end EventBus

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbGliL0V2ZW50QnVzLnRzIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwibmFtZSIsImhhbmRsZSIsImV2ZW50cyIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJhcmdzIiwiaGFuZGxlcyIsImZvckVhY2giLCJlbGVtZW50Iiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsrRUFFeUU7OzswQkFGNURBLFE7Ozs7Ozs7Ozs2QkFHREMsSSxFQUFjQyxNLEVBQWtCO0FBQ3hDLGdCQUFJLENBQUMsS0FBS0MsTUFBTCxDQUFZRixJQUFaLENBQUwsRUFBd0I7QUFDdEIsbUJBQUtFLE1BQUwsR0FBYyxDQUFDRCxNQUFELENBQWQ7QUFDRCxhQUZELE1BRU87QUFDTCxtQkFBS0MsTUFBTCxDQUFZRixJQUFaLEVBQWtCRyxJQUFsQixDQUF1QkYsTUFBdkI7QUFDRDtBQUNGOzs7OEJBRVVELEksRUFBY0MsTSxFQUFrQjtBQUN6QyxnQkFBSSxDQUFDLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFMLEVBQXdCO0FBQ3RCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsa0JBQUlJLEtBQUssR0FBRyxLQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0JKLE1BQXBCLENBQVo7QUFDQSxrQkFBSUcsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQixLQUFLRixNQUFMLENBQVlJLE1BQVosQ0FBbUJGLEtBQW5CLEVBQTBCLENBQTFCO0FBQ25CO0FBQ0Y7OzsrQkFFV0osSSxFQUF1QjtBQUFBLDhDQUFOTyxJQUFNO0FBQU5BLGNBQUFBLElBQU07QUFBQTs7QUFDakMsZ0JBQUksQ0FBQyxLQUFLTCxNQUFMLENBQVlGLElBQVosQ0FBTCxFQUF3QjtBQUN4QixnQkFBSVEsT0FBTyxHQUFHLEtBQUtOLE1BQUwsQ0FBWUYsSUFBWixDQUFkO0FBQ0FRLFlBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDekJBLGNBQUFBLE9BQU8sTUFBUCxTQUFXSCxJQUFYO0FBQ0QsYUFGRDtBQUdEOzs7K0JBRVdQLEksRUFBY0MsTSxFQUFrQjtBQUFBOztBQUMxQyxpQkFBS1UsRUFBTCxDQUFRWCxJQUFSLEVBQWMsWUFBTTtBQUNsQkMsY0FBQUEsTUFBTTs7QUFDTixjQUFBLEtBQUksQ0FBQ1csR0FBTCxDQUFTWixJQUFULEVBQWVDLE1BQWY7QUFDRCxhQUhEO0FBSUQ7Ozs7O0FBakNVRixNQUFBQSxRLENBQ0pHLE0sR0FBUyxFOztvQkFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xyXG5cclxuICBzdGF0aWMgb24obmFtZTogc3RyaW5nLCBoYW5kbGU6IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzID0gW2hhbmRsZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXS5wdXNoKGhhbmRsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb2ZmKG5hbWU6IHN0cmluZywgaGFuZGxlOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tuYW1lXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmV2ZW50cy5pbmRleE9mKGhhbmRsZSk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHRoaXMuZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZW1pdChuYW1lOiBzdHJpbmcsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghdGhpcy5ldmVudHNbbmFtZV0pIHJldHVybjtcclxuICAgIGxldCBoYW5kbGVzID0gdGhpcy5ldmVudHNbbmFtZV07XHJcbiAgICBoYW5kbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQoLi4uYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvbmNlKG5hbWU6IHN0cmluZywgaGFuZGxlOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5vbihuYW1lLCAoKSA9PiB7XHJcbiAgICAgIGhhbmRsZSgpO1xyXG4gICAgICB0aGlzLm9mZihuYW1lLCBoYW5kbGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==