goog.provide("module$getReactRootElementInContainer");
var module$getReactRootElementInContainer = {};
var DOC_NODE_TYPE$$module$getReactRootElementInContainer = 9;
function getReactRootElementInContainer$$module$getReactRootElementInContainer(container) {
  if(!container) {
    return null
  }
  if(container.nodeType === DOC_NODE_TYPE$$module$getReactRootElementInContainer) {
    return container.documentElement
  }else {
    return container.firstChild
  }
}
module$getReactRootElementInContainer.module$exports = getReactRootElementInContainer$$module$getReactRootElementInContainer;
if(module$getReactRootElementInContainer.module$exports) {
  module$getReactRootElementInContainer = module$getReactRootElementInContainer.module$exports
}
;
