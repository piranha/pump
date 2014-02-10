goog.provide("module$ReactMarkupChecksum");
var module$ReactMarkupChecksum = {};
goog.require("module$adler32");
var adler32$$module$ReactMarkupChecksum = module$adler32;
var ReactMarkupChecksum$$module$ReactMarkupChecksum = {CHECKSUM_ATTR_NAME:"data-react-checksum", addChecksumToMarkup:function(markup) {
  var checksum = adler32$$module$ReactMarkupChecksum(markup);
  return markup.replace(">", " " + ReactMarkupChecksum$$module$ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">')
}, canReuseMarkup:function(markup, element) {
  var existingChecksum = element.getAttribute(ReactMarkupChecksum$$module$ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
  existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
  var markupChecksum = adler32$$module$ReactMarkupChecksum(markup);
  return markupChecksum === existingChecksum
}};
module$ReactMarkupChecksum.module$exports = ReactMarkupChecksum$$module$ReactMarkupChecksum;
if(module$ReactMarkupChecksum.module$exports) {
  module$ReactMarkupChecksum = module$ReactMarkupChecksum.module$exports
}
;
