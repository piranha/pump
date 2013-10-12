goog.provide("module$invariant");
var module$invariant = {};
function invariant$$module$invariant(condition) {
  if(!condition) {
    throw new Error("Invariant Violation");
  }
}
module$invariant.module$exports = invariant$$module$invariant;
if(module$invariant.module$exports) {
  module$invariant = module$invariant.module$exports
}
;goog.provide("module$LinkedValueMixin");
var module$LinkedValueMixin = {};
goog.require("module$invariant");
var invariant$$module$LinkedValueMixin = module$invariant;
var LinkedValueMixin$$module$LinkedValueMixin = {_assertLink:function() {
  invariant$$module$LinkedValueMixin(this.props.value == null && this.props.onChange == null)
}, getValue:function() {
  if(this.props.valueLink) {
    this._assertLink();
    return this.props.valueLink.value
  }
  return this.props.value
}, getOnChange:function() {
  if(this.props.valueLink) {
    this._assertLink();
    return this._handleLinkedValueChange
  }
  return this.props.onChange
}, _handleLinkedValueChange:function(e) {
  this.props.valueLink.requestChange(e.target.value)
}};
module$LinkedValueMixin.module$exports = LinkedValueMixin$$module$LinkedValueMixin;
if(module$LinkedValueMixin.module$exports) {
  module$LinkedValueMixin = module$LinkedValueMixin.module$exports
}
;
