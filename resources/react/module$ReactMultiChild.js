goog.provide("module$ReactMultiChild");
var module$ReactMultiChild = {};
goog.require("module$flattenChildren");
goog.require("module$ReactMultiChildUpdateTypes");
goog.require("module$ReactComponent");
var ReactComponent$$module$ReactMultiChild = module$ReactComponent;
var ReactMultiChildUpdateTypes$$module$ReactMultiChild = module$ReactMultiChildUpdateTypes;
var flattenChildren$$module$ReactMultiChild = module$flattenChildren;
function shouldUpdateChild$$module$ReactMultiChild(curChild, newChild) {
  return curChild && newChild && curChild.constructor === newChild.constructor
}
var updateDepth$$module$ReactMultiChild = 0;
var updateQueue$$module$ReactMultiChild = [];
var markupQueue$$module$ReactMultiChild = [];
function enqueueMarkup$$module$ReactMultiChild(parentID, markup, toIndex) {
  updateQueue$$module$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$ReactMultiChild.INSERT_MARKUP, markupIndex:markupQueue$$module$ReactMultiChild.push(markup) - 1, fromIndex:null, textContent:null, toIndex:toIndex})
}
function enqueueMove$$module$ReactMultiChild(parentID, fromIndex, toIndex) {
  updateQueue$$module$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$ReactMultiChild.MOVE_EXISTING, markupIndex:null, textContent:null, fromIndex:fromIndex, toIndex:toIndex})
}
function enqueueRemove$$module$ReactMultiChild(parentID, fromIndex) {
  updateQueue$$module$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$ReactMultiChild.REMOVE_NODE, markupIndex:null, textContent:null, fromIndex:fromIndex, toIndex:null})
}
function enqueueTextContent$$module$ReactMultiChild(parentID, textContent) {
  updateQueue$$module$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$ReactMultiChild.TEXT_CONTENT, markupIndex:null, textContent:textContent, fromIndex:null, toIndex:null})
}
function processQueue$$module$ReactMultiChild() {
  if(updateQueue$$module$ReactMultiChild.length) {
    ReactComponent$$module$ReactMultiChild.DOMIDOperations.dangerouslyProcessChildrenUpdates(updateQueue$$module$ReactMultiChild, markupQueue$$module$ReactMultiChild);
    clearQueue$$module$ReactMultiChild()
  }
}
function clearQueue$$module$ReactMultiChild() {
  updateQueue$$module$ReactMultiChild.length = 0;
  markupQueue$$module$ReactMultiChild.length = 0
}
var ReactMultiChild$$module$ReactMultiChild = {Mixin:{mountChildren:function(nestedChildren, transaction) {
  var children = flattenChildren$$module$ReactMultiChild(nestedChildren);
  var mountImages = [];
  var index = 0;
  this._renderedChildren = children;
  for(var name in children) {
    var child = children[name];
    if(children.hasOwnProperty(name) && child) {
      var rootID = this._rootNodeID + "." + name;
      var mountImage = child.mountComponent(rootID, transaction, this._mountDepth + 1);
      child._mountImage = mountImage;
      child._mountIndex = index;
      mountImages.push(mountImage);
      index++
    }
  }
  return mountImages
}, updateTextContent:function(nextContent) {
  updateDepth$$module$ReactMultiChild++;
  try {
    var prevChildren = this._renderedChildren;
    for(var name in prevChildren) {
      if(prevChildren.hasOwnProperty(name) && prevChildren[name]) {
        this._unmountChildByName(prevChildren[name], name)
      }
    }
    this.setTextContent(nextContent)
  }catch(error) {
    updateDepth$$module$ReactMultiChild--;
    updateDepth$$module$ReactMultiChild || clearQueue$$module$ReactMultiChild();
    throw error;
  }
  updateDepth$$module$ReactMultiChild--;
  updateDepth$$module$ReactMultiChild || processQueue$$module$ReactMultiChild()
}, updateChildren:function(nextNestedChildren, transaction) {
  updateDepth$$module$ReactMultiChild++;
  try {
    this._updateChildren(nextNestedChildren, transaction)
  }catch(error) {
    updateDepth$$module$ReactMultiChild--;
    updateDepth$$module$ReactMultiChild || clearQueue$$module$ReactMultiChild();
    throw error;
  }
  updateDepth$$module$ReactMultiChild--;
  updateDepth$$module$ReactMultiChild || processQueue$$module$ReactMultiChild()
}, _updateChildren:function(nextNestedChildren, transaction) {
  var nextChildren = flattenChildren$$module$ReactMultiChild(nextNestedChildren);
  var prevChildren = this._renderedChildren;
  if(!nextChildren && !prevChildren) {
    return
  }
  var name;
  var lastIndex = 0;
  var nextIndex = 0;
  for(name in nextChildren) {
    if(!nextChildren.hasOwnProperty(name)) {
      continue
    }
    var prevChild = prevChildren && prevChildren[name];
    var nextChild = nextChildren[name];
    if(shouldUpdateChild$$module$ReactMultiChild(prevChild, nextChild)) {
      this.moveChild(prevChild, nextIndex, lastIndex);
      lastIndex = Math.max(prevChild._mountIndex, lastIndex);
      prevChild.receiveProps(nextChild.props, transaction);
      prevChild._mountIndex = nextIndex
    }else {
      if(prevChild) {
        lastIndex = Math.max(prevChild._mountIndex, lastIndex);
        this._unmountChildByName(prevChild, name)
      }
      if(nextChild) {
        this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction)
      }
    }
    if(nextChild) {
      nextIndex++
    }
  }
  for(name in prevChildren) {
    if(prevChildren.hasOwnProperty(name) && prevChildren[name] && !(nextChildren && nextChildren[name])) {
      this._unmountChildByName(prevChildren[name], name)
    }
  }
}, unmountChildren:function() {
  var renderedChildren = this._renderedChildren;
  for(var name in renderedChildren) {
    var renderedChild = renderedChildren[name];
    if(renderedChild && renderedChild.unmountComponent) {
      renderedChild.unmountComponent()
    }
  }
  this._renderedChildren = null
}, moveChild:function(child, toIndex, lastIndex) {
  if(child._mountIndex < lastIndex) {
    enqueueMove$$module$ReactMultiChild(this._rootNodeID, child._mountIndex, toIndex)
  }
}, createChild:function(child) {
  enqueueMarkup$$module$ReactMultiChild(this._rootNodeID, child._mountImage, child._mountIndex)
}, removeChild:function(child) {
  enqueueRemove$$module$ReactMultiChild(this._rootNodeID, child._mountIndex)
}, setTextContent:function(textContent) {
  enqueueTextContent$$module$ReactMultiChild(this._rootNodeID, textContent)
}, _mountChildByNameAtIndex:function(child, name, index, transaction) {
  var rootID = this._rootNodeID + "." + name;
  var mountImage = child.mountComponent(rootID, transaction, this._mountDepth + 1);
  child._mountImage = mountImage;
  child._mountIndex = index;
  this.createChild(child);
  this._renderedChildren = this._renderedChildren || {};
  this._renderedChildren[name] = child
}, _unmountChildByName:function(child, name) {
  if(ReactComponent$$module$ReactMultiChild.isValidComponent(child)) {
    this.removeChild(child);
    child._mountImage = null;
    child._mountIndex = null;
    child.unmountComponent();
    delete this._renderedChildren[name]
  }
}}};
module$ReactMultiChild.module$exports = ReactMultiChild$$module$ReactMultiChild;
if(module$ReactMultiChild.module$exports) {
  module$ReactMultiChild = module$ReactMultiChild.module$exports
}
;
