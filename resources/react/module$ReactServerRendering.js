;goog.provide("module$ReactServerRendering");
var module$ReactServerRendering = {};
goog.require("module$ReactInstanceHandles");
goog.require("module$ReactReconcileTransaction");
goog.require("module$ReactMarkupChecksum");
var ReactMarkupChecksum$$module$ReactServerRendering = module$ReactMarkupChecksum;
var ReactReconcileTransaction$$module$ReactServerRendering = module$ReactReconcileTransaction;
var ReactInstanceHandles$$module$ReactServerRendering = module$ReactInstanceHandles;
function renderComponentToString$$module$ReactServerRendering(component, callback) {
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
