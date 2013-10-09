;goog.provide("module$getNodeForCharacterOffset");
var module$getNodeForCharacterOffset = {};
function getLeafNode$$module$getNodeForCharacterOffset(node) {
  while(node && node.firstChild) {
    node = node.firstChild
  }
  return node
}
function getSiblingNode$$module$getNodeForCharacterOffset(node) {
  while(node) {
    if(node.nextSibling) {
      return node.nextSibling
    }
    node = node.parentNode
  }
}
function getNodeForCharacterOffset$$module$getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode$$module$getNodeForCharacterOffset(root);
  var nodeStart = 0;
  var nodeEnd = 0;
  while(node) {
    if(node.nodeType == 3) {
      nodeEnd = nodeStart + node.textContent.length;
      if(nodeStart <= offset && nodeEnd >= offset) {
        return{node:node, offset:offset - nodeStart}
      }
      nodeStart = nodeEnd
    }
    node = getLeafNode$$module$getNodeForCharacterOffset(getSiblingNode$$module$getNodeForCharacterOffset(node))
  }
}
module$getNodeForCharacterOffset.module$exports = getNodeForCharacterOffset$$module$getNodeForCharacterOffset;
if(module$getNodeForCharacterOffset.module$exports) {
  module$getNodeForCharacterOffset = module$getNodeForCharacterOffset.module$exports
}
