goog.provide("module$MobileSafariClickEventPlugin");
var module$MobileSafariClickEventPlugin = {};
goog.require("module$emptyFunction");
goog.require("module$EventConstants");
var EventConstants$$module$MobileSafariClickEventPlugin = module$EventConstants;
var emptyFunction$$module$MobileSafariClickEventPlugin = module$emptyFunction;
var topLevelTypes$$module$MobileSafariClickEventPlugin = EventConstants$$module$MobileSafariClickEventPlugin.topLevelTypes;
var MobileSafariClickEventPlugin$$module$MobileSafariClickEventPlugin = {eventTypes:null, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  if(topLevelType === topLevelTypes$$module$MobileSafariClickEventPlugin.topTouchStart) {
    var target = nativeEvent.target;
    if(target && !target.onclick) {
      target.onclick = emptyFunction$$module$MobileSafariClickEventPlugin
    }
  }
}};
module$MobileSafariClickEventPlugin.module$exports = MobileSafariClickEventPlugin$$module$MobileSafariClickEventPlugin;
if(module$MobileSafariClickEventPlugin.module$exports) {
  module$MobileSafariClickEventPlugin = module$MobileSafariClickEventPlugin.module$exports
}
;
