;goog.provide("module$traverseAllChildren");
var module$traverseAllChildren = {};
goog.require("module$invariant");
goog.require("module$ReactTextComponent");
goog.require("module$ReactComponent");
var ReactComponent$$module$traverseAllChildren = module$ReactComponent;
var ReactTextComponent$$module$traverseAllChildren = module$ReactTextComponent;
var invariant$$module$traverseAllChildren = module$invariant;
var traverseAllChildrenImpl$$module$traverseAllChildren = function(children, nameSoFar, indexSoFar, callback, traverseContext) {
  var subtreeCount = 0;
  if(Array.isArray(children)) {
    for(var i = 0;i < children.length;i++) {
      var child = children[i];
      var nextName = nameSoFar + ReactComponent$$module$traverseAllChildren.getKey(child, i);
      var nextIndex = indexSoFar + subtreeCount;
      subtreeCount += traverseAllChildrenImpl$$module$traverseAllChildren(child, nextName, nextIndex, callback, traverseContext)
    }
  }else {
    var type = typeof children;
    var isOnlyChild = nameSoFar === "";
    var storageName = isOnlyChild ? ReactComponent$$module$traverseAllChildren.getKey(children, 0) : nameSoFar;
    if(children === null || children === undefined || type === "boolean") {
      callback(traverseContext, null, storageName, indexSoFar);
      subtreeCount = 1
    }else {
      if(children.mountComponentIntoNode) {
        callback(traverseContext, children, storageName, indexSoFar);
        subtreeCount = 1
      }else {
        if(type === "object") {
          invariant$$module$traverseAllChildren(!children || children.nodeType !== 1);
          for(var key in children) {
            if(children.hasOwnProperty(key)) {
              subtreeCount += traverseAllChildrenImpl$$module$traverseAllChildren(children[key], nameSoFar + "{" + key + "}", indexSoFar + subtreeCount, callback, traverseContext)
            }
          }
        }else {
          if(type === "string") {
            var normalizedText = new ReactTextComponent$$module$traverseAllChildren(children);
            callback(traverseContext, normalizedText, storageName, indexSoFar);
            subtreeCount += 1
          }else {
            if(type === "number") {
              var normalizedNumber = new ReactTextComponent$$module$traverseAllChildren("" + children);
              callback(traverseContext, normalizedNumber, storageName, indexSoFar);
              subtreeCount += 1
            }
          }
        }
      }
    }
  }
  return subtreeCount
};
function traverseAllChildren$$module$traverseAllChildren(children, callback, traverseContext) {
  if(children !== null && children !== undefined) {
    traverseAllChildrenImpl$$module$traverseAllChildren(children, "", 0, callback, traverseContext)
  }
}
module$traverseAllChildren.module$exports = traverseAllChildren$$module$traverseAllChildren;
if(module$traverseAllChildren.module$exports) {
  module$traverseAllChildren = module$traverseAllChildren.module$exports
}
