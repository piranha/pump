;goog.provide("module$invariant");
var module$invariant = {};
function invariant$$module$invariant(condition) {
  if(!condition) {
    throw new Error("Invariant Violation");
  }
}
module$invariant.module$exports = invariant$$module$invariant;
if(module$invariant.module$exports) {
  module$invariant = module$invariant.module$exports
}
