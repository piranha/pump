goog.provide("module$React");
var module$React = {};
goog.require("module$ReactTextComponent");
goog.require("module$ReactServerRendering");
goog.require("module$ReactPropTypes");
goog.require("module$ReactPerf");
goog.require("module$ReactMultiChild");
goog.require("module$ReactMount");
goog.require("module$ReactInstanceHandles");
goog.require("module$ReactDefaultInjection");
goog.require("module$ReactDOMComponent");
goog.require("module$ReactDOM");
goog.require("module$ReactCurrentOwner");
goog.require("module$ReactContext");
goog.require("module$ReactCompositeComponent");
goog.require("module$ReactComponent");
var ReactComponent$$module$React = module$ReactComponent;
var ReactCompositeComponent$$module$React = module$ReactCompositeComponent;
var ReactContext$$module$React = module$ReactContext;
var ReactCurrentOwner$$module$React = module$ReactCurrentOwner;
var ReactDOM$$module$React = module$ReactDOM;
var ReactDOMComponent$$module$React = module$ReactDOMComponent;
var ReactDefaultInjection$$module$React = module$ReactDefaultInjection;
var ReactInstanceHandles$$module$React = module$ReactInstanceHandles;
var ReactMount$$module$React = module$ReactMount;
var ReactMultiChild$$module$React = module$ReactMultiChild;
var ReactPerf$$module$React = module$ReactPerf;
var ReactPropTypes$$module$React = module$ReactPropTypes;
var ReactServerRendering$$module$React = module$ReactServerRendering;
var ReactTextComponent$$module$React = module$ReactTextComponent;
ReactDefaultInjection$$module$React.inject();
var React$$module$React = {DOM:ReactDOM$$module$React, PropTypes:ReactPropTypes$$module$React, initializeTouchEvents:function(shouldUseTouch) {
  ReactMount$$module$React.useTouchEvents = shouldUseTouch
}, createClass:ReactCompositeComponent$$module$React.createClass, constructAndRenderComponent:ReactMount$$module$React.constructAndRenderComponent, constructAndRenderComponentByID:ReactMount$$module$React.constructAndRenderComponentByID, renderComponent:ReactPerf$$module$React.measure("React", "renderComponent", ReactMount$$module$React.renderComponent), renderComponentToString:ReactServerRendering$$module$React.renderComponentToString, unmountComponentAtNode:ReactMount$$module$React.unmountComponentAtNode, 
unmountAndReleaseReactRootNode:ReactMount$$module$React.unmountAndReleaseReactRootNode, isValidClass:ReactCompositeComponent$$module$React.isValidClass, isValidComponent:ReactComponent$$module$React.isValidComponent, withContext:ReactContext$$module$React.withContext, __internals:{Component:ReactComponent$$module$React, CurrentOwner:ReactCurrentOwner$$module$React, DOMComponent:ReactDOMComponent$$module$React, InstanceHandles:ReactInstanceHandles$$module$React, Mount:ReactMount$$module$React, MultiChild:ReactMultiChild$$module$React, 
TextComponent:ReactTextComponent$$module$React}};
React$$module$React.version = "0.6.0-alpha";
module$React.module$exports = React$$module$React;
if(module$React.module$exports) {
  module$React = module$React.module$exports
}
;
