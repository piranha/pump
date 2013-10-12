goog.provide("module$ReactDOM");
var module$ReactDOM = {};
goog.require("module$objMapKeyVal");
goog.require("module$mergeInto");
goog.require("module$ReactDOMComponent");
var ReactDOMComponent$$module$ReactDOM = module$ReactDOMComponent;
var mergeInto$$module$ReactDOM = module$mergeInto;
var objMapKeyVal$$module$ReactDOM = module$objMapKeyVal;
function createDOMComponentClass$$module$ReactDOM(name, options) {
  var tag = options[0], omitClose = options[1];
  var Constructor = function() {
  };
  Constructor.prototype = new ReactDOMComponent$$module$ReactDOM(tag, omitClose);
  Constructor.prototype.constructor = Constructor;
  Constructor.displayName = tag;
  var ConvenienceConstructor = function(props, children) {
    var instance = new Constructor;
    instance.construct.apply(instance, arguments);
    return instance
  };
  ConvenienceConstructor.componentConstructor = Constructor;
  return ConvenienceConstructor
}
var ReactDOM$$module$ReactDOM = objMapKeyVal$$module$ReactDOM({a:["a", false], abbr:["abbr", false], address:["address", false], area:["area", false], article:["article", false], aside:["aside", false], audio:["audio", false], b:["b", false], base:["base", false], bdi:["bdi", false], bdo:["bdo", false], big:["big", false], blockquote:["blockquote", false], body:["body", false], br:["br", true], button:["button", false], canvas:["canvas", false], caption:["caption", false], cite:["cite", false], code:["code", 
false], col:["col", true], colgroup:["colgroup", false], data:["data", false], datalist:["datalist", false], dd:["dd", false], del:["del", false], details:["details", false], dfn:["dfn", false], div:["div", false], dl:["dl", false], dt:["dt", false], em:["em", false], embed:["embed", true], fieldset:["fieldset", false], figcaption:["figcaption", false], figure:["figure", false], footer:["footer", false], form:["form", false], h1:["h1", false], h2:["h2", false], h3:["h3", false], h4:["h4", false], 
h5:["h5", false], h6:["h6", false], head:["head", false], header:["header", false], hr:["hr", true], html:["html", false], i:["i", false], iframe:["iframe", false], img:["img", true], input:["input", true], ins:["ins", false], kbd:["kbd", false], keygen:["keygen", true], label:["label", false], legend:["legend", false], li:["li", false], link:["link", false], main:["main", false], map:["map", false], mark:["mark", false], menu:["menu", false], menuitem:["menuitem", false], meta:["meta", true], meter:["meter", 
false], nav:["nav", false], noscript:["noscript", false], object:["object", false], ol:["ol", false], optgroup:["optgroup", false], option:["option", false], output:["output", false], p:["p", false], param:["param", true], pre:["pre", false], progress:["progress", false], q:["q", false], rp:["rp", false], rt:["rt", false], ruby:["ruby", false], s:["s", false], samp:["samp", false], script:["script", false], section:["section", false], select:["select", false], small:["small", false], source:["source", 
false], span:["span", false], strong:["strong", false], style:["style", false], sub:["sub", false], summary:["summary", false], sup:["sup", false], table:["table", false], tbody:["tbody", false], td:["td", false], textarea:["textarea", false], tfoot:["tfoot", false], th:["th", false], thead:["thead", false], time:["time", false], title:["title", false], tr:["tr", false], track:["track", true], u:["u", false], ul:["ul", false], "var":["var", false], video:["video", false], wbr:["wbr", false], circle:["circle", 
false], g:["g", false], line:["line", false], path:["path", false], polyline:["polyline", false], rect:["rect", false], svg:["svg", false], text:["text", false]}, createDOMComponentClass$$module$ReactDOM);
var injection$$module$ReactDOM = {injectComponentClasses:function(componentClasses) {
  mergeInto$$module$ReactDOM(ReactDOM$$module$ReactDOM, componentClasses)
}};
ReactDOM$$module$ReactDOM.injection = injection$$module$ReactDOM;
module$ReactDOM.module$exports = ReactDOM$$module$ReactDOM;
if(module$ReactDOM.module$exports) {
  module$ReactDOM = module$ReactDOM.module$exports
}
;
