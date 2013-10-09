;goog.provide("module$ReactEventEmitter");
var module$ReactEventEmitter = {};
goog.require("module$merge");
goog.require("module$isEventSupported");
goog.require("module$invariant");
goog.require("module$ViewportMetrics");
goog.require("module$ReactEventEmitterMixin");
goog.require("module$ExecutionEnvironment");
goog.require("module$EventPluginHub");
goog.require("module$EventListener");
goog.require("module$EventConstants");
var EventConstants$$module$ReactEventEmitter = module$EventConstants;
var EventListener$$module$ReactEventEmitter = module$EventListener;
var EventPluginHub$$module$ReactEventEmitter = module$EventPluginHub;
var ExecutionEnvironment$$module$ReactEventEmitter = module$ExecutionEnvironment;
var ReactEventEmitterMixin$$module$ReactEventEmitter = module$ReactEventEmitterMixin;
var ViewportMetrics$$module$ReactEventEmitter = module$ViewportMetrics;
var invariant$$module$ReactEventEmitter = module$invariant;
var isEventSupported$$module$ReactEventEmitter = module$isEventSupported;
var merge$$module$ReactEventEmitter = module$merge;
function trapBubbledEvent$$module$ReactEventEmitter(topLevelType, handlerBaseName, element) {
  EventListener$$module$ReactEventEmitter.listen(element, handlerBaseName, ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator.createTopLevelCallback(topLevelType))
}
function trapCapturedEvent$$module$ReactEventEmitter(topLevelType, handlerBaseName, element) {
  EventListener$$module$ReactEventEmitter.capture(element, handlerBaseName, ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator.createTopLevelCallback(topLevelType))
}
function registerScrollValueMonitoring$$module$ReactEventEmitter() {
  var refresh = ViewportMetrics$$module$ReactEventEmitter.refreshScrollValues;
  EventListener$$module$ReactEventEmitter.listen(window, "scroll", refresh);
  EventListener$$module$ReactEventEmitter.listen(window, "resize", refresh)
}
var ReactEventEmitter$$module$ReactEventEmitter = merge$$module$ReactEventEmitter(ReactEventEmitterMixin$$module$ReactEventEmitter, {TopLevelCallbackCreator:null, ensureListening:function(touchNotMouse, contentDocument) {
  invariant$$module$ReactEventEmitter(ExecutionEnvironment$$module$ReactEventEmitter.canUseDOM);
  invariant$$module$ReactEventEmitter(ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator);
  ReactEventEmitterMixin$$module$ReactEventEmitter.ensureListening.call(ReactEventEmitter$$module$ReactEventEmitter, {touchNotMouse:touchNotMouse, contentDocument:contentDocument})
}, setEnabled:function(enabled) {
  invariant$$module$ReactEventEmitter(ExecutionEnvironment$$module$ReactEventEmitter.canUseDOM);
  if(ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator) {
    ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator.setEnabled(enabled)
  }
}, isEnabled:function() {
  return!!(ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator && ReactEventEmitter$$module$ReactEventEmitter.TopLevelCallbackCreator.isEnabled())
}, listenAtTopLevel:function(touchNotMouse, contentDocument) {
  invariant$$module$ReactEventEmitter(!contentDocument._isListening);
  var topLevelTypes = EventConstants$$module$ReactEventEmitter.topLevelTypes;
  var mountAt = contentDocument;
  registerScrollValueMonitoring$$module$ReactEventEmitter();
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topMouseOver, "mouseover", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topMouseDown, "mousedown", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topMouseUp, "mouseup", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topMouseMove, "mousemove", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topMouseOut, "mouseout", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topClick, "click", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDoubleClick, "dblclick", mountAt);
  if(touchNotMouse) {
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topTouchStart, "touchstart", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topTouchEnd, "touchend", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topTouchMove, "touchmove", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topTouchCancel, "touchcancel", mountAt)
  }
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topKeyUp, "keyup", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topKeyPress, "keypress", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topKeyDown, "keydown", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topInput, "input", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topChange, "change", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topSelectionChange, "selectionchange", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDOMCharacterDataModified, "DOMCharacterDataModified", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topCompositionEnd, "compositionend", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topCompositionStart, "compositionstart", mountAt);
  trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topCompositionUpdate, "compositionupdate", mountAt);
  if(isEventSupported$$module$ReactEventEmitter("drag")) {
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDrag, "drag", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDragEnd, "dragend", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDragEnter, "dragenter", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDragExit, "dragexit", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDragLeave, "dragleave", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDragOver, "dragover", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDragStart, "dragstart", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topDrop, "drop", mountAt)
  }
  if(isEventSupported$$module$ReactEventEmitter("wheel")) {
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topWheel, "wheel", mountAt)
  }else {
    if(isEventSupported$$module$ReactEventEmitter("mousewheel")) {
      trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topWheel, "mousewheel", mountAt)
    }else {
      trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topWheel, "DOMMouseScroll", mountAt)
    }
  }
  if(isEventSupported$$module$ReactEventEmitter("scroll", true)) {
    trapCapturedEvent$$module$ReactEventEmitter(topLevelTypes.topScroll, "scroll", mountAt)
  }else {
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topScroll, "scroll", window)
  }
  if(isEventSupported$$module$ReactEventEmitter("focus", true)) {
    trapCapturedEvent$$module$ReactEventEmitter(topLevelTypes.topFocus, "focus", mountAt);
    trapCapturedEvent$$module$ReactEventEmitter(topLevelTypes.topBlur, "blur", mountAt)
  }else {
    if(isEventSupported$$module$ReactEventEmitter("focusin")) {
      trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topFocus, "focusin", mountAt);
      trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topBlur, "focusout", mountAt)
    }
  }
  if(isEventSupported$$module$ReactEventEmitter("copy")) {
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topCopy, "copy", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topCut, "cut", mountAt);
    trapBubbledEvent$$module$ReactEventEmitter(topLevelTypes.topPaste, "paste", mountAt)
  }
}, registrationNames:EventPluginHub$$module$ReactEventEmitter.registrationNames, putListener:EventPluginHub$$module$ReactEventEmitter.putListener, getListener:EventPluginHub$$module$ReactEventEmitter.getListener, deleteListener:EventPluginHub$$module$ReactEventEmitter.deleteListener, deleteAllListeners:EventPluginHub$$module$ReactEventEmitter.deleteAllListeners, trapBubbledEvent:trapBubbledEvent$$module$ReactEventEmitter, trapCapturedEvent:trapCapturedEvent$$module$ReactEventEmitter});
module$ReactEventEmitter.module$exports = ReactEventEmitter$$module$ReactEventEmitter;
if(module$ReactEventEmitter.module$exports) {
  module$ReactEventEmitter = module$ReactEventEmitter.module$exports
}
