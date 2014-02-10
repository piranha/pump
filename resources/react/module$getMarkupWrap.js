goog.provide("module$getMarkupWrap");
var module$getMarkupWrap = {};
goog.require("module$invariant");
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$getMarkupWrap = module$ExecutionEnvironment;
var invariant$$module$getMarkupWrap = module$invariant;
var dummyNode$$module$getMarkupWrap = ExecutionEnvironment$$module$getMarkupWrap.canUseDOM ? document.createElement("div") : null;
var shouldWrap$$module$getMarkupWrap = {"circle":true, "g":true, "line":true, "path":true, "polyline":true, "rect":true, "text":true};
var selectWrap$$module$getMarkupWrap = [1, '<select multiple="true">', "</select>"];
var tableWrap$$module$getMarkupWrap = [1, "<table>", "</table>"];
var trWrap$$module$getMarkupWrap = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
var svgWrap$$module$getMarkupWrap = [1, "<svg>", "</svg>"];
var markupWrap$$module$getMarkupWrap = {"*":[1, "?<div>", "</div>"], "area":[1, "<map>", "</map>"], "col":[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "legend":[1, "<fieldset>", "</fieldset>"], "param":[1, "<object>", "</object>"], "tr":[2, "<table><tbody>", "</tbody></table>"], "optgroup":selectWrap$$module$getMarkupWrap, "option":selectWrap$$module$getMarkupWrap, "caption":tableWrap$$module$getMarkupWrap, "colgroup":tableWrap$$module$getMarkupWrap, "tbody":tableWrap$$module$getMarkupWrap, 
"tfoot":tableWrap$$module$getMarkupWrap, "thead":tableWrap$$module$getMarkupWrap, "td":trWrap$$module$getMarkupWrap, "th":trWrap$$module$getMarkupWrap, "circle":svgWrap$$module$getMarkupWrap, "g":svgWrap$$module$getMarkupWrap, "line":svgWrap$$module$getMarkupWrap, "path":svgWrap$$module$getMarkupWrap, "polyline":svgWrap$$module$getMarkupWrap, "rect":svgWrap$$module$getMarkupWrap, "text":svgWrap$$module$getMarkupWrap};
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
;
