;goog.provide("module$ReactEventEmitterMixin");
var module$ReactEventEmitterMixin = {};
goog.require("module$ReactUpdates");
goog.require("module$EventPluginHub");
var EventPluginHub$$module$ReactEventEmitterMixin = module$EventPluginHub;
var ReactUpdates$$module$ReactEventEmitterMixin = module$ReactUpdates;
function runEventQueueInBatch$$module$ReactEventEmitterMixin(events) {
  EventPluginHub$$module$ReactEventEmitterMixin.enqueueEvents(events);
  EventPluginHub$$module$ReactEventEmitterMixin.processEventQueue()
}
var ReactEventEmitterMixin$$module$ReactEventEmitterMixin = {_isListening:false, ensureListening:function(config) {
  if(!config.contentDocument._reactIsListening) {
    this.listenAtTopLevel(config.touchNotMouse, config.contentDocument);
    config.contentDocument._reactIsListening = true
  }
}, handleTopLevel:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var events = EventPluginHub$$module$ReactEventEmitterMixin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
  ReactUpdates$$module$ReactEventEmitterMixin.batchedUpdates(runEventQueueInBatch$$module$ReactEventEmitterMixin, events)
}};
module$ReactEventEmitterMixin.module$exports = ReactEventEmitterMixin$$module$ReactEventEmitterMixin;
if(module$ReactEventEmitterMixin.module$exports) {
  module$ReactEventEmitterMixin = module$ReactEventEmitterMixin.module$exports
}
