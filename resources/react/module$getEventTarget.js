;goog.provide("module$getEventTarget");
var module$getEventTarget = {};
function getEventTarget$$module$getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  return target.nodeType === 3 ? target.parentNode : target
}
module$getEventTarget.module$exports = getEventTarget$$module$getEventTarget;
if(module$getEventTarget.module$exports) {
  module$getEventTarget = module$getEventTarget.module$exports
}
