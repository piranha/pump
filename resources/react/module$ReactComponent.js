goog.provide("module$ReactComponent");
var module$ReactComponent = {};
goog.require("module$merge");
goog.require("module$keyMirror");
goog.require("module$invariant");
goog.require("module$ReactUpdates");
goog.require("module$ReactOwner");
goog.require("module$ReactCurrentOwner");
goog.require("module$ReactComponentEnvironment");
var ReactComponentEnvironment$$module$ReactComponent = module$ReactComponentEnvironment;
var ReactCurrentOwner$$module$ReactComponent = module$ReactCurrentOwner;
var ReactOwner$$module$ReactComponent = module$ReactOwner;
var ReactUpdates$$module$ReactComponent = module$ReactUpdates;
var invariant$$module$ReactComponent = module$invariant;
var keyMirror$$module$ReactComponent = module$keyMirror;
var merge$$module$ReactComponent = module$merge;
var ComponentLifeCycle$$module$ReactComponent = keyMirror$$module$ReactComponent({MOUNTED:null, UNMOUNTED:null});
var ownerHasWarned$$module$ReactComponent = {};
function validateExplicitKey$$module$ReactComponent(component) {
  if(component.__keyValidated__ || component.props.key != null) {
    return
  }
  component.__keyValidated__ = true;
  if(!ReactCurrentOwner$$module$ReactComponent.current) {
    return
  }
  var currentName = ReactCurrentOwner$$module$ReactComponent.current.constructor.displayName;
  if(ownerHasWarned$$module$ReactComponent.hasOwnProperty(currentName)) {
    return
  }
  ownerHasWarned$$module$ReactComponent[currentName] = true;
  var message = 'Each child in an array should have a unique "key" prop. ' + "Check the render method of " + currentName + ".";
  if(!component.isOwnedBy(ReactCurrentOwner$$module$ReactComponent.current)) {
    var childOwnerName = component.props.__owner__ && component.props.__owner__.constructor.displayName;
    message += " It was passed a child from " + childOwnerName + "."
  }
  console.warn(message)
}
function validateChildKeys$$module$ReactComponent(component) {
  if(Array.isArray(component)) {
    for(var i = 0;i < component.length;i++) {
      var child = component[i];
      if(ReactComponent$$module$ReactComponent.isValidComponent(child)) {
        validateExplicitKey$$module$ReactComponent(child)
      }
    }
  }else {
    if(ReactComponent$$module$ReactComponent.isValidComponent(component)) {
      component.__keyValidated__ = true
    }
  }
}
var ReactComponent$$module$ReactComponent = {isValidComponent:function(object) {
  return!!(object && typeof object.mountComponentIntoNode === "function" && typeof object.receiveProps === "function")
}, getKey:function(component, index) {
  if(component && component.props && component.props.key != null) {
    return"{" + component.props.key + "}"
  }
  return"[" + index + "]"
}, LifeCycle:ComponentLifeCycle$$module$ReactComponent, DOMIDOperations:ReactComponentEnvironment$$module$ReactComponent.DOMIDOperations, unmountIDFromEnvironment:ReactComponentEnvironment$$module$ReactComponent.unmountIDFromEnvironment, mountImageIntoNode:ReactComponentEnvironment$$module$ReactComponent.mountImageIntoNode, ReactReconcileTransaction:ReactComponentEnvironment$$module$ReactComponent.ReactReconcileTransaction, Mixin:merge$$module$ReactComponent(ReactComponentEnvironment$$module$ReactComponent.Mixin, 
{isMounted:function() {
  return this._lifeCycleState === ComponentLifeCycle$$module$ReactComponent.MOUNTED
}, setProps:function(partialProps, callback) {
  this.replaceProps(merge$$module$ReactComponent(this._pendingProps || this.props, partialProps), callback)
}, replaceProps:function(props, callback) {
  invariant$$module$ReactComponent(!this.props.__owner__);
  invariant$$module$ReactComponent(this.isMounted());
  this._pendingProps = props;
  ReactUpdates$$module$ReactComponent.enqueueUpdate(this, callback)
}, construct:function(initialProps, children) {
  this.props = initialProps || {};
  this.props.__owner__ = ReactCurrentOwner$$module$ReactComponent.current;
  this._lifeCycleState = ComponentLifeCycle$$module$ReactComponent.UNMOUNTED;
  this._pendingProps = null;
  this._pendingCallbacks = null;
  var childrenLength = arguments.length - 1;
  if(childrenLength === 1) {
    this.props.children = children
  }else {
    if(childrenLength > 1) {
      var childArray = Array(childrenLength);
      for(var i = 0;i < childrenLength;i++) {
        childArray[i] = arguments[i + 1]
      }
      this.props.children = childArray
    }
  }
}, mountComponent:function(rootID, transaction, mountDepth) {
  invariant$$module$ReactComponent(!this.isMounted());
  var props = this.props;
  if(props.ref != null) {
    ReactOwner$$module$ReactComponent.addComponentAsRefTo(this, props.ref, props.__owner__)
  }
  this._rootNodeID = rootID;
  this._lifeCycleState = ComponentLifeCycle$$module$ReactComponent.MOUNTED;
  this._mountDepth = mountDepth
}, unmountComponent:function() {
  invariant$$module$ReactComponent(this.isMounted());
  var props = this.props;
  if(props.ref != null) {
    ReactOwner$$module$ReactComponent.removeComponentAsRefFrom(this, props.ref, props.__owner__)
  }
  ReactComponent$$module$ReactComponent.unmountIDFromEnvironment(this._rootNodeID);
  this._rootNodeID = null;
  this._lifeCycleState = ComponentLifeCycle$$module$ReactComponent.UNMOUNTED
}, receiveProps:function(nextProps, transaction) {
  invariant$$module$ReactComponent(this.isMounted());
  this._pendingProps = nextProps;
  this._performUpdateIfNecessary(transaction)
}, performUpdateIfNecessary:function() {
  var transaction = ReactComponent$$module$ReactComponent.ReactReconcileTransaction.getPooled();
  transaction.perform(this._performUpdateIfNecessary, this, transaction);
  ReactComponent$$module$ReactComponent.ReactReconcileTransaction.release(transaction)
}, _performUpdateIfNecessary:function(transaction) {
  if(this._pendingProps == null) {
    return
  }
  var prevProps = this.props;
  this.props = this._pendingProps;
  this._pendingProps = null;
  this.updateComponent(transaction, prevProps)
}, updateComponent:function(transaction, prevProps) {
  var props = this.props;
  if(props.__owner__ !== prevProps.__owner__ || props.ref !== prevProps.ref) {
    if(prevProps.ref != null) {
      ReactOwner$$module$ReactComponent.removeComponentAsRefFrom(this, prevProps.ref, prevProps.__owner__)
    }
    if(props.ref != null) {
      ReactOwner$$module$ReactComponent.addComponentAsRefTo(this, props.ref, props.__owner__)
    }
  }
}, mountComponentIntoNode:function(rootID, container, shouldReuseMarkup) {
  var transaction = ReactComponent$$module$ReactComponent.ReactReconcileTransaction.getPooled();
  transaction.perform(this._mountComponentIntoNode, this, rootID, container, transaction, shouldReuseMarkup);
  ReactComponent$$module$ReactComponent.ReactReconcileTransaction.release(transaction)
}, _mountComponentIntoNode:function(rootID, container, transaction, shouldReuseMarkup) {
  var markup = this.mountComponent(rootID, transaction, 0);
  ReactComponent$$module$ReactComponent.mountImageIntoNode(markup, container, shouldReuseMarkup)
}, isOwnedBy:function(owner) {
  return this.props.__owner__ === owner
}, getSiblingByRef:function(ref) {
  var owner = this.props.__owner__;
  if(!owner || !owner.refs) {
    return null
  }
  return owner.refs[ref]
}})};
module$ReactComponent.module$exports = ReactComponent$$module$ReactComponent;
if(module$ReactComponent.module$exports) {
  module$ReactComponent = module$ReactComponent.module$exports
}
;
