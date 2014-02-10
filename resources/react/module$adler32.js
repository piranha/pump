goog.provide("module$adler32");
var module$adler32 = {};
var MOD$$module$adler32 = 65521;
function adler32$$module$adler32(data) {
  var a = 1;
  var b = 0;
  for(var i = 0;i < data.length;i++) {
    a = (a + data.charCodeAt(i)) % MOD$$module$adler32;
    b = (b + a) % MOD$$module$adler32
  }
  return a | b << 16
}
module$adler32.module$exports = adler32$$module$adler32;
if(module$adler32.module$exports) {
  module$adler32 = module$adler32.module$exports
}
;
