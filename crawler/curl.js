const exec = require("child_process").exec;
const Promise = require("bluebird");

module.exports = function (url) {
  const command = `curl "${url}"`;
  return new Promise((resolve, reject) => {
    exec(command, function (error, stdout, stderr) {
      if (error !== null) {
        console.log("Error happend in curl by link: ", command);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};
