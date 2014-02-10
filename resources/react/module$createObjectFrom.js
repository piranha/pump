goog.provide("module$createObjectFrom");
var module$createObjectFrom = {};
function createObjectFrom$$module$createObjectFrom(keys, values) {
  if(false) {
    if(!Array.isArray(keys)) {
      throw new TypeError("Must pass an array of keys.");
    }
  }
  var object = {};
  var isArray = Array.isArray(values);
  if(typeof values == "undefined") {
    values = true
  }
  for(var ii = keys.length;ii--;) {
    object[keys[ii]] = isArray ? values[ii] : values
  }
  return object
}
module$createObjectFrom.module$exports = createObjectFrom$$module$createObjectFrom;
if(module$createObjectFrom.module$exports) {
  module$createObjectFrom = module$createObjectFrom.module$exports
}
;
