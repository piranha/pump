goog.provide("module$SyntheticMouseEvent");
var module$SyntheticMouseEvent = {};
goog.require("module$ViewportMetrics");
goog.require("module$SyntheticUIEvent");
var SyntheticUIEvent$$module$SyntheticMouseEvent = module$SyntheticUIEvent;
var ViewportMetrics$$module$SyntheticMouseEvent = module$ViewportMetrics;
var MouseEventInterface$$module$SyntheticMouseEvent = {screenX:null, screenY:null, clientX:null, clientY:null, ctrlKey:null, shiftKey:null, altKey:null, metaKey:null, button:function(event) {
  var button = event.button;
  if("which" in event) {
    return button
  }
  return button === 2 ? 2 : button === 4 ? 1 : 0
}, buttons:null, relatedTarget:function(event) {
  return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement)
}, pageX:function(event) {
  return"pageX" in event ? event.pageX : event.clientX + ViewportMetrics$$module$SyntheticMouseEvent.currentScrollLeft
}, pageY:function(event) {
  return"pageY" in event ? event.pageY : event.clientY + ViewportMetrics$$module$SyntheticMouseEvent.currentScrollTop
}};
function SyntheticMouseEvent$$module$SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent)
}
SyntheticUIEvent$$module$SyntheticMouseEvent.augmentClass(SyntheticMouseEvent$$module$SyntheticMouseEvent, MouseEventInterface$$module$SyntheticMouseEvent);
module$SyntheticMouseEvent.module$exports = SyntheticMouseEvent$$module$SyntheticMouseEvent;
if(module$SyntheticMouseEvent.module$exports) {
  module$SyntheticMouseEvent = module$SyntheticMouseEvent.module$exports
}
;
