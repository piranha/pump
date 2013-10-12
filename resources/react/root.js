goog.provide("module$memoizeStringOnly");
var module$memoizeStringOnly = {};
function memoizeStringOnly$$module$memoizeStringOnly(callback) {
  var cache = {};
  return function(string) {
    if(cache.hasOwnProperty(string)) {
      return cache[string]
    }else {
      return cache[string] = callback.call(this, string)
    }
  }
}
module$memoizeStringOnly.module$exports = memoizeStringOnly$$module$memoizeStringOnly;
if(module$memoizeStringOnly.module$exports) {
  module$memoizeStringOnly = module$memoizeStringOnly.module$exports
}
;goog.provide("module$ExecutionEnvironment");
var module$ExecutionEnvironment = {};
var canUseDOM$$module$ExecutionEnvironment = typeof window !== "undefined";
var ExecutionEnvironment$$module$ExecutionEnvironment = {canUseDOM:canUseDOM$$module$ExecutionEnvironment, canUseWorkers:typeof Worker !== "undefined", isInWorker:!canUseDOM$$module$ExecutionEnvironment};
module$ExecutionEnvironment.module$exports = ExecutionEnvironment$$module$ExecutionEnvironment;
if(module$ExecutionEnvironment.module$exports) {
  module$ExecutionEnvironment = module$ExecutionEnvironment.module$exports
}
;goog.provide("module$ViewportMetrics");
var module$ViewportMetrics = {};
var ViewportMetrics$$module$ViewportMetrics = {currentScrollLeft:0, currentScrollTop:0, refreshScrollValues:function() {
  ViewportMetrics$$module$ViewportMetrics.currentScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
  ViewportMetrics$$module$ViewportMetrics.currentScrollTop = document.body.scrollTop + document.documentElement.scrollTop
}};
module$ViewportMetrics.module$exports = ViewportMetrics$$module$ViewportMetrics;
if(module$ViewportMetrics.module$exports) {
  module$ViewportMetrics = module$ViewportMetrics.module$exports
}
;goog.provide("module$getEventTarget");
var module$getEventTarget = {};
function getEventTarget$$module$getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  return target.nodeType === 3 ? target.parentNode : target
}
module$getEventTarget.module$exports = getEventTarget$$module$getEventTarget;
if(module$getEventTarget.module$exports) {
  module$getEventTarget = module$getEventTarget.module$exports
}
;goog.provide("module$isTextInputElement");
var module$isTextInputElement = {};
var supportedInputTypes$$module$isTextInputElement = {"color":true, "date":true, "datetime":true, "datetime-local":true, "email":true, "month":true, "number":true, "password":true, "range":true, "search":true, "tel":true, "text":true, "time":true, "url":true, "week":true};
function isTextInputElement$$module$isTextInputElement(elem) {
  return elem && (elem.nodeName === "INPUT" && supportedInputTypes$$module$isTextInputElement[elem.type] || elem.nodeName === "TEXTAREA")
}
module$isTextInputElement.module$exports = isTextInputElement$$module$isTextInputElement;
if(module$isTextInputElement.module$exports) {
  module$isTextInputElement = module$isTextInputElement.module$exports
}
;goog.provide("module$adler32");
var module$adler32 = {};
var MOD$$module$adler32 = 65521;
function adler32$$module$adler32(data) {
  var a = 1;
  var b = 0;
  for(var i = 0;i < data.length;i++) {
    a = (a + data.charCodeAt(i)) % MOD$$module$adler32;
    b = (b + a) % MOD$$module$adler32
  }
  return a | b << 16
}
module$adler32.module$exports = adler32$$module$adler32;
if(module$adler32.module$exports) {
  module$adler32 = module$adler32.module$exports
}
;goog.provide("module$ReactMarkupChecksum");
var module$ReactMarkupChecksum = {};
goog.require("module$adler32");
var adler32$$module$ReactMarkupChecksum = module$adler32;
var ReactMarkupChecksum$$module$ReactMarkupChecksum = {CHECKSUM_ATTR_NAME:"data-react-checksum", addChecksumToMarkup:function(markup) {
  var checksum = adler32$$module$ReactMarkupChecksum(markup);
  return markup.replace(">", " " + ReactMarkupChecksum$$module$ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">')
}, canReuseMarkup:function(markup, element) {
  var existingChecksum = element.getAttribute(ReactMarkupChecksum$$module$ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
  existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
  var markupChecksum = adler32$$module$ReactMarkupChecksum(markup);
  return markupChecksum === existingChecksum
}};
module$ReactMarkupChecksum.module$exports = ReactMarkupChecksum$$module$ReactMarkupChecksum;
if(module$ReactMarkupChecksum.module$exports) {
  module$ReactMarkupChecksum = module$ReactMarkupChecksum.module$exports
}
;goog.provide("module$PooledClass");
var module$PooledClass = {};
var oneArgumentPooler$$module$PooledClass = function(copyFieldsFrom) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance
  }else {
    return new Klass(copyFieldsFrom)
  }
};
var twoArgumentPooler$$module$PooledClass = function(a1, a2) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance
  }else {
    return new Klass(a1, a2)
  }
};
var threeArgumentPooler$$module$PooledClass = function(a1, a2, a3) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance
  }else {
    return new Klass(a1, a2, a3)
  }
};
var fiveArgumentPooler$$module$PooledClass = function(a1, a2, a3, a4, a5) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance
  }else {
    return new Klass(a1, a2, a3, a4, a5)
  }
};
var standardReleaser$$module$PooledClass = function(instance) {
  var Klass = this;
  if(instance.destructor) {
    instance.destructor()
  }
  if(Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance)
  }
};
var DEFAULT_POOL_SIZE$$module$PooledClass = 10;
var DEFAULT_POOLER$$module$PooledClass = oneArgumentPooler$$module$PooledClass;
var addPoolingTo$$module$PooledClass = function(CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER$$module$PooledClass;
  if(!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE$$module$PooledClass
  }
  NewKlass.release = standardReleaser$$module$PooledClass;
  return NewKlass
};
var PooledClass$$module$PooledClass = {addPoolingTo:addPoolingTo$$module$PooledClass, oneArgumentPooler:oneArgumentPooler$$module$PooledClass, twoArgumentPooler:twoArgumentPooler$$module$PooledClass, threeArgumentPooler:threeArgumentPooler$$module$PooledClass, fiveArgumentPooler:fiveArgumentPooler$$module$PooledClass};
module$PooledClass.module$exports = PooledClass$$module$PooledClass;
if(module$PooledClass.module$exports) {
  module$PooledClass = module$PooledClass.module$exports
}
;goog.provide("module$getTextContentAccessor");
var module$getTextContentAccessor = {};
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$getTextContentAccessor = module$ExecutionEnvironment;
var contentKey$$module$getTextContentAccessor = null;
function getTextContentAccessor$$module$getTextContentAccessor() {
  if(!contentKey$$module$getTextContentAccessor && ExecutionEnvironment$$module$getTextContentAccessor.canUseDOM) {
    contentKey$$module$getTextContentAccessor = "innerText" in document.createElement("div") ? "innerText" : "textContent"
  }
  return contentKey$$module$getTextContentAccessor
}
module$getTextContentAccessor.module$exports = getTextContentAccessor$$module$getTextContentAccessor;
if(module$getTextContentAccessor.module$exports) {
  module$getTextContentAccessor = module$getTextContentAccessor.module$exports
}
;goog.provide("module$copyProperties");
var module$copyProperties = {};
function copyProperties$$module$copyProperties(obj, a, b, c, d, e, f) {
  obj = obj || {};
  var args = [a, b, c, d, e];
  var ii = 0, v;
  while(args[ii]) {
    v = args[ii++];
    for(var k in v) {
      obj[k] = v[k]
    }
    if(v.hasOwnProperty && v.hasOwnProperty("toString") && typeof v.toString != "undefined" && obj.toString !== v.toString) {
      obj.toString = v.toString
    }
  }
  return obj
}
module$copyProperties.module$exports = copyProperties$$module$copyProperties;
if(module$copyProperties.module$exports) {
  module$copyProperties = module$copyProperties.module$exports
}
;goog.provide("module$emptyFunction");
var module$emptyFunction = {};
goog.require("module$copyProperties");
var copyProperties$$module$emptyFunction = module$copyProperties;
function makeEmptyFunction$$module$emptyFunction(arg) {
  return function() {
    return arg
  }
}
function emptyFunction$$module$emptyFunction() {
}
copyProperties$$module$emptyFunction(emptyFunction$$module$emptyFunction, {thatReturns:makeEmptyFunction$$module$emptyFunction, thatReturnsFalse:makeEmptyFunction$$module$emptyFunction(false), thatReturnsTrue:makeEmptyFunction$$module$emptyFunction(true), thatReturnsNull:makeEmptyFunction$$module$emptyFunction(null), thatReturnsThis:function() {
  return this
}, thatReturnsArgument:function(arg) {
  return arg
}});
module$emptyFunction.module$exports = emptyFunction$$module$emptyFunction;
if(module$emptyFunction.module$exports) {
  module$emptyFunction = module$emptyFunction.module$exports
}
;goog.provide("module$isNode");
var module$isNode = {};
function isNode$$module$isNode(object) {
  return!!(object && (typeof Node !== "undefined" ? object instanceof Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"))
}
module$isNode.module$exports = isNode$$module$isNode;
if(module$isNode.module$exports) {
  module$isNode = module$isNode.module$exports
}
;goog.provide("module$isTextNode");
var module$isTextNode = {};
goog.require("module$isNode");
var isNode$$module$isTextNode = module$isNode;
function isTextNode$$module$isTextNode(object) {
  return isNode$$module$isTextNode(object) && object.nodeType == 3
}
module$isTextNode.module$exports = isTextNode$$module$isTextNode;
if(module$isTextNode.module$exports) {
  module$isTextNode = module$isTextNode.module$exports
}
;goog.provide("module$nodeContains");
var module$nodeContains = {};
goog.require("module$isTextNode");
var isTextNode$$module$nodeContains = module$isTextNode;
function nodeContains$$module$nodeContains(outerNode, innerNode) {
  if(!outerNode || !innerNode) {
    return false
  }else {
    if(outerNode === innerNode) {
      return true
    }else {
      if(isTextNode$$module$nodeContains(outerNode)) {
        return false
      }else {
        if(isTextNode$$module$nodeContains(innerNode)) {
          return nodeContains$$module$nodeContains(outerNode, innerNode.parentNode)
        }else {
          if(outerNode.contains) {
            return outerNode.contains(innerNode)
          }else {
            if(outerNode.compareDocumentPosition) {
              return!!(outerNode.compareDocumentPosition(innerNode) & 16)
            }else {
              return false
            }
          }
        }
      }
    }
  }
}
module$nodeContains.module$exports = nodeContains$$module$nodeContains;
if(module$nodeContains.module$exports) {
  module$nodeContains = module$nodeContains.module$exports
}
;goog.provide("module$getNodeForCharacterOffset");
var module$getNodeForCharacterOffset = {};
function getLeafNode$$module$getNodeForCharacterOffset(node) {
  while(node && node.firstChild) {
    node = node.firstChild
  }
  return node
}
function getSiblingNode$$module$getNodeForCharacterOffset(node) {
  while(node) {
    if(node.nextSibling) {
      return node.nextSibling
    }
    node = node.parentNode
  }
}
function getNodeForCharacterOffset$$module$getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode$$module$getNodeForCharacterOffset(root);
  var nodeStart = 0;
  var nodeEnd = 0;
  while(node) {
    if(node.nodeType == 3) {
      nodeEnd = nodeStart + node.textContent.length;
      if(nodeStart <= offset && nodeEnd >= offset) {
        return{node:node, offset:offset - nodeStart}
      }
      nodeStart = nodeEnd
    }
    node = getLeafNode$$module$getNodeForCharacterOffset(getSiblingNode$$module$getNodeForCharacterOffset(node))
  }
}
module$getNodeForCharacterOffset.module$exports = getNodeForCharacterOffset$$module$getNodeForCharacterOffset;
if(module$getNodeForCharacterOffset.module$exports) {
  module$getNodeForCharacterOffset = module$getNodeForCharacterOffset.module$exports
}
;goog.provide("module$ReactDOMSelection");
var module$ReactDOMSelection = {};
goog.require("module$getTextContentAccessor");
goog.require("module$getNodeForCharacterOffset");
var getNodeForCharacterOffset$$module$ReactDOMSelection = module$getNodeForCharacterOffset;
var getTextContentAccessor$$module$ReactDOMSelection = module$getTextContentAccessor;
function getIEOffsets$$module$ReactDOMSelection(node) {
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
function getModernOffsets$$module$ReactDOMSelection(node) {
  var selection = window.getSelection();
  if(selection.rangeCount === 0) {
    return null
  }
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
function setIEOffsets$$module$ReactDOMSelection(node, offsets) {
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
function setModernOffsets$$module$ReactDOMSelection(node, offsets) {
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
var ReactDOMSelection$$module$ReactDOMSelection = {getOffsets:function(node) {
  var getOffsets = document.selection ? getIEOffsets$$module$ReactDOMSelection : getModernOffsets$$module$ReactDOMSelection;
  return getOffsets(node)
}, setOffsets:function(node, offsets) {
  var setOffsets = document.selection ? setIEOffsets$$module$ReactDOMSelection : setModernOffsets$$module$ReactDOMSelection;
  setOffsets(node, offsets)
}};
module$ReactDOMSelection.module$exports = ReactDOMSelection$$module$ReactDOMSelection;
if(module$ReactDOMSelection.module$exports) {
  module$ReactDOMSelection = module$ReactDOMSelection.module$exports
}
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
      selection = ReactDOMSelection$$module$ReactInputSelection.getOffsets(input)
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
      ReactDOMSelection$$module$ReactInputSelection.setOffsets(input, offsets)
    }
  }
}};
module$ReactInputSelection.module$exports = ReactInputSelection$$module$ReactInputSelection;
if(module$ReactInputSelection.module$exports) {
  module$ReactInputSelection = module$ReactInputSelection.module$exports
}
;
