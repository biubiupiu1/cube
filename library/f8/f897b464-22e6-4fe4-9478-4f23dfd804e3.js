"use strict";

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "f897bRkIuZP5JR4TyPf2ATj", "Utils"); // begin Utils


      _export("default", {
        showToast: function () {
          var curNode = null;
          var timer = null;
          return function () {
            var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

            if (curNode) {
              document.body.removeChild(curNode);
              clearInterval(timer);
            }

            var div = document.createElement('div');
            div.style.cssText = "\n                position: fixed;\n                left: 50%;\n                top: 50%;\n                transform: translate(-50%, -50%);\n            ";
            var span = document.createElement('span');
            span.style.cssText = "\n                background: rgba(0, 0, 0, 0.7);\n                padding: 5px 10px;\n                font-size: 13px;\n                color: #fff;\n                border-radius: 5px;\n            ";
            span.innerText = text;
            div.appendChild(span);
            document.body.appendChild(div);
            curNode = div;
            timer = setTimeout(function () {
              document.body.removeChild(curNode);
              curNode = null;
            }, dur);
          };
        }()
      });

      cc._RF.pop(); // end Utils

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbGliL1V0aWxzLnRzIl0sIm5hbWVzIjpbInNob3dUb2FzdCIsImN1ck5vZGUiLCJ0aW1lciIsInRleHQiLCJkdXIiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJjc3NUZXh0Iiwic3BhbiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7NEVBRXlFOzs7eUJBRjFEO0FBQ2JBLFFBQUFBLFNBQVMsRUFBRyxZQUFNO0FBQ2hCLGNBQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsY0FBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxpQkFBTyxZQUEyQjtBQUFBLGdCQUExQkMsSUFBMEIsdUVBQW5CLEVBQW1CO0FBQUEsZ0JBQWZDLEdBQWUsdUVBQVQsSUFBUzs7QUFDaEMsZ0JBQUlILE9BQUosRUFBYTtBQUNYSSxjQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sT0FBMUI7QUFDQU8sY0FBQUEsYUFBYSxDQUFDTixLQUFELENBQWI7QUFDRDs7QUFDRCxnQkFBSU8sR0FBRyxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBRCxZQUFBQSxHQUFHLENBQUNFLEtBQUosQ0FBVUMsT0FBVjtBQU1BLGdCQUFJQyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FHLFlBQUFBLElBQUksQ0FBQ0YsS0FBTCxDQUFXQyxPQUFYO0FBT0FDLFlBQUFBLElBQUksQ0FBQ0MsU0FBTCxHQUFpQlgsSUFBakI7QUFDQU0sWUFBQUEsR0FBRyxDQUFDTSxXQUFKLENBQWdCRixJQUFoQjtBQUNBUixZQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY1MsV0FBZCxDQUEwQk4sR0FBMUI7QUFDQVIsWUFBQUEsT0FBTyxHQUFHUSxHQUFWO0FBQ0FQLFlBQUFBLEtBQUssR0FBR2MsVUFBVSxDQUFDLFlBQU07QUFDdkJYLGNBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCTixPQUExQjtBQUNBQSxjQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNELGFBSGlCLEVBR2ZHLEdBSGUsQ0FBbEI7QUFJRCxXQTVCRDtBQTZCRCxTQWhDVTtBQURFLE87O29CQUVHIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNob3dUb2FzdDogKCgpID0+IHtcclxuICAgIGxldCBjdXJOb2RlID0gbnVsbDtcclxuICAgIGxldCB0aW1lciA9IG51bGw7XHJcbiAgICByZXR1cm4gKHRleHQgPSAnJywgZHVyID0gMTUwMCkgPT4ge1xyXG4gICAgICBpZiAoY3VyTm9kZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY3VyTm9kZSk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzcGFuLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICBjdXJOb2RlID0gZGl2O1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY3VyTm9kZSk7XHJcbiAgICAgICAgY3VyTm9kZSA9IG51bGw7XHJcbiAgICAgIH0sIGR1cik7XHJcbiAgICB9O1xyXG4gIH0pKClcclxufTtcclxuIl19