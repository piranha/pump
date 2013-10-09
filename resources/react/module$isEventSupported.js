goog.provide("module$isEventSupported");
var module$isEventSupported = {};
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$isEventSupported = module$ExecutionEnvironment;
var testNode$$module$isEventSupported, useHasFeature$$module$isEventSupported;
if(ExecutionEnvironment$$module$isEventSupported.canUseDOM) {
  testNode$$module$isEventSupported = document.createElement("div");
  useHasFeature$$module$isEventSupported = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true
}
function isEventSupported$$module$isEventSupported(eventNameSuffix, capture) {
  if(!testNode$$module$isEventSupported || capture && !testNode$$module$isEventSupported.addEventListener) {
    return false
  }
  var element = document.createElement("div");
  var eventName = "on" + eventNameSuffix;
  var isSupported = eventName in element;
  if(!isSupported) {
    element.setAttribute(eventName, "return;");
    isSupported = typeof element[eventName] === "function";
    if(typeof element[eventName] !== "undefined") {
      element[eventName] = undefined
    }
    element.removeAttribute(eventName)
  }
  if(!isSupported && useHasFeature$$module$isEventSupported && eventNameSuffix === "wheel") {
    isSupported = document.implementation.hasFeature("Events.wheel", "3.0")
  }
  element = null;
  return isSupported
}
module$isEventSupported.module$exports = isEventSupported$$module$isEventSupported;
if(module$isEventSupported.module$exports) {
  module$isEventSupported = module$isEventSupported.module$exports
}
