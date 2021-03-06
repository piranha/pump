goog.provide("module$ReactReconcileTransaction");
var module$ReactReconcileTransaction = {};
goog.require("module$mixInto");
goog.require("module$Transaction");
goog.require("module$ReactMountReady");
goog.require("module$ReactInputSelection");
goog.require("module$ReactEventEmitter");
goog.require("module$PooledClass");
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$ReactReconcileTransaction = module$ExecutionEnvironment;
var PooledClass$$module$ReactReconcileTransaction = module$PooledClass;
var ReactEventEmitter$$module$ReactReconcileTransaction = module$ReactEventEmitter;
var ReactInputSelection$$module$ReactReconcileTransaction = module$ReactInputSelection;
var ReactMountReady$$module$ReactReconcileTransaction = module$ReactMountReady;
var Transaction$$module$ReactReconcileTransaction = module$Transaction;
var mixInto$$module$ReactReconcileTransaction = module$mixInto;
var SELECTION_RESTORATION$$module$ReactReconcileTransaction = {initialize:ReactInputSelection$$module$ReactReconcileTransaction.getSelectionInformation, close:ReactInputSelection$$module$ReactReconcileTransaction.restoreSelection};
var EVENT_SUPPRESSION$$module$ReactReconcileTransaction = {initialize:function() {
  var currentlyEnabled = ReactEventEmitter$$module$ReactReconcileTransaction.isEnabled();
  ReactEventEmitter$$module$ReactReconcileTransaction.setEnabled(false);
  return currentlyEnabled
}, close:function(previouslyEnabled) {
  ReactEventEmitter$$module$ReactReconcileTransaction.setEnabled(previouslyEnabled)
}};
var ON_DOM_READY_QUEUEING$$module$ReactReconcileTransaction = {initialize:function() {
  this.reactMountReady.reset()
}, close:function() {
  this.reactMountReady.notifyAll()
}};
var TRANSACTION_WRAPPERS$$module$ReactReconcileTransaction = [SELECTION_RESTORATION$$module$ReactReconcileTransaction, EVENT_SUPPRESSION$$module$ReactReconcileTransaction, ON_DOM_READY_QUEUEING$$module$ReactReconcileTransaction];
function ReactReconcileTransaction$$module$ReactReconcileTransaction() {
  this.reinitializeTransaction();
  this.reactMountReady = ReactMountReady$$module$ReactReconcileTransaction.getPooled(null)
}
var Mixin$$module$ReactReconcileTransaction = {getTransactionWrappers:function() {
  if(ExecutionEnvironment$$module$ReactReconcileTransaction.canUseDOM) {
    return TRANSACTION_WRAPPERS$$module$ReactReconcileTransaction
  }else {
    return[]
  }
}, getReactMountReady:function() {
  return this.reactMountReady
}, destructor:function() {
  ReactMountReady$$module$ReactReconcileTransaction.release(this.reactMountReady);
  this.reactMountReady = null
}};
mixInto$$module$ReactReconcileTransaction(ReactReconcileTransaction$$module$ReactReconcileTransaction, Transaction$$module$ReactReconcileTransaction.Mixin);
mixInto$$module$ReactReconcileTransaction(ReactReconcileTransaction$$module$ReactReconcileTransaction, Mixin$$module$ReactReconcileTransaction);
PooledClass$$module$ReactReconcileTransaction.addPoolingTo(ReactReconcileTransaction$$module$ReactReconcileTransaction);
module$ReactReconcileTransaction.module$exports = ReactReconcileTransaction$$module$ReactReconcileTransaction;
if(module$ReactReconcileTransaction.module$exports) {
  module$ReactReconcileTransaction = module$ReactReconcileTransaction.module$exports
}
;
