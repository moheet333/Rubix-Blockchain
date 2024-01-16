require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = [process.env.PRIVATE_KEY];
const MUMBAI = process.env.MUMBAI;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      chainId: 80001,
      url: MUMBAI,
      accounts: PRIVATE_KEY,
    },
  },
};
