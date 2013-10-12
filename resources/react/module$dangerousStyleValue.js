goog.provide("module$dangerousStyleValue");
var module$dangerousStyleValue = {};
goog.require("module$CSSProperty");
var CSSProperty$$module$dangerousStyleValue = module$CSSProperty;
function dangerousStyleValue$$module$dangerousStyleValue(styleName, value) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if(isEmpty) {
    return""
  }
  var isNonNumeric = isNaN(value);
  if(isNonNumeric || value === 0 || CSSProperty$$module$dangerousStyleValue.isUnitlessNumber[styleName]) {
    return"" + value
  }
  return value + "px"
}
module$dangerousStyleValue.module$exports = dangerousStyleValue$$module$dangerousStyleValue;
if(module$dangerousStyleValue.module$exports) {
  module$dangerousStyleValue = module$dangerousStyleValue.module$exports
}
;
