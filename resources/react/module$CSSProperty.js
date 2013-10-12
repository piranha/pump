goog.provide("module$CSSProperty");
var module$CSSProperty = {};
var isUnitlessNumber$$module$CSSProperty = {fillOpacity:true, fontWeight:true, lineHeight:true, opacity:true, orphans:true, zIndex:true, zoom:true};
var shorthandPropertyExpansions$$module$CSSProperty = {background:{backgroundImage:true, backgroundPosition:true, backgroundRepeat:true, backgroundColor:true}, border:{borderWidth:true, borderStyle:true, borderColor:true}, borderBottom:{borderBottomWidth:true, borderBottomStyle:true, borderBottomColor:true}, borderLeft:{borderLeftWidth:true, borderLeftStyle:true, borderLeftColor:true}, borderRight:{borderRightWidth:true, borderRightStyle:true, borderRightColor:true}, borderTop:{borderTopWidth:true, 
borderTopStyle:true, borderTopColor:true}, font:{fontStyle:true, fontVariant:true, fontWeight:true, fontSize:true, lineHeight:true, fontFamily:true}};
var CSSProperty$$module$CSSProperty = {isUnitlessNumber:isUnitlessNumber$$module$CSSProperty, shorthandPropertyExpansions:shorthandPropertyExpansions$$module$CSSProperty};
module$CSSProperty.module$exports = CSSProperty$$module$CSSProperty;
if(module$CSSProperty.module$exports) {
  module$CSSProperty = module$CSSProperty.module$exports
}
;
