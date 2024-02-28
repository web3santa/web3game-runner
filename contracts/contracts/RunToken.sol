// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RunToken is ERC20 {
     constructor() ERC20("RunToken", "Run") {
        _mint(msg.sender, 20 * 10 ** 6);
    }

    function mintTokens(address account, uint256 amount) {
        _mint(account, amount);
    }
    
}