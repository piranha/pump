;goog.provide("module$ReactDOM");
var module$ReactDOM = {};
goog.require("module$objMapKeyVal");
goog.require("module$mergeInto");
goog.require("module$ReactDOMComponent");
var ReactDOMComponent$$module$ReactDOM = module$ReactDOMComponent;
var mergeInto$$module$ReactDOM = module$mergeInto;
var objMapKeyVal$$module$ReactDOM = module$objMapKeyVal;
function createDOMComponentClass$$module$ReactDOM(tag, omitClose) {
  var Constructor = function() {
  };
  Constructor.prototype = new ReactDOMComponent$$module$ReactDOM(tag, omitClose);
  Constructor.prototype.constructor = Constructor;
  var ConvenienceConstructor = function(props, children) {
    var instance = new Constructor;
    instance.construct.apply(instance, arguments);
    return instance
  };
  ConvenienceConstructor.componentConstructor = Constructor;
  return ConvenienceConstructor
}
var ReactDOM$$module$ReactDOM = objMapKeyVal$$module$ReactDOM({a:false, abbr:false, address:false, area:false, article:false, aside:false, audio:false, b:false, base:false, bdi:false, bdo:false, big:false, blockquote:false, body:false, br:true, button:false, canvas:false, caption:false, cite:false, code:false, col:true, colgroup:false, data:false, datalist:false, dd:false, del:false, details:false, dfn:false, div:false, dl:false, dt:false, em:false, embed:true, fieldset:false, figcaption:false, figure:false, 
footer:false, form:false, h1:false, h2:false, h3:false, h4:false, h5:false, h6:false, head:false, header:false, hr:true, html:false, i:false, iframe:false, img:true, input:true, ins:false, kbd:false, keygen:true, label:false, legend:false, li:false, link:false, main:false, map:false, mark:false, menu:false, menuitem:false, meta:true, meter:false, nav:false, noscript:false, object:false, ol:false, optgroup:false, option:false, output:false, p:false, param:true, pre:false, progress:false, q:false, 
rp:false, rt:false, ruby:false, s:false, samp:false, script:false, section:false, select:false, small:false, source:false, span:false, strong:false, style:false, sub:false, summary:false, sup:false, table:false, tbody:false, td:false, textarea:false, tfoot:false, th:false, thead:false, time:false, title:false, tr:false, track:true, u:false, ul:false, "var":false, video:false, wbr:false, circle:false, g:false, line:false, path:false, polyline:false, rect:false, svg:false, text:false}, createDOMComponentClass$$module$ReactDOM);
var injection$$module$ReactDOM = {injectComponentClasses:function(componentClasses) {
  mergeInto$$module$ReactDOM(ReactDOM$$module$ReactDOM, componentClasses)
}};
ReactDOM$$module$ReactDOM.injection = injection$$module$ReactDOM;
module$ReactDOM.module$exports = ReactDOM$$module$ReactDOM;
if(module$ReactDOM.module$exports) {
  module$ReactDOM = module$ReactDOM.module$exports
}
