
"use strict" ; 

var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);
var chainAsPromissed = require("chai-as-promised");
chai.use(chainAsPromissed);


module.exports = chai;