goog.provide("module$memoizeStringOnly");
var module$memoizeStringOnly = {};
function memoizeStringOnly$$module$memoizeStringOnly(callback) {
  var cache = {};
  return function(string) {
    if(cache.hasOwnProperty(string)) {
      return cache[string]
    }else {
      return cache[string] = callback.call(this, string)
    }
  }
}
module$memoizeStringOnly.module$exports = memoizeStringOnly$$module$memoizeStringOnly;
if(module$memoizeStringOnly.module$exports) {
  module$memoizeStringOnly = module$memoizeStringOnly.module$exports
}
;
