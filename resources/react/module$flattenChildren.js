goog.provide("module$flattenChildren");
var module$flattenChildren = {};
goog.require("module$traverseAllChildren");
goog.require("module$invariant");
var invariant$$module$flattenChildren = module$invariant;
var traverseAllChildren$$module$flattenChildren = module$traverseAllChildren;
function flattenSingleChildIntoContext$$module$flattenChildren(traverseContext, child, name) {
  var result = traverseContext;
  invariant$$module$flattenChildren(!result.hasOwnProperty(name));
  result[name] = child
}
function flattenChildren$$module$flattenChildren(children) {
  if(children == null) {
    return children
  }
  var result = {};
  traverseAllChildren$$module$flattenChildren(children, flattenSingleChildIntoContext$$module$flattenChildren, result);
  return result
}
module$flattenChildren.module$exports = flattenChildren$$module$flattenChildren;
if(module$flattenChildren.module$exports) {
  module$flattenChildren = module$flattenChildren.module$exports
}
;
