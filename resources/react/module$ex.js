;goog.provide("module$ex");
var module$ex = {};
var ex$$module$ex = function(errorMessage) {
  var args = Array.prototype.slice.call(arguments).map(function(arg) {
    return String(arg)
  });
  var expectedLength = errorMessage.split("%s").length - 1;
  if(expectedLength !== args.length - 1) {
    return ex$$module$ex("ex args number mismatch: %s", JSON.stringify(args))
  }
  return ex$$module$ex._prefix + JSON.stringify(args) + ex$$module$ex._suffix
};
ex$$module$ex._prefix = "<![EX[";
ex$$module$ex._suffix = "]]\x3e";
module$ex.module$exports = ex$$module$ex;
if(module$ex.module$exports) {
  module$ex = module$ex.module$exports
}
