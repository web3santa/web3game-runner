require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
    networks: {
      mumbai: {
        url: process.env.MUMBAI_RPC,
        accounts: [
          process.env.PRIVATE_KEY
        ],
      },
    },
  },
};
