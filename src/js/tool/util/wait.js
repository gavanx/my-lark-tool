function wait(second) {
  // execSync 属于同步方法；异步方式请根据需要自行查询 node.js 的 child_process 相关方法；
  let ChildProcess_ExecSync = require("child_process").execSync;
  ChildProcess_ExecSync("sleep " + second);
}

module.exports = wait;
