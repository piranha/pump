goog.provide("module$keyMirror");
var module$keyMirror = {};
goog.require("module$invariant");
var invariant$$module$keyMirror = module$invariant;
var keyMirror$$module$keyMirror = function(obj) {
  var ret = {};
  var key;
  invariant$$module$keyMirror(obj instanceof Object && !Array.isArray(obj));
  for(key in obj) {
    if(!obj.hasOwnProperty(key)) {
      continue
    }
    ret[key] = key
  }
  return ret
};
module$keyMirror.module$exports = keyMirror$$module$keyMirror;
if(module$keyMirror.module$exports) {
  module$keyMirror = module$keyMirror.module$exports
}
;
