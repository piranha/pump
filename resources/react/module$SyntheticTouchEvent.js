;goog.provide("module$SyntheticTouchEvent");
var module$SyntheticTouchEvent = {};
goog.require("module$SyntheticUIEvent");
var SyntheticUIEvent$$module$SyntheticTouchEvent = module$SyntheticUIEvent;
var TouchEventInterface$$module$SyntheticTouchEvent = {touches:null, targetTouches:null, changedTouches:null, altKey:null, metaKey:null, ctrlKey:null, shiftKey:null};
function SyntheticTouchEvent$$module$SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$SyntheticTouchEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticUIEvent$$module$SyntheticTouchEvent.augmentClass(SyntheticTouchEvent$$module$SyntheticTouchEvent, TouchEventInterface$$module$SyntheticTouchEvent);
module$SyntheticTouchEvent.module$exports = SyntheticTouchEvent$$module$SyntheticTouchEvent;
if(module$SyntheticTouchEvent.module$exports) {
  module$SyntheticTouchEvent = module$SyntheticTouchEvent.module$exports
}
