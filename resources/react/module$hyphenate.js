goog.provide("module$hyphenate");
var module$hyphenate = {};
var _uppercasePattern$$module$hyphenate = /([A-Z])/g;
function hyphenate$$module$hyphenate(string) {
  return string.replace(_uppercasePattern$$module$hyphenate, "-$1").toLowerCase()
}
module$hyphenate.module$exports = hyphenate$$module$hyphenate;
if(module$hyphenate.module$exports) {
  module$hyphenate = module$hyphenate.module$exports
}
;
