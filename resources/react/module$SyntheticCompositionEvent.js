goog.provide("module$SyntheticCompositionEvent");
var module$SyntheticCompositionEvent = {};
goog.require("module$SyntheticEvent");
var SyntheticEvent$$module$SyntheticCompositionEvent = module$SyntheticEvent;
var CompositionEventInterface$$module$SyntheticCompositionEvent = {data:null};
function SyntheticCompositionEvent$$module$SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$SyntheticCompositionEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticEvent$$module$SyntheticCompositionEvent.augmentClass(SyntheticCompositionEvent$$module$SyntheticCompositionEvent, CompositionEventInterface$$module$SyntheticCompositionEvent);
module$SyntheticCompositionEvent.module$exports = SyntheticCompositionEvent$$module$SyntheticCompositionEvent;
if(module$SyntheticCompositionEvent.module$exports) {
  module$SyntheticCompositionEvent = module$SyntheticCompositionEvent.module$exports
}
;
