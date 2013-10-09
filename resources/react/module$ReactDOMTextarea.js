;goog.provide("module$ReactDOMTextarea");
var module$ReactDOMTextarea = {};
goog.require("module$merge");
goog.require("module$invariant");
goog.require("module$ReactDOM");
goog.require("module$ReactCompositeComponent");
goog.require("module$LinkedValueMixin");
goog.require("module$DOMPropertyOperations");
var DOMPropertyOperations$$module$ReactDOMTextarea = module$DOMPropertyOperations;
var LinkedValueMixin$$module$ReactDOMTextarea = module$LinkedValueMixin;
var ReactCompositeComponent$$module$ReactDOMTextarea = module$ReactCompositeComponent;
var ReactDOM$$module$ReactDOMTextarea = module$ReactDOM;
var invariant$$module$ReactDOMTextarea = module$invariant;
var merge$$module$ReactDOMTextarea = module$merge;
var textarea$$module$ReactDOMTextarea = ReactDOM$$module$ReactDOMTextarea.textarea;
var CONTENT_TYPES$$module$ReactDOMTextarea = {"string":true, "number":true};
var ReactDOMTextarea$$module$ReactDOMTextarea = ReactCompositeComponent$$module$ReactDOMTextarea.createClass({mixins:[LinkedValueMixin$$module$ReactDOMTextarea], getInitialState:function() {
  var defaultValue = this.props.defaultValue;
  var children = this.props.children;
  if(children != null) {
    invariant$$module$ReactDOMTextarea(defaultValue == null);
    if(Array.isArray(children)) {
      invariant$$module$ReactDOMTextarea(children.length <= 1);
      children = children[0]
    }
    invariant$$module$ReactDOMTextarea(CONTENT_TYPES$$module$ReactDOMTextarea[typeof children]);
    defaultValue = "" + children
  }
  if(defaultValue == null) {
    defaultValue = ""
  }
  var value = this.getValue();
  return{initialValue:value != null ? value : defaultValue, value:defaultValue}
}, shouldComponentUpdate:function() {
  return!this._isChanging
}, render:function() {
  var props = merge$$module$ReactDOMTextarea(this.props);
  var value = this.getValue();
  invariant$$module$ReactDOMTextarea(props.dangerouslySetInnerHTML == null);
  props.defaultValue = null;
  props.value = value != null ? value : this.state.value;
  props.onChange = this._handleChange;
  return textarea$$module$ReactDOMTextarea(props, this.state.initialValue)
}, componentDidUpdate:function(prevProps, prevState, rootNode) {
  var value = this.getValue();
  if(value != null) {
    DOMPropertyOperations$$module$ReactDOMTextarea.setValueForProperty(rootNode, "value", value !== false ? "" + value : "")
  }
}, _handleChange:function(event) {
  var returnValue;
  var onChange = this.getOnChange();
  if(onChange) {
    this._isChanging = true;
    returnValue = onChange(event);
    this._isChanging = false
  }
  this.setState({value:event.target.value});
  return returnValue
}});
module$ReactDOMTextarea.module$exports = ReactDOMTextarea$$module$ReactDOMTextarea;
if(module$ReactDOMTextarea.module$exports) {
  module$ReactDOMTextarea = module$ReactDOMTextarea.module$exports
}
