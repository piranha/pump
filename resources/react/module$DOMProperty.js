goog.provide("module$DOMProperty");
var module$DOMProperty = {};
goog.require("module$invariant");
var invariant$$module$DOMProperty = module$invariant;
var DOMPropertyInjection$$module$DOMProperty = {MUST_USE_ATTRIBUTE:1, MUST_USE_PROPERTY:2, HAS_BOOLEAN_VALUE:4, HAS_SIDE_EFFECTS:8, injectDOMPropertyConfig:function(domPropertyConfig) {
  var Properties = domPropertyConfig.Properties || {};
  var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
  var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
  var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
  if(domPropertyConfig.isCustomAttribute) {
    DOMProperty$$module$DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute)
  }
  for(var propName in Properties) {
    invariant$$module$DOMProperty(!DOMProperty$$module$DOMProperty.isStandardName[propName]);
    DOMProperty$$module$DOMProperty.isStandardName[propName] = true;
    var lowerCased = propName.toLowerCase();
    DOMProperty$$module$DOMProperty.getPossibleStandardName[lowerCased] = propName;
    var attributeName = DOMAttributeNames[propName];
    if(attributeName) {
      DOMProperty$$module$DOMProperty.getPossibleStandardName[attributeName] = propName
    }
    DOMProperty$$module$DOMProperty.getAttributeName[propName] = attributeName || lowerCased;
    DOMProperty$$module$DOMProperty.getPropertyName[propName] = DOMPropertyNames[propName] || propName;
    var mutationMethod = DOMMutationMethods[propName];
    if(mutationMethod) {
      DOMProperty$$module$DOMProperty.getMutationMethod[propName] = mutationMethod
    }
    var propConfig = Properties[propName];
    DOMProperty$$module$DOMProperty.mustUseAttribute[propName] = propConfig & DOMPropertyInjection$$module$DOMProperty.MUST_USE_ATTRIBUTE;
    DOMProperty$$module$DOMProperty.mustUseProperty[propName] = propConfig & DOMPropertyInjection$$module$DOMProperty.MUST_USE_PROPERTY;
    DOMProperty$$module$DOMProperty.hasBooleanValue[propName] = propConfig & DOMPropertyInjection$$module$DOMProperty.HAS_BOOLEAN_VALUE;
    DOMProperty$$module$DOMProperty.hasSideEffects[propName] = propConfig & DOMPropertyInjection$$module$DOMProperty.HAS_SIDE_EFFECTS;
    invariant$$module$DOMProperty(!DOMProperty$$module$DOMProperty.mustUseAttribute[propName] || !DOMProperty$$module$DOMProperty.mustUseProperty[propName]);
    invariant$$module$DOMProperty(DOMProperty$$module$DOMProperty.mustUseProperty[propName] || !DOMProperty$$module$DOMProperty.hasSideEffects[propName])
  }
}};
var defaultValueCache$$module$DOMProperty = {};
var DOMProperty$$module$DOMProperty = {isStandardName:{}, getPossibleStandardName:{}, getAttributeName:{}, getPropertyName:{}, getMutationMethod:{}, mustUseAttribute:{}, mustUseProperty:{}, hasBooleanValue:{}, hasSideEffects:{}, _isCustomAttributeFunctions:[], isCustomAttribute:function(attributeName) {
  return DOMProperty$$module$DOMProperty._isCustomAttributeFunctions.some(function(isCustomAttributeFn) {
    return isCustomAttributeFn.call(null, attributeName)
  })
}, getDefaultValueForProperty:function(nodeName, prop) {
  var nodeDefaults = defaultValueCache$$module$DOMProperty[nodeName];
  var testElement;
  if(!nodeDefaults) {
    defaultValueCache$$module$DOMProperty[nodeName] = nodeDefaults = {}
  }
  if(!(prop in nodeDefaults)) {
    testElement = document.createElement(nodeName);
    nodeDefaults[prop] = testElement[prop]
  }
  return nodeDefaults[prop]
}, injection:DOMPropertyInjection$$module$DOMProperty};
module$DOMProperty.module$exports = DOMProperty$$module$DOMProperty;
if(module$DOMProperty.module$exports) {
  module$DOMProperty = module$DOMProperty.module$exports
}
;
