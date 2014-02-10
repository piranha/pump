goog.provide("module$ReactDOMInput");
var module$ReactDOMInput = {};
goog.require("module$merge");
goog.require("module$invariant");
goog.require("module$ReactMount");
goog.require("module$ReactDOM");
goog.require("module$ReactCompositeComponent");
goog.require("module$LinkedValueMixin");
goog.require("module$DOMPropertyOperations");
var DOMPropertyOperations$$module$ReactDOMInput = module$DOMPropertyOperations;
var LinkedValueMixin$$module$ReactDOMInput = module$LinkedValueMixin;
var ReactCompositeComponent$$module$ReactDOMInput = module$ReactCompositeComponent;
var ReactDOM$$module$ReactDOMInput = module$ReactDOM;
var ReactMount$$module$ReactDOMInput = module$ReactMount;
var invariant$$module$ReactDOMInput = module$invariant;
var merge$$module$ReactDOMInput = module$merge;
var input$$module$ReactDOMInput = ReactDOM$$module$ReactDOMInput.input;
var instancesByReactID$$module$ReactDOMInput = {};
var ReactDOMInput$$module$ReactDOMInput = ReactCompositeComponent$$module$ReactDOMInput.createClass({mixins:[LinkedValueMixin$$module$ReactDOMInput], getInitialState:function() {
  var defaultValue = this.props.defaultValue;
  return{checked:this.props.defaultChecked || false, value:defaultValue != null ? defaultValue : null}
}, shouldComponentUpdate:function() {
  return!this._isChanging
}, render:function() {
  var props = merge$$module$ReactDOMInput(this.props);
  props.defaultChecked = null;
  props.defaultValue = null;
  props.checked = this.props.checked != null ? this.props.checked : this.state.checked;
  var value = this.getValue();
  props.value = value != null ? value : this.state.value;
  props.onChange = this._handleChange;
  return input$$module$ReactDOMInput(props, this.props.children)
}, componentDidMount:function() {
  var id = ReactMount$$module$ReactDOMInput.getID(this.getDOMNode());
  instancesByReactID$$module$ReactDOMInput[id] = this
}, componentWillUnmount:function() {
  var rootNode = this.getDOMNode();
  var id = ReactMount$$module$ReactDOMInput.getID(rootNode);
  delete instancesByReactID$$module$ReactDOMInput[id]
}, componentDidUpdate:function(prevProps, prevState, prevContext) {
  var rootNode = this.getDOMNode();
  if(this.props.checked != null) {
    DOMPropertyOperations$$module$ReactDOMInput.setValueForProperty(rootNode, "checked", this.props.checked || false)
  }
  var value = this.getValue();
  if(value != null) {
    DOMPropertyOperations$$module$ReactDOMInput.setValueForProperty(rootNode, "value", "" + value)
  }
}, _handleChange:function(event) {
  var returnValue;
  var onChange = this.getOnChange();
  if(onChange) {
    this._isChanging = true;
    returnValue = onChange(event);
    this._isChanging = false
  }
  this.setState({checked:event.target.checked, value:event.target.value});
  var name = this.props.name;
  if(this.props.type === "radio" && name != null) {
    var rootNode = this.getDOMNode();
    var group = document.getElementsByName(name);
    for(var i = 0, groupLen = group.length;i < groupLen;i++) {
      var otherNode = group[i];
      if(otherNode === rootNode || otherNode.nodeName !== "INPUT" || otherNode.type !== "radio" || otherNode.form !== rootNode.form) {
        continue
      }
      var otherID = ReactMount$$module$ReactDOMInput.getID(otherNode);
      invariant$$module$ReactDOMInput(otherID);
      var otherInstance = instancesByReactID$$module$ReactDOMInput[otherID];
      invariant$$module$ReactDOMInput(otherInstance);
      otherInstance.setState({checked:false})
    }
  }
  return returnValue
}});
module$ReactDOMInput.module$exports = ReactDOMInput$$module$ReactDOMInput;
if(module$ReactDOMInput.module$exports) {
  module$ReactDOMInput = module$ReactDOMInput.module$exports
}
;
