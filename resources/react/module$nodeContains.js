;goog.provide("module$nodeContains");
var module$nodeContains = {};
goog.require("module$isTextNode");
var isTextNode$$module$nodeContains = module$isTextNode;
function nodeContains$$module$nodeContains(outerNode, innerNode) {
  if(!outerNode || !innerNode) {
    return false
  }else {
    if(outerNode === innerNode) {
      return true
    }else {
      if(isTextNode$$module$nodeContains(outerNode)) {
        return false
      }else {
        if(isTextNode$$module$nodeContains(innerNode)) {
          return nodeContains$$module$nodeContains(outerNode, innerNode.parentNode)
        }else {
          if(outerNode.contains) {
            return outerNode.contains(innerNode)
          }else {
            if(outerNode.compareDocumentPosition) {
              return!!(outerNode.compareDocumentPosition(innerNode) & 16)
            }else {
              return false
            }
          }
        }
      }
    }
  }
}
module$nodeContains.module$exports = nodeContains$$module$nodeContains;
if(module$nodeContains.module$exports) {
  module$nodeContains = module$nodeContains.module$exports
}
