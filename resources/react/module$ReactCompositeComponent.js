goog.provide("module$ReactCompositeComponent");
var module$ReactCompositeComponent = {};
goog.require("module$objMap");
goog.require("module$mixInto");
goog.require("module$merge");
goog.require("module$keyMirror");
goog.require("module$invariant");
goog.require("module$ReactUpdates");
goog.require("module$ReactPropTransferer");
goog.require("module$ReactPerf");
goog.require("module$ReactOwner");
goog.require("module$ReactCurrentOwner");
goog.require("module$ReactComponent");
var ReactComponent$$module$ReactCompositeComponent = module$ReactComponent;
var ReactCurrentOwner$$module$ReactCompositeComponent = module$ReactCurrentOwner;
var ReactOwner$$module$ReactCompositeComponent = module$ReactOwner;
var ReactPerf$$module$ReactCompositeComponent = module$ReactPerf;
var ReactPropTransferer$$module$ReactCompositeComponent = module$ReactPropTransferer;
var ReactUpdates$$module$ReactCompositeComponent = module$ReactUpdates;
var invariant$$module$ReactCompositeComponent = module$invariant;
var keyMirror$$module$ReactCompositeComponent = module$keyMirror;
var merge$$module$ReactCompositeComponent = module$merge;
var mixInto$$module$ReactCompositeComponent = module$mixInto;
var objMap$$module$ReactCompositeComponent = module$objMap;
var SpecPolicy$$module$ReactCompositeComponent = keyMirror$$module$ReactCompositeComponent({DEFINE_ONCE:null, DEFINE_MANY:null, OVERRIDE_BASE:null, DEFINE_MANY_MERGED:null});
var ReactCompositeComponentInterface$$module$ReactCompositeComponent = {mixins:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, propTypes:SpecPolicy$$module$ReactCompositeComponent.DEFINE_ONCE, getDefaultProps:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY_MERGED, getInitialState:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY_MERGED, render:SpecPolicy$$module$ReactCompositeComponent.DEFINE_ONCE, componentWillMount:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, componentDidMount:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, 
componentWillReceiveProps:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, shouldComponentUpdate:SpecPolicy$$module$ReactCompositeComponent.DEFINE_ONCE, componentWillUpdate:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, componentDidUpdate:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, componentWillUnmount:SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY, updateComponent:SpecPolicy$$module$ReactCompositeComponent.OVERRIDE_BASE};
var RESERVED_SPEC_KEYS$$module$ReactCompositeComponent = {displayName:function(Constructor, displayName) {
  Constructor.displayName = displayName
}, mixins:function(Constructor, mixins) {
  if(mixins) {
    for(var i = 0;i < mixins.length;i++) {
      mixSpecIntoComponent$$module$ReactCompositeComponent(Constructor, mixins[i])
    }
  }
}, propTypes:function(Constructor, propTypes) {
  Constructor.propTypes = propTypes
}};
function validateMethodOverride$$module$ReactCompositeComponent(proto, name) {
  var specPolicy = ReactCompositeComponentInterface$$module$ReactCompositeComponent[name];
  if(ReactCompositeComponentMixin$$module$ReactCompositeComponent.hasOwnProperty(name)) {
    invariant$$module$ReactCompositeComponent(specPolicy === SpecPolicy$$module$ReactCompositeComponent.OVERRIDE_BASE)
  }
  if(proto.hasOwnProperty(name)) {
    invariant$$module$ReactCompositeComponent(specPolicy === SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY || specPolicy === SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY_MERGED)
  }
}
function validateLifeCycleOnReplaceState$$module$ReactCompositeComponent(instance) {
  var compositeLifeCycleState = instance._compositeLifeCycleState;
  invariant$$module$ReactCompositeComponent(instance.isMounted() || compositeLifeCycleState === CompositeLifeCycle$$module$ReactCompositeComponent.MOUNTING);
  invariant$$module$ReactCompositeComponent(compositeLifeCycleState !== CompositeLifeCycle$$module$ReactCompositeComponent.RECEIVING_STATE && compositeLifeCycleState !== CompositeLifeCycle$$module$ReactCompositeComponent.UNMOUNTING)
}
function mixSpecIntoComponent$$module$ReactCompositeComponent(Constructor, spec) {
  var proto = Constructor.prototype;
  for(var name in spec) {
    var property = spec[name];
    if(!spec.hasOwnProperty(name) || !property) {
      continue
    }
    validateMethodOverride$$module$ReactCompositeComponent(proto, name);
    if(RESERVED_SPEC_KEYS$$module$ReactCompositeComponent.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS$$module$ReactCompositeComponent[name](Constructor, property)
    }else {
      var isCompositeComponentMethod = name in ReactCompositeComponentInterface$$module$ReactCompositeComponent;
      var isInherited = name in proto;
      var markedDontBind = property.__reactDontBind;
      var isFunction = typeof property === "function";
      var shouldAutoBind = isFunction && !isCompositeComponentMethod && !isInherited && !markedDontBind;
      if(shouldAutoBind) {
        if(!proto.__reactAutoBindMap) {
          proto.__reactAutoBindMap = {}
        }
        proto.__reactAutoBindMap[name] = property;
        proto[name] = property
      }else {
        if(isInherited) {
          if(ReactCompositeComponentInterface$$module$ReactCompositeComponent[name] === SpecPolicy$$module$ReactCompositeComponent.DEFINE_MANY_MERGED) {
            proto[name] = createMergedResultFunction$$module$ReactCompositeComponent(proto[name], property)
          }else {
            proto[name] = createChainedFunction$$module$ReactCompositeComponent(proto[name], property)
          }
        }else {
          proto[name] = property
        }
      }
    }
  }
}
function mergeObjectsWithNoDuplicateKeys$$module$ReactCompositeComponent(one, two) {
  invariant$$module$ReactCompositeComponent(one && two && typeof one === "object" && typeof two === "object");
  objMap$$module$ReactCompositeComponent(two, function(value, key) {
    invariant$$module$ReactCompositeComponent(one[key] === undefined);
    one[key] = value
  });
  return one
}
function createMergedResultFunction$$module$ReactCompositeComponent(one, two) {
  return function mergedResult() {
    return mergeObjectsWithNoDuplicateKeys$$module$ReactCompositeComponent(one.apply(this, arguments), two.apply(this, arguments))
  }
}
function createChainedFunction$$module$ReactCompositeComponent(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments)
  }
}
var CompositeLifeCycle$$module$ReactCompositeComponent = keyMirror$$module$ReactCompositeComponent({MOUNTING:null, UNMOUNTING:null, RECEIVING_PROPS:null, RECEIVING_STATE:null});
var ReactCompositeComponentMixin$$module$ReactCompositeComponent = {construct:function(initialProps, children) {
  ReactComponent$$module$ReactCompositeComponent.Mixin.construct.apply(this, arguments);
  this.state = null;
  this._pendingState = null;
  this._compositeLifeCycleState = null
}, isMounted:function() {
  return ReactComponent$$module$ReactCompositeComponent.Mixin.isMounted.call(this) && this._compositeLifeCycleState !== CompositeLifeCycle$$module$ReactCompositeComponent.MOUNTING
}, mountComponent:ReactPerf$$module$ReactCompositeComponent.measure("ReactCompositeComponent", "mountComponent", function(rootID, transaction, mountDepth) {
  ReactComponent$$module$ReactCompositeComponent.Mixin.mountComponent.call(this, rootID, transaction, mountDepth);
  this._compositeLifeCycleState = CompositeLifeCycle$$module$ReactCompositeComponent.MOUNTING;
  this._defaultProps = this.getDefaultProps ? this.getDefaultProps() : null;
  this._processProps(this.props);
  if(this.__reactAutoBindMap) {
    this._bindAutoBindMethods()
  }
  this.state = this.getInitialState ? this.getInitialState() : null;
  this._pendingState = null;
  this._pendingForceUpdate = false;
  if(this.componentWillMount) {
    this.componentWillMount();
    if(this._pendingState) {
      this.state = this._pendingState;
      this._pendingState = null
    }
  }
  this._renderedComponent = this._renderValidatedComponent();
  this._compositeLifeCycleState = null;
  var markup = this._renderedComponent.mountComponent(rootID, transaction, mountDepth + 1);
  if(this.componentDidMount) {
    transaction.getReactMountReady().enqueue(this, this.componentDidMount)
  }
  return markup
}), unmountComponent:function() {
  this._compositeLifeCycleState = CompositeLifeCycle$$module$ReactCompositeComponent.UNMOUNTING;
  if(this.componentWillUnmount) {
    this.componentWillUnmount()
  }
  this._compositeLifeCycleState = null;
  this._defaultProps = null;
  ReactComponent$$module$ReactCompositeComponent.Mixin.unmountComponent.call(this);
  this._renderedComponent.unmountComponent();
  this._renderedComponent = null;
  if(this.refs) {
    this.refs = null
  }
}, setState:function(partialState, callback) {
  this.replaceState(merge$$module$ReactCompositeComponent(this._pendingState || this.state, partialState), callback)
}, replaceState:function(completeState, callback) {
  validateLifeCycleOnReplaceState$$module$ReactCompositeComponent(this);
  this._pendingState = completeState;
  ReactUpdates$$module$ReactCompositeComponent.enqueueUpdate(this, callback)
}, _processProps:function(props) {
  var propName;
  var defaultProps = this._defaultProps;
  for(propName in defaultProps) {
    if(!(propName in props)) {
      props[propName] = defaultProps[propName]
    }
  }
  var propTypes = this.constructor.propTypes;
  if(propTypes) {
    var componentName = this.constructor.displayName;
    for(propName in propTypes) {
      var checkProp = propTypes[propName];
      if(checkProp) {
        checkProp(props, propName, componentName)
      }
    }
  }
}, performUpdateIfNecessary:function() {
  var compositeLifeCycleState = this._compositeLifeCycleState;
  if(compositeLifeCycleState === CompositeLifeCycle$$module$ReactCompositeComponent.MOUNTING || compositeLifeCycleState === CompositeLifeCycle$$module$ReactCompositeComponent.RECEIVING_PROPS) {
    return
  }
  ReactComponent$$module$ReactCompositeComponent.Mixin.performUpdateIfNecessary.call(this)
}, _performUpdateIfNecessary:function(transaction) {
  if(this._pendingProps == null && this._pendingState == null && !this._pendingForceUpdate) {
    return
  }
  var nextProps = this.props;
  if(this._pendingProps != null) {
    nextProps = this._pendingProps;
    this._processProps(nextProps);
    this._pendingProps = null;
    this._compositeLifeCycleState = CompositeLifeCycle$$module$ReactCompositeComponent.RECEIVING_PROPS;
    if(this.componentWillReceiveProps) {
      this.componentWillReceiveProps(nextProps, transaction)
    }
  }
  this._compositeLifeCycleState = CompositeLifeCycle$$module$ReactCompositeComponent.RECEIVING_STATE;
  var nextState = this._pendingState || this.state;
  this._pendingState = null;
  if(this._pendingForceUpdate || !this.shouldComponentUpdate || this.shouldComponentUpdate(nextProps, nextState)) {
    this._pendingForceUpdate = false;
    this._performComponentUpdate(nextProps, nextState, transaction)
  }else {
    this.props = nextProps;
    this.state = nextState
  }
  this._compositeLifeCycleState = null
}, _performComponentUpdate:function(nextProps, nextState, transaction) {
  var prevProps = this.props;
  var prevState = this.state;
  if(this.componentWillUpdate) {
    this.componentWillUpdate(nextProps, nextState, transaction)
  }
  this.props = nextProps;
  this.state = nextState;
  this.updateComponent(transaction, prevProps, prevState);
  if(this.componentDidUpdate) {
    transaction.getReactMountReady().enqueue(this, this.componentDidUpdate.bind(this, prevProps, prevState))
  }
}, updateComponent:ReactPerf$$module$ReactCompositeComponent.measure("ReactCompositeComponent", "updateComponent", function(transaction, prevProps, prevState) {
  ReactComponent$$module$ReactCompositeComponent.Mixin.updateComponent.call(this, transaction, prevProps);
  var currentComponent = this._renderedComponent;
  var nextComponent = this._renderValidatedComponent();
  if(currentComponent.constructor === nextComponent.constructor) {
    currentComponent.receiveProps(nextComponent.props, transaction)
  }else {
    var thisID = this._rootNodeID;
    var currentComponentID = currentComponent._rootNodeID;
    currentComponent.unmountComponent();
    this._renderedComponent = nextComponent;
    var nextMarkup = nextComponent.mountComponent(thisID, transaction, this._mountDepth + 1);
    ReactComponent$$module$ReactCompositeComponent.DOMIDOperations.dangerouslyReplaceNodeWithMarkupByID(currentComponentID, nextMarkup)
  }
}), forceUpdate:function(callback) {
  var compositeLifeCycleState = this._compositeLifeCycleState;
  invariant$$module$ReactCompositeComponent(this.isMounted() || compositeLifeCycleState === CompositeLifeCycle$$module$ReactCompositeComponent.MOUNTING);
  invariant$$module$ReactCompositeComponent(compositeLifeCycleState !== CompositeLifeCycle$$module$ReactCompositeComponent.RECEIVING_STATE && compositeLifeCycleState !== CompositeLifeCycle$$module$ReactCompositeComponent.UNMOUNTING);
  this._pendingForceUpdate = true;
  ReactUpdates$$module$ReactCompositeComponent.enqueueUpdate(this, callback)
}, _renderValidatedComponent:function() {
  var renderedComponent;
  ReactCurrentOwner$$module$ReactCompositeComponent.current = this;
  try {
    renderedComponent = this.render()
  }catch(error) {
    throw error;
  }finally {
    ReactCurrentOwner$$module$ReactCompositeComponent.current = null
  }
  invariant$$module$ReactCompositeComponent(ReactComponent$$module$ReactCompositeComponent.isValidComponent(renderedComponent));
  return renderedComponent
}, _bindAutoBindMethods:function() {
  for(var autoBindKey in this.__reactAutoBindMap) {
    if(!this.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      continue
    }
    var method = this.__reactAutoBindMap[autoBindKey];
    this[autoBindKey] = this._bindAutoBindMethod(method)
  }
}, _bindAutoBindMethod:function(method) {
  var component = this;
  var boundMethod = function() {
    return method.apply(component, arguments)
  };
  return boundMethod
}};
var ReactCompositeComponentBase$$module$ReactCompositeComponent = function() {
};
mixInto$$module$ReactCompositeComponent(ReactCompositeComponentBase$$module$ReactCompositeComponent, ReactComponent$$module$ReactCompositeComponent.Mixin);
mixInto$$module$ReactCompositeComponent(ReactCompositeComponentBase$$module$ReactCompositeComponent, ReactOwner$$module$ReactCompositeComponent.Mixin);
mixInto$$module$ReactCompositeComponent(ReactCompositeComponentBase$$module$ReactCompositeComponent, ReactPropTransferer$$module$ReactCompositeComponent.Mixin);
mixInto$$module$ReactCompositeComponent(ReactCompositeComponentBase$$module$ReactCompositeComponent, ReactCompositeComponentMixin$$module$ReactCompositeComponent);
var ReactCompositeComponent$$module$ReactCompositeComponent = {LifeCycle:CompositeLifeCycle$$module$ReactCompositeComponent, Base:ReactCompositeComponentBase$$module$ReactCompositeComponent, createClass:function(spec) {
  var Constructor = function() {
  };
  Constructor.prototype = new ReactCompositeComponentBase$$module$ReactCompositeComponent;
  Constructor.prototype.constructor = Constructor;
  mixSpecIntoComponent$$module$ReactCompositeComponent(Constructor, spec);
  invariant$$module$ReactCompositeComponent(Constructor.prototype.render);
  for(var methodName in ReactCompositeComponentInterface$$module$ReactCompositeComponent) {
    if(!Constructor.prototype[methodName]) {
      Constructor.prototype[methodName] = null
    }
  }
  var ConvenienceConstructor = function(props, children) {
    var instance = new Constructor;
    instance.construct.apply(instance, arguments);
    return instance
  };
  ConvenienceConstructor.componentConstructor = Constructor;
  ConvenienceConstructor.originalSpec = spec;
  return ConvenienceConstructor
}, isValidClass:function(componentClass) {
  return componentClass instanceof Function && "componentConstructor" in componentClass && componentClass.componentConstructor instanceof Function
}};
module$ReactCompositeComponent.module$exports = ReactCompositeComponent$$module$ReactCompositeComponent;
if(module$ReactCompositeComponent.module$exports) {
  module$ReactCompositeComponent = module$ReactCompositeComponent.module$exports
}
;
