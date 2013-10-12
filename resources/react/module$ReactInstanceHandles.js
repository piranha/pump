goog.provide("module$ReactInstanceHandles");
var module$ReactInstanceHandles = {};
goog.require("module$invariant");
var invariant$$module$ReactInstanceHandles = module$invariant;
var SEPARATOR$$module$ReactInstanceHandles = ".";
var SEPARATOR_LENGTH$$module$ReactInstanceHandles = SEPARATOR$$module$ReactInstanceHandles.length;
var MAX_TREE_DEPTH$$module$ReactInstanceHandles = 100;
var GLOBAL_MOUNT_POINT_MAX$$module$ReactInstanceHandles = 9999999;
function getReactRootIDString$$module$ReactInstanceHandles(index) {
  return SEPARATOR$$module$ReactInstanceHandles + "r[" + index.toString(36) + "]"
}
function isBoundary$$module$ReactInstanceHandles(id, index) {
  return id.charAt(index) === SEPARATOR$$module$ReactInstanceHandles || index === id.length
}
function isValidID$$module$ReactInstanceHandles(id) {
  return id === "" || id.charAt(0) === SEPARATOR$$module$ReactInstanceHandles && id.charAt(id.length - 1) !== SEPARATOR$$module$ReactInstanceHandles
}
function isAncestorIDOf$$module$ReactInstanceHandles(ancestorID, descendantID) {
  return descendantID.indexOf(ancestorID) === 0 && isBoundary$$module$ReactInstanceHandles(descendantID, ancestorID.length)
}
function getParentID$$module$ReactInstanceHandles(id) {
  return id ? id.substr(0, id.lastIndexOf(SEPARATOR$$module$ReactInstanceHandles)) : ""
}
function getNextDescendantID$$module$ReactInstanceHandles(ancestorID, destinationID) {
  invariant$$module$ReactInstanceHandles(isValidID$$module$ReactInstanceHandles(ancestorID) && isValidID$$module$ReactInstanceHandles(destinationID));
  invariant$$module$ReactInstanceHandles(isAncestorIDOf$$module$ReactInstanceHandles(ancestorID, destinationID));
  if(ancestorID === destinationID) {
    return ancestorID
  }
  var start = ancestorID.length + SEPARATOR_LENGTH$$module$ReactInstanceHandles;
  for(var i = start;i < destinationID.length;i++) {
    if(isBoundary$$module$ReactInstanceHandles(destinationID, i)) {
      break
    }
  }
  return destinationID.substr(0, i)
}
function getFirstCommonAncestorID$$module$ReactInstanceHandles(oneID, twoID) {
  var minLength = Math.min(oneID.length, twoID.length);
  if(minLength === 0) {
    return""
  }
  var lastCommonMarkerIndex = 0;
  for(var i = 0;i <= minLength;i++) {
    if(isBoundary$$module$ReactInstanceHandles(oneID, i) && isBoundary$$module$ReactInstanceHandles(twoID, i)) {
      lastCommonMarkerIndex = i
    }else {
      if(oneID.charAt(i) !== twoID.charAt(i)) {
        break
      }
    }
  }
  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
  invariant$$module$ReactInstanceHandles(isValidID$$module$ReactInstanceHandles(longestCommonID));
  return longestCommonID
}
function traverseParentPath$$module$ReactInstanceHandles(start, stop, cb, arg, skipFirst, skipLast) {
  start = start || "";
  stop = stop || "";
  invariant$$module$ReactInstanceHandles(start !== stop);
  var traverseUp = isAncestorIDOf$$module$ReactInstanceHandles(stop, start);
  invariant$$module$ReactInstanceHandles(traverseUp || isAncestorIDOf$$module$ReactInstanceHandles(start, stop));
  var depth = 0;
  var traverse = traverseUp ? getParentID$$module$ReactInstanceHandles : getNextDescendantID$$module$ReactInstanceHandles;
  for(var id = start;;id = traverse(id, stop)) {
    if((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
      cb(id, traverseUp, arg)
    }
    if(id === stop) {
      break
    }
    invariant$$module$ReactInstanceHandles(depth++ < MAX_TREE_DEPTH$$module$ReactInstanceHandles)
  }
}
var ReactInstanceHandles$$module$ReactInstanceHandles = {createReactRootID:function() {
  return getReactRootIDString$$module$ReactInstanceHandles(Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX$$module$ReactInstanceHandles))
}, createReactID:function(rootID, name) {
  return rootID + SEPARATOR$$module$ReactInstanceHandles + name
}, getReactRootIDFromNodeID:function(id) {
  var regexResult = /\.r\[[^\]]+\]/.exec(id);
  return regexResult && regexResult[0]
}, traverseEnterLeave:function(leaveID, enterID, cb, upArg, downArg) {
  var ancestorID = getFirstCommonAncestorID$$module$ReactInstanceHandles(leaveID, enterID);
  if(ancestorID !== leaveID) {
    traverseParentPath$$module$ReactInstanceHandles(leaveID, ancestorID, cb, upArg, false, true)
  }
  if(ancestorID !== enterID) {
    traverseParentPath$$module$ReactInstanceHandles(ancestorID, enterID, cb, downArg, true, false)
  }
}, traverseTwoPhase:function(targetID, cb, arg) {
  if(targetID) {
    traverseParentPath$$module$ReactInstanceHandles("", targetID, cb, arg, true, false);
    traverseParentPath$$module$ReactInstanceHandles(targetID, "", cb, arg, false, true)
  }
}, _getFirstCommonAncestorID:getFirstCommonAncestorID$$module$ReactInstanceHandles, _getNextDescendantID:getNextDescendantID$$module$ReactInstanceHandles, isAncestorIDOf:isAncestorIDOf$$module$ReactInstanceHandles, SEPARATOR:SEPARATOR$$module$ReactInstanceHandles};
module$ReactInstanceHandles.module$exports = ReactInstanceHandles$$module$ReactInstanceHandles;
if(module$ReactInstanceHandles.module$exports) {
  module$ReactInstanceHandles = module$ReactInstanceHandles.module$exports
}
;
