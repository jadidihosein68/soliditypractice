//require("@truffle/contract");
require("dotenv").config({path:"../.env"});


var TokenSale = artifacts.require("MyTokenSale");
var Token = artifacts.require("MyToken");

const chai = require("./setupchai.js");
const BN = web3.utils.BN;
const expect = chai.expect;




contract("TokenSale Test", async (accounts) => {
  const [deployerAccount, recipient, anotherAccount] = accounts;



 it("Should not have any tokens in my deployerAccount", async () => {
    let instance = await Token.deployed();

   return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));

  //  let totalSupply = await instance.totalSupply();
    
  });


});