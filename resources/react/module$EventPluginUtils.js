goog.provide("module$EventPluginUtils");
var module$EventPluginUtils = {};
goog.require("module$invariant");
goog.require("module$EventConstants");
var EventConstants$$module$EventPluginUtils = module$EventConstants;
var invariant$$module$EventPluginUtils = module$invariant;
var topLevelTypes$$module$EventPluginUtils = EventConstants$$module$EventPluginUtils.topLevelTypes;
function isEndish$$module$EventPluginUtils(topLevelType) {
  return topLevelType === topLevelTypes$$module$EventPluginUtils.topMouseUp || topLevelType === topLevelTypes$$module$EventPluginUtils.topTouchEnd || topLevelType === topLevelTypes$$module$EventPluginUtils.topTouchCancel
}
function isMoveish$$module$EventPluginUtils(topLevelType) {
  return topLevelType === topLevelTypes$$module$EventPluginUtils.topMouseMove || topLevelType === topLevelTypes$$module$EventPluginUtils.topTouchMove
}
function isStartish$$module$EventPluginUtils(topLevelType) {
  return topLevelType === topLevelTypes$$module$EventPluginUtils.topMouseDown || topLevelType === topLevelTypes$$module$EventPluginUtils.topTouchStart
}
var validateEventDispatches$$module$EventPluginUtils;
function forEachEventDispatch$$module$EventPluginUtils(event, cb) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if(Array.isArray(dispatchListeners)) {
    for(var i = 0;i < dispatchListeners.length;i++) {
      if(event.isPropagationStopped()) {
        break
      }
      cb(event, dispatchListeners[i], dispatchIDs[i])
    }
  }else {
    if(dispatchListeners) {
      cb(event, dispatchListeners, dispatchIDs)
    }
  }
}
function executeDispatch$$module$EventPluginUtils(event, listener, domID) {
  listener(event, domID)
}
function executeDispatchesInOrder$$module$EventPluginUtils(event, executeDispatch) {
  forEachEventDispatch$$module$EventPluginUtils(event, executeDispatch);
  event._dispatchListeners = null;
  event._dispatchIDs = null
}
function executeDispatchesInOrderStopAtTrue$$module$EventPluginUtils(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if(Array.isArray(dispatchListeners)) {
    for(var i = 0;i < dispatchListeners.length;i++) {
      if(event.isPropagationStopped()) {
        break
      }
      if(dispatchListeners[i](event, dispatchIDs[i])) {
        return dispatchIDs[i]
      }
    }
  }else {
    if(dispatchListeners) {
      if(dispatchListeners(event, dispatchIDs)) {
        return dispatchIDs
      }
    }
  }
  return null
}
function executeDirectDispatch$$module$EventPluginUtils(event) {
  var dispatchListener = event._dispatchListeners;
  var dispatchID = event._dispatchIDs;
  invariant$$module$EventPluginUtils(!Array.isArray(dispatchListener));
  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
  event._dispatchListeners = null;
  event._dispatchIDs = null;
  return res
}
function hasDispatches$$module$EventPluginUtils(event) {
  return!!event._dispatchListeners
}
var EventPluginUtils$$module$EventPluginUtils = {isEndish:isEndish$$module$EventPluginUtils, isMoveish:isMoveish$$module$EventPluginUtils, isStartish:isStartish$$module$EventPluginUtils, executeDispatchesInOrder:executeDispatchesInOrder$$module$EventPluginUtils, executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue$$module$EventPluginUtils, executeDirectDispatch:executeDirectDispatch$$module$EventPluginUtils, hasDispatches:hasDispatches$$module$EventPluginUtils, executeDispatch:executeDispatch$$module$EventPluginUtils};
module$EventPluginUtils.module$exports = EventPluginUtils$$module$EventPluginUtils;
if(module$EventPluginUtils.module$exports) {
  module$EventPluginUtils = module$EventPluginUtils.module$exports
}
;
