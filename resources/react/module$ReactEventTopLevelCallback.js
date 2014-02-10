goog.provide("module$ReactEventTopLevelCallback");
var module$ReactEventTopLevelCallback = {};
goog.require("module$getEventTarget");
goog.require("module$ReactMount");
goog.require("module$ReactInstanceHandles");
goog.require("module$ReactEventEmitter");
var ReactEventEmitter$$module$ReactEventTopLevelCallback = module$ReactEventEmitter;
var ReactInstanceHandles$$module$ReactEventTopLevelCallback = module$ReactInstanceHandles;
var ReactMount$$module$ReactEventTopLevelCallback = module$ReactMount;
var getEventTarget$$module$ReactEventTopLevelCallback = module$getEventTarget;
var _topLevelListenersEnabled$$module$ReactEventTopLevelCallback = true;
function findParent$$module$ReactEventTopLevelCallback(node) {
  var nodeID = ReactMount$$module$ReactEventTopLevelCallback.getID(node);
  var rootID = ReactInstanceHandles$$module$ReactEventTopLevelCallback.getReactRootIDFromNodeID(nodeID);
  var container = ReactMount$$module$ReactEventTopLevelCallback.findReactContainerForID(rootID);
  var parent = ReactMount$$module$ReactEventTopLevelCallback.getFirstReactDOM(container);
  return parent
}
var ReactEventTopLevelCallback$$module$ReactEventTopLevelCallback = {setEnabled:function(enabled) {
  _topLevelListenersEnabled$$module$ReactEventTopLevelCallback = !!enabled
}, isEnabled:function() {
  return _topLevelListenersEnabled$$module$ReactEventTopLevelCallback
}, createTopLevelCallback:function(topLevelType) {
  return function(nativeEvent) {
    if(!_topLevelListenersEnabled$$module$ReactEventTopLevelCallback) {
      return
    }
    var topLevelTarget = ReactMount$$module$ReactEventTopLevelCallback.getFirstReactDOM(getEventTarget$$module$ReactEventTopLevelCallback(nativeEvent)) || window;
    while(topLevelTarget) {
      var topLevelTargetID = ReactMount$$module$ReactEventTopLevelCallback.getID(topLevelTarget) || "";
      ReactEventEmitter$$module$ReactEventTopLevelCallback.handleTopLevel(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
      topLevelTarget = findParent$$module$ReactEventTopLevelCallback(topLevelTarget)
    }
  }
}};
module$ReactEventTopLevelCallback.module$exports = ReactEventTopLevelCallback$$module$ReactEventTopLevelCallback;
if(module$ReactEventTopLevelCallback.module$exports) {
  module$ReactEventTopLevelCallback = module$ReactEventTopLevelCallback.module$exports
}
;
