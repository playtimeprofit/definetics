import hardhat, { ethers } from 'hardhat';

async function main() {
  // We get the contract to deploy
  const iterableMappingFactory = await ethers.getContractFactory('IterableMapping');
  const iterableMapping = await iterableMappingFactory.deploy();
  await iterableMapping.deployed();

  const defineTokenFactory = await ethers.getContractFactory('Define', {
    libraries: {
      IterableMapping: iterableMapping.address,
    },
  });

  console.log("Deploying...");
  const define = await defineTokenFactory.deploy('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
  await define.deployed();
  console.log("Deployed to:", define.address, iterableMapping.address);

  await hardhat.run("verify:verify", {
    address: define.address,
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
