var MyToken = artifacts.require("MyToken.sol");
var MyTokenSale = artifacts.require("MyTokenSale.sol");

require("dotenv").config({path:"../.env"});

module.exports = async function (deployer) {
  let address = await web3.eth.getAccounts();
  
  await deployer.deploy(MyToken , 1000000); // total No. of tokens in total ! : 
  await deployer.deploy(MyTokenSale,1,address[0],MyToken.address); // 

  let instance = await MyToken.deployed();// take care of seding money from address[0] to the MytokenSale 
  await instance.transfer(MyTokenSale.address , 1000000);
};
