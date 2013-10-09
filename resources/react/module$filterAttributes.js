;goog.provide("module$filterAttributes");
var module$filterAttributes = {};
function filterAttributes$$module$filterAttributes(node, func, context) {
  var attributes = node.attributes;
  var numAttributes = attributes.length;
  var accumulator = [];
  for(var i = 0;i < numAttributes;i++) {
    var attr = attributes.item(i);
    if(func.call(context, attr)) {
      accumulator.push(attr)
    }
  }
  return accumulator
}
module$filterAttributes.module$exports = filterAttributes$$module$filterAttributes;
if(module$filterAttributes.module$exports) {
  module$filterAttributes = module$filterAttributes.module$exports
}
