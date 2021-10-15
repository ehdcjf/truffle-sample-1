// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract helloTruffle {
  constructor() public {
  }

    function hello() public view returns(string memory){
    return "hello Truffle";
  }
}
