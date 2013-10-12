goog.provide("module$merge");
var module$merge = {};
goog.require("module$mergeInto");
var mergeInto$$module$merge = module$mergeInto;
var merge$$module$merge = function(one, two) {
  var result = {};
  mergeInto$$module$merge(result, one);
  mergeInto$$module$merge(result, two);
  return result
};
module$merge.module$exports = merge$$module$merge;
if(module$merge.module$exports) {
  module$merge = module$merge.module$exports
}
;
