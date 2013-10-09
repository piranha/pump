;goog.provide("module$objMap");
var module$objMap = {};
function objMap$$module$objMap(obj, func, context) {
  if(!obj) {
    return null
  }
  var i = 0;
  var ret = {};
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      ret[key] = func.call(context, obj[key], key, i++)
    }
  }
  return ret
}
module$objMap.module$exports = objMap$$module$objMap;
if(module$objMap.module$exports) {
  module$objMap = module$objMap.module$exports
}
