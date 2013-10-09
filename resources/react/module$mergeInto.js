;goog.provide("module$mergeInto");
var module$mergeInto = {};
goog.require("module$mergeHelpers");
var mergeHelpers$$module$mergeInto = module$mergeHelpers;
var checkMergeObjectArg$$module$mergeInto = mergeHelpers$$module$mergeInto.checkMergeObjectArg;
function mergeInto$$module$mergeInto(one, two) {
  checkMergeObjectArg$$module$mergeInto(one);
  if(two != null) {
    checkMergeObjectArg$$module$mergeInto(two);
    for(var key in two) {
      if(!two.hasOwnProperty(key)) {
        continue
      }
      one[key] = two[key]
    }
  }
}
module$mergeInto.module$exports = mergeInto$$module$mergeInto;
if(module$mergeInto.module$exports) {
  module$mergeInto = module$mergeInto.module$exports
}
