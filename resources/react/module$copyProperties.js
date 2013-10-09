;goog.provide("module$copyProperties");
var module$copyProperties = {};
function copyProperties$$module$copyProperties(obj, a, b, c, d, e, f) {
  obj = obj || {};
  var args = [a, b, c, d, e];
  var ii = 0, v;
  while(args[ii]) {
    v = args[ii++];
    for(var k in v) {
      obj[k] = v[k]
    }
    if(v.hasOwnProperty && v.hasOwnProperty("toString") && typeof v.toString != "undefined" && obj.toString !== v.toString) {
      obj.toString = v.toString
    }
  }
  return obj
}
module$copyProperties.module$exports = copyProperties$$module$copyProperties;
if(module$copyProperties.module$exports) {
  module$copyProperties = module$copyProperties.module$exports
}
