goog.provide("module$SelectEventPlugin");
var module$SelectEventPlugin = {};
goog.require("module$shallowEqual");
goog.require("module$keyOf");
goog.require("module$isTextInputElement");
goog.require("module$isEventSupported");
goog.require("module$getActiveElement");
goog.require("module$SyntheticEvent");
goog.require("module$ExecutionEnvironment");
goog.require("module$EventPropagators");
goog.require("module$EventPluginHub");
goog.require("module$EventConstants");
var EventConstants$$module$SelectEventPlugin = module$EventConstants;
var EventPluginHub$$module$SelectEventPlugin = module$EventPluginHub;
var EventPropagators$$module$SelectEventPlugin = module$EventPropagators;
var ExecutionEnvironment$$module$SelectEventPlugin = module$ExecutionEnvironment;
var SyntheticEvent$$module$SelectEventPlugin = module$SyntheticEvent;
var getActiveElement$$module$SelectEventPlugin = module$getActiveElement;
var isEventSupported$$module$SelectEventPlugin = module$isEventSupported;
var isTextInputElement$$module$SelectEventPlugin = module$isTextInputElement;
var keyOf$$module$SelectEventPlugin = module$keyOf;
var shallowEqual$$module$SelectEventPlugin = module$shallowEqual;
var topLevelTypes$$module$SelectEventPlugin = EventConstants$$module$SelectEventPlugin.topLevelTypes;
var eventTypes$$module$SelectEventPlugin = {select:{phasedRegistrationNames:{bubbled:keyOf$$module$SelectEventPlugin({onSelect:null}), captured:keyOf$$module$SelectEventPlugin({onSelectCapture:null})}}};
var useSelectionChange$$module$SelectEventPlugin = false;
var useSelect$$module$SelectEventPlugin = false;
if(ExecutionEnvironment$$module$SelectEventPlugin.canUseDOM) {
  useSelectionChange$$module$SelectEventPlugin = "onselectionchange" in document;
  useSelect$$module$SelectEventPlugin = isEventSupported$$module$SelectEventPlugin("select")
}
var activeElement$$module$SelectEventPlugin = null;
var activeElementID$$module$SelectEventPlugin = null;
var activeNativeEvent$$module$SelectEventPlugin = null;
var lastSelection$$module$SelectEventPlugin = null;
var mouseDown$$module$SelectEventPlugin = false;
function getSelection$$module$SelectEventPlugin(node) {
  if("selectionStart" in node) {
    return{start:node.selectionStart, end:node.selectionEnd}
  }else {
    if(document.selection) {
      var range = document.selection.createRange();
      return{parentElement:range.parentElement(), text:range.text, top:range.boundingTop, left:range.boundingLeft}
    }else {
      var selection = window.getSelection();
      return{anchorNode:selection.anchorNode, anchorOffset:selection.anchorOffset, focusNode:selection.focusNode, focusOffset:selection.focusOffset}
    }
  }
}
function constructSelectEvent$$module$SelectEventPlugin(nativeEvent) {
  if(mouseDown$$module$SelectEventPlugin || activeElement$$module$SelectEventPlugin != getActiveElement$$module$SelectEventPlugin()) {
    return
  }
  var currentSelection = getSelection$$module$SelectEventPlugin(activeElement$$module$SelectEventPlugin);
  if(!lastSelection$$module$SelectEventPlugin || !shallowEqual$$module$SelectEventPlugin(lastSelection$$module$SelectEventPlugin, currentSelection)) {
    lastSelection$$module$SelectEventPlugin = currentSelection;
    var syntheticEvent = SyntheticEvent$$module$SelectEventPlugin.getPooled(eventTypes$$module$SelectEventPlugin.select, activeElementID$$module$SelectEventPlugin, nativeEvent);
    syntheticEvent.type = "select";
    syntheticEvent.target = activeElement$$module$SelectEventPlugin;
    EventPropagators$$module$SelectEventPlugin.accumulateTwoPhaseDispatches(syntheticEvent);
    return syntheticEvent
  }
}
function dispatchDeferredSelectEvent$$module$SelectEventPlugin() {
  if(!activeNativeEvent$$module$SelectEventPlugin) {
    return
  }
  var syntheticEvent = constructSelectEvent$$module$SelectEventPlugin(activeNativeEvent$$module$SelectEventPlugin);
  activeNativeEvent$$module$SelectEventPlugin = null;
  if(syntheticEvent) {
    EventPluginHub$$module$SelectEventPlugin.enqueueEvents(syntheticEvent);
    EventPluginHub$$module$SelectEventPlugin.processEventQueue()
  }
}
var SelectEventPlugin$$module$SelectEventPlugin = {eventTypes:eventTypes$$module$SelectEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  switch(topLevelType) {
    case topLevelTypes$$module$SelectEventPlugin.topFocus:
      if(isTextInputElement$$module$SelectEventPlugin(topLevelTarget) || topLevelTarget.contentEditable === "true") {
        activeElement$$module$SelectEventPlugin = topLevelTarget;
        activeElementID$$module$SelectEventPlugin = topLevelTargetID;
        lastSelection$$module$SelectEventPlugin = null;
        mouseDown$$module$SelectEventPlugin = false
      }
      break;
    case topLevelTypes$$module$SelectEventPlugin.topBlur:
      activeElement$$module$SelectEventPlugin = null;
      activeElementID$$module$SelectEventPlugin = null;
      lastSelection$$module$SelectEventPlugin = null;
      mouseDown$$module$SelectEventPlugin = false;
      break;
    case topLevelTypes$$module$SelectEventPlugin.topMouseDown:
      mouseDown$$module$SelectEventPlugin = true;
      break;
    case topLevelTypes$$module$SelectEventPlugin.topMouseUp:
      mouseDown$$module$SelectEventPlugin = false;
      return constructSelectEvent$$module$SelectEventPlugin(nativeEvent);
    case topLevelTypes$$module$SelectEventPlugin.topSelectionChange:
      return constructSelectEvent$$module$SelectEventPlugin(nativeEvent);
    case topLevelTypes$$module$SelectEventPlugin.topKeyDown:
      if(!useSelectionChange$$module$SelectEventPlugin) {
        activeNativeEvent$$module$SelectEventPlugin = nativeEvent;
        setTimeout(dispatchDeferredSelectEvent$$module$SelectEventPlugin, 0)
      }
      break
  }
}};
module$SelectEventPlugin.module$exports = SelectEventPlugin$$module$SelectEventPlugin;
if(module$SelectEventPlugin.module$exports) {
  module$SelectEventPlugin = module$SelectEventPlugin.module$exports
}
;
