;goog.provide("module$ViewportMetrics");
var module$ViewportMetrics = {};
var ViewportMetrics$$module$ViewportMetrics = {currentScrollLeft:0, currentScrollTop:0, refreshScrollValues:function() {
  ViewportMetrics$$module$ViewportMetrics.currentScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
  ViewportMetrics$$module$ViewportMetrics.currentScrollTop = document.body.scrollTop + document.documentElement.scrollTop
}};
module$ViewportMetrics.module$exports = ViewportMetrics$$module$ViewportMetrics;
if(module$ViewportMetrics.module$exports) {
  module$ViewportMetrics = module$ViewportMetrics.module$exports
}
