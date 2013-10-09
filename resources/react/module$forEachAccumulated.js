;goog.provide("module$forEachAccumulated");
var module$forEachAccumulated = {};
var forEachAccumulated$$module$forEachAccumulated = function(arr, cb, scope) {
  if(Array.isArray(arr)) {
    arr.forEach(cb, scope)
  }else {
    if(arr) {
      cb.call(scope, arr)
    }
  }
};
module$forEachAccumulated.module$exports = forEachAccumulated$$module$forEachAccumulated;
if(module$forEachAccumulated.module$exports) {
  module$forEachAccumulated = module$forEachAccumulated.module$exports
}
