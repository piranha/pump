;goog.provide("module$ReactDOMSelection");
var module$ReactDOMSelection = {};
goog.require("module$getTextContentAccessor");
goog.require("module$getNodeForCharacterOffset");
var getNodeForCharacterOffset$$module$ReactDOMSelection = module$getNodeForCharacterOffset;
var getTextContentAccessor$$module$ReactDOMSelection = module$getTextContentAccessor;
function getIESelection$$module$ReactDOMSelection(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint("EndToStart", selectedRange);
  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;
  return{start:startOffset, end:endOffset}
}
function getModernSelection$$module$ReactDOMSelection(node) {
  var selection = window.getSelection();
  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;
  var currentRange = selection.getRangeAt(0);
  var rangeLength = currentRange.toString().length;
  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
  var start = tempRange.toString().length;
  var end = start + rangeLength;
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;
  detectionRange.detach();
  return{start:isBackward ? end : start, end:isBackward ? start : end}
}
function setIESelection$$module$ReactDOMSelection(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;
  if(typeof offsets.end === "undefined") {
    start = offsets.start;
    end = start
  }else {
    if(offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start
    }else {
      start = offsets.start;
      end = offsets.end
    }
  }
  range.moveToElementText(node);
  range.moveStart("character", start);
  range.setEndPoint("EndToStart", range);
  range.moveEnd("character", end - start);
  range.select()
}
function setModernSelection$$module$ReactDOMSelection(node, offsets) {
  var selection = window.getSelection();
  var length = node[getTextContentAccessor$$module$ReactDOMSelection()].length;
  var start = Math.min(offsets.start, length);
  var end = typeof offsets.end === "undefined" ? start : Math.min(offsets.end, length);
  var startMarker = getNodeForCharacterOffset$$module$ReactDOMSelection(node, start);
  var endMarker = getNodeForCharacterOffset$$module$ReactDOMSelection(node, end);
  if(startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();
    selection.addRange(range);
    selection.extend(endMarker.node, endMarker.offset);
    range.detach()
  }
}
var ReactDOMSelection$$module$ReactDOMSelection = {get:function(node) {
  var getSelection = document.selection ? getIESelection$$module$ReactDOMSelection : getModernSelection$$module$ReactDOMSelection;
  return getSelection(node)
}, set:function(node, offsets) {
  var setSelection = document.selection ? setIESelection$$module$ReactDOMSelection : setModernSelection$$module$ReactDOMSelection;
  setSelection(node, offsets)
}};
module$ReactDOMSelection.module$exports = ReactDOMSelection$$module$ReactDOMSelection;
if(module$ReactDOMSelection.module$exports) {
  module$ReactDOMSelection = module$ReactDOMSelection.module$exports
}
