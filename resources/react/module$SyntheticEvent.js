goog.provide("module$SyntheticEvent");
var module$SyntheticEvent = {};
goog.require("module$mergeInto");
goog.require("module$merge");
goog.require("module$getEventTarget");
goog.require("module$emptyFunction");
goog.require("module$PooledClass");
var PooledClass$$module$SyntheticEvent = module$PooledClass;
var emptyFunction$$module$SyntheticEvent = module$emptyFunction;
var getEventTarget$$module$SyntheticEvent = module$getEventTarget;
var merge$$module$SyntheticEvent = module$merge;
var mergeInto$$module$SyntheticEvent = module$mergeInto;
var EventInterface$$module$SyntheticEvent = {type:null, target:getEventTarget$$module$SyntheticEvent, currentTarget:null, eventPhase:null, bubbles:null, cancelable:null, timeStamp:function(event) {
  return event.timeStamp || Date.now()
}, defaultPrevented:null, isTrusted:null};
function SyntheticEvent$$module$SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  this.dispatchConfig = dispatchConfig;
  this.dispatchMarker = dispatchMarker;
  this.nativeEvent = nativeEvent;
  var Interface = this.constructor.Interface;
  for(var propName in Interface) {
    if(!Interface.hasOwnProperty(propName)) {
      continue
    }
    var normalize = Interface[propName];
    if(normalize) {
      this[propName] = normalize(nativeEvent)
    }else {
      this[propName] = nativeEvent[propName]
    }
  }
  if(nativeEvent.defaultPrevented || nativeEvent.returnValue === false) {
    this.isDefaultPrevented = emptyFunction$$module$SyntheticEvent.thatReturnsTrue
  }else {
    this.isDefaultPrevented = emptyFunction$$module$SyntheticEvent.thatReturnsFalse
  }
  this.isPropagationStopped = emptyFunction$$module$SyntheticEvent.thatReturnsFalse
}
mergeInto$$module$SyntheticEvent(SyntheticEvent$$module$SyntheticEvent.prototype, {preventDefault:function() {
  this.defaultPrevented = true;
  var event = this.nativeEvent;
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  this.isDefaultPrevented = emptyFunction$$module$SyntheticEvent.thatReturnsTrue
}, stopPropagation:function() {
  var event = this.nativeEvent;
  event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
  this.isPropagationStopped = emptyFunction$$module$SyntheticEvent.thatReturnsTrue
}, persist:function() {
  this.isPersistent = emptyFunction$$module$SyntheticEvent.thatReturnsTrue
}, isPersistent:emptyFunction$$module$SyntheticEvent.thatReturnsFalse, destructor:function() {
  var Interface = this.constructor.Interface;
  for(var propName in Interface) {
    this[propName] = null
  }
  this.dispatchConfig = null;
  this.dispatchMarker = null;
  this.nativeEvent = null
}});
SyntheticEvent$$module$SyntheticEvent.Interface = EventInterface$$module$SyntheticEvent;
SyntheticEvent$$module$SyntheticEvent.augmentClass = function(Class, Interface) {
  var Super = this;
  var prototype = Object.create(Super.prototype);
  mergeInto$$module$SyntheticEvent(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;
  Class.Interface = merge$$module$SyntheticEvent(Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;
  PooledClass$$module$SyntheticEvent.addPoolingTo(Class, PooledClass$$module$SyntheticEvent.threeArgumentPooler)
};
PooledClass$$module$SyntheticEvent.addPoolingTo(SyntheticEvent$$module$SyntheticEvent, PooledClass$$module$SyntheticEvent.threeArgumentPooler);
module$SyntheticEvent.module$exports = SyntheticEvent$$module$SyntheticEvent;
if(module$SyntheticEvent.module$exports) {
  module$SyntheticEvent = module$SyntheticEvent.module$exports
}
;
