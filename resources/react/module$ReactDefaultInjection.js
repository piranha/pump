goog.provide("module$ReactDefaultInjection");
var module$ReactDefaultInjection = {};
goog.require("module$ReactDefaultPerf");
goog.require("module$ReactUpdates");
goog.require("module$ReactDefaultBatchingStrategy");
goog.require("module$SimpleEventPlugin");
goog.require("module$SelectEventPlugin");
goog.require("module$ReactInstanceHandles");
goog.require("module$MobileSafariClickEventPlugin");
goog.require("module$EventPluginHub");
goog.require("module$EnterLeaveEventPlugin");
goog.require("module$DefaultEventPluginOrder");
goog.require("module$CompositionEventPlugin");
goog.require("module$ChangeEventPlugin");
goog.require("module$DOMProperty");
goog.require("module$DefaultDOMPropertyConfig");
goog.require("module$ReactPerf");
goog.require("module$ReactEventTopLevelCallback");
goog.require("module$ReactEventEmitter");
goog.require("module$ReactDOMTextarea");
goog.require("module$ReactDOMSelect");
goog.require("module$ReactDOMOption");
goog.require("module$ReactDOMInput");
goog.require("module$ReactDOMForm");
goog.require("module$ReactDOMButton");
goog.require("module$ReactDOM");
var ReactDOM$$module$ReactDefaultInjection = module$ReactDOM;
var ReactDOMButton$$module$ReactDefaultInjection = module$ReactDOMButton;
var ReactDOMForm$$module$ReactDefaultInjection = module$ReactDOMForm;
var ReactDOMInput$$module$ReactDefaultInjection = module$ReactDOMInput;
var ReactDOMOption$$module$ReactDefaultInjection = module$ReactDOMOption;
var ReactDOMSelect$$module$ReactDefaultInjection = module$ReactDOMSelect;
var ReactDOMTextarea$$module$ReactDefaultInjection = module$ReactDOMTextarea;
var ReactEventEmitter$$module$ReactDefaultInjection = module$ReactEventEmitter;
var ReactEventTopLevelCallback$$module$ReactDefaultInjection = module$ReactEventTopLevelCallback;
var ReactPerf$$module$ReactDefaultInjection = module$ReactPerf;
var DefaultDOMPropertyConfig$$module$ReactDefaultInjection = module$DefaultDOMPropertyConfig;
var DOMProperty$$module$ReactDefaultInjection = module$DOMProperty;
var ChangeEventPlugin$$module$ReactDefaultInjection = module$ChangeEventPlugin;
var CompositionEventPlugin$$module$ReactDefaultInjection = module$CompositionEventPlugin;
var DefaultEventPluginOrder$$module$ReactDefaultInjection = module$DefaultEventPluginOrder;
var EnterLeaveEventPlugin$$module$ReactDefaultInjection = module$EnterLeaveEventPlugin;
var EventPluginHub$$module$ReactDefaultInjection = module$EventPluginHub;
var MobileSafariClickEventPlugin$$module$ReactDefaultInjection = module$MobileSafariClickEventPlugin;
var ReactInstanceHandles$$module$ReactDefaultInjection = module$ReactInstanceHandles;
var SelectEventPlugin$$module$ReactDefaultInjection = module$SelectEventPlugin;
var SimpleEventPlugin$$module$ReactDefaultInjection = module$SimpleEventPlugin;
var ReactDefaultBatchingStrategy$$module$ReactDefaultInjection = module$ReactDefaultBatchingStrategy;
var ReactUpdates$$module$ReactDefaultInjection = module$ReactUpdates;
function inject$$module$ReactDefaultInjection() {
  ReactEventEmitter$$module$ReactDefaultInjection.TopLevelCallbackCreator = ReactEventTopLevelCallback$$module$ReactDefaultInjection;
  EventPluginHub$$module$ReactDefaultInjection.injection.injectEventPluginOrder(DefaultEventPluginOrder$$module$ReactDefaultInjection);
  EventPluginHub$$module$ReactDefaultInjection.injection.injectInstanceHandle(ReactInstanceHandles$$module$ReactDefaultInjection);
  EventPluginHub$$module$ReactDefaultInjection.injection.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin$$module$ReactDefaultInjection, EnterLeaveEventPlugin:EnterLeaveEventPlugin$$module$ReactDefaultInjection, ChangeEventPlugin:ChangeEventPlugin$$module$ReactDefaultInjection, CompositionEventPlugin:CompositionEventPlugin$$module$ReactDefaultInjection, MobileSafariClickEventPlugin:MobileSafariClickEventPlugin$$module$ReactDefaultInjection, SelectEventPlugin:SelectEventPlugin$$module$ReactDefaultInjection});
  ReactDOM$$module$ReactDefaultInjection.injection.injectComponentClasses({button:ReactDOMButton$$module$ReactDefaultInjection, form:ReactDOMForm$$module$ReactDefaultInjection, input:ReactDOMInput$$module$ReactDefaultInjection, option:ReactDOMOption$$module$ReactDefaultInjection, select:ReactDOMSelect$$module$ReactDefaultInjection, textarea:ReactDOMTextarea$$module$ReactDefaultInjection});
  DOMProperty$$module$ReactDefaultInjection.injection.injectDOMPropertyConfig(DefaultDOMPropertyConfig$$module$ReactDefaultInjection);
  if(false) {
    ReactPerf$$module$ReactDefaultInjection.injection.injectMeasure(module$ReactDefaultPerf.measure)
  }
  ReactUpdates$$module$ReactDefaultInjection.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy$$module$ReactDefaultInjection)
}
module$ReactDefaultInjection.module$exports = {inject:inject$$module$ReactDefaultInjection};
if(module$ReactDefaultInjection.module$exports) {
  module$ReactDefaultInjection = module$ReactDefaultInjection.module$exports
}
;
