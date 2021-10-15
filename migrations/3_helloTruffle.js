const helloTruffle = artifacts.require("helloTruffle");

module.exports = function (deployer) {
  deployer.deploy(helloTruffle);
};
