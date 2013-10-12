goog.provide("module$getActiveElement");
var module$getActiveElement = {};
function getActiveElement$$module$getActiveElement() {
  try {
    return document.activeElement
  }catch(e) {
    return null
  }
}
module$getActiveElement.module$exports = getActiveElement$$module$getActiveElement;
if(module$getActiveElement.module$exports) {
  module$getActiveElement = module$getActiveElement.module$exports
}
;
