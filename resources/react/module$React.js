;goog.provide("module$React");
var module$React = {};
goog.require("module$ReactDefaultInjection");
goog.require("module$ReactServerRendering");
goog.require("module$ReactPropTypes");
goog.require("module$ReactPerf");
goog.require("module$ReactMount");
goog.require("module$ReactDOM");
goog.require("module$ReactComponent");
goog.require("module$ReactCompositeComponent");
var ReactCompositeComponent$$module$React = module$ReactCompositeComponent;
var ReactComponent$$module$React = module$ReactComponent;
var ReactDOM$$module$React = module$ReactDOM;
var ReactMount$$module$React = module$ReactMount;
var ReactPerf$$module$React = module$ReactPerf;
var ReactPropTypes$$module$React = module$ReactPropTypes;
var ReactServerRendering$$module$React = module$ReactServerRendering;
var ReactDefaultInjection$$module$React = module$ReactDefaultInjection;
ReactDefaultInjection$$module$React.inject();
var React$$module$React = {DOM:ReactDOM$$module$React, PropTypes:ReactPropTypes$$module$React, initializeTouchEvents:function(shouldUseTouch) {
  ReactMount$$module$React.useTouchEvents = shouldUseTouch
}, createClass:ReactCompositeComponent$$module$React.createClass, constructAndRenderComponent:ReactMount$$module$React.constructAndRenderComponent, constructAndRenderComponentByID:ReactMount$$module$React.constructAndRenderComponentByID, renderComponent:ReactPerf$$module$React.measure("React", "renderComponent", ReactMount$$module$React.renderComponent), renderComponentToString:ReactServerRendering$$module$React.renderComponentToString, unmountComponentAtNode:ReactMount$$module$React.unmountComponentAtNode, 
unmountAndReleaseReactRootNode:ReactMount$$module$React.unmountAndReleaseReactRootNode, isValidClass:ReactCompositeComponent$$module$React.isValidClass, isValidComponent:ReactComponent$$module$React.isValidComponent};
React$$module$React.version = "0.5.0-alpha";
module$React.module$exports = React$$module$React;
if(module$React.module$exports) {
  module$React = module$React.module$exports
}
