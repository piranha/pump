goog.provide("module$SyntheticWheelEvent");
var module$SyntheticWheelEvent = {};
goog.require("module$SyntheticMouseEvent");
var SyntheticMouseEvent$$module$SyntheticWheelEvent = module$SyntheticMouseEvent;
var WheelEventInterface$$module$SyntheticWheelEvent = {deltaX:function(event) {
  return"deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0
}, deltaY:function(event) {
  return"deltaY" in event ? -event.deltaY : "wheelDeltaY" in event ? event.wheelDeltaY : "wheelDelta" in event ? event.wheelDelta : 0
}, deltaZ:null, deltaMode:null};
function SyntheticWheelEvent$$module$SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent$$module$SyntheticWheelEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticMouseEvent$$module$SyntheticWheelEvent.augmentClass(SyntheticWheelEvent$$module$SyntheticWheelEvent, WheelEventInterface$$module$SyntheticWheelEvent);
module$SyntheticWheelEvent.module$exports = SyntheticWheelEvent$$module$SyntheticWheelEvent;
if(module$SyntheticWheelEvent.module$exports) {
  module$SyntheticWheelEvent = module$SyntheticWheelEvent.module$exports
}
;
