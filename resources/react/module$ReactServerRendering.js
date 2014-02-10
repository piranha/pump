goog.provide("module$ReactServerRendering");
var module$ReactServerRendering = {};
goog.require("module$invariant");
goog.require("module$ReactReconcileTransaction");
goog.require("module$ReactMarkupChecksum");
goog.require("module$ReactInstanceHandles");
goog.require("module$ReactComponent");
var ReactComponent$$module$ReactServerRendering = module$ReactComponent;
var ReactInstanceHandles$$module$ReactServerRendering = module$ReactInstanceHandles;
var ReactMarkupChecksum$$module$ReactServerRendering = module$ReactMarkupChecksum;
var ReactReconcileTransaction$$module$ReactServerRendering = module$ReactReconcileTransaction;
var invariant$$module$ReactServerRendering = module$invariant;
function renderComponentToString$$module$ReactServerRendering(component, callback) {
  invariant$$module$ReactServerRendering(ReactComponent$$module$ReactServerRendering.isValidComponent(component));
  invariant$$module$ReactServerRendering(typeof callback === "function");
  var id = ReactInstanceHandles$$module$ReactServerRendering.createReactRootID();
  var transaction = ReactReconcileTransaction$$module$ReactServerRendering.getPooled();
  transaction.reinitializeTransaction();
  try {
    transaction.perform(function() {
      var markup = component.mountComponent(id, transaction, 0);
      markup = ReactMarkupChecksum$$module$ReactServerRendering.addChecksumToMarkup(markup);
      callback(markup)
    }, null)
  }finally {
    ReactReconcileTransaction$$module$ReactServerRendering.release(transaction)
  }
}
module$ReactServerRendering.module$exports = {renderComponentToString:renderComponentToString$$module$ReactServerRendering};
if(module$ReactServerRendering.module$exports) {
  module$ReactServerRendering = module$ReactServerRendering.module$exports
}
;
