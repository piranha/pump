goog.provide("module$ExecutionEnvironment");
var module$ExecutionEnvironment = {};
var canUseDOM$$module$ExecutionEnvironment = typeof window !== "undefined";
var ExecutionEnvironment$$module$ExecutionEnvironment = {canUseDOM:canUseDOM$$module$ExecutionEnvironment, canUseWorkers:typeof Worker !== "undefined", isInWorker:!canUseDOM$$module$ExecutionEnvironment};
module$ExecutionEnvironment.module$exports = ExecutionEnvironment$$module$ExecutionEnvironment;
if(module$ExecutionEnvironment.module$exports) {
  module$ExecutionEnvironment = module$ExecutionEnvironment.module$exports
}
;goog.provide("module$ReactPerf");
var module$ReactPerf = {};
goog.require("module$ExecutionEnvironment");
var ReactPerf$$module$ReactPerf = {enableMeasure:false, storedMeasure:_noMeasure$$module$ReactPerf, measure:function(objName, fnName, func) {
  if(false) {
    var measuredFunc = null;
    return function() {
      if(ReactPerf$$module$ReactPerf.enableMeasure) {
        if(!measuredFunc) {
          measuredFunc = ReactPerf$$module$ReactPerf.storedMeasure(objName, fnName, func)
        }
        return measuredFunc.apply(this, arguments)
      }
      return func.apply(this, arguments)
    }
  }
  return func
}, injection:{injectMeasure:function(measure) {
  ReactPerf$$module$ReactPerf.storedMeasure = measure
}}};
if(false) {
  var ExecutionEnvironment$$module$ReactPerf = module$ExecutionEnvironment;
  var URL$$module$ReactPerf = ExecutionEnvironment$$module$ReactPerf.canUseDOM && window.location.href || "";
  ReactPerf$$module$ReactPerf.enableMeasure = ReactPerf$$module$ReactPerf.enableMeasure || !!URL$$module$ReactPerf.match(/[?&]react_perf\b/)
}
function _noMeasure$$module$ReactPerf(objName, fnName, func) {
  return func
}
module$ReactPerf.module$exports = ReactPerf$$module$ReactPerf;
if(module$ReactPerf.module$exports) {
  module$ReactPerf = module$ReactPerf.module$exports
}
;/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
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
;
