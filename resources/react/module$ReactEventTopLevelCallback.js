;goog.provide("module$ReactEventTopLevelCallback");
var module$ReactEventTopLevelCallback = {};
goog.require("module$getEventTarget");
goog.require("module$ReactMount");
goog.require("module$ReactEventEmitter");
var ReactEventEmitter$$module$ReactEventTopLevelCallback = module$ReactEventEmitter;
var ReactMount$$module$ReactEventTopLevelCallback = module$ReactMount;
var getEventTarget$$module$ReactEventTopLevelCallback = module$getEventTarget;
var _topLevelListenersEnabled$$module$ReactEventTopLevelCallback = true;
var ReactEventTopLevelCallback$$module$ReactEventTopLevelCallback = {setEnabled:function(enabled) {
  _topLevelListenersEnabled$$module$ReactEventTopLevelCallback = !!enabled
}, isEnabled:function() {
  return _topLevelListenersEnabled$$module$ReactEventTopLevelCallback
}, createTopLevelCallback:function(topLevelType) {
  return function(nativeEvent) {
    if(!_topLevelListenersEnabled$$module$ReactEventTopLevelCallback) {
      return
    }
    if(nativeEvent.srcElement && nativeEvent.srcElement !== nativeEvent.target) {
      nativeEvent.target = nativeEvent.srcElement
    }
    var topLevelTarget = ReactMount$$module$ReactEventTopLevelCallback.getFirstReactDOM(getEventTarget$$module$ReactEventTopLevelCallback(nativeEvent)) || window;
    var topLevelTargetID = ReactMount$$module$ReactEventTopLevelCallback.getID(topLevelTarget) || "";
    ReactEventEmitter$$module$ReactEventTopLevelCallback.handleTopLevel(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent)
  }
}};
module$ReactEventTopLevelCallback.module$exports = ReactEventTopLevelCallback$$module$ReactEventTopLevelCallback;
if(module$ReactEventTopLevelCallback.module$exports) {
  module$ReactEventTopLevelCallback = module$ReactEventTopLevelCallback.module$exports
}
