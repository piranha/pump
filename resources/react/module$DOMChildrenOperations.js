goog.provide("module$DOMChildrenOperations");
var module$DOMChildrenOperations = {};
goog.require("module$getTextContentAccessor");
goog.require("module$ReactMultiChildUpdateTypes");
goog.require("module$Danger");
var Danger$$module$DOMChildrenOperations = module$Danger;
var ReactMultiChildUpdateTypes$$module$DOMChildrenOperations = module$ReactMultiChildUpdateTypes;
var getTextContentAccessor$$module$DOMChildrenOperations = module$getTextContentAccessor;
var textContentAccessor$$module$DOMChildrenOperations = getTextContentAccessor$$module$DOMChildrenOperations() || "NA";
function insertChildAt$$module$DOMChildrenOperations(parentNode, childNode, index) {
  var childNodes = parentNode.childNodes;
  if(childNodes[index] === childNode) {
    return
  }
  if(childNode.parentNode === parentNode) {
    parentNode.removeChild(childNode)
  }
  if(index >= childNodes.length) {
    parentNode.appendChild(childNode)
  }else {
    parentNode.insertBefore(childNode, childNodes[index])
  }
}
var DOMChildrenOperations$$module$DOMChildrenOperations = {dangerouslyReplaceNodeWithMarkup:Danger$$module$DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup, processUpdates:function(updates, markupList) {
  var update;
  var initialChildren = null;
  var updatedChildren = null;
  for(var i = 0;update = updates[i];i++) {
    if(update.type === ReactMultiChildUpdateTypes$$module$DOMChildrenOperations.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes$$module$DOMChildrenOperations.REMOVE_NODE) {
      var updatedIndex = update.fromIndex;
      var updatedChild = update.parentNode.childNodes[updatedIndex];
      var parentID = update.parentID;
      initialChildren = initialChildren || {};
      initialChildren[parentID] = initialChildren[parentID] || [];
      initialChildren[parentID][updatedIndex] = updatedChild;
      updatedChildren = updatedChildren || [];
      updatedChildren.push(updatedChild)
    }
  }
  var renderedMarkup = Danger$$module$DOMChildrenOperations.dangerouslyRenderMarkup(markupList);
  if(updatedChildren) {
    for(var j = 0;j < updatedChildren.length;j++) {
      updatedChildren[j].parentNode.removeChild(updatedChildren[j])
    }
  }
  for(var k = 0;update = updates[k];k++) {
    switch(update.type) {
      case ReactMultiChildUpdateTypes$$module$DOMChildrenOperations.INSERT_MARKUP:
        insertChildAt$$module$DOMChildrenOperations(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
        break;
      case ReactMultiChildUpdateTypes$$module$DOMChildrenOperations.MOVE_EXISTING:
        insertChildAt$$module$DOMChildrenOperations(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
        break;
      case ReactMultiChildUpdateTypes$$module$DOMChildrenOperations.TEXT_CONTENT:
        update.parentNode[textContentAccessor$$module$DOMChildrenOperations] = update.textContent;
        break;
      case ReactMultiChildUpdateTypes$$module$DOMChildrenOperations.REMOVE_NODE:
        break
    }
  }
}};
module$DOMChildrenOperations.module$exports = DOMChildrenOperations$$module$DOMChildrenOperations;
if(module$DOMChildrenOperations.module$exports) {
  module$DOMChildrenOperations = module$DOMChildrenOperations.module$exports
}
;
