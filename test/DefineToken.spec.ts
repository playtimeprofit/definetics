import { ethers, waffle } from 'hardhat';
import { BigNumber } from 'ethers';
import { expect } from './shared/expect';
import { fixture } from './shared/fixtures';
import {
    Define,
    UniswapV2Factory,
    UniswapV2Router02,
    WETH9,
    MockERC20,
} from '../typechain'

const createFixtureLoader = waffle.createFixtureLoader;

describe('Define', () => {
    const [wallet, alice, bob, other] = waffle.provider.getWallets()

    let define: Define;
    let token0: MockERC20;
    let token1: MockERC20;
    let uniswapFactory: UniswapV2Factory;
    let weth9: WETH9;
    let uniswapRouter: UniswapV2Router02;

    let now: number;

    let loadFixture: ReturnType<typeof createFixtureLoader>;

    before('create fixture loader', async () => {
        loadFixture = createFixtureLoader([wallet, other])
    })

    beforeEach('deploy fixture', async () => {
        ;({
            define,
            weth9,
            uniswapFactory,
            uniswapRouter,
            token0,
            token1,
        } = await loadFixture(fixture));
    })

    describe('checking updated numbers for token distribution', async () => {
        it('', async () => {
            // @ts-ignore
            await define.approve(uniswapRouter.address, ethers.utils.parseEther('250000000000000000000'));
            await weth9.approve(uniswapRouter.address, ethers.utils.parseEther('250000000000000000000'));
            await weth9.deposit({ value:  ethers.utils.parseEther('100')});
            now = (new Date()).getTime() / 1000 | 0;
            await uniswapRouter.addLiquidity(
                define.address,
                weth9.address,
                ethers.utils.parseEther('100000'),
                ethers.utils.parseEther('100'),
                0,
                0,
                alice.address,
                BigNumber.from(now + 60),
            );

            const lp = await uniswapFactory.getPair(weth9.address, define.address);
            console.log((await token0.attach(lp).balanceOf(alice.address)).toString());
        });
    });
})
