goog.provide("module$SyntheticKeyboardEvent");
var module$SyntheticKeyboardEvent = {};
goog.require("module$SyntheticUIEvent");
var SyntheticUIEvent$$module$SyntheticKeyboardEvent = module$SyntheticUIEvent;
var KeyboardEventInterface$$module$SyntheticKeyboardEvent = {"char":null, key:null, location:null, ctrlKey:null, shiftKey:null, altKey:null, metaKey:null, repeat:null, locale:null, charCode:null, keyCode:null, which:null};
function SyntheticKeyboardEvent$$module$SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$SyntheticKeyboardEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticUIEvent$$module$SyntheticKeyboardEvent.augmentClass(SyntheticKeyboardEvent$$module$SyntheticKeyboardEvent, KeyboardEventInterface$$module$SyntheticKeyboardEvent);
module$SyntheticKeyboardEvent.module$exports = SyntheticKeyboardEvent$$module$SyntheticKeyboardEvent;
if(module$SyntheticKeyboardEvent.module$exports) {
  module$SyntheticKeyboardEvent = module$SyntheticKeyboardEvent.module$exports
}
;
