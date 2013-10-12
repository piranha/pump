goog.provide("module$CSSPropertyOperations");
var module$CSSPropertyOperations = {};
goog.require("module$memoizeStringOnly");
goog.require("module$hyphenate");
goog.require("module$escapeTextForBrowser");
goog.require("module$dangerousStyleValue");
goog.require("module$CSSProperty");
var CSSProperty$$module$CSSPropertyOperations = module$CSSProperty;
var dangerousStyleValue$$module$CSSPropertyOperations = module$dangerousStyleValue;
var escapeTextForBrowser$$module$CSSPropertyOperations = module$escapeTextForBrowser;
var hyphenate$$module$CSSPropertyOperations = module$hyphenate;
var memoizeStringOnly$$module$CSSPropertyOperations = module$memoizeStringOnly;
var processStyleName$$module$CSSPropertyOperations = memoizeStringOnly$$module$CSSPropertyOperations(function(styleName) {
  return escapeTextForBrowser$$module$CSSPropertyOperations(hyphenate$$module$CSSPropertyOperations(styleName))
});
var CSSPropertyOperations$$module$CSSPropertyOperations = {createMarkupForStyles:function(styles) {
  var serialized = "";
  for(var styleName in styles) {
    if(!styles.hasOwnProperty(styleName)) {
      continue
    }
    var styleValue = styles[styleName];
    if(styleValue != null) {
      serialized += processStyleName$$module$CSSPropertyOperations(styleName) + ":";
      serialized += dangerousStyleValue$$module$CSSPropertyOperations(styleName, styleValue) + ";"
    }
  }
  return serialized || null
}, setValueForStyles:function(node, styles) {
  var style = node.style;
  for(var styleName in styles) {
    if(!styles.hasOwnProperty(styleName)) {
      continue
    }
    var styleValue = dangerousStyleValue$$module$CSSPropertyOperations(styleName, styles[styleName]);
    if(styleValue) {
      style[styleName] = styleValue
    }else {
      var expansion = CSSProperty$$module$CSSPropertyOperations.shorthandPropertyExpansions[styleName];
      if(expansion) {
        for(var individualStyleName in expansion) {
          style[individualStyleName] = ""
        }
      }else {
        style[styleName] = ""
      }
    }
  }
}};
module$CSSPropertyOperations.module$exports = CSSPropertyOperations$$module$CSSPropertyOperations;
if(module$CSSPropertyOperations.module$exports) {
  module$CSSPropertyOperations = module$CSSPropertyOperations.module$exports
}
;
