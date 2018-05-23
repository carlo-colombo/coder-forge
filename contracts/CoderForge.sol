pragma solidity ^0.4.0;

contract CoderForge {
    address public owner;

    event newForge(string name, address wallet);

    constructor() public{
        owner = msg.sender;
    }

    function createForge(string name, address wallet) public {
        require(owner == msg.sender);

        emit newForge(name, wallet);
    }
    
    function kill() public {
        require(owner == msg.sender);
        selfdestruct(msg.sender);
    }
}