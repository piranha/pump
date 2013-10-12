goog.provide("module$mutateHTMLNodeWithMarkup");
var module$mutateHTMLNodeWithMarkup = {};
goog.require("module$invariant");
goog.require("module$filterAttributes");
goog.require("module$createNodesFromMarkup");
var createNodesFromMarkup$$module$mutateHTMLNodeWithMarkup = module$createNodesFromMarkup;
var filterAttributes$$module$mutateHTMLNodeWithMarkup = module$filterAttributes;
var invariant$$module$mutateHTMLNodeWithMarkup = module$invariant;
function mutateHTMLNodeWithMarkup$$module$mutateHTMLNodeWithMarkup(node, markup) {
  invariant$$module$mutateHTMLNodeWithMarkup(node.tagName.toLowerCase() === "html");
  markup = markup.trim();
  invariant$$module$mutateHTMLNodeWithMarkup(markup.toLowerCase().indexOf("<html") === 0);
  var htmlOpenTagEnd = markup.indexOf(">") + 1;
  var htmlCloseTagStart = markup.lastIndexOf("<");
  var htmlOpenTag = markup.substring(0, htmlOpenTagEnd);
  var innerHTML = markup.substring(htmlOpenTagEnd, htmlCloseTagStart);
  var shouldExtractAttributes = htmlOpenTag.indexOf(" ") > -1;
  var attributeHolder = null;
  if(shouldExtractAttributes) {
    attributeHolder = createNodesFromMarkup$$module$mutateHTMLNodeWithMarkup(htmlOpenTag.replace("html ", "span ") + "</span>")[0];
    var attributesToSet = filterAttributes$$module$mutateHTMLNodeWithMarkup(attributeHolder, function(attr) {
      return node.getAttributeNS(attr.namespaceURI, attr.name) !== attr.value
    });
    attributesToSet.forEach(function(attr) {
      node.setAttributeNS(attr.namespaceURI, attr.name, attr.value)
    })
  }
  var attributesToRemove = filterAttributes$$module$mutateHTMLNodeWithMarkup(node, function(attr) {
    return!(attributeHolder && attributeHolder.hasAttributeNS(attr.namespaceURI, attr.name))
  });
  attributesToRemove.forEach(function(attr) {
    node.removeAttributeNS(attr.namespaceURI, attr.name)
  });
  node.innerHTML = innerHTML
}
module$mutateHTMLNodeWithMarkup.module$exports = mutateHTMLNodeWithMarkup$$module$mutateHTMLNodeWithMarkup;
if(module$mutateHTMLNodeWithMarkup.module$exports) {
  module$mutateHTMLNodeWithMarkup = module$mutateHTMLNodeWithMarkup.module$exports
}
;
