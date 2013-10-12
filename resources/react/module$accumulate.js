goog.provide("module$accumulate");
var module$accumulate = {};
goog.require("module$invariant");
var invariant$$module$accumulate = module$invariant;
function accumulate$$module$accumulate(current, next) {
  invariant$$module$accumulate(next != null);
  if(current == null) {
    return next
  }else {
    var currentIsArray = Array.isArray(current);
    var nextIsArray = Array.isArray(next);
    if(currentIsArray) {
      return current.concat(next)
    }else {
      if(nextIsArray) {
        return[current].concat(next)
      }else {
        return[current, next]
      }
    }
  }
}
module$accumulate.module$exports = accumulate$$module$accumulate;
if(module$accumulate.module$exports) {
  module$accumulate = module$accumulate.module$exports
}
;
