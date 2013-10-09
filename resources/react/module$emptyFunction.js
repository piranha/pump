;goog.provide("module$emptyFunction");
var module$emptyFunction = {};
goog.require("module$copyProperties");
var copyProperties$$module$emptyFunction = module$copyProperties;
function makeEmptyFunction$$module$emptyFunction(arg) {
  return function() {
    return arg
  }
}
function emptyFunction$$module$emptyFunction() {
}
copyProperties$$module$emptyFunction(emptyFunction$$module$emptyFunction, {thatReturns:makeEmptyFunction$$module$emptyFunction, thatReturnsFalse:makeEmptyFunction$$module$emptyFunction(false), thatReturnsTrue:makeEmptyFunction$$module$emptyFunction(true), thatReturnsNull:makeEmptyFunction$$module$emptyFunction(null), thatReturnsThis:function() {
  return this
}, thatReturnsArgument:function(arg) {
  return arg
}});
module$emptyFunction.module$exports = emptyFunction$$module$emptyFunction;
if(module$emptyFunction.module$exports) {
  module$emptyFunction = module$emptyFunction.module$exports
}
