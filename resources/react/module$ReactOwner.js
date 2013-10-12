goog.provide("module$ReactOwner");
var module$ReactOwner = {};
goog.require("module$invariant");
var invariant$$module$ReactOwner = module$invariant;
var ReactOwner$$module$ReactOwner = {isValidOwner:function(object) {
  return!!(object && typeof object.attachRef === "function" && typeof object.detachRef === "function")
}, addComponentAsRefTo:function(component, ref, owner) {
  invariant$$module$ReactOwner(ReactOwner$$module$ReactOwner.isValidOwner(owner));
  owner.attachRef(ref, component)
}, removeComponentAsRefFrom:function(component, ref, owner) {
  invariant$$module$ReactOwner(ReactOwner$$module$ReactOwner.isValidOwner(owner));
  if(owner.refs[ref] === component) {
    owner.detachRef(ref)
  }
}, Mixin:{attachRef:function(ref, component) {
  invariant$$module$ReactOwner(component.isOwnedBy(this));
  var refs = this.refs || (this.refs = {});
  refs[ref] = component
}, detachRef:function(ref) {
  delete this.refs[ref]
}}};
module$ReactOwner.module$exports = ReactOwner$$module$ReactOwner;
if(module$ReactOwner.module$exports) {
  module$ReactOwner = module$ReactOwner.module$exports
}
;
