goog.provide("module$ReactDOMSelect");
var module$ReactDOMSelect = {};
goog.require("module$merge");
goog.require("module$invariant");
goog.require("module$ReactDOM");
goog.require("module$ReactCompositeComponent");
goog.require("module$LinkedValueMixin");
var LinkedValueMixin$$module$ReactDOMSelect = module$LinkedValueMixin;
var ReactCompositeComponent$$module$ReactDOMSelect = module$ReactCompositeComponent;
var ReactDOM$$module$ReactDOMSelect = module$ReactDOM;
var invariant$$module$ReactDOMSelect = module$invariant;
var merge$$module$ReactDOMSelect = module$merge;
var select$$module$ReactDOMSelect = ReactDOM$$module$ReactDOMSelect.select;
function selectValueType$$module$ReactDOMSelect(props, propName, componentName) {
  if(props[propName] == null) {
    return
  }
  if(props.multiple) {
    invariant$$module$ReactDOMSelect(Array.isArray(props[propName]))
  }else {
    invariant$$module$ReactDOMSelect(!Array.isArray(props[propName]))
  }
}
function updateOptions$$module$ReactDOMSelect() {
  var propValue = this.getValue();
  var value = propValue != null ? propValue : this.state.value;
  var options = this.getDOMNode().options;
  var selectedValue = "" + value;
  for(var i = 0, l = options.length;i < l;i++) {
    var selected = this.props.multiple ? selectedValue.indexOf(options[i].value) >= 0 : selected = options[i].value === selectedValue;
    if(selected !== options[i].selected) {
      options[i].selected = selected
    }
  }
}
var ReactDOMSelect$$module$ReactDOMSelect = ReactCompositeComponent$$module$ReactDOMSelect.createClass({mixins:[LinkedValueMixin$$module$ReactDOMSelect], propTypes:{defaultValue:selectValueType$$module$ReactDOMSelect, value:selectValueType$$module$ReactDOMSelect}, getInitialState:function() {
  return{value:this.props.defaultValue || (this.props.multiple ? [] : "")}
}, componentWillReceiveProps:function(nextProps) {
  if(!this.props.multiple && nextProps.multiple) {
    this.setState({value:[this.state.value]})
  }else {
    if(this.props.multiple && !nextProps.multiple) {
      this.setState({value:this.state.value[0]})
    }
  }
}, shouldComponentUpdate:function() {
  return!this._isChanging
}, render:function() {
  var props = merge$$module$ReactDOMSelect(this.props);
  props.onChange = this._handleChange;
  props.value = null;
  return select$$module$ReactDOMSelect(props, this.props.children)
}, componentDidMount:updateOptions$$module$ReactDOMSelect, componentDidUpdate:updateOptions$$module$ReactDOMSelect, _handleChange:function(event) {
  var returnValue;
  var onChange = this.getOnChange();
  if(onChange) {
    this._isChanging = true;
    returnValue = onChange(event);
    this._isChanging = false
  }
  var selectedValue;
  if(this.props.multiple) {
    selectedValue = [];
    var options = event.target.options;
    for(var i = 0, l = options.length;i < l;i++) {
      if(options[i].selected) {
        selectedValue.push(options[i].value)
      }
    }
  }else {
    selectedValue = event.target.value
  }
  this.setState({value:selectedValue});
  return returnValue
}});
module$ReactDOMSelect.module$exports = ReactDOMSelect$$module$ReactDOMSelect;
if(module$ReactDOMSelect.module$exports) {
  module$ReactDOMSelect = module$ReactDOMSelect.module$exports
}
;
