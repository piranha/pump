goog.provide("module$CompositionEventPlugin");
var module$CompositionEventPlugin = {};
goog.require("module$keyOf");
goog.require("module$getTextContentAccessor");
goog.require("module$SyntheticCompositionEvent");
goog.require("module$ReactInputSelection");
goog.require("module$ExecutionEnvironment");
goog.require("module$EventPropagators");
goog.require("module$EventConstants");
var EventConstants$$module$CompositionEventPlugin = module$EventConstants;
var EventPropagators$$module$CompositionEventPlugin = module$EventPropagators;
var ExecutionEnvironment$$module$CompositionEventPlugin = module$ExecutionEnvironment;
var ReactInputSelection$$module$CompositionEventPlugin = module$ReactInputSelection;
var SyntheticCompositionEvent$$module$CompositionEventPlugin = module$SyntheticCompositionEvent;
var getTextContentAccessor$$module$CompositionEventPlugin = module$getTextContentAccessor;
var keyOf$$module$CompositionEventPlugin = module$keyOf;
var END_KEYCODES$$module$CompositionEventPlugin = [9, 13, 27, 32];
var START_KEYCODE$$module$CompositionEventPlugin = 229;
var useCompositionEvent$$module$CompositionEventPlugin = ExecutionEnvironment$$module$CompositionEventPlugin.canUseDOM && "CompositionEvent" in window;
var topLevelTypes$$module$CompositionEventPlugin = EventConstants$$module$CompositionEventPlugin.topLevelTypes;
var currentComposition$$module$CompositionEventPlugin = null;
var eventTypes$$module$CompositionEventPlugin = {compositionEnd:{phasedRegistrationNames:{bubbled:keyOf$$module$CompositionEventPlugin({onCompositionEnd:null}), captured:keyOf$$module$CompositionEventPlugin({onCompositionEndCapture:null})}}, compositionStart:{phasedRegistrationNames:{bubbled:keyOf$$module$CompositionEventPlugin({onCompositionStart:null}), captured:keyOf$$module$CompositionEventPlugin({onCompositionStartCapture:null})}}, compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf$$module$CompositionEventPlugin({onCompositionUpdate:null}), 
captured:keyOf$$module$CompositionEventPlugin({onCompositionUpdateCapture:null})}}};
function getCompositionEventType$$module$CompositionEventPlugin(topLevelType) {
  switch(topLevelType) {
    case topLevelTypes$$module$CompositionEventPlugin.topCompositionStart:
      return eventTypes$$module$CompositionEventPlugin.compositionStart;
    case topLevelTypes$$module$CompositionEventPlugin.topCompositionEnd:
      return eventTypes$$module$CompositionEventPlugin.compositionEnd;
    case topLevelTypes$$module$CompositionEventPlugin.topCompositionUpdate:
      return eventTypes$$module$CompositionEventPlugin.compositionUpdate
  }
}
function isFallbackStart$$module$CompositionEventPlugin(topLevelType, nativeEvent) {
  return topLevelType === topLevelTypes$$module$CompositionEventPlugin.topKeyDown && nativeEvent.keyCode === START_KEYCODE$$module$CompositionEventPlugin
}
function isFallbackEnd$$module$CompositionEventPlugin(topLevelType, nativeEvent) {
  switch(topLevelType) {
    case topLevelTypes$$module$CompositionEventPlugin.topKeyUp:
      return END_KEYCODES$$module$CompositionEventPlugin.indexOf(nativeEvent.keyCode) !== -1;
    case topLevelTypes$$module$CompositionEventPlugin.topKeyDown:
      return nativeEvent.keyCode !== START_KEYCODE$$module$CompositionEventPlugin;
    case topLevelTypes$$module$CompositionEventPlugin.topKeyPress:
    ;
    case topLevelTypes$$module$CompositionEventPlugin.topMouseDown:
    ;
    case topLevelTypes$$module$CompositionEventPlugin.topBlur:
      return true;
    default:
      return false
  }
}
function FallbackCompositionState$$module$CompositionEventPlugin(root) {
  this.root = root;
  this.startSelection = ReactInputSelection$$module$CompositionEventPlugin.getSelection(root);
  this.startValue = this.getText()
}
FallbackCompositionState$$module$CompositionEventPlugin.prototype.getText = function() {
  return this.root.value || this.root[getTextContentAccessor$$module$CompositionEventPlugin()]
};
FallbackCompositionState$$module$CompositionEventPlugin.prototype.getData = function() {
  var endValue = this.getText();
  var prefixLength = this.startSelection.start;
  var suffixLength = this.startValue.length - this.startSelection.end;
  return endValue.substr(prefixLength, endValue.length - suffixLength - prefixLength)
};
var CompositionEventPlugin$$module$CompositionEventPlugin = {eventTypes:eventTypes$$module$CompositionEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var eventType;
  var data;
  if(useCompositionEvent$$module$CompositionEventPlugin) {
    eventType = getCompositionEventType$$module$CompositionEventPlugin(topLevelType)
  }else {
    if(!currentComposition$$module$CompositionEventPlugin) {
      if(isFallbackStart$$module$CompositionEventPlugin(topLevelType, nativeEvent)) {
        eventType = eventTypes$$module$CompositionEventPlugin.start;
        currentComposition$$module$CompositionEventPlugin = new FallbackCompositionState$$module$CompositionEventPlugin(topLevelTarget)
      }
    }else {
      if(isFallbackEnd$$module$CompositionEventPlugin(topLevelType, nativeEvent)) {
        eventType = eventTypes$$module$CompositionEventPlugin.compositionEnd;
        data = currentComposition$$module$CompositionEventPlugin.getData();
        currentComposition$$module$CompositionEventPlugin = null
      }
    }
  }
  if(eventType) {
    var event = SyntheticCompositionEvent$$module$CompositionEventPlugin.getPooled(eventType, topLevelTargetID, nativeEvent);
    if(data) {
      event.data = data
    }
    EventPropagators$$module$CompositionEventPlugin.accumulateTwoPhaseDispatches(event);
    return event
  }
}};
module$CompositionEventPlugin.module$exports = CompositionEventPlugin$$module$CompositionEventPlugin;
if(module$CompositionEventPlugin.module$exports) {
  module$CompositionEventPlugin = module$CompositionEventPlugin.module$exports
}
;
