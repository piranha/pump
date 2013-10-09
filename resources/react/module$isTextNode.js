;goog.provide("module$isTextNode");
var module$isTextNode = {};
goog.require("module$isNode");
var isNode$$module$isTextNode = module$isNode;
function isTextNode$$module$isTextNode(object) {
  return isNode$$module$isTextNode(object) && object.nodeType == 3
}
module$isTextNode.module$exports = isTextNode$$module$isTextNode;
if(module$isTextNode.module$exports) {
  module$isTextNode = module$isTextNode.module$exports
}
