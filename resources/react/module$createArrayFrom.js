goog.provide("module$createArrayFrom");
var module$createArrayFrom = {};
function hasArrayNature$$module$createArrayFrom(obj) {
  return!!obj && (typeof obj == "object" || typeof obj == "function") && "length" in obj && !("setInterval" in obj) && typeof obj.nodeType != "number" && (Array.isArray(obj) || "callee" in obj || "item" in obj)
}
function createArrayFrom$$module$createArrayFrom(obj) {
  if(!hasArrayNature$$module$createArrayFrom(obj)) {
    return[obj]
  }
  if(obj.item) {
    var l = obj.length, ret = new Array(l);
    while(l--) {
      ret[l] = obj[l]
    }
    return ret
  }
  return Array.prototype.slice.call(obj)
}
module$createArrayFrom.module$exports = createArrayFrom$$module$createArrayFrom;
if(module$createArrayFrom.module$exports) {
  module$createArrayFrom = module$createArrayFrom.module$exports
}
;
