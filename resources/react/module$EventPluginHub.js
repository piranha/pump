goog.provide("module$EventPluginHub");
var module$EventPluginHub = {};
goog.require("module$invariant");
goog.require("module$forEachAccumulated");
goog.require("module$accumulate");
goog.require("module$ExecutionEnvironment");
goog.require("module$EventPropagators");
goog.require("module$EventPluginUtils");
goog.require("module$EventPluginRegistry");
goog.require("module$CallbackRegistry");
var CallbackRegistry$$module$EventPluginHub = module$CallbackRegistry;
var EventPluginRegistry$$module$EventPluginHub = module$EventPluginRegistry;
var EventPluginUtils$$module$EventPluginHub = module$EventPluginUtils;
var EventPropagators$$module$EventPluginHub = module$EventPropagators;
var ExecutionEnvironment$$module$EventPluginHub = module$ExecutionEnvironment;
var accumulate$$module$EventPluginHub = module$accumulate;
var forEachAccumulated$$module$EventPluginHub = module$forEachAccumulated;
var invariant$$module$EventPluginHub = module$invariant;
var eventQueue$$module$EventPluginHub = null;
var executeDispatchesAndRelease$$module$EventPluginHub = function(event) {
  if(event) {
    var executeDispatch = EventPluginUtils$$module$EventPluginHub.executeDispatch;
    var PluginModule = EventPluginRegistry$$module$EventPluginHub.getPluginModuleForEvent(event);
    if(PluginModule && PluginModule.executeDispatch) {
      executeDispatch = PluginModule.executeDispatch
    }
    EventPluginUtils$$module$EventPluginHub.executeDispatchesInOrder(event, executeDispatch);
    if(!event.isPersistent()) {
      event.constructor.release(event)
    }
  }
};
var EventPluginHub$$module$EventPluginHub = {injection:{injectInstanceHandle:EventPropagators$$module$EventPluginHub.injection.injectInstanceHandle, injectEventPluginOrder:EventPluginRegistry$$module$EventPluginHub.injectEventPluginOrder, injectEventPluginsByName:EventPluginRegistry$$module$EventPluginHub.injectEventPluginsByName}, registrationNames:EventPluginRegistry$$module$EventPluginHub.registrationNames, putListener:CallbackRegistry$$module$EventPluginHub.putListener, getListener:CallbackRegistry$$module$EventPluginHub.getListener, 
deleteListener:CallbackRegistry$$module$EventPluginHub.deleteListener, deleteAllListeners:CallbackRegistry$$module$EventPluginHub.deleteAllListeners, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var events;
  var plugins = EventPluginRegistry$$module$EventPluginHub.plugins;
  for(var i = 0, l = plugins.length;i < l;i++) {
    var possiblePlugin = plugins[i];
    if(possiblePlugin) {
      var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
      if(extractedEvents) {
        events = accumulate$$module$EventPluginHub(events, extractedEvents)
      }
    }
  }
  return events
}, enqueueEvents:function(events) {
  if(events) {
    eventQueue$$module$EventPluginHub = accumulate$$module$EventPluginHub(eventQueue$$module$EventPluginHub, events)
  }
}, processEventQueue:function() {
  var processingEventQueue = eventQueue$$module$EventPluginHub;
  eventQueue$$module$EventPluginHub = null;
  forEachAccumulated$$module$EventPluginHub(processingEventQueue, executeDispatchesAndRelease$$module$EventPluginHub);
  invariant$$module$EventPluginHub(!eventQueue$$module$EventPluginHub)
}};
if(ExecutionEnvironment$$module$EventPluginHub.canUseDOM) {
  window.EventPluginHub = EventPluginHub$$module$EventPluginHub
}
module$EventPluginHub.module$exports = EventPluginHub$$module$EventPluginHub;
if(module$EventPluginHub.module$exports) {
  module$EventPluginHub = module$EventPluginHub.module$exports
}
;
