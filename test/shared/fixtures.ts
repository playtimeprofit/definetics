import { abi as FACTORY_V2_ABI, bytecode as FACTORY_V2_BYTECODE } from '@uniswap/v2-core/build/UniswapV2Factory.json'
import { abi as ROUTER_V2_ABI, bytecode as ROUTER_V2_BYTECODE } from '@uniswap/v2-periphery/build/UniswapV2Router02.json'
import { abi as WETH9_ABI, bytecode as WETH9_BYTECODE } from '@uniswap/v2-periphery/build/WETH9.json'
import { ethers, waffle } from 'hardhat';
import {
  Define, WETH9, UniswapV2Factory, UniswapV2Router02, MockERC20,
} from '../../typechain';
import { Fixture } from 'ethereum-waffle';
import { BigNumber, Wallet } from 'ethers'


type DefineContractsFixture = {
  weth9: WETH9,
  uniswapFactory: UniswapV2Factory,
  uniswapRouter: UniswapV2Router02,
  define: Define,
}

async function uniswapFixture(wallets: Wallet[]): Promise<DefineContractsFixture> {
  const [wallet] = wallets
  const weth9 = await waffle.deployContract(
    wallet,
    {
      bytecode: WETH9_BYTECODE,
      abi: WETH9_ABI,
    },
  ) as WETH9;

  const uniswapFactory = await waffle.deployContract(
      wallet,
      {
        bytecode: FACTORY_V2_BYTECODE,
        abi: FACTORY_V2_ABI,
      },
      [wallet.address]
  ) as UniswapV2Factory;

  const uniswapRouter = await waffle.deployContract(
      wallet,
      {
        bytecode: ROUTER_V2_BYTECODE,
        abi: ROUTER_V2_ABI,
      },
      [uniswapFactory.address, weth9.address]
  ) as UniswapV2Router02;

  const iterableMappingFactory = await ethers.getContractFactory('IterableMapping');
  const iterableMapping = await iterableMappingFactory.deploy();
  await iterableMapping.deployed();

  const defineTokenFactory = await ethers.getContractFactory('Define', {
    libraries: {
      IterableMapping: iterableMapping.address,
    },
  });

  const define = await defineTokenFactory.deploy(uniswapRouter.address) as Define;

  return { define, weth9, uniswapFactory, uniswapRouter };
}

interface TokensFixture {
  token0: MockERC20
  token1: MockERC20
}

async function tokensFixture(): Promise<TokensFixture> {
  const tokenFactory = await ethers.getContractFactory('MockERC20')
  const tokenA = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as MockERC20
  const tokenB = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as MockERC20

  const [token0, token1] = [tokenA, tokenB].sort((tokenA, tokenB) =>
      tokenA.address.toLowerCase() < tokenB.address.toLowerCase() ? -1 : 1
  )

  return { token0, token1 }
}

type AllContractsFixture = DefineContractsFixture & TokensFixture;

export const fixture: Fixture<AllContractsFixture> = async function ([wallet]): Promise<AllContractsFixture> {
  const {
    define, weth9, uniswapFactory, uniswapRouter,
  } = await uniswapFixture([wallet]);

  const { token0, token1 } = await tokensFixture();

  return {
    define,
    weth9,
    uniswapFactory,
    uniswapRouter,
    token0,
    token1,
  };
}   