;goog.provide("module$CallbackRegistry");
var module$CallbackRegistry = {};
var listenerBank$$module$CallbackRegistry = {};
var CallbackRegistry$$module$CallbackRegistry = {putListener:function(id, registrationName, listener) {
  var bankForRegistrationName = listenerBank$$module$CallbackRegistry[registrationName] || (listenerBank$$module$CallbackRegistry[registrationName] = {});
  bankForRegistrationName[id] = listener
}, getListener:function(id, registrationName) {
  var bankForRegistrationName = listenerBank$$module$CallbackRegistry[registrationName];
  return bankForRegistrationName && bankForRegistrationName[id]
}, deleteListener:function(id, registrationName) {
  var bankForRegistrationName = listenerBank$$module$CallbackRegistry[registrationName];
  if(bankForRegistrationName) {
    delete bankForRegistrationName[id]
  }
}, deleteAllListeners:function(id) {
  for(var registrationName in listenerBank$$module$CallbackRegistry) {
    delete listenerBank$$module$CallbackRegistry[registrationName][id]
  }
}, __purge:function() {
  listenerBank$$module$CallbackRegistry = {}
}};
module$CallbackRegistry.module$exports = CallbackRegistry$$module$CallbackRegistry;
if(module$CallbackRegistry.module$exports) {
  module$CallbackRegistry = module$CallbackRegistry.module$exports
}
