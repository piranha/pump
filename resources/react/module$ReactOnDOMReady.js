;goog.provide("module$ReactOnDOMReady");
var module$ReactOnDOMReady = {};
goog.require("module$mixInto");
goog.require("module$PooledClass");
var PooledClass$$module$ReactOnDOMReady = module$PooledClass;
var mixInto$$module$ReactOnDOMReady = module$mixInto;
function ReactOnDOMReady$$module$ReactOnDOMReady(initialCollection) {
  this._queue = initialCollection || null
}
mixInto$$module$ReactOnDOMReady(ReactOnDOMReady$$module$ReactOnDOMReady, {enqueue:function(component, callback) {
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
PooledClass$$module$ReactOnDOMReady.addPoolingTo(ReactOnDOMReady$$module$ReactOnDOMReady);
module$ReactOnDOMReady.module$exports = ReactOnDOMReady$$module$ReactOnDOMReady;
if(module$ReactOnDOMReady.module$exports) {
  module$ReactOnDOMReady = module$ReactOnDOMReady.module$exports
}
