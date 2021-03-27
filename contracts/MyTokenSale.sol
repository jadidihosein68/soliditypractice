
pragma solidity ^0.8.0;

import "./Crowdsale.sol";

contract MyTokenSale is Crowdsale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,  // money will be send here :D ! (the one who purchased)
        IERC20 token
    )
        Crowdsale(rate, wallet, token)
        public
    {

    }
}