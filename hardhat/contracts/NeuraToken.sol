//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NeuraToken is ERC20 {
    constructor(string memory tokenName, string memory symbol)
        ERC20(tokenName, symbol)
    {
        _mint(msg.sender, 10);
    }

    function mint(address recepient, uint256 amount) external {
        _mint(recepient, amount);
    }
}
