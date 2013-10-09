;goog.provide("module$SyntheticMutationEvent");
var module$SyntheticMutationEvent = {};
goog.require("module$SyntheticEvent");
var SyntheticEvent$$module$SyntheticMutationEvent = module$SyntheticEvent;
var MutationEventInterface$$module$SyntheticMutationEvent = {relatedNode:null, prevValue:null, newValue:null, attrName:null, attrChange:null};
function SyntheticMutationEvent$$module$SyntheticMutationEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$SyntheticMutationEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticEvent$$module$SyntheticMutationEvent.augmentClass(SyntheticMutationEvent$$module$SyntheticMutationEvent, MutationEventInterface$$module$SyntheticMutationEvent);
module$SyntheticMutationEvent.module$exports = SyntheticMutationEvent$$module$SyntheticMutationEvent;
if(module$SyntheticMutationEvent.module$exports) {
  module$SyntheticMutationEvent = module$SyntheticMutationEvent.module$exports
}
