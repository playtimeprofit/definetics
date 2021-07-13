import { ethers, waffle } from 'hardhat';
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
            console.log((await define.getTradingIsEnabled()).toString());
            await define.approve(define.address, '100000000000000000000000');
            // await define.transfer(define.address, '100000000000000000000000');
            await define.transfer(alice.address, '100000000000000000000000');
            console.log((await define.balanceOf(alice.address)).toString());
            await define.connect(alice).transfer(bob.address, '100000000000000000000');
            console.log((await define.balanceOf(alice.address)).toString());
            console.log((await define.balanceOf(bob.address)).toString());
            console.log((await define.balanceOf(define.address)).toString());
            await define.connect(alice).transfer(bob.address, '100000000000000000000');
            console.log((await define.balanceOf(alice.address)).toString());
            console.log((await define.balanceOf(bob.address)).toString());
            console.log((await define.balanceOf(define.address)).toString());
            await define.connect(alice).transfer(bob.address, '100000000000000000000');
            console.log((await define.balanceOf(alice.address)).toString());
            console.log((await define.balanceOf(bob.address)).toString());
            console.log((await define.balanceOf(define.address)).toString());
            await define.connect(alice).transfer(bob.address, '100000000000000000000');
            console.log((await define.balanceOf(alice.address)).toString());
            console.log((await define.balanceOf(bob.address)).toString());
            console.log((await define.balanceOf(define.address)).toString());
        });
    });
})
