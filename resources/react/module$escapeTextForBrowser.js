goog.provide("module$escapeTextForBrowser");
var module$escapeTextForBrowser = {};
goog.require("module$invariant");
var invariant$$module$escapeTextForBrowser = module$invariant;
var ESCAPE_LOOKUP$$module$escapeTextForBrowser = {"&":"&amp;", ">":"&gt;", "<":"&lt;", '"':"&quot;", "'":"&#x27;", "/":"&#x2f;"};
function escaper$$module$escapeTextForBrowser(match) {
  return ESCAPE_LOOKUP$$module$escapeTextForBrowser[match]
}
function escapeTextForBrowser$$module$escapeTextForBrowser(text) {
  var type = typeof text;
  invariant$$module$escapeTextForBrowser(type !== "object");
  if(text === "") {
    return""
  }else {
    if(type === "string") {
      return text.replace(/[&><"'\/]/g, escaper$$module$escapeTextForBrowser)
    }else {
      return("" + text).replace(/[&><"'\/]/g, escaper$$module$escapeTextForBrowser)
    }
  }
}
module$escapeTextForBrowser.module$exports = escapeTextForBrowser$$module$escapeTextForBrowser;
if(module$escapeTextForBrowser.module$exports) {
  module$escapeTextForBrowser = module$escapeTextForBrowser.module$exports
}
;
