;goog.provide("module$getTextContentAccessor");
var module$getTextContentAccessor = {};
goog.require("module$ExecutionEnvironment");
var ExecutionEnvironment$$module$getTextContentAccessor = module$ExecutionEnvironment;
var contentKey$$module$getTextContentAccessor = null;
function getTextContentAccessor$$module$getTextContentAccessor() {
  if(!contentKey$$module$getTextContentAccessor && ExecutionEnvironment$$module$getTextContentAccessor.canUseDOM) {
    contentKey$$module$getTextContentAccessor = "innerText" in document.createElement("div") ? "innerText" : "textContent"
  }
  return contentKey$$module$getTextContentAccessor
}
module$getTextContentAccessor.module$exports = getTextContentAccessor$$module$getTextContentAccessor;
if(module$getTextContentAccessor.module$exports) {
  module$getTextContentAccessor = module$getTextContentAccessor.module$exports
}
