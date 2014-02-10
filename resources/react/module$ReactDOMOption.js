goog.provide("module$ReactDOMOption");
var module$ReactDOMOption = {};
goog.require("module$ReactDOM");
goog.require("module$ReactCompositeComponent");
var ReactCompositeComponent$$module$ReactDOMOption = module$ReactCompositeComponent;
var ReactDOM$$module$ReactDOMOption = module$ReactDOM;
var option$$module$ReactDOMOption = ReactDOM$$module$ReactDOMOption.option;
var ReactDOMOption$$module$ReactDOMOption = ReactCompositeComponent$$module$ReactDOMOption.createClass({componentWillMount:function() {
  if(this.props.selected != null) {
    if(false) {
      console.warn("Use the `defaultValue` or `value` props on <select> instead of " + "setting `selected` on <option>.")
    }
  }
}, render:function() {
  return option$$module$ReactDOMOption(this.props, this.props.children)
}});
module$ReactDOMOption.module$exports = ReactDOMOption$$module$ReactDOMOption;
if(module$ReactDOMOption.module$exports) {
  module$ReactDOMOption = module$ReactDOMOption.module$exports
}
;
