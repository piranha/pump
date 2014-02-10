goog.provide("module$ReactPropTransferer");
var module$ReactPropTransferer = {};
goog.require("module$merge");
goog.require("module$joinClasses");
goog.require("module$invariant");
goog.require("module$emptyFunction");
var emptyFunction$$module$ReactPropTransferer = module$emptyFunction;
var invariant$$module$ReactPropTransferer = module$invariant;
var joinClasses$$module$ReactPropTransferer = module$joinClasses;
var merge$$module$ReactPropTransferer = module$merge;
function createTransferStrategy$$module$ReactPropTransferer(mergeStrategy) {
  return function(props, key, value) {
    if(!props.hasOwnProperty(key)) {
      props[key] = value
    }else {
      props[key] = mergeStrategy(props[key], value)
    }
  }
}
var TransferStrategies$$module$ReactPropTransferer = {children:emptyFunction$$module$ReactPropTransferer, className:createTransferStrategy$$module$ReactPropTransferer(joinClasses$$module$ReactPropTransferer), ref:emptyFunction$$module$ReactPropTransferer, style:createTransferStrategy$$module$ReactPropTransferer(merge$$module$ReactPropTransferer)};
var ReactPropTransferer$$module$ReactPropTransferer = {TransferStrategies:TransferStrategies$$module$ReactPropTransferer, Mixin:{transferPropsTo:function(component) {
  invariant$$module$ReactPropTransferer(component._owner === this);
  var props = {};
  for(var thatKey in component.props) {
    if(component.props.hasOwnProperty(thatKey)) {
      props[thatKey] = component.props[thatKey]
    }
  }
  for(var thisKey in this.props) {
    if(!this.props.hasOwnProperty(thisKey)) {
      continue
    }
    var transferStrategy = TransferStrategies$$module$ReactPropTransferer[thisKey];
    if(transferStrategy) {
      transferStrategy(props, thisKey, this.props[thisKey])
    }else {
      if(!props.hasOwnProperty(thisKey)) {
        props[thisKey] = this.props[thisKey]
      }
    }
  }
  component.props = props;
  return component
}}};
module$ReactPropTransferer.module$exports = ReactPropTransferer$$module$ReactPropTransferer;
if(module$ReactPropTransferer.module$exports) {
  module$ReactPropTransferer = module$ReactPropTransferer.module$exports
}
;
