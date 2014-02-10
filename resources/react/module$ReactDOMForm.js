goog.provide("module$ReactDOMForm");
var module$ReactDOMForm = {};
goog.require("module$EventConstants");
goog.require("module$ReactEventEmitter");
goog.require("module$ReactDOM");
goog.require("module$ReactCompositeComponent");
var ReactCompositeComponent$$module$ReactDOMForm = module$ReactCompositeComponent;
var ReactDOM$$module$ReactDOMForm = module$ReactDOM;
var ReactEventEmitter$$module$ReactDOMForm = module$ReactEventEmitter;
var EventConstants$$module$ReactDOMForm = module$EventConstants;
var form$$module$ReactDOMForm = ReactDOM$$module$ReactDOMForm.form;
var ReactDOMForm$$module$ReactDOMForm = ReactCompositeComponent$$module$ReactDOMForm.createClass({render:function() {
  return this.transferPropsTo(form$$module$ReactDOMForm(null, this.props.children))
}, componentDidMount:function() {
  ReactEventEmitter$$module$ReactDOMForm.trapBubbledEvent(EventConstants$$module$ReactDOMForm.topLevelTypes.topSubmit, "submit", this.getDOMNode())
}});
module$ReactDOMForm.module$exports = ReactDOMForm$$module$ReactDOMForm;
if(module$ReactDOMForm.module$exports) {
  module$ReactDOMForm = module$ReactDOMForm.module$exports
}
;
