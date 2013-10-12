goog.provide("module$ReactPerf");
var module$ReactPerf = {};
var ReactPerf$$module$ReactPerf = {enableMeasure:false, storedMeasure:_noMeasure$$module$ReactPerf, measure:function(objName, fnName, func) {
  return func
}, injection:{injectMeasure:function(measure) {
  ReactPerf$$module$ReactPerf.storedMeasure = measure
}}};
function _noMeasure$$module$ReactPerf(objName, fnName, func) {
  return func
}
module$ReactPerf.module$exports = ReactPerf$$module$ReactPerf;
if(module$ReactPerf.module$exports) {
  module$ReactPerf = module$ReactPerf.module$exports
}
;
