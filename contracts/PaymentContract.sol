// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract {
    address public owner;

    event PaymentReceived(address indexed payer, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function makePayment() external payable {
        // require(msg.value > 0, "Amount must be greater than 0");
        
        // Gửi sự kiện để thông báo về thanh toán
        emit PaymentReceived(msg.sender, msg.value);
    }


}
