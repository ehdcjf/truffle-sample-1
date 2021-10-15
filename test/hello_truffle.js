const helloTruffle = artifacts.require("helloTruffle");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("helloTruffle", function (/* accounts */) {
  it("hello Truffle function call", async function () {
    const instance = await helloTruffle.deployed();
    const result  = await instance.hello();
    console.log(result);
    return result;
  });
});
