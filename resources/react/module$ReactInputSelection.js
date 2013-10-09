;goog.provide("module$ReactInputSelection");
var module$ReactInputSelection = {};
goog.require("module$nodeContains");
goog.require("module$ReactDOMSelection");
var ReactDOMSelection$$module$ReactInputSelection = module$ReactDOMSelection;
var nodeContains$$module$ReactInputSelection = module$nodeContains;
function getActiveElement$$module$ReactInputSelection() {
  try {
    return document.activeElement
  }catch(e) {
  }
}
function isInDocument$$module$ReactInputSelection(node) {
  return nodeContains$$module$ReactInputSelection(document.documentElement, node)
}
var ReactInputSelection$$module$ReactInputSelection = {hasSelectionCapabilities:function(elem) {
  return elem && (elem.nodeName === "INPUT" && elem.type === "text" || elem.nodeName === "TEXTAREA" || elem.contentEditable === "true")
}, getSelectionInformation:function() {
  var focusedElem = getActiveElement$$module$ReactInputSelection();
  return{focusedElem:focusedElem, selectionRange:ReactInputSelection$$module$ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection$$module$ReactInputSelection.getSelection(focusedElem) : null}
}, restoreSelection:function(priorSelectionInformation) {
  var curFocusedElem = getActiveElement$$module$ReactInputSelection();
  var priorFocusedElem = priorSelectionInformation.focusedElem;
  var priorSelectionRange = priorSelectionInformation.selectionRange;
  if(curFocusedElem !== priorFocusedElem && isInDocument$$module$ReactInputSelection(priorFocusedElem)) {
    if(ReactInputSelection$$module$ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
      ReactInputSelection$$module$ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange)
    }
    priorFocusedElem.focus()
  }
}, getSelection:function(input) {
  var selection;
  if("selectionStart" in input) {
    selection = {start:input.selectionStart, end:input.selectionEnd}
  }else {
    if(document.selection && input.nodeName === "INPUT") {
      var range = document.selection.createRange();
      if(range.parentElement() === input) {
        selection = {start:-range.moveStart("character", -input.value.length), end:-range.moveEnd("character", -input.value.length)}
      }
    }else {
      selection = ReactDOMSelection$$module$ReactInputSelection.get(input)
    }
  }
  return selection || {start:0, end:0}
}, setSelection:function(input, offsets) {
  var start = offsets.start;
  var end = offsets.end;
  if(typeof end === "undefined") {
    end = start
  }
  if("selectionStart" in input) {
    input.selectionStart = start;
    input.selectionEnd = Math.min(end, input.value.length)
  }else {
    if(document.selection && input.nodeName === "INPUT") {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart("character", start);
      range.moveEnd("character", end - start);
      range.select()
    }else {
      ReactDOMSelection$$module$ReactInputSelection.set(input, offsets)
    }
  }
}};
module$ReactInputSelection.module$exports = ReactInputSelection$$module$ReactInputSelection;
if(module$ReactInputSelection.module$exports) {
  module$ReactInputSelection = module$ReactInputSelection.module$exports
}
