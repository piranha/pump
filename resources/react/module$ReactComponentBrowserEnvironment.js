goog.provide("module$ReactComponentBrowserEnvironment");
var module$ReactComponentBrowserEnvironment = {};
goog.require("module$mutateHTMLNodeWithMarkup");
goog.require("module$invariant");
goog.require("module$getReactRootElementInContainer");
goog.require("module$ReactReconcileTransaction");
goog.require("module$ReactMount");
goog.require("module$ReactMarkupChecksum");
goog.require("module$ReactDOMIDOperations");
var ReactDOMIDOperations$$module$ReactComponentBrowserEnvironment = module$ReactDOMIDOperations;
var ReactMarkupChecksum$$module$ReactComponentBrowserEnvironment = module$ReactMarkupChecksum;
var ReactMount$$module$ReactComponentBrowserEnvironment = module$ReactMount;
var ReactReconcileTransaction$$module$ReactComponentBrowserEnvironment = module$ReactReconcileTransaction;
var getReactRootElementInContainer$$module$ReactComponentBrowserEnvironment = module$getReactRootElementInContainer;
var invariant$$module$ReactComponentBrowserEnvironment = module$invariant;
var mutateHTMLNodeWithMarkup$$module$ReactComponentBrowserEnvironment = module$mutateHTMLNodeWithMarkup;
var ELEMENT_NODE_TYPE$$module$ReactComponentBrowserEnvironment = 1;
var DOC_NODE_TYPE$$module$ReactComponentBrowserEnvironment = 9;
var ReactComponentBrowserEnvironment$$module$ReactComponentBrowserEnvironment = {Mixin:{getDOMNode:function() {
  invariant$$module$ReactComponentBrowserEnvironment(this.isMounted());
  return ReactMount$$module$ReactComponentBrowserEnvironment.getNode(this._rootNodeID)
}}, ReactReconcileTransaction:ReactReconcileTransaction$$module$ReactComponentBrowserEnvironment, DOMIDOperations:ReactDOMIDOperations$$module$ReactComponentBrowserEnvironment, unmountIDFromEnvironment:function(rootNodeID) {
  ReactMount$$module$ReactComponentBrowserEnvironment.purgeID(rootNodeID)
}, mountImageIntoNode:function(markup, container, shouldReuseMarkup) {
  invariant$$module$ReactComponentBrowserEnvironment(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$ReactComponentBrowserEnvironment || container.nodeType === DOC_NODE_TYPE$$module$ReactComponentBrowserEnvironment && ReactMount$$module$ReactComponentBrowserEnvironment.allowFullPageRender));
  if(shouldReuseMarkup) {
    if(ReactMarkupChecksum$$module$ReactComponentBrowserEnvironment.canReuseMarkup(markup, getReactRootElementInContainer$$module$ReactComponentBrowserEnvironment(container))) {
      return
    }else {
      if(false) {
        console.warn("React attempted to use reuse markup in a container but the " + "checksum was invalid. This generally means that you are using " + "server rendering and the markup generated on the server was " + "not what the client was expecting. React injected new markup " + "to compensate which works but you have lost many of the " + "benefits of server rendering. Instead, figure out why the " + "markup being generated is different on the client or server.")
      }
    }
  }
  if(container.nodeType === DOC_NODE_TYPE$$module$ReactComponentBrowserEnvironment) {
    mutateHTMLNodeWithMarkup$$module$ReactComponentBrowserEnvironment(container.documentElement, markup);
    return
  }
  var parent = container.parentNode;
  if(parent) {
    var next = container.nextSibling;
    parent.removeChild(container);
    container.innerHTML = markup;
    if(next) {
      parent.insertBefore(container, next)
    }else {
      parent.appendChild(container)
    }
  }else {
    container.innerHTML = markup
  }
}};
module$ReactComponentBrowserEnvironment.module$exports = ReactComponentBrowserEnvironment$$module$ReactComponentBrowserEnvironment;
if(module$ReactComponentBrowserEnvironment.module$exports) {
  module$ReactComponentBrowserEnvironment = module$ReactComponentBrowserEnvironment.module$exports
}
;
