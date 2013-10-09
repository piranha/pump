goog.provide("module$ExecutionEnvironment");
var module$ExecutionEnvironment = {};
var canUseDOM$$module$ExecutionEnvironment = typeof window !== "undefined";
var ExecutionEnvironment$$module$ExecutionEnvironment = {canUseDOM:canUseDOM$$module$ExecutionEnvironment, canUseWorkers:typeof Worker !== "undefined", isInWorker:!canUseDOM$$module$ExecutionEnvironment};
module$ExecutionEnvironment.module$exports = ExecutionEnvironment$$module$ExecutionEnvironment;
if(module$ExecutionEnvironment.module$exports) {
  module$ExecutionEnvironment = module$ExecutionEnvironment.module$exports
}
