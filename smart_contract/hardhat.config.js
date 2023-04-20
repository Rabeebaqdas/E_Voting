require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('dotenv').config({path: __dirname+'/.env'})
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// console.log(process.env.ALCHEMY_API)
console.log(process.env.privateKey)

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// const ALCHEMY_API_KEY = `

// const privateKey = `669a00a5dcee6b12e70ec23b4a793b14bcb38a0f657ce29ada80b578e14743a7`

module.exports = {
  solidity: {
    compilers: [
    {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

]
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      gasPrice: 225000000000,
      forking: {
          url : "https://wiser-wider-valley.bsc.discover.quiknode.pro/050ea5d25ccade9d764fac15bd4709b810d543a1/"
      },
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
      accounts: [`0x${process.env.privateKey}`],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/`,
      accounts: [`0x${process.env.privateKey}`],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 21000000000,
      accounts: [`0x${process.env.privateKey}`],
    },
    mainnet: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [`0x${process.env.privateKey}`],
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [':Staking$',':HESTOKEN$'],
  },

  abiExporter: {
    path: '../frontend/src/contract',
    runOnCompile: true,
    clear: true,
    only: [':Staking$',':HESTOKEN$',':IERC20Metadata$',':IUniswapV2Router02$'],
    flat: true,
    spacing: 2,
    pretty: true,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "DTZ2S1S4M5DQD58AGCIF4P3I2HPVEEQGG4"
  },
  mocha: {
    timeout: 1000000
  }
};
// npx hardhat verify --constructor-args ./arguments.js --network rinkeby 0x8Eb6B4D40D35243352aBAD59BFDB27a161F3Bdc1
//npx hardhat verify --network rinkeby 0x8Eb6B4D40D35243352aBAD59BFDB27a161F3Bdc1 "0x3B2FA3fB4c7eD3bC495F276DC60782b635bB04d9" "0x3B2FA3fB4c7eD3bC495F276DC60782b635bB04d9"