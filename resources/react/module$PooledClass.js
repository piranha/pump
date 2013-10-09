;goog.provide("module$PooledClass");
var module$PooledClass = {};
var oneArgumentPooler$$module$PooledClass = function(copyFieldsFrom) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance
  }else {
    return new Klass(copyFieldsFrom)
  }
};
var twoArgumentPooler$$module$PooledClass = function(a1, a2) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance
  }else {
    return new Klass(a1, a2)
  }
};
var threeArgumentPooler$$module$PooledClass = function(a1, a2, a3) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance
  }else {
    return new Klass(a1, a2, a3)
  }
};
var fiveArgumentPooler$$module$PooledClass = function(a1, a2, a3, a4, a5) {
  var Klass = this;
  if(Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance
  }else {
    return new Klass(a1, a2, a3, a4, a5)
  }
};
var standardReleaser$$module$PooledClass = function(instance) {
  var Klass = this;
  if(instance.destructor) {
    instance.destructor()
  }
  if(Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance)
  }
};
var DEFAULT_POOL_SIZE$$module$PooledClass = 10;
var DEFAULT_POOLER$$module$PooledClass = oneArgumentPooler$$module$PooledClass;
var addPoolingTo$$module$PooledClass = function(CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER$$module$PooledClass;
  if(!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE$$module$PooledClass
  }
  NewKlass.release = standardReleaser$$module$PooledClass;
  return NewKlass
};
var PooledClass$$module$PooledClass = {addPoolingTo:addPoolingTo$$module$PooledClass, oneArgumentPooler:oneArgumentPooler$$module$PooledClass, twoArgumentPooler:twoArgumentPooler$$module$PooledClass, threeArgumentPooler:threeArgumentPooler$$module$PooledClass, fiveArgumentPooler:fiveArgumentPooler$$module$PooledClass};
module$PooledClass.module$exports = PooledClass$$module$PooledClass;
if(module$PooledClass.module$exports) {
  module$PooledClass = module$PooledClass.module$exports
}
