goog.provide("module$ReactDefaultBatchingStrategy");
var module$ReactDefaultBatchingStrategy = {};
goog.require("module$mixInto");
goog.require("module$emptyFunction");
goog.require("module$Transaction");
goog.require("module$ReactUpdates");
var ReactUpdates$$module$ReactDefaultBatchingStrategy = module$ReactUpdates;
var Transaction$$module$ReactDefaultBatchingStrategy = module$Transaction;
var emptyFunction$$module$ReactDefaultBatchingStrategy = module$emptyFunction;
var mixInto$$module$ReactDefaultBatchingStrategy = module$mixInto;
var RESET_BATCHED_UPDATES$$module$ReactDefaultBatchingStrategy = {initialize:emptyFunction$$module$ReactDefaultBatchingStrategy, close:function() {
  ReactDefaultBatchingStrategy$$module$ReactDefaultBatchingStrategy.isBatchingUpdates = false
}};
var FLUSH_BATCHED_UPDATES$$module$ReactDefaultBatchingStrategy = {initialize:emptyFunction$$module$ReactDefaultBatchingStrategy, close:ReactUpdates$$module$ReactDefaultBatchingStrategy.flushBatchedUpdates.bind(ReactUpdates$$module$ReactDefaultBatchingStrategy)};
var TRANSACTION_WRAPPERS$$module$ReactDefaultBatchingStrategy = [FLUSH_BATCHED_UPDATES$$module$ReactDefaultBatchingStrategy, RESET_BATCHED_UPDATES$$module$ReactDefaultBatchingStrategy];
function ReactDefaultBatchingStrategyTransaction$$module$ReactDefaultBatchingStrategy() {
  this.reinitializeTransaction()
}
mixInto$$module$ReactDefaultBatchingStrategy(ReactDefaultBatchingStrategyTransaction$$module$ReactDefaultBatchingStrategy, Transaction$$module$ReactDefaultBatchingStrategy.Mixin);
mixInto$$module$ReactDefaultBatchingStrategy(ReactDefaultBatchingStrategyTransaction$$module$ReactDefaultBatchingStrategy, {getTransactionWrappers:function() {
  return TRANSACTION_WRAPPERS$$module$ReactDefaultBatchingStrategy
}});
var transaction$$module$ReactDefaultBatchingStrategy = new ReactDefaultBatchingStrategyTransaction$$module$ReactDefaultBatchingStrategy;
var ReactDefaultBatchingStrategy$$module$ReactDefaultBatchingStrategy = {isBatchingUpdates:false, batchedUpdates:function(callback, param) {
  var alreadyBatchingUpdates = ReactDefaultBatchingStrategy$$module$ReactDefaultBatchingStrategy.isBatchingUpdates;
  ReactDefaultBatchingStrategy$$module$ReactDefaultBatchingStrategy.isBatchingUpdates = true;
  if(alreadyBatchingUpdates) {
    callback(param)
  }else {
    transaction$$module$ReactDefaultBatchingStrategy.perform(callback, null, param)
  }
}};
module$ReactDefaultBatchingStrategy.module$exports = ReactDefaultBatchingStrategy$$module$ReactDefaultBatchingStrategy;
if(module$ReactDefaultBatchingStrategy.module$exports) {
  module$ReactDefaultBatchingStrategy = module$ReactDefaultBatchingStrategy.module$exports
}
;
