
pragma solidity ^0.8.0;

import "./Crowdsale.sol";
import "./KycContract.sol";

contract MyTokenSale is Crowdsale {


    KycContract kyc; 

    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,  // money will be send here :D ! (the one who purchased)
        IERC20 token ,
        KycContract _kyc
        )
        Crowdsale(rate, wallet, token)
        public
    {
        kyc = _kyc ; 
    }

     function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
        super._preValidatePurchase(beneficiary,weiAmount);
        require(kyc.kycCompleted(msg.sender),"KYC not completed, purchase not allowed");
    }
}