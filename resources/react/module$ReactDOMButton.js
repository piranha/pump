goog.provide("module$ReactDOMButton");
var module$ReactDOMButton = {};
goog.require("module$keyMirror");
goog.require("module$ReactDOM");
goog.require("module$ReactCompositeComponent");
var ReactCompositeComponent$$module$ReactDOMButton = module$ReactCompositeComponent;
var ReactDOM$$module$ReactDOMButton = module$ReactDOM;
var keyMirror$$module$ReactDOMButton = module$keyMirror;
var button$$module$ReactDOMButton = ReactDOM$$module$ReactDOMButton.button;
var mouseListenerNames$$module$ReactDOMButton = keyMirror$$module$ReactDOMButton({onClick:true, onDoubleClick:true, onMouseDown:true, onMouseMove:true, onMouseUp:true, onClickCapture:true, onDoubleClickCapture:true, onMouseDownCapture:true, onMouseMoveCapture:true, onMouseUpCapture:true});
var ReactDOMButton$$module$ReactDOMButton = ReactCompositeComponent$$module$ReactDOMButton.createClass({render:function() {
  var props = {};
  for(var key in this.props) {
    if(this.props.hasOwnProperty(key) && (!this.props.disabled || !mouseListenerNames$$module$ReactDOMButton[key])) {
      props[key] = this.props[key]
    }
  }
  return button$$module$ReactDOMButton(props, this.props.children)
}});
module$ReactDOMButton.module$exports = ReactDOMButton$$module$ReactDOMButton;
if(module$ReactDOMButton.module$exports) {
  module$ReactDOMButton = module$ReactDOMButton.module$exports
}
;
