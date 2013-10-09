;goog.provide("module$Danger");
var module$Danger = {};
goog.require("module$mutateHTMLNodeWithMarkup");
goog.require("module$invariant");
goog.require("module$getMarkupWrap");
goog.require("module$emptyFunction");
goog.require("module$createNodesFromMarkup");
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$Danger = module$ExecutionEnvironment;
var createNodesFromMarkup$$module$Danger = module$createNodesFromMarkup;
var emptyFunction$$module$Danger = module$emptyFunction;
var getMarkupWrap$$module$Danger = module$getMarkupWrap;
var invariant$$module$Danger = module$invariant;
var mutateHTMLNodeWithMarkup$$module$Danger = module$mutateHTMLNodeWithMarkup;
var OPEN_TAG_NAME_EXP$$module$Danger = /^(<[^ \/>]+)/;
var RESULT_INDEX_ATTR$$module$Danger = "data-danger-index";
function getNodeName$$module$Danger(markup) {
  return markup.substring(1, markup.indexOf(" "))
}
var Danger$$module$Danger = {dangerouslyRenderMarkup:function(markupList) {
  invariant$$module$Danger(ExecutionEnvironment$$module$Danger.canUseDOM);
  var nodeName;
  var markupByNodeName = {};
  for(var i = 0;i < markupList.length;i++) {
    invariant$$module$Danger(markupList[i]);
    nodeName = getNodeName$$module$Danger(markupList[i]);
    nodeName = getMarkupWrap$$module$Danger(nodeName) ? nodeName : "*";
    markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
    markupByNodeName[nodeName][i] = markupList[i]
  }
  var resultList = [];
  var resultListAssignmentCount = 0;
  for(nodeName in markupByNodeName) {
    if(!markupByNodeName.hasOwnProperty(nodeName)) {
      continue
    }
    var markupListByNodeName = markupByNodeName[nodeName];
    for(var resultIndex in markupListByNodeName) {
      if(markupListByNodeName.hasOwnProperty(resultIndex)) {
        var markup = markupListByNodeName[resultIndex];
        markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP$$module$Danger, "$1 " + RESULT_INDEX_ATTR$$module$Danger + '="' + resultIndex + '" ')
      }
    }
    var renderNodes = createNodesFromMarkup$$module$Danger(markupListByNodeName.join(""), emptyFunction$$module$Danger);
    for(i = 0;i < renderNodes.length;++i) {
      var renderNode = renderNodes[i];
      if(renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR$$module$Danger)) {
        resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR$$module$Danger);
        renderNode.removeAttribute(RESULT_INDEX_ATTR$$module$Danger);
        invariant$$module$Danger(!resultList.hasOwnProperty(resultIndex));
        resultList[resultIndex] = renderNode;
        resultListAssignmentCount += 1
      }
    }
  }
  invariant$$module$Danger(resultListAssignmentCount === resultList.length);
  invariant$$module$Danger(resultList.length === markupList.length);
  return resultList
}, dangerouslyReplaceNodeWithMarkup:function(oldChild, markup) {
  invariant$$module$Danger(ExecutionEnvironment$$module$Danger.canUseDOM);
  invariant$$module$Danger(markup);
  if(oldChild.tagName.toLowerCase() === "html") {
    mutateHTMLNodeWithMarkup$$module$Danger(oldChild, markup);
    return
  }
  var newChild = createNodesFromMarkup$$module$Danger(markup, emptyFunction$$module$Danger)[0];
  oldChild.parentNode.replaceChild(newChild, oldChild)
}};
module$Danger.module$exports = Danger$$module$Danger;
if(module$Danger.module$exports) {
  module$Danger = module$Danger.module$exports
}
