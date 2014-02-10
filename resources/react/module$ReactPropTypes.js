goog.provide("module$ReactPropTypes");
var module$ReactPropTypes = {};
goog.require("module$invariant");
goog.require("module$createObjectFrom");
goog.require("module$ReactPropTypeLocations");
var ReactPropTypeLocations$$module$ReactPropTypes = module$ReactPropTypeLocations;
var createObjectFrom$$module$ReactPropTypes = module$createObjectFrom;
var invariant$$module$ReactPropTypes = module$invariant;
var Props$$module$ReactPropTypes = {array:createPrimitiveTypeChecker$$module$ReactPropTypes("array"), bool:createPrimitiveTypeChecker$$module$ReactPropTypes("boolean"), func:createPrimitiveTypeChecker$$module$ReactPropTypes("function"), number:createPrimitiveTypeChecker$$module$ReactPropTypes("number"), object:createPrimitiveTypeChecker$$module$ReactPropTypes("object"), string:createPrimitiveTypeChecker$$module$ReactPropTypes("string"), oneOf:createEnumTypeChecker$$module$ReactPropTypes, instanceOf:createInstanceTypeChecker$$module$ReactPropTypes};
var ANONYMOUS$$module$ReactPropTypes = "<<anonymous>>";
function createPrimitiveTypeChecker$$module$ReactPropTypes(expectedType) {
  function validatePrimitiveType(propValue, propName, componentName, location) {
    var propType = typeof propValue;
    if(propType === "object" && Array.isArray(propValue)) {
      propType = "array"
    }
    invariant$$module$ReactPropTypes(propType === expectedType)
  }
  return createChainableTypeChecker$$module$ReactPropTypes(validatePrimitiveType)
}
function createEnumTypeChecker$$module$ReactPropTypes(expectedValues) {
  var expectedEnum = createObjectFrom$$module$ReactPropTypes(expectedValues);
  function validateEnumType(propValue, propName, componentName, location) {
    invariant$$module$ReactPropTypes(expectedEnum[propValue])
  }
  return createChainableTypeChecker$$module$ReactPropTypes(validateEnumType)
}
function createInstanceTypeChecker$$module$ReactPropTypes(expectedClass) {
  function validateInstanceType(propValue, propName, componentName, location) {
    invariant$$module$ReactPropTypes(propValue instanceof expectedClass)
  }
  return createChainableTypeChecker$$module$ReactPropTypes(validateInstanceType)
}
function createChainableTypeChecker$$module$ReactPropTypes(validate) {
  function createTypeChecker(isRequired) {
    function checkType(props, propName, componentName, location) {
      var propValue = props[propName];
      if(propValue != null) {
        validate(propValue, propName, componentName || ANONYMOUS$$module$ReactPropTypes, location)
      }else {
        invariant$$module$ReactPropTypes(!isRequired)
      }
    }
    if(!isRequired) {
      checkType.isRequired = createTypeChecker(true)
    }
    return checkType
  }
  return createTypeChecker(false)
}
module$ReactPropTypes.module$exports = Props$$module$ReactPropTypes;
if(module$ReactPropTypes.module$exports) {
  module$ReactPropTypes = module$ReactPropTypes.module$exports
}
;
