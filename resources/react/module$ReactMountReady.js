goog.provide("module$ReactMountReady");
var module$ReactMountReady = {};
goog.require("module$mixInto");
goog.require("module$PooledClass");
var PooledClass$$module$ReactMountReady = module$PooledClass;
var mixInto$$module$ReactMountReady = module$mixInto;
function ReactMountReady$$module$ReactMountReady(initialCollection) {
  this._queue = initialCollection || null
}
mixInto$$module$ReactMountReady(ReactMountReady$$module$ReactMountReady, {enqueue:function(component, callback) {
  this._queue = this._queue || [];
  this._queue.push({component:component, callback:callback})
}, notifyAll:function() {
  var queue = this._queue;
  if(queue) {
    this._queue = null;
    for(var i = 0, l = queue.length;i < l;i++) {
      var component = queue[i].component;
      var callback = queue[i].callback;
      callback.call(component, component.getDOMNode())
    }
    queue.length = 0
  }
}, reset:function() {
  this._queue = null
}, destructor:function() {
  this.reset()
}});
PooledClass$$module$ReactMountReady.addPoolingTo(ReactMountReady$$module$ReactMountReady);
module$ReactMountReady.module$exports = ReactMountReady$$module$ReactMountReady;
if(module$ReactMountReady.module$exports) {
  module$ReactMountReady = module$ReactMountReady.module$exports
}
;
