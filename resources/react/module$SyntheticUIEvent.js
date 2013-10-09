;goog.provide("module$SyntheticUIEvent");
var module$SyntheticUIEvent = {};
goog.require("module$SyntheticEvent");
var SyntheticEvent$$module$SyntheticUIEvent = module$SyntheticEvent;
var UIEventInterface$$module$SyntheticUIEvent = {view:null, detail:null};
function SyntheticUIEvent$$module$SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticEvent$$module$SyntheticUIEvent.augmentClass(SyntheticUIEvent$$module$SyntheticUIEvent, UIEventInterface$$module$SyntheticUIEvent);
module$SyntheticUIEvent.module$exports = SyntheticUIEvent$$module$SyntheticUIEvent;
if(module$SyntheticUIEvent.module$exports) {
  module$SyntheticUIEvent = module$SyntheticUIEvent.module$exports
}
