goog.provide("module$ReactDOMIDOperations");
var module$ReactDOMIDOperations = {};
goog.require("module$invariant");
goog.require("module$getTextContentAccessor");
goog.require("module$ReactMount");
goog.require("module$DOMPropertyOperations");
goog.require("module$DOMChildrenOperations");
goog.require("module$CSSPropertyOperations");
var CSSPropertyOperations$$module$ReactDOMIDOperations = module$CSSPropertyOperations;
var DOMChildrenOperations$$module$ReactDOMIDOperations = module$DOMChildrenOperations;
var DOMPropertyOperations$$module$ReactDOMIDOperations = module$DOMPropertyOperations;
var ReactMount$$module$ReactDOMIDOperations = module$ReactMount;
var getTextContentAccessor$$module$ReactDOMIDOperations = module$getTextContentAccessor;
var invariant$$module$ReactDOMIDOperations = module$invariant;
var INVALID_PROPERTY_ERRORS$$module$ReactDOMIDOperations = {dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.", style:"`style` must be set using `updateStylesByID()`."};
var textContentAccessor$$module$ReactDOMIDOperations = getTextContentAccessor$$module$ReactDOMIDOperations() || "NA";
var LEADING_SPACE$$module$ReactDOMIDOperations = /^ /;
var ReactDOMIDOperations$$module$ReactDOMIDOperations = {updatePropertyByID:function(id, name, value) {
  var node = ReactMount$$module$ReactDOMIDOperations.getNode(id);
  invariant$$module$ReactDOMIDOperations(!INVALID_PROPERTY_ERRORS$$module$ReactDOMIDOperations.hasOwnProperty(name));
  if(value != null) {
    DOMPropertyOperations$$module$ReactDOMIDOperations.setValueForProperty(node, name, value)
  }else {
    DOMPropertyOperations$$module$ReactDOMIDOperations.deleteValueForProperty(node, name)
  }
}, deletePropertyByID:function(id, name, value) {
  var node = ReactMount$$module$ReactDOMIDOperations.getNode(id);
  invariant$$module$ReactDOMIDOperations(!INVALID_PROPERTY_ERRORS$$module$ReactDOMIDOperations.hasOwnProperty(name));
  DOMPropertyOperations$$module$ReactDOMIDOperations.deleteValueForProperty(node, name, value)
}, updatePropertiesByID:function(id, properties) {
  for(var name in properties) {
    if(!properties.hasOwnProperty(name)) {
      continue
    }
    ReactDOMIDOperations$$module$ReactDOMIDOperations.updatePropertiesByID(id, name, properties[name])
  }
}, updateStylesByID:function(id, styles) {
  var node = ReactMount$$module$ReactDOMIDOperations.getNode(id);
  CSSPropertyOperations$$module$ReactDOMIDOperations.setValueForStyles(node, styles)
}, updateInnerHTMLByID:function(id, html) {
  var node = ReactMount$$module$ReactDOMIDOperations.getNode(id);
  node.innerHTML = html.replace(LEADING_SPACE$$module$ReactDOMIDOperations, "&nbsp;")
}, updateTextContentByID:function(id, content) {
  var node = ReactMount$$module$ReactDOMIDOperations.getNode(id);
  node[textContentAccessor$$module$ReactDOMIDOperations] = content
}, dangerouslyReplaceNodeWithMarkupByID:function(id, markup) {
  var node = ReactMount$$module$ReactDOMIDOperations.getNode(id);
  DOMChildrenOperations$$module$ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkup(node, markup)
}, dangerouslyProcessChildrenUpdates:function(updates, markup) {
  for(var i = 0;i < updates.length;i++) {
    updates[i].parentNode = ReactMount$$module$ReactDOMIDOperations.getNode(updates[i].parentID)
  }
  DOMChildrenOperations$$module$ReactDOMIDOperations.processUpdates(updates, markup)
}};
module$ReactDOMIDOperations.module$exports = ReactDOMIDOperations$$module$ReactDOMIDOperations;
if(module$ReactDOMIDOperations.module$exports) {
  module$ReactDOMIDOperations = module$ReactDOMIDOperations.module$exports
}
;
