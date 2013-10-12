goog.provide("module$SyntheticFocusEvent");
var module$SyntheticFocusEvent = {};
goog.require("module$SyntheticUIEvent");
var SyntheticUIEvent$$module$SyntheticFocusEvent = module$SyntheticUIEvent;
var FocusEventInterface$$module$SyntheticFocusEvent = {relatedTarget:null};
function SyntheticFocusEvent$$module$SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$SyntheticFocusEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticUIEvent$$module$SyntheticFocusEvent.augmentClass(SyntheticFocusEvent$$module$SyntheticFocusEvent, FocusEventInterface$$module$SyntheticFocusEvent);
module$SyntheticFocusEvent.module$exports = SyntheticFocusEvent$$module$SyntheticFocusEvent;
if(module$SyntheticFocusEvent.module$exports) {
  module$SyntheticFocusEvent = module$SyntheticFocusEvent.module$exports
}
;
