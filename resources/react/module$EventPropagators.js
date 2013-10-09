;goog.provide("module$EventPropagators");
var module$EventPropagators = {};
goog.require("module$forEachAccumulated");
goog.require("module$accumulate");
goog.require("module$EventConstants");
goog.require("module$CallbackRegistry");
var CallbackRegistry$$module$EventPropagators = module$CallbackRegistry;
var EventConstants$$module$EventPropagators = module$EventConstants;
var accumulate$$module$EventPropagators = module$accumulate;
var forEachAccumulated$$module$EventPropagators = module$forEachAccumulated;
var getListener$$module$EventPropagators = CallbackRegistry$$module$EventPropagators.getListener;
var PropagationPhases$$module$EventPropagators = EventConstants$$module$EventPropagators.PropagationPhases;
var injection$$module$EventPropagators = {InstanceHandle:null, injectInstanceHandle:function(InjectedInstanceHandle) {
  injection$$module$EventPropagators.InstanceHandle = InjectedInstanceHandle
}, validate:function() {
  var invalid = !injection$$module$EventPropagators.InstanceHandle || !injection$$module$EventPropagators.InstanceHandle.traverseTwoPhase || !injection$$module$EventPropagators.InstanceHandle.traverseEnterLeave;
  if(invalid) {
    throw new Error("InstanceHandle not injected before use!");
  }
}};
function listenerAtPhase$$module$EventPropagators(id, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener$$module$EventPropagators(id, registrationName)
}
function accumulateDirectionalDispatches$$module$EventPropagators(domID, upwards, event) {
  var phase = upwards ? PropagationPhases$$module$EventPropagators.bubbled : PropagationPhases$$module$EventPropagators.captured;
  var listener = listenerAtPhase$$module$EventPropagators(domID, event, phase);
  if(listener) {
    event._dispatchListeners = accumulate$$module$EventPropagators(event._dispatchListeners, listener);
    event._dispatchIDs = accumulate$$module$EventPropagators(event._dispatchIDs, domID)
  }
}
function accumulateTwoPhaseDispatchesSingle$$module$EventPropagators(event) {
  if(event && event.dispatchConfig.phasedRegistrationNames) {
    injection$$module$EventPropagators.InstanceHandle.traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches$$module$EventPropagators, event)
  }
}
function accumulateDispatches$$module$EventPropagators(id, ignoredDirection, event) {
  if(event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener$$module$EventPropagators(id, registrationName);
    if(listener) {
      event._dispatchListeners = accumulate$$module$EventPropagators(event._dispatchListeners, listener);
      event._dispatchIDs = accumulate$$module$EventPropagators(event._dispatchIDs, id)
    }
  }
}
function accumulateDirectDispatchesSingle$$module$EventPropagators(event) {
  if(event && event.dispatchConfig.registrationName) {
    accumulateDispatches$$module$EventPropagators(event.dispatchMarker, null, event)
  }
}
function accumulateTwoPhaseDispatches$$module$EventPropagators(events) {
  forEachAccumulated$$module$EventPropagators(events, accumulateTwoPhaseDispatchesSingle$$module$EventPropagators)
}
function accumulateEnterLeaveDispatches$$module$EventPropagators(leave, enter, fromID, toID) {
  injection$$module$EventPropagators.InstanceHandle.traverseEnterLeave(fromID, toID, accumulateDispatches$$module$EventPropagators, leave, enter)
}
function accumulateDirectDispatches$$module$EventPropagators(events) {
  forEachAccumulated$$module$EventPropagators(events, accumulateDirectDispatchesSingle$$module$EventPropagators)
}
var EventPropagators$$module$EventPropagators = {accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches$$module$EventPropagators, accumulateDirectDispatches:accumulateDirectDispatches$$module$EventPropagators, accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches$$module$EventPropagators, injection:injection$$module$EventPropagators};
module$EventPropagators.module$exports = EventPropagators$$module$EventPropagators;
if(module$EventPropagators.module$exports) {
  module$EventPropagators = module$EventPropagators.module$exports
}
