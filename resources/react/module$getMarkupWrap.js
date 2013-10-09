;goog.provide("module$getMarkupWrap");
var module$getMarkupWrap = {};
goog.require("module$invariant");
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$getMarkupWrap = module$ExecutionEnvironment;
var invariant$$module$getMarkupWrap = module$invariant;
var dummyNode$$module$getMarkupWrap = ExecutionEnvironment$$module$getMarkupWrap.canUseDOM ? document.createElement("div") : null;
var shouldWrap$$module$getMarkupWrap = {};
var markupWrap$$module$getMarkupWrap = {"area":[1, "<map>", "</map>"], "caption":[1, "<table>", "</table>"], "col":[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "colgroup":[1, "<table>", "</table>"], "legend":[1, "<fieldset>", "</fieldset>"], "optgroup":[1, '<select multiple="true">', "</select>"], "option":[1, '<select multiple="true">', "</select>"], "param":[1, "<object>", "</object>"], "tbody":[1, "<table>", "</table>"], "td":[3, "<table><tbody><tr>", "</tr></tbody></table>"], 
"tfoot":[1, "<table>", "</table>"], "th":[3, "<table><tbody><tr>", "</tr></tbody></table>"], "thead":[1, "<table>", "</table>"], "tr":[2, "<table><tbody>", "</tbody></table>"], "*":[1, "?<div>", "</div>"]};
function getMarkupWrap$$module$getMarkupWrap(nodeName) {
  invariant$$module$getMarkupWrap(!!dummyNode$$module$getMarkupWrap);
  if(!markupWrap$$module$getMarkupWrap.hasOwnProperty(nodeName)) {
    nodeName = "*"
  }
  if(!shouldWrap$$module$getMarkupWrap.hasOwnProperty(nodeName)) {
    if(nodeName === "*") {
      dummyNode$$module$getMarkupWrap.innerHTML = "<link />"
    }else {
      dummyNode$$module$getMarkupWrap.innerHTML = "<" + nodeName + "></" + nodeName + ">"
    }
    shouldWrap$$module$getMarkupWrap[nodeName] = !dummyNode$$module$getMarkupWrap.firstChild
  }
  return shouldWrap$$module$getMarkupWrap[nodeName] ? markupWrap$$module$getMarkupWrap[nodeName] : null
}
module$getMarkupWrap.module$exports = getMarkupWrap$$module$getMarkupWrap;
if(module$getMarkupWrap.module$exports) {
  module$getMarkupWrap = module$getMarkupWrap.module$exports
}
