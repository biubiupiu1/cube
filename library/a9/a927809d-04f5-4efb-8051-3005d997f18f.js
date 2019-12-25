"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Action;
  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "a9278CdBPVO+4BRMAXZl/GP", "Action"); // begin Action


      Action =
      /*#__PURE__*/
      function () {
        function Action() {
          babelHelpers.classCallCheck(this, Action);
          this.actions = [];
        }

        babelHelpers.createClass(Action, [{
          key: "addAction",
          value: function addAction(_ref) {
            var updateHandle = _ref.updateHandle,
                overHandle = _ref.overHandle,
                _ref$time = _ref.time,
                time = _ref$time === void 0 ? 0.2 : _ref$time,
                _ref$autoMove = _ref.autoMove,
                autoMove = _ref$autoMove === void 0 ? true : _ref$autoMove;
            var cur = {
              updateHandle: updateHandle,
              overHandle: overHandle,
              time: time,
              isMove: false,
              curTime: 0,
              autoMove: autoMove,
              run: function run() {
                this.curTime = 0;
                this.isMove = true;
              }
            };
            this.actions.push(cur);
            return cur;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            var dels = [];
            this.actions.forEach(function (element, index) {
              if (element.isMove) {
                element.curTime += deltaTime;

                if (element.curTime > element.time) {
                  // end
                  element.isMove = false;
                  if (element.autoMove) dels.push(index);
                  element.overHandle && element.overHandle();
                } else {
                  element.updateHandle && element.updateHandle(element.curTime / element.time, deltaTime);
                }
              }
            });
            this.actions = this.actions.filter(function (item) {
              return !dels.includes(item);
            });
          }
        }]);
        return Action;
      }();

      _export("default", new Action());

      cc._RF.pop(); // end Action

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbGliL0FjdGlvbi50cyJdLCJuYW1lcyI6WyJBY3Rpb24iLCJhY3Rpb25zIiwidXBkYXRlSGFuZGxlIiwib3ZlckhhbmRsZSIsInRpbWUiLCJhdXRvTW92ZSIsImN1ciIsImlzTW92ZSIsImN1clRpbWUiLCJydW4iLCJwdXNoIiwiZGVsdGFUaW1lIiwiZGVscyIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs2RUFFeUU7OztBQUZuRUEsTUFBQUEsTTs7O0FBR0osMEJBQWM7QUFBQTtBQUFBLGVBRmRDLE9BRWMsR0FGSixFQUVJO0FBQUU7Ozs7MENBRXFEO0FBQUEsZ0JBQXpEQyxZQUF5RCxRQUF6REEsWUFBeUQ7QUFBQSxnQkFBM0NDLFVBQTJDLFFBQTNDQSxVQUEyQztBQUFBLGlDQUEvQkMsSUFBK0I7QUFBQSxnQkFBL0JBLElBQStCLDBCQUF4QixHQUF3QjtBQUFBLHFDQUFuQkMsUUFBbUI7QUFBQSxnQkFBbkJBLFFBQW1CLDhCQUFSLElBQVE7QUFDbkUsZ0JBQUlDLEdBQUcsR0FBRztBQUNSSixjQUFBQSxZQUFZLEVBQVpBLFlBRFE7QUFFUkMsY0FBQUEsVUFBVSxFQUFWQSxVQUZRO0FBR1JDLGNBQUFBLElBQUksRUFBSkEsSUFIUTtBQUlSRyxjQUFBQSxNQUFNLEVBQUUsS0FKQTtBQUtSQyxjQUFBQSxPQUFPLEVBQUUsQ0FMRDtBQU1SSCxjQUFBQSxRQUFRLEVBQVJBLFFBTlE7QUFPUkksY0FBQUEsR0FQUSxpQkFPRjtBQUNKLHFCQUFLRCxPQUFMLEdBQWUsQ0FBZjtBQUNBLHFCQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBVk8sYUFBVjtBQWFBLGlCQUFLTixPQUFMLENBQWFTLElBQWIsQ0FBa0JKLEdBQWxCO0FBQ0EsbUJBQU9BLEdBQVA7QUFDRDs7O2lDQUVNSyxTLEVBQW1CO0FBQ3hCLGdCQUFJQyxJQUFtQixHQUFHLEVBQTFCO0FBQ0EsaUJBQUtYLE9BQUwsQ0FBYVksT0FBYixDQUFxQixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDdkMsa0JBQUlELE9BQU8sQ0FBQ1AsTUFBWixFQUFvQjtBQUNsQk8sZ0JBQUFBLE9BQU8sQ0FBQ04sT0FBUixJQUFtQkcsU0FBbkI7O0FBQ0Esb0JBQUlHLE9BQU8sQ0FBQ04sT0FBUixHQUFrQk0sT0FBTyxDQUFDVixJQUE5QixFQUFvQztBQUNsQztBQUNBVSxrQkFBQUEsT0FBTyxDQUFDUCxNQUFSLEdBQWlCLEtBQWpCO0FBQ0Esc0JBQUlPLE9BQU8sQ0FBQ1QsUUFBWixFQUFzQk8sSUFBSSxDQUFDRixJQUFMLENBQVVLLEtBQVY7QUFDdEJELGtCQUFBQSxPQUFPLENBQUNYLFVBQVIsSUFBc0JXLE9BQU8sQ0FBQ1gsVUFBUixFQUF0QjtBQUNELGlCQUxELE1BS087QUFDTFcsa0JBQUFBLE9BQU8sQ0FBQ1osWUFBUixJQUNFWSxPQUFPLENBQUNaLFlBQVIsQ0FBcUJZLE9BQU8sQ0FBQ04sT0FBUixHQUFrQk0sT0FBTyxDQUFDVixJQUEvQyxFQUFxRE8sU0FBckQsQ0FERjtBQUVEO0FBQ0Y7QUFDRixhQWJEO0FBY0EsaUJBQUtWLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFlLE1BQWIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLHFCQUFJLENBQUNMLElBQUksQ0FBQ00sUUFBTCxDQUFjRCxJQUFkLENBQUw7QUFBQSxhQUF4QixDQUFmO0FBQ0Q7Ozs7O3lCQUdZLElBQUlqQixNQUFKLEU7O29CQXpDRyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFjdGlvbiB7XHJcbiAgYWN0aW9ucyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGFkZEFjdGlvbih7IHVwZGF0ZUhhbmRsZSwgb3ZlckhhbmRsZSwgdGltZSA9IDAuMiwgYXV0b01vdmUgPSB0cnVlIH0pIHtcclxuICAgIGxldCBjdXIgPSB7XHJcbiAgICAgIHVwZGF0ZUhhbmRsZSxcclxuICAgICAgb3ZlckhhbmRsZSxcclxuICAgICAgdGltZSxcclxuICAgICAgaXNNb3ZlOiBmYWxzZSxcclxuICAgICAgY3VyVGltZTogMCxcclxuICAgICAgYXV0b01vdmUsXHJcbiAgICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmN1clRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFjdGlvbnMucHVzaChjdXIpO1xyXG4gICAgcmV0dXJuIGN1cjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgbGV0IGRlbHM6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5pc01vdmUpIHtcclxuICAgICAgICBlbGVtZW50LmN1clRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmIChlbGVtZW50LmN1clRpbWUgPiBlbGVtZW50LnRpbWUpIHtcclxuICAgICAgICAgIC8vIGVuZFxyXG4gICAgICAgICAgZWxlbWVudC5pc01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChlbGVtZW50LmF1dG9Nb3ZlKSBkZWxzLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgZWxlbWVudC5vdmVySGFuZGxlICYmIGVsZW1lbnQub3ZlckhhbmRsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LnVwZGF0ZUhhbmRsZSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LnVwZGF0ZUhhbmRsZShlbGVtZW50LmN1clRpbWUgLyBlbGVtZW50LnRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aW9ucyA9IHRoaXMuYWN0aW9ucy5maWx0ZXIoaXRlbSA9PiAhZGVscy5pbmNsdWRlcyhpdGVtKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQWN0aW9uKCk7XHJcbiJdfQ==