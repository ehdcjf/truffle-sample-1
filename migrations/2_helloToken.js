const helloToken = artifacts.require("helloToken");

module.exports = function (deployer) {
  deployer.deploy(helloToken);
};
