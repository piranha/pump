goog.provide("module$mergeHelpers");
var module$mergeHelpers = {};
goog.require("module$keyMirror");
goog.require("module$invariant");
var invariant$$module$mergeHelpers = module$invariant;
var keyMirror$$module$mergeHelpers = module$keyMirror;
var MAX_MERGE_DEPTH$$module$mergeHelpers = 36;
var isTerminal$$module$mergeHelpers = function(o) {
  return typeof o !== "object" || o === null
};
var mergeHelpers$$module$mergeHelpers = {MAX_MERGE_DEPTH:MAX_MERGE_DEPTH$$module$mergeHelpers, isTerminal:isTerminal$$module$mergeHelpers, normalizeMergeArg:function(arg) {
  return arg === undefined || arg === null ? {} : arg
}, checkMergeArrayArgs:function(one, two) {
  invariant$$module$mergeHelpers(Array.isArray(one) && Array.isArray(two))
}, checkMergeObjectArgs:function(one, two) {
  mergeHelpers$$module$mergeHelpers.checkMergeObjectArg(one);
  mergeHelpers$$module$mergeHelpers.checkMergeObjectArg(two)
}, checkMergeObjectArg:function(arg) {
  invariant$$module$mergeHelpers(!isTerminal$$module$mergeHelpers(arg) && !Array.isArray(arg))
}, checkMergeLevel:function(level) {
  invariant$$module$mergeHelpers(level < MAX_MERGE_DEPTH$$module$mergeHelpers)
}, checkArrayStrategy:function(strategy) {
  invariant$$module$mergeHelpers(strategy === undefined || strategy in mergeHelpers$$module$mergeHelpers.ArrayStrategies)
}, ArrayStrategies:keyMirror$$module$mergeHelpers({Clobber:true, IndexByIndex:true})};
module$mergeHelpers.module$exports = mergeHelpers$$module$mergeHelpers;
if(module$mergeHelpers.module$exports) {
  module$mergeHelpers = module$mergeHelpers.module$exports
}
;
