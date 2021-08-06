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
    // test were done with swapTokensAtAmount = 200 * 10 ** 18, please change in Define contract
    describe('checking updated numbers for token distribution', async () => {
        it('First test', async () => {
            // @ts-ignore
            await define.approve(uniswapRouter.address, ethers.utils.parseEther('250000000000000000000'));
            await weth9.approve(uniswapRouter.address, ethers.utils.parseEther('250000000000000000000'));
            await weth9.deposit({ value:  ethers.utils.parseEther('100')});
            now = (new Date()).getTime() / 1000 | 0;
            await uniswapRouter.addLiquidity(
                define.address,
                weth9.address,
                ethers.utils.parseEther('100'),
                ethers.utils.parseEther('100'),
                0,
                0,
                alice.address,
                BigNumber.from(now + 60),
            );
            let temp = await wallet.getBalance();
            await define.transfer(alice.address, ethers.utils.parseEther('20000'));
            // balance of owner
            expect(await define.balanceOf(wallet.address)).to.equal('291522000000000000000000');

            for (let i = 0; i < 20; i++) {
                await define.connect(alice).transfer(bob.address, ethers.utils.parseEther('100'));
            }
            expect(await define.balanceOf(bob.address)).to.equal('1680000000000000000000');
            expect(await define.balanceOf(define.address)).to.equal('112000000000000000000');
            // balance of owner increased, after going past 200 tokens on contract threshold
            
            expect((await wallet.getBalance()).sub(temp)).at.gt(0);
        });

        xit('Transwer ETH to OWNER', async () => {
            // @ts-ignore
            await define.approve(uniswapRouter.address, ethers.utils.parseEther('250000000000000000000'));
            await weth9.approve(uniswapRouter.address, ethers.utils.parseEther('250000000000000000000'));
            await weth9.deposit({ value:  ethers.utils.parseEther('100')});
            now = (new Date()).getTime() / 1000 | 0;
            await uniswapRouter.addLiquidity(
                define.address,
                weth9.address,
                ethers.utils.parseEther('10000'),
                ethers.utils.parseEther('100'),
                0,
                0,
                alice.address,
                BigNumber.from(now + 60),
            );

            await define.transfer(alice.address, ethers.utils.parseEther('70000'));
            
            for (let i = 0; i < 20; i++) {
                console.log("Trandfer: ", i);
                await define.connect(alice).transfer(bob.address, ethers.utils.parseEther('350'));
            }
            
        });
    });
})
