goog.provide("module$EnterLeaveEventPlugin");
var module$EnterLeaveEventPlugin = {};
goog.require("module$keyOf");
goog.require("module$ReactMount");
goog.require("module$SyntheticMouseEvent");
goog.require("module$EventPropagators");
goog.require("module$EventConstants");
var EventConstants$$module$EnterLeaveEventPlugin = module$EventConstants;
var EventPropagators$$module$EnterLeaveEventPlugin = module$EventPropagators;
var SyntheticMouseEvent$$module$EnterLeaveEventPlugin = module$SyntheticMouseEvent;
var ReactMount$$module$EnterLeaveEventPlugin = module$ReactMount;
var keyOf$$module$EnterLeaveEventPlugin = module$keyOf;
var topLevelTypes$$module$EnterLeaveEventPlugin = EventConstants$$module$EnterLeaveEventPlugin.topLevelTypes;
var getFirstReactDOM$$module$EnterLeaveEventPlugin = ReactMount$$module$EnterLeaveEventPlugin.getFirstReactDOM;
var eventTypes$$module$EnterLeaveEventPlugin = {mouseEnter:{registrationName:keyOf$$module$EnterLeaveEventPlugin({onMouseEnter:null})}, mouseLeave:{registrationName:keyOf$$module$EnterLeaveEventPlugin({onMouseLeave:null})}};
var extractedEvents$$module$EnterLeaveEventPlugin = [null, null];
var EnterLeaveEventPlugin$$module$EnterLeaveEventPlugin = {eventTypes:eventTypes$$module$EnterLeaveEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  if(topLevelType === topLevelTypes$$module$EnterLeaveEventPlugin.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
    return null
  }
  if(topLevelType !== topLevelTypes$$module$EnterLeaveEventPlugin.topMouseOut && topLevelType !== topLevelTypes$$module$EnterLeaveEventPlugin.topMouseOver) {
    return null
  }
  var from, to;
  if(topLevelType === topLevelTypes$$module$EnterLeaveEventPlugin.topMouseOut) {
    from = topLevelTarget;
    to = getFirstReactDOM$$module$EnterLeaveEventPlugin(nativeEvent.relatedTarget || nativeEvent.toElement) || window
  }else {
    from = window;
    to = topLevelTarget
  }
  if(from === to) {
    return null
  }
  var fromID = from ? ReactMount$$module$EnterLeaveEventPlugin.getID(from) : "";
  var toID = to ? ReactMount$$module$EnterLeaveEventPlugin.getID(to) : "";
  var leave = SyntheticMouseEvent$$module$EnterLeaveEventPlugin.getPooled(eventTypes$$module$EnterLeaveEventPlugin.mouseLeave, fromID, nativeEvent);
  var enter = SyntheticMouseEvent$$module$EnterLeaveEventPlugin.getPooled(eventTypes$$module$EnterLeaveEventPlugin.mouseEnter, toID, nativeEvent);
  EventPropagators$$module$EnterLeaveEventPlugin.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
  extractedEvents$$module$EnterLeaveEventPlugin[0] = leave;
  extractedEvents$$module$EnterLeaveEventPlugin[1] = enter;
  return extractedEvents$$module$EnterLeaveEventPlugin
}};
module$EnterLeaveEventPlugin.module$exports = EnterLeaveEventPlugin$$module$EnterLeaveEventPlugin;
if(module$EnterLeaveEventPlugin.module$exports) {
  module$EnterLeaveEventPlugin = module$EnterLeaveEventPlugin.module$exports
}
;
