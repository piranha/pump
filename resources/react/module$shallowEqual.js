goog.provide("module$shallowEqual");
var module$shallowEqual = {};
function shallowEqual$$module$shallowEqual(objA, objB) {
  if(objA === objB) {
    return true
  }
  var key;
  for(key in objA) {
    if(objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
      return false
    }
  }
  for(key in objB) {
    if(objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}
module$shallowEqual.module$exports = shallowEqual$$module$shallowEqual;
if(module$shallowEqual.module$exports) {
  module$shallowEqual = module$shallowEqual.module$exports
}
;
