goog.provide("module$SyntheticClipboardEvent");
var module$SyntheticClipboardEvent = {};
goog.require("module$SyntheticEvent");
var SyntheticEvent$$module$SyntheticClipboardEvent = module$SyntheticEvent;
var ClipboardEventInterface$$module$SyntheticClipboardEvent = {clipboardData:null};
function SyntheticClipboardEvent$$module$SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$SyntheticClipboardEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticEvent$$module$SyntheticClipboardEvent.augmentClass(SyntheticClipboardEvent$$module$SyntheticClipboardEvent, ClipboardEventInterface$$module$SyntheticClipboardEvent);
module$SyntheticClipboardEvent.module$exports = SyntheticClipboardEvent$$module$SyntheticClipboardEvent;
if(module$SyntheticClipboardEvent.module$exports) {
  module$SyntheticClipboardEvent = module$SyntheticClipboardEvent.module$exports
}
;
