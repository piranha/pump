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
    var childOwnerName = component._owner && component._owner.constructor.displayName;
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
  return!!(object && typeof object.mountComponentIntoNode === "function" && typeof object.receiveComponent === "function")
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
  invariant$$module$ReactComponent(!this._owner);
  invariant$$module$ReactComponent(this.isMounted());
  this._pendingProps = props;
  ReactUpdates$$module$ReactComponent.enqueueUpdate(this, callback)
}, construct:function(initialProps, children) {
  this.props = initialProps || {};
  this._owner = ReactCurrentOwner$$module$ReactComponent.current;
  this._lifeCycleState = ComponentLifeCycle$$module$ReactComponent.UNMOUNTED;
  this._pendingProps = null;
  this._pendingCallbacks = null;
  this._pendingOwner = this._owner;
  var childrenLength = arguments.length - 1;
  if(childrenLength === 1) {
    if(false) {
      validateChildKeys$$module$ReactComponent(children)
    }
    this.props.children = children
  }else {
    if(childrenLength > 1) {
      var childArray = Array(childrenLength);
      for(var i = 0;i < childrenLength;i++) {
        if(false) {
          validateChildKeys$$module$ReactComponent(arguments[i + 1])
        }
        childArray[i] = arguments[i + 1]
      }
      this.props.children = childArray
    }
  }
}, mountComponent:function(rootID, transaction, mountDepth) {
  invariant$$module$ReactComponent(!this.isMounted());
  var props = this.props;
  if(props.ref != null) {
    ReactOwner$$module$ReactComponent.addComponentAsRefTo(this, props.ref, this._owner)
  }
  this._rootNodeID = rootID;
  this._lifeCycleState = ComponentLifeCycle$$module$ReactComponent.MOUNTED;
  this._mountDepth = mountDepth
}, unmountComponent:function() {
  invariant$$module$ReactComponent(this.isMounted());
  var props = this.props;
  if(props.ref != null) {
    ReactOwner$$module$ReactComponent.removeComponentAsRefFrom(this, props.ref, this._owner)
  }
  ReactComponent$$module$ReactComponent.unmountIDFromEnvironment(this._rootNodeID);
  this._rootNodeID = null;
  this._lifeCycleState = ComponentLifeCycle$$module$ReactComponent.UNMOUNTED
}, receiveComponent:function(nextComponent, transaction) {
  invariant$$module$ReactComponent(this.isMounted());
  this._pendingOwner = nextComponent._owner;
  this._pendingProps = nextComponent.props;
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
  var prevOwner = this._owner;
  this.props = this._pendingProps;
  this._owner = this._pendingOwner;
  this._pendingProps = null;
  this.updateComponent(transaction, prevProps, prevOwner)
}, updateComponent:function(transaction, prevProps, prevOwner) {
  var props = this.props;
  if(this._owner !== prevOwner || props.ref !== prevProps.ref) {
    if(prevProps.ref != null) {
      ReactOwner$$module$ReactComponent.removeComponentAsRefFrom(this, prevProps.ref, prevOwner)
    }
    if(props.ref != null) {
      ReactOwner$$module$ReactComponent.addComponentAsRefTo(this, props.ref, this._owner)
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
  return this._owner === owner
}, getSiblingByRef:function(ref) {
  var owner = this._owner;
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
