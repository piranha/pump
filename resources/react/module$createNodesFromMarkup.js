;goog.provide("module$createNodesFromMarkup");
var module$createNodesFromMarkup = {};
goog.require("module$invariant");
goog.require("module$getMarkupWrap");
goog.require("module$createArrayFrom");
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$createNodesFromMarkup = module$ExecutionEnvironment;
var createArrayFrom$$module$createNodesFromMarkup = module$createArrayFrom;
var getMarkupWrap$$module$createNodesFromMarkup = module$getMarkupWrap;
var invariant$$module$createNodesFromMarkup = module$invariant;
var dummyNode$$module$createNodesFromMarkup = ExecutionEnvironment$$module$createNodesFromMarkup.canUseDOM ? document.createElement("div") : null;
var nodeNamePattern$$module$createNodesFromMarkup = /^\s*<(\w+)/;
function getNodeName$$module$createNodesFromMarkup(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern$$module$createNodesFromMarkup);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase()
}
function createNodesFromMarkup$$module$createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode$$module$createNodesFromMarkup;
  invariant$$module$createNodesFromMarkup(!!dummyNode$$module$createNodesFromMarkup);
  var nodeName = getNodeName$$module$createNodesFromMarkup(markup);
  var wrap = nodeName && getMarkupWrap$$module$createNodesFromMarkup(nodeName);
  if(wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];
    var wrapDepth = wrap[0];
    while(wrapDepth--) {
      node = node.lastChild
    }
  }else {
    node.innerHTML = markup
  }
  var scripts = node.getElementsByTagName("script");
  if(scripts.length) {
    invariant$$module$createNodesFromMarkup(handleScript);
    createArrayFrom$$module$createNodesFromMarkup(scripts).forEach(handleScript)
  }
  var nodes = createArrayFrom$$module$createNodesFromMarkup(node.childNodes);
  while(node.lastChild) {
    node.removeChild(node.lastChild)
  }
  return nodes
}
module$createNodesFromMarkup.module$exports = createNodesFromMarkup$$module$createNodesFromMarkup;
if(module$createNodesFromMarkup.module$exports) {
  module$createNodesFromMarkup = module$createNodesFromMarkup.module$exports
}
