goog.provide("module$ReactMount");
var module$ReactMount = {};
goog.require("module$nodeContains");
goog.require("module$invariant");
goog.require("module$getReactRootElementInContainer");
goog.require("module$$");
goog.require("module$ReactInstanceHandles");
goog.require("module$ReactEventEmitter");
var ReactEventEmitter$$module$ReactMount = module$ReactEventEmitter;
var ReactInstanceHandles$$module$ReactMount = module$ReactInstanceHandles;
var $$$module$ReactMount = module$$;
var getReactRootElementInContainer$$module$ReactMount = module$getReactRootElementInContainer;
var invariant$$module$ReactMount = module$invariant;
var nodeContains$$module$ReactMount = module$nodeContains;
var SEPARATOR$$module$ReactMount = ReactInstanceHandles$$module$ReactMount.SEPARATOR;
var ATTR_NAME$$module$ReactMount = "data-reactid";
var nodeCache$$module$ReactMount = {};
var ELEMENT_NODE_TYPE$$module$ReactMount = 1;
var DOC_NODE_TYPE$$module$ReactMount = 9;
var instancesByReactRootID$$module$ReactMount = {};
var containersByReactRootID$$module$ReactMount = {};
function getReactRootID$$module$ReactMount(container) {
  var rootElement = getReactRootElementInContainer$$module$ReactMount(container);
  return rootElement && ReactMount$$module$ReactMount.getID(rootElement)
}
function getID$$module$ReactMount(node) {
  var id = internalGetID$$module$ReactMount(node);
  if(id) {
    if(nodeCache$$module$ReactMount.hasOwnProperty(id)) {
      var cached = nodeCache$$module$ReactMount[id];
      if(cached !== node) {
        invariant$$module$ReactMount(!isValid$$module$ReactMount(cached, id));
        nodeCache$$module$ReactMount[id] = node
      }
    }else {
      nodeCache$$module$ReactMount[id] = node
    }
  }
  return id
}
function internalGetID$$module$ReactMount(node) {
  return node && node.getAttribute && node.getAttribute(ATTR_NAME$$module$ReactMount) || ""
}
function setID$$module$ReactMount(node, id) {
  var oldID = internalGetID$$module$ReactMount(node);
  if(oldID !== id) {
    delete nodeCache$$module$ReactMount[oldID]
  }
  node.setAttribute(ATTR_NAME$$module$ReactMount, id);
  nodeCache$$module$ReactMount[id] = node
}
function getNode$$module$ReactMount(id) {
  if(!nodeCache$$module$ReactMount.hasOwnProperty(id) || !isValid$$module$ReactMount(nodeCache$$module$ReactMount[id], id)) {
    nodeCache$$module$ReactMount[id] = ReactMount$$module$ReactMount.findReactNodeByID(id)
  }
  return nodeCache$$module$ReactMount[id]
}
function isValid$$module$ReactMount(node, id) {
  if(node) {
    invariant$$module$ReactMount(internalGetID$$module$ReactMount(node) === id);
    var container = ReactMount$$module$ReactMount.findReactContainerForID(id);
    if(container && nodeContains$$module$ReactMount(container, node)) {
      return true
    }
  }
  return false
}
function purgeID$$module$ReactMount(id) {
  delete nodeCache$$module$ReactMount[id]
}
var ReactMount$$module$ReactMount = {allowFullPageRender:false, totalInstantiationTime:0, totalInjectionTime:0, useTouchEvents:false, _instancesByReactRootID:instancesByReactRootID$$module$ReactMount, scrollMonitor:function(container, renderCallback) {
  renderCallback()
}, prepareEnvironmentForDOM:function(container) {
  invariant$$module$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$ReactMount));
  var doc = container.nodeType === ELEMENT_NODE_TYPE$$module$ReactMount ? container.ownerDocument : container;
  ReactEventEmitter$$module$ReactMount.ensureListening(ReactMount$$module$ReactMount.useTouchEvents, doc)
}, _updateRootComponent:function(prevComponent, nextComponent, container, callback) {
  var nextProps = nextComponent.props;
  ReactMount$$module$ReactMount.scrollMonitor(container, function() {
    prevComponent.replaceProps(nextProps, callback)
  });
  return prevComponent
}, _registerComponent:function(nextComponent, container) {
  ReactMount$$module$ReactMount.prepareEnvironmentForDOM(container);
  var reactRootID = ReactMount$$module$ReactMount.registerContainer(container);
  instancesByReactRootID$$module$ReactMount[reactRootID] = nextComponent;
  return reactRootID
}, _renderNewRootComponent:function(nextComponent, container, shouldReuseMarkup) {
  var reactRootID = ReactMount$$module$ReactMount._registerComponent(nextComponent, container);
  nextComponent.mountComponentIntoNode(reactRootID, container, shouldReuseMarkup);
  return nextComponent
}, renderComponent:function(nextComponent, container, callback) {
  var registeredComponent = instancesByReactRootID$$module$ReactMount[getReactRootID$$module$ReactMount(container)];
  if(registeredComponent) {
    if(registeredComponent.constructor === nextComponent.constructor) {
      return ReactMount$$module$ReactMount._updateRootComponent(registeredComponent, nextComponent, container, callback)
    }else {
      ReactMount$$module$ReactMount.unmountComponentAtNode(container)
    }
  }
  var reactRootElement = getReactRootElementInContainer$$module$ReactMount(container);
  var containerHasReactMarkup = reactRootElement && ReactMount$$module$ReactMount.isRenderedByReact(reactRootElement);
  var shouldReuseMarkup = containerHasReactMarkup && !registeredComponent;
  var component = ReactMount$$module$ReactMount._renderNewRootComponent(nextComponent, container, shouldReuseMarkup);
  callback && callback();
  return component
}, constructAndRenderComponent:function(constructor, props, container) {
  return ReactMount$$module$ReactMount.renderComponent(constructor(props), container)
}, constructAndRenderComponentByID:function(constructor, props, id) {
  return ReactMount$$module$ReactMount.constructAndRenderComponent(constructor, props, $$$module$ReactMount(id))
}, registerContainer:function(container) {
  var reactRootID = getReactRootID$$module$ReactMount(container);
  if(reactRootID) {
    reactRootID = ReactInstanceHandles$$module$ReactMount.getReactRootIDFromNodeID(reactRootID)
  }
  if(!reactRootID) {
    reactRootID = ReactInstanceHandles$$module$ReactMount.createReactRootID()
  }
  containersByReactRootID$$module$ReactMount[reactRootID] = container;
  return reactRootID
}, unmountComponentAtNode:function(container) {
  var reactRootID = getReactRootID$$module$ReactMount(container);
  var component = instancesByReactRootID$$module$ReactMount[reactRootID];
  if(!component) {
    return false
  }
  ReactMount$$module$ReactMount.unmountComponentFromNode(component, container);
  delete instancesByReactRootID$$module$ReactMount[reactRootID];
  delete containersByReactRootID$$module$ReactMount[reactRootID];
  return true
}, unmountAndReleaseReactRootNode:function() {
  return ReactMount$$module$ReactMount.unmountComponentAtNode.apply(this, arguments)
}, unmountComponentFromNode:function(instance, container) {
  instance.unmountComponent();
  while(container.lastChild) {
    container.removeChild(container.lastChild)
  }
}, findReactContainerForID:function(id) {
  var reactRootID = ReactInstanceHandles$$module$ReactMount.getReactRootIDFromNodeID(id);
  var container = containersByReactRootID$$module$ReactMount[reactRootID];
  return container
}, findReactNodeByID:function(id) {
  var reactRoot = ReactMount$$module$ReactMount.findReactContainerForID(id);
  return ReactMount$$module$ReactMount.findComponentRoot(reactRoot, id)
}, isRenderedByReact:function(node) {
  if(node.nodeType !== 1) {
    return false
  }
  var id = ReactMount$$module$ReactMount.getID(node);
  return id ? id.charAt(0) === SEPARATOR$$module$ReactMount : false
}, getFirstReactDOM:function(node) {
  var current = node;
  while(current && current.parentNode !== current) {
    if(ReactMount$$module$ReactMount.isRenderedByReact(current)) {
      return current
    }
    current = current.parentNode
  }
  return null
}, findComponentRoot:function(ancestorNode, id) {
  var firstChildren = [ancestorNode.firstChild];
  var childIndex = 0;
  while(childIndex < firstChildren.length) {
    var child = firstChildren[childIndex++];
    while(child) {
      var childID = ReactMount$$module$ReactMount.getID(child);
      if(childID) {
        if(id === childID) {
          return child
        }else {
          if(ReactInstanceHandles$$module$ReactMount.isAncestorIDOf(childID, id)) {
            firstChildren.length = childIndex = 0;
            firstChildren.push(child.firstChild);
            break
          }else {
            firstChildren.push(child.firstChild)
          }
        }
      }else {
        firstChildren.push(child.firstChild)
      }
      child = child.nextSibling
    }
  }
  invariant$$module$ReactMount(false)
}, ATTR_NAME:ATTR_NAME$$module$ReactMount, getID:getID$$module$ReactMount, setID:setID$$module$ReactMount, getNode:getNode$$module$ReactMount, purgeID:purgeID$$module$ReactMount, injection:{}};
module$ReactMount.module$exports = ReactMount$$module$ReactMount;
if(module$ReactMount.module$exports) {
  module$ReactMount = module$ReactMount.module$exports
}
;
