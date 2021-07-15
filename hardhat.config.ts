import 'hardhat-typechain';
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-solhint";
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import './scripts/copy-uniswap-v2-artifacts.ts'
import "solidity-coverage";
import fs from 'fs';
import dotenv from 'dotenv';


dotenv.config();
const mnemonic = fs.readFileSync('.secret').toString().trim();

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      chainId: 4,
      gasPrice: 7000000000,
      accounts: { mnemonic: mnemonic }
    },
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      chainId: 97,
      // gasPrice: 70000000000,
      accounts: { mnemonic: mnemonic }
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: process.env.DEPLOYER_ACCOUNT,
  },
  paths: {
    sources: 'contracts',
  },
}