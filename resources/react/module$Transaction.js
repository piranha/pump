;goog.provide("module$Transaction");
var module$Transaction = {};
goog.require("module$invariant");
var invariant$$module$Transaction = module$invariant;
var Mixin$$module$Transaction = {reinitializeTransaction:function() {
  this.transactionWrappers = this.getTransactionWrappers();
  if(!this.wrapperInitData) {
    this.wrapperInitData = []
  }else {
    this.wrapperInitData.length = 0
  }
  if(!this.timingMetrics) {
    this.timingMetrics = {}
  }
  this.timingMetrics.methodInvocationTime = 0;
  if(!this.timingMetrics.wrapperInitTimes) {
    this.timingMetrics.wrapperInitTimes = []
  }else {
    this.timingMetrics.wrapperInitTimes.length = 0
  }
  if(!this.timingMetrics.wrapperCloseTimes) {
    this.timingMetrics.wrapperCloseTimes = []
  }else {
    this.timingMetrics.wrapperCloseTimes.length = 0
  }
  this._isInTransaction = false
}, _isInTransaction:false, getTransactionWrappers:null, isInTransaction:function() {
  return!!this._isInTransaction
}, perform:function(method, scope, a, b, c, d, e, f) {
  invariant$$module$Transaction(!this.isInTransaction());
  var memberStart = Date.now();
  var errorToThrow = null;
  var ret;
  try {
    this.initializeAll();
    ret = method.call(scope, a, b, c, d, e, f)
  }catch(error) {
    errorToThrow = error
  }finally {
    var memberEnd = Date.now();
    this.methodInvocationTime += memberEnd - memberStart;
    try {
      this.closeAll()
    }catch(closeError) {
      errorToThrow = errorToThrow || closeError
    }
  }
  if(errorToThrow) {
    throw errorToThrow;
  }
  return ret
}, initializeAll:function() {
  this._isInTransaction = true;
  var transactionWrappers = this.transactionWrappers;
  var wrapperInitTimes = this.timingMetrics.wrapperInitTimes;
  var errorToThrow = null;
  for(var i = 0;i < transactionWrappers.length;i++) {
    var initStart = Date.now();
    var wrapper = transactionWrappers[i];
    try {
      this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null
    }catch(initError) {
      errorToThrow = errorToThrow || initError;
      this.wrapperInitData[i] = Transaction$$module$Transaction.OBSERVED_ERROR
    }finally {
      var curInitTime = wrapperInitTimes[i];
      var initEnd = Date.now();
      wrapperInitTimes[i] = (curInitTime || 0) + (initEnd - initStart)
    }
  }
  if(errorToThrow) {
    throw errorToThrow;
  }
}, closeAll:function() {
  invariant$$module$Transaction(this.isInTransaction());
  var transactionWrappers = this.transactionWrappers;
  var wrapperCloseTimes = this.timingMetrics.wrapperCloseTimes;
  var errorToThrow = null;
  for(var i = 0;i < transactionWrappers.length;i++) {
    var wrapper = transactionWrappers[i];
    var closeStart = Date.now();
    var initData = this.wrapperInitData[i];
    try {
      if(initData !== Transaction$$module$Transaction.OBSERVED_ERROR) {
        wrapper.close && wrapper.close.call(this, initData)
      }
    }catch(closeError) {
      errorToThrow = errorToThrow || closeError
    }finally {
      var closeEnd = Date.now();
      var curCloseTime = wrapperCloseTimes[i];
      wrapperCloseTimes[i] = (curCloseTime || 0) + (closeEnd - closeStart)
    }
  }
  this.wrapperInitData.length = 0;
  this._isInTransaction = false;
  if(errorToThrow) {
    throw errorToThrow;
  }
}};
var Transaction$$module$Transaction = {Mixin:Mixin$$module$Transaction, OBSERVED_ERROR:{}};
module$Transaction.module$exports = Transaction$$module$Transaction;
if(module$Transaction.module$exports) {
  module$Transaction = module$Transaction.module$exports
}
