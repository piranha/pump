goog.provide("module$ChangeEventPlugin");
var module$ChangeEventPlugin = {};
goog.require("module$keyOf");
goog.require("module$isTextInputElement");
goog.require("module$isEventSupported");
goog.require("module$SyntheticEvent");
goog.require("module$ExecutionEnvironment");
goog.require("module$EventPropagators");
goog.require("module$EventPluginHub");
goog.require("module$EventConstants");
var EventConstants$$module$ChangeEventPlugin = module$EventConstants;
var EventPluginHub$$module$ChangeEventPlugin = module$EventPluginHub;
var EventPropagators$$module$ChangeEventPlugin = module$EventPropagators;
var ExecutionEnvironment$$module$ChangeEventPlugin = module$ExecutionEnvironment;
var SyntheticEvent$$module$ChangeEventPlugin = module$SyntheticEvent;
var isEventSupported$$module$ChangeEventPlugin = module$isEventSupported;
var isTextInputElement$$module$ChangeEventPlugin = module$isTextInputElement;
var keyOf$$module$ChangeEventPlugin = module$keyOf;
var topLevelTypes$$module$ChangeEventPlugin = EventConstants$$module$ChangeEventPlugin.topLevelTypes;
var eventTypes$$module$ChangeEventPlugin = {change:{phasedRegistrationNames:{bubbled:keyOf$$module$ChangeEventPlugin({onChange:null}), captured:keyOf$$module$ChangeEventPlugin({onChangeCapture:null})}}};
var activeElement$$module$ChangeEventPlugin = null;
var activeElementID$$module$ChangeEventPlugin = null;
var activeElementValue$$module$ChangeEventPlugin = null;
var activeElementValueProp$$module$ChangeEventPlugin = null;
function shouldUseChangeEvent$$module$ChangeEventPlugin(elem) {
  return elem.nodeName === "SELECT" || elem.nodeName === "INPUT" && elem.type === "file"
}
var doesChangeEventBubble$$module$ChangeEventPlugin = false;
if(ExecutionEnvironment$$module$ChangeEventPlugin.canUseDOM) {
  doesChangeEventBubble$$module$ChangeEventPlugin = isEventSupported$$module$ChangeEventPlugin("change") && (!("documentMode" in document) || document.documentMode > 8)
}
function manualDispatchChangeEvent$$module$ChangeEventPlugin(nativeEvent) {
  var event = SyntheticEvent$$module$ChangeEventPlugin.getPooled(eventTypes$$module$ChangeEventPlugin.change, activeElementID$$module$ChangeEventPlugin, nativeEvent);
  EventPropagators$$module$ChangeEventPlugin.accumulateTwoPhaseDispatches(event);
  EventPluginHub$$module$ChangeEventPlugin.enqueueEvents(event);
  EventPluginHub$$module$ChangeEventPlugin.processEventQueue()
}
function startWatchingForChangeEventIE8$$module$ChangeEventPlugin(target, targetID) {
  activeElement$$module$ChangeEventPlugin = target;
  activeElementID$$module$ChangeEventPlugin = targetID;
  activeElement$$module$ChangeEventPlugin.attachEvent("onchange", manualDispatchChangeEvent$$module$ChangeEventPlugin)
}
function stopWatchingForChangeEventIE8$$module$ChangeEventPlugin() {
  if(!activeElement$$module$ChangeEventPlugin) {
    return
  }
  activeElement$$module$ChangeEventPlugin.detachEvent("onchange", manualDispatchChangeEvent$$module$ChangeEventPlugin);
  activeElement$$module$ChangeEventPlugin = null;
  activeElementID$$module$ChangeEventPlugin = null
}
function getTargetIDForChangeEvent$$module$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topChange) {
    return topLevelTargetID
  }
}
function handleEventsForChangeEventIE8$$module$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topFocus) {
    stopWatchingForChangeEventIE8$$module$ChangeEventPlugin();
    startWatchingForChangeEventIE8$$module$ChangeEventPlugin(topLevelTarget, topLevelTargetID)
  }else {
    if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topBlur) {
      stopWatchingForChangeEventIE8$$module$ChangeEventPlugin()
    }
  }
}
var isInputEventSupported$$module$ChangeEventPlugin = false;
if(ExecutionEnvironment$$module$ChangeEventPlugin.canUseDOM) {
  isInputEventSupported$$module$ChangeEventPlugin = isEventSupported$$module$ChangeEventPlugin("input") && (!("documentMode" in document) || document.documentMode > 9)
}
var newValueProp$$module$ChangeEventPlugin = {get:function() {
  return activeElementValueProp$$module$ChangeEventPlugin.get.call(this)
}, set:function(val) {
  activeElementValue$$module$ChangeEventPlugin = "" + val;
  activeElementValueProp$$module$ChangeEventPlugin.set.call(this, val)
}};
function startWatchingForValueChange$$module$ChangeEventPlugin(target, targetID) {
  activeElement$$module$ChangeEventPlugin = target;
  activeElementID$$module$ChangeEventPlugin = targetID;
  activeElementValue$$module$ChangeEventPlugin = target.value;
  activeElementValueProp$$module$ChangeEventPlugin = Object.getOwnPropertyDescriptor(target.constructor.prototype, "value");
  Object.defineProperty(activeElement$$module$ChangeEventPlugin, "value", newValueProp$$module$ChangeEventPlugin);
  activeElement$$module$ChangeEventPlugin.attachEvent("onpropertychange", handlePropertyChange$$module$ChangeEventPlugin)
}
function stopWatchingForValueChange$$module$ChangeEventPlugin() {
  if(!activeElement$$module$ChangeEventPlugin) {
    return
  }
  delete activeElement$$module$ChangeEventPlugin.value;
  activeElement$$module$ChangeEventPlugin.detachEvent("onpropertychange", handlePropertyChange$$module$ChangeEventPlugin);
  activeElement$$module$ChangeEventPlugin = null;
  activeElementID$$module$ChangeEventPlugin = null;
  activeElementValue$$module$ChangeEventPlugin = null;
  activeElementValueProp$$module$ChangeEventPlugin = null
}
function handlePropertyChange$$module$ChangeEventPlugin(nativeEvent) {
  if(nativeEvent.propertyName !== "value") {
    return
  }
  var value = nativeEvent.srcElement.value;
  if(value === activeElementValue$$module$ChangeEventPlugin) {
    return
  }
  activeElementValue$$module$ChangeEventPlugin = value;
  manualDispatchChangeEvent$$module$ChangeEventPlugin(nativeEvent)
}
function getTargetIDForInputEvent$$module$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topInput) {
    return topLevelTargetID
  }
}
function handleEventsForInputEventIE$$module$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topFocus) {
    stopWatchingForValueChange$$module$ChangeEventPlugin();
    startWatchingForValueChange$$module$ChangeEventPlugin(topLevelTarget, topLevelTargetID)
  }else {
    if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topBlur) {
      stopWatchingForValueChange$$module$ChangeEventPlugin()
    }
  }
}
function getTargetIDForInputEventIE$$module$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topSelectionChange || topLevelType === topLevelTypes$$module$ChangeEventPlugin.topKeyUp || topLevelType === topLevelTypes$$module$ChangeEventPlugin.topKeyDown) {
    if(activeElement$$module$ChangeEventPlugin && activeElement$$module$ChangeEventPlugin.value !== activeElementValue$$module$ChangeEventPlugin) {
      activeElementValue$$module$ChangeEventPlugin = activeElement$$module$ChangeEventPlugin.value;
      return activeElementID$$module$ChangeEventPlugin
    }
  }
}
function shouldUseClickEvent$$module$ChangeEventPlugin(elem) {
  return elem.nodeName === "INPUT" && (elem.type === "checkbox" || elem.type === "radio")
}
function getTargetIDForClickEvent$$module$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if(topLevelType === topLevelTypes$$module$ChangeEventPlugin.topClick) {
    return topLevelTargetID
  }
}
var ChangeEventPlugin$$module$ChangeEventPlugin = {eventTypes:eventTypes$$module$ChangeEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var getTargetIDFunc, handleEventFunc;
  if(shouldUseChangeEvent$$module$ChangeEventPlugin(topLevelTarget)) {
    if(doesChangeEventBubble$$module$ChangeEventPlugin) {
      getTargetIDFunc = getTargetIDForChangeEvent$$module$ChangeEventPlugin
    }else {
      handleEventFunc = handleEventsForChangeEventIE8$$module$ChangeEventPlugin
    }
  }else {
    if(isTextInputElement$$module$ChangeEventPlugin(topLevelTarget)) {
      if(isInputEventSupported$$module$ChangeEventPlugin) {
        getTargetIDFunc = getTargetIDForInputEvent$$module$ChangeEventPlugin
      }else {
        getTargetIDFunc = getTargetIDForInputEventIE$$module$ChangeEventPlugin;
        handleEventFunc = handleEventsForInputEventIE$$module$ChangeEventPlugin
      }
    }else {
      if(shouldUseClickEvent$$module$ChangeEventPlugin(topLevelTarget)) {
        getTargetIDFunc = getTargetIDForClickEvent$$module$ChangeEventPlugin
      }
    }
  }
  if(getTargetIDFunc) {
    var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
    if(targetID) {
      var event = SyntheticEvent$$module$ChangeEventPlugin.getPooled(eventTypes$$module$ChangeEventPlugin.change, targetID, nativeEvent);
      EventPropagators$$module$ChangeEventPlugin.accumulateTwoPhaseDispatches(event);
      return event
    }
  }
  if(handleEventFunc) {
    handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID)
  }
}};
module$ChangeEventPlugin.module$exports = ChangeEventPlugin$$module$ChangeEventPlugin;
if(module$ChangeEventPlugin.module$exports) {
  module$ChangeEventPlugin = module$ChangeEventPlugin.module$exports
}
;
