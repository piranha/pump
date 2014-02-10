goog.provide("module$EventListener");
var module$EventListener = {};
var EventListener$$module$EventListener = {listen:function(el, handlerBaseName, cb) {
  if(el.addEventListener) {
    el.addEventListener(handlerBaseName, cb, false)
  }else {
    if(el.attachEvent) {
      el.attachEvent("on" + handlerBaseName, cb)
    }
  }
}, capture:function(el, handlerBaseName, cb) {
  if(!el.addEventListener) {
    if(false) {
      console.error("You are attempting to use addEventlistener " + "in a browser that does not support it support it." + "This likely means that you will not receive events that " + "your application relies on (such as scroll).")
    }
    return
  }else {
    el.addEventListener(handlerBaseName, cb, true)
  }
}};
module$EventListener.module$exports = EventListener$$module$EventListener;
if(module$EventListener.module$exports) {
  module$EventListener = module$EventListener.module$exports
}
;
