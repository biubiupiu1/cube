"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, Vec2, v2_t, v3_t, quat_t;

  function parseTime2String(seconds) {
    var s = seconds % 60;
    var m = Math.floor(seconds / 60);
    var ss = s > 9 ? s.toString() : '0' + s;
    var ms = m > 9 ? m.toString() : '0' + m;
    return ms + ':' + ss;
  }

  _export("parseTime2String", parseTime2String);

  return {
    setters: [function (_cc) {
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "757b2P1g8ZJbYdr4Bb6L3wl", "TempConst"); // begin TempConst


      _export("v2_t", v2_t = new Vec2());

      _export("v3_t", v3_t = new Vec3());

      _export("quat_t", quat_t = new Quat());

      cc._RF.pop(); // end TempConst

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbGliL1RlbXBDb25zdC50cyJdLCJuYW1lcyI6WyJwYXJzZVRpbWUyU3RyaW5nIiwic2Vjb25kcyIsInMiLCJtIiwiTWF0aCIsImZsb29yIiwic3MiLCJ0b1N0cmluZyIsIm1zIiwiVmVjMyIsIlF1YXQiLCJWZWMyIiwidjJfdCIsInYzX3QiLCJxdWF0X3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRTyxXQUFTQSxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUQ7QUFDeEQsUUFBTUMsQ0FBQyxHQUFHRCxPQUFPLEdBQUcsRUFBcEI7QUFDQSxRQUFNRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixPQUFPLEdBQUcsRUFBckIsQ0FBVjtBQUNBLFFBQU1LLEVBQUUsR0FBR0osQ0FBQyxHQUFHLENBQUosR0FBUUEsQ0FBQyxDQUFDSyxRQUFGLEVBQVIsR0FBdUIsTUFBTUwsQ0FBeEM7QUFDQSxRQUFNTSxFQUFFLEdBQUdMLENBQUMsR0FBRyxDQUFKLEdBQVFBLENBQUMsQ0FBQ0ksUUFBRixFQUFSLEdBQXVCLE1BQU1KLENBQXhDO0FBQ0EsV0FBT0ssRUFBRSxHQUFHLEdBQUwsR0FBV0YsRUFBbEI7QUFDRDs7OEJBTmVOLGdCOzs7O0FBUlBTLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJOzs7Z0ZBRW9EOzs7c0JBQTVEQyxJLEdBQU8sSUFBSUQsSUFBSixFOztzQkFFUEUsSSxHQUFPLElBQUlKLElBQUosRTs7d0JBRVBLLE0sR0FBUyxJQUFJSixJQUFKLEU7O29CQUpKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjMywgUXVhdCwgVmVjMiB9IGZyb20gJ2NjJztcclxuXHJcbmV4cG9ydCBjb25zdCB2Ml90ID0gbmV3IFZlYzIoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB2M190ID0gbmV3IFZlYzMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWF0X3QgPSBuZXcgUXVhdCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZTJTdHJpbmcoc2Vjb25kczogbnVtYmVyKTogc3RyaW5nIHtcclxuICBjb25zdCBzID0gc2Vjb25kcyAlIDYwO1xyXG4gIGNvbnN0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgY29uc3Qgc3MgPSBzID4gOSA/IHMudG9TdHJpbmcoKSA6ICcwJyArIHM7XHJcbiAgY29uc3QgbXMgPSBtID4gOSA/IG0udG9TdHJpbmcoKSA6ICcwJyArIG07XHJcbiAgcmV0dXJuIG1zICsgJzonICsgc3M7XHJcbn1cclxuIl19