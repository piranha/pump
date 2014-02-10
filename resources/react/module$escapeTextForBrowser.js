goog.provide("module$escapeTextForBrowser");
var module$escapeTextForBrowser = {};
var ESCAPE_LOOKUP$$module$escapeTextForBrowser = {"&":"&amp;", ">":"&gt;", "<":"&lt;", '"':"&quot;", "'":"&#x27;", "/":"&#x2f;"};
var ESCAPE_REGEX$$module$escapeTextForBrowser = /[&><"'\/]/g;
function escaper$$module$escapeTextForBrowser(match) {
  return ESCAPE_LOOKUP$$module$escapeTextForBrowser[match]
}
function escapeTextForBrowser$$module$escapeTextForBrowser(text) {
  return("" + text).replace(ESCAPE_REGEX$$module$escapeTextForBrowser, escaper$$module$escapeTextForBrowser)
}
module$escapeTextForBrowser.module$exports = escapeTextForBrowser$$module$escapeTextForBrowser;
if(module$escapeTextForBrowser.module$exports) {
  module$escapeTextForBrowser = module$escapeTextForBrowser.module$exports
}
;
