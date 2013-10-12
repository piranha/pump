goog.provide("module$objMapKeyVal");
var module$objMapKeyVal = {};
function objMapKeyVal$$module$objMapKeyVal(obj, func, context) {
  if(!obj) {
    return null
  }
  var i = 0;
  var ret = {};
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      ret[key] = func.call(context, key, obj[key], i++)
    }
  }
  return ret
}
module$objMapKeyVal.module$exports = objMapKeyVal$$module$objMapKeyVal;
if(module$objMapKeyVal.module$exports) {
  module$objMapKeyVal = module$objMapKeyVal.module$exports
}
;
