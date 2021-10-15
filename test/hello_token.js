const helloToken = artifacts.require("helloToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("helloToken", function (/* accounts */) {
  it("should assert true", async function () {
    const instance = await helloToken.deployed();
    const result  = await instance.hello();
    console.log(result);
    return result;
  });
});
