goog.provide("module$ReactUpdates");
var module$ReactUpdates = {};
goog.require("module$invariant");
var invariant$$module$ReactUpdates = module$invariant;
var dirtyComponents$$module$ReactUpdates = [];
var batchingStrategy$$module$ReactUpdates = null;
function ensureBatchingStrategy$$module$ReactUpdates() {
  invariant$$module$ReactUpdates(batchingStrategy$$module$ReactUpdates)
}
function batchedUpdates$$module$ReactUpdates(callback, param) {
  ensureBatchingStrategy$$module$ReactUpdates();
  batchingStrategy$$module$ReactUpdates.batchedUpdates(callback, param)
}
function mountDepthComparator$$module$ReactUpdates(c1, c2) {
  return c1._mountDepth - c2._mountDepth
}
function runBatchedUpdates$$module$ReactUpdates() {
  dirtyComponents$$module$ReactUpdates.sort(mountDepthComparator$$module$ReactUpdates);
  for(var i = 0;i < dirtyComponents$$module$ReactUpdates.length;i++) {
    var component = dirtyComponents$$module$ReactUpdates[i];
    if(component.isMounted()) {
      var callbacks = component._pendingCallbacks;
      component._pendingCallbacks = null;
      component.performUpdateIfNecessary();
      if(callbacks) {
        for(var j = 0;j < callbacks.length;j++) {
          callbacks[j].call(component)
        }
      }
    }
  }
}
function clearDirtyComponents$$module$ReactUpdates() {
  dirtyComponents$$module$ReactUpdates.length = 0
}
function flushBatchedUpdates$$module$ReactUpdates() {
  try {
    runBatchedUpdates$$module$ReactUpdates()
  }catch(e) {
    throw e;
  }finally {
    clearDirtyComponents$$module$ReactUpdates()
  }
}
function enqueueUpdate$$module$ReactUpdates(component, callback) {
  invariant$$module$ReactUpdates(!callback || typeof callback === "function");
  ensureBatchingStrategy$$module$ReactUpdates();
  if(!batchingStrategy$$module$ReactUpdates.isBatchingUpdates) {
    component.performUpdateIfNecessary();
    callback && callback();
    return
  }
  dirtyComponents$$module$ReactUpdates.push(component);
  if(callback) {
    if(component._pendingCallbacks) {
      component._pendingCallbacks.push(callback)
    }else {
      component._pendingCallbacks = [callback]
    }
  }
}
var ReactUpdatesInjection$$module$ReactUpdates = {injectBatchingStrategy:function(_batchingStrategy) {
  invariant$$module$ReactUpdates(_batchingStrategy);
  invariant$$module$ReactUpdates(typeof _batchingStrategy.batchedUpdates === "function");
  invariant$$module$ReactUpdates(typeof _batchingStrategy.isBatchingUpdates === "boolean");
  batchingStrategy$$module$ReactUpdates = _batchingStrategy
}};
var ReactUpdates$$module$ReactUpdates = {batchedUpdates:batchedUpdates$$module$ReactUpdates, enqueueUpdate:enqueueUpdate$$module$ReactUpdates, flushBatchedUpdates:flushBatchedUpdates$$module$ReactUpdates, injection:ReactUpdatesInjection$$module$ReactUpdates};
module$ReactUpdates.module$exports = ReactUpdates$$module$ReactUpdates;
if(module$ReactUpdates.module$exports) {
  module$ReactUpdates = module$ReactUpdates.module$exports
}
;
