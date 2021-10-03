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

const { TESTNET_PRIVATE_KEY, MAINNET_PRIVATE_KEY, INFURA_PROJECT_ID, ETHERSCAN_API_KEY, DEPLOYER_ACCOUNT } = require('./.secrets.json');

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${TESTNET_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${TESTNET_PRIVATE_KEY}`],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${TESTNET_PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${TESTNET_PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: DEPLOYER_ACCOUNT,
  },
  solidity: {
    version: "0.8.0",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  paths: {
    sources: 'contracts',
  },
}