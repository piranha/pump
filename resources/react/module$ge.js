;goog.provide("module$ge");
var module$ge = {};
function ge$$module$ge(arg, root, tag) {
  return typeof arg != "string" ? arg : !root ? document.getElementById(arg) : _geFromSubtree$$module$ge(arg, root, tag)
}
function _geFromSubtree$$module$ge(id, root, tag) {
  var elem, children, ii;
  if(_getNodeID$$module$ge(root) == id) {
    return root
  }else {
    if(root.getElementsByTagName) {
      children = root.getElementsByTagName(tag || "*");
      for(ii = 0;ii < children.length;ii++) {
        if(_getNodeID$$module$ge(children[ii]) == id) {
          return children[ii]
        }
      }
    }else {
      children = root.childNodes;
      for(ii = 0;ii < children.length;ii++) {
        elem = _geFromSubtree$$module$ge(id, children[ii]);
        if(elem) {
          return elem
        }
      }
    }
  }
  return null
}
function _getNodeID$$module$ge(node) {
  var id = node.getAttributeNode && node.getAttributeNode("id");
  return id ? id.value : null
}
module$ge.module$exports = ge$$module$ge;
if(module$ge.module$exports) {
  module$ge = module$ge.module$exports
}
