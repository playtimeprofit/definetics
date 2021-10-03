import hardhat, { ethers } from 'hardhat';

async function main() {
  // We get the contract to deploy
  const iterableMappingFactory = await ethers.getContractFactory('IterableMapping');
  const iterableMapping = await iterableMappingFactory.deploy();
  await iterableMapping.deployed();

  const playTimeProfitFactory = await ethers.getContractFactory('PlayTimeProfit', {
    libraries: {
      IterableMapping: iterableMapping.address,
    },
  });

  console.log("Deploying...");
  const playTimeProfitContractInstance = await playTimeProfitFactory.deploy('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
  await playTimeProfitContractInstance.deployed();
  console.log("Deployed PlayTimeProfit & IterableMapping:", playTimeProfitContractInstance.address, iterableMapping.address);

  await hardhat.run("verify:verify", {
    address: playTimeProfitContractInstance.address,
    constructorArguments: [
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    ],
    libraries: {
      IterableMapping: iterableMapping.address,
    },
  });
  console.log('VERIFICATION COMPLETE');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
