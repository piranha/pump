;goog.provide("module$EventPluginRegistry");
var module$EventPluginRegistry = {};
goog.require("module$invariant");
var invariant$$module$EventPluginRegistry = module$invariant;
var EventPluginOrder$$module$EventPluginRegistry = null;
var namesToPlugins$$module$EventPluginRegistry = {};
function recomputePluginOrdering$$module$EventPluginRegistry() {
  if(!EventPluginOrder$$module$EventPluginRegistry) {
    return
  }
  for(var pluginName in namesToPlugins$$module$EventPluginRegistry) {
    var PluginModule = namesToPlugins$$module$EventPluginRegistry[pluginName];
    var pluginIndex = EventPluginOrder$$module$EventPluginRegistry.indexOf(pluginName);
    invariant$$module$EventPluginRegistry(pluginIndex > -1);
    if(EventPluginRegistry$$module$EventPluginRegistry.plugins[pluginIndex]) {
      continue
    }
    invariant$$module$EventPluginRegistry(PluginModule.extractEvents);
    EventPluginRegistry$$module$EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for(var eventName in publishedEvents) {
      invariant$$module$EventPluginRegistry(publishEventForPlugin$$module$EventPluginRegistry(publishedEvents[eventName], PluginModule))
    }
  }
}
function publishEventForPlugin$$module$EventPluginRegistry(dispatchConfig, PluginModule) {
  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if(phasedRegistrationNames) {
    for(var phaseName in phasedRegistrationNames) {
      if(phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName$$module$EventPluginRegistry(phasedRegistrationName, PluginModule)
      }
    }
    return true
  }else {
    if(dispatchConfig.registrationName) {
      publishRegistrationName$$module$EventPluginRegistry(dispatchConfig.registrationName, PluginModule);
      return true
    }
  }
  return false
}
function publishRegistrationName$$module$EventPluginRegistry(registrationName, PluginModule) {
  invariant$$module$EventPluginRegistry(!EventPluginRegistry$$module$EventPluginRegistry.registrationNames[registrationName]);
  EventPluginRegistry$$module$EventPluginRegistry.registrationNames[registrationName] = PluginModule;
  EventPluginRegistry$$module$EventPluginRegistry.registrationNamesKeys.push(registrationName)
}
var EventPluginRegistry$$module$EventPluginRegistry = {plugins:[], registrationNames:{}, registrationNamesKeys:[], injectEventPluginOrder:function(InjectedEventPluginOrder) {
  invariant$$module$EventPluginRegistry(!EventPluginOrder$$module$EventPluginRegistry);
  EventPluginOrder$$module$EventPluginRegistry = Array.prototype.slice.call(InjectedEventPluginOrder);
  recomputePluginOrdering$$module$EventPluginRegistry()
}, injectEventPluginsByName:function(injectedNamesToPlugins) {
  var isOrderingDirty = false;
  for(var pluginName in injectedNamesToPlugins) {
    if(!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
      continue
    }
    var PluginModule = injectedNamesToPlugins[pluginName];
    if(namesToPlugins$$module$EventPluginRegistry[pluginName] !== PluginModule) {
      invariant$$module$EventPluginRegistry(!namesToPlugins$$module$EventPluginRegistry[pluginName]);
      namesToPlugins$$module$EventPluginRegistry[pluginName] = PluginModule;
      isOrderingDirty = true
    }
  }
  if(isOrderingDirty) {
    recomputePluginOrdering$$module$EventPluginRegistry()
  }
}, getPluginModuleForEvent:function(event) {
  var dispatchConfig = event.dispatchConfig;
  if(dispatchConfig.registrationName) {
    return EventPluginRegistry$$module$EventPluginRegistry.registrationNames[dispatchConfig.registrationName] || null
  }
  for(var phase in dispatchConfig.phasedRegistrationNames) {
    if(!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
      continue
    }
    var PluginModule = EventPluginRegistry$$module$EventPluginRegistry.registrationNames[dispatchConfig.phasedRegistrationNames[phase]];
    if(PluginModule) {
      return PluginModule
    }
  }
  return null
}, _resetEventPlugins:function() {
  EventPluginOrder$$module$EventPluginRegistry = null;
  for(var pluginName in namesToPlugins$$module$EventPluginRegistry) {
    if(namesToPlugins$$module$EventPluginRegistry.hasOwnProperty(pluginName)) {
      delete namesToPlugins$$module$EventPluginRegistry[pluginName]
    }
  }
  EventPluginRegistry$$module$EventPluginRegistry.plugins.length = 0;
  var registrationNames = EventPluginRegistry$$module$EventPluginRegistry.registrationNames;
  for(var registrationName in registrationNames) {
    if(registrationNames.hasOwnProperty(registrationName)) {
      delete registrationNames[registrationName]
    }
  }
  EventPluginRegistry$$module$EventPluginRegistry.registrationNamesKeys.length = 0
}};
module$EventPluginRegistry.module$exports = EventPluginRegistry$$module$EventPluginRegistry;
if(module$EventPluginRegistry.module$exports) {
  module$EventPluginRegistry = module$EventPluginRegistry.module$exports
}
