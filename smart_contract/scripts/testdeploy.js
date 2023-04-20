 // We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const { json } = require("hardhat/internal/core/params/argumentTypes");

// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
const bricks = "0x13e1070e3a388e53ec35480ff494538f9ffc5b8d"
const wbnb = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
const fac = "0xca143ce32fe78f1f7019d7d551a6402fc5350c73";
const myUSD = "0xDC87BD563fF936E5224748f741559a41045f829E";
const dollar = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
const USDC = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
const rou = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
async function main() {
 // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }


  const [deployer,per1,per2] = await ethers.getSigners();
   router = await ethers.getContractAt("Router", rou);
  con = await ethers.getContractAt("Bricks", bricks);
  con2 = await ethers.getContractAt("USDC", USDC);
  con3 = await ethers.getContractAt("MyDollar", myUSD);
  

  //My Bricks token transfer

  // const bricks = "0x13e1070e3a388e53ec35480ff494538f9ffc5b8d"
  // const imperBricks = "0x03de1aef57dec98a47a12a363c1d4d09818e68a1";
  // const signer3 = await ethers.getSigner(imperBricks);

  // bri = await ethers.getContractAt("Bricks", bricks);
  // const val2 = ethers.utils.parseUnits("420000",9)
  // const brick1 = await bri.connect(signer3);
  // await brick1.transfer("0xbb45af76f5198db4e38ba3668993c82739343c40",val2); 
  // console.log("Development Balance",await brick1.balanceOf("0xbb45af76f5198db4e38ba3668993c82739343c40")); 


  //Checking Bricks Price
  // const _amount2 = ethers.utils.parseEther("1");
  // const path2 = [wbnb,bricks]
  // const res3 = await router.getAmountsOut(_amount2,path2)
  // console.log(res3[1].toString())

  // //Swaping BNB to BRICKS
  // const res2 = await con.balanceOf(deployer.getAddress())
  // console.log("Old Balance",res2.toString())
  // const _amount = ethers.utils.parseEther("1");
  // const path = [wbnb,bricks]
  // await router.swapExactETHForTokens(res3[1].toString(),path,deployer.getAddress(), Math.floor(Date.now() / 1000) + 60 * 10,{ value: _amount }) ;
  // const res = await con.balanceOf(deployer.getAddress())
  // console.log("NEW BALANCE",res.toString())


  // //Sending ETH
  // acc = "0xF6deEe2fb50397756B6AD7522c28F7af710a2dfb"

  // const tx = {
  //   to: acc,
  //   value: ethers.utils.parseEther("100"),
  // };

  // await deployer.sendTransaction(tx);




  //Checking MYUSD Price
  // const _amount2 = ethers.utils.parseEther("0.0001");
  // const path2 = [wbnb,USDC,myUSD]
  // const res3 = await router.getAmountsOut(_amount2,path2)
  // console.log(res3.toString())

//Swaping MYUSD to USDC
  const _amount2 = ethers.utils.parseEther("2000");
  const path2 = [myUSD,USDC]
  await con3.approve(router.address, _amount2);
  const temp =  await router.estimateGas.swapExactTokensForTokens(_amount2,0,path2,deployer.getAddress(), Math.floor(Date.now() / 1000) + 60 * 10)
  const res4 = await con2.balanceOf(deployer.getAddress())
  console.log(res4,temp)





  // pair = await ethers.getContractAt("Pair", pairAddress);
  //  pair2 = await ethers.getContractAt("Pair", pairAddress2);


  // const reserves = await pair.getReserves();
  //  const reserves2 = await pair2.getReserves();

  // console.log("Reserves ", reserves);
  //  console.log("Reserves 2", reserves2);
//const eth = "1000000000"


    // const tx = await router.getAmountsOut(eth,[bricks,wbnb])
    // console.log("Transaction ",tx[1])

  
    // const tx2 = await router.getAmountsOut(tx[1],[wbnb,dollar])
    // console.log("Transaction 2",tx2[1])
    // const convert = ethers.utils.formatEther(`${tx2[1]}`)
    // console.log(convert)
    // console.log("200 dollars worth of bricks will be", 200 / convert)

    // const convert = ethers.utils.parseEther("200")
    // const convert2 = ethers.utils.parseUnits("1",9)
    // console.log(convert2) 

    // const tx = await router.getAmountsOut(convert,[dollar,wbnb])
    // console.log("Transaction ",tx[1])

  
    // const tx2 = await router.getAmountsOut(tx[1],[wbnb,bricks])
    // console.log("Transaction 2",tx2[1])

    // console.log(convert)
    // console.log("200 dollars worth of bricks will be", 200 / convert)
    

  //   bri = (reserves[1] / reserves[0]);
  //   WB = (reserves[0] / reserves[1]);
  // console.log("If you wanna buy 1 wbnb you have to give this amount of brick : ", bri);
  // console.log("If you wanna buy 1 brick you have to give this amount of wbnb : ", WB);

  // busd = (reserves2[0] / reserves2[1]);

  // console.log("the amount of busd you will get in the exchange of 1 wbnb : ", bri);
  

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// npx hardhat run scripts\deploy.js --network rinkeby