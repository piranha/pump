goog.provide("module$joinClasses");
var module$joinClasses = {};
function joinClasses$$module$joinClasses(className) {
  if(!className) {
    className = ""
  }
  var nextClass;
  var argLength = arguments.length;
  if(argLength > 1) {
    for(var ii = 1;ii < argLength;ii++) {
      nextClass = arguments[ii];
      nextClass && (className += " " + nextClass)
    }
  }
  return className
}
module$joinClasses.module$exports = joinClasses$$module$joinClasses;
if(module$joinClasses.module$exports) {
  module$joinClasses = module$joinClasses.module$exports
}
;
