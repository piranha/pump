goog.provide("module$ReactTextComponent");
var module$ReactTextComponent = {};
goog.require("module$mixInto");
goog.require("module$escapeTextForBrowser");
goog.require("module$ReactMount");
goog.require("module$ReactComponent");
var ReactComponent$$module$ReactTextComponent = module$ReactComponent;
var ReactMount$$module$ReactTextComponent = module$ReactMount;
var escapeTextForBrowser$$module$ReactTextComponent = module$escapeTextForBrowser;
var mixInto$$module$ReactTextComponent = module$mixInto;
var ReactTextComponent$$module$ReactTextComponent = function(initialText) {
  this.construct({text:initialText})
};
mixInto$$module$ReactTextComponent(ReactTextComponent$$module$ReactTextComponent, ReactComponent$$module$ReactTextComponent.Mixin);
mixInto$$module$ReactTextComponent(ReactTextComponent$$module$ReactTextComponent, {mountComponent:function(rootID, transaction, mountDepth) {
  ReactComponent$$module$ReactTextComponent.Mixin.mountComponent.call(this, rootID, transaction, mountDepth);
  return"<span " + ReactMount$$module$ReactTextComponent.ATTR_NAME + '="' + rootID + '">' + escapeTextForBrowser$$module$ReactTextComponent(this.props.text) + "</span>"
}, receiveProps:function(nextProps, transaction) {
  if(nextProps.text !== this.props.text) {
    this.props.text = nextProps.text;
    ReactComponent$$module$ReactTextComponent.DOMIDOperations.updateTextContentByID(this._rootNodeID, nextProps.text)
  }
}});
module$ReactTextComponent.module$exports = ReactTextComponent$$module$ReactTextComponent;
if(module$ReactTextComponent.module$exports) {
  module$ReactTextComponent = module$ReactTextComponent.module$exports
}
;
