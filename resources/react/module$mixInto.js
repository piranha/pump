;goog.provide("module$mixInto");
var module$mixInto = {};
var mixInto$$module$mixInto = function(constructor, methodBag) {
  var methodName;
  for(methodName in methodBag) {
    if(!methodBag.hasOwnProperty(methodName)) {
      continue
    }
    constructor.prototype[methodName] = methodBag[methodName]
  }
};
module$mixInto.module$exports = mixInto$$module$mixInto;
if(module$mixInto.module$exports) {
  module$mixInto = module$mixInto.module$exports
}
