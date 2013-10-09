;goog.provide("module$isNode");
var module$isNode = {};
function isNode$$module$isNode(object) {
  return!!(object && (typeof Node !== "undefined" ? object instanceof Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"))
}
module$isNode.module$exports = isNode$$module$isNode;
if(module$isNode.module$exports) {
  module$isNode = module$isNode.module$exports
}
