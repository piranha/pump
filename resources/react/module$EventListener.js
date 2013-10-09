;goog.provide("module$EventListener");
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
    return
  }else {
    el.addEventListener(handlerBaseName, cb, true)
  }
}};
module$EventListener.module$exports = EventListener$$module$EventListener;
if(module$EventListener.module$exports) {
  module$EventListener = module$EventListener.module$exports
}
;/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
