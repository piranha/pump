goog.provide("module$keyOf");
var module$keyOf = {};
var keyOf$$module$keyOf = function(oneKeyObj) {
  var key;
  for(key in oneKeyObj) {
    if(!oneKeyObj.hasOwnProperty(key)) {
      continue
    }
    return key
  }
  return null
};
module$keyOf.module$exports = keyOf$$module$keyOf;
if(module$keyOf.module$exports) {
  module$keyOf = module$keyOf.module$exports
}
;
