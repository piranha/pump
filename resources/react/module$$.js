;goog.provide("module$$");
var module$$ = {};
goog.require("module$ex");
goog.require("module$ge");
var ge$$module$$ = module$ge;
var ex$$module$$ = module$ex;
function $$$module$$(id) {
  var element = ge$$module$$(id);
  if(!element) {
    throw new Error(ex$$module$$('Tried to get element with id of "%s" but it is not present on the page.', id));
  }
  return element
}
module$$.module$exports = $$$module$$;
if(module$$.module$exports) {
  module$$ = module$$.module$exports
}
