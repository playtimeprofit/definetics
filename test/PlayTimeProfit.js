const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { abi: FACTORY_V2_ABI, bytecode: FACTORY_V2_BYTECODE } = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const { abi: ROUTER_V2_ABI, bytecode: ROUTER_V2_BYTECODE } = require('@uniswap/v2-periphery/build/UniswapV2Router02.json')
const { abi: WETH9_ABI, bytecode: WETH9_BYTECODE } = require('@uniswap/v2-periphery/build/WETH9.json');
const { BigNumber } = require('ethers');

describe('PlayTimeProfit', () => {
    let accounts;
    let owner;
    let acc1;
    let acc2;
    let acc3;
    let acc4;
    let acc5;
    let acc6;
    let dividentTrackerAddress;
    let ptpDividendTrackerFactory;

    let playTimeProfitConInstance;
    let uniswapFactoryConInstance;
    let uniswapRouterConInstance;
    let newUniswapRouterConInstance;
    let weth9COnInstance;
    let dividentTrackerConInstance;
    let newDividendTrackerConInstance;
    let txObject;

    const initialSupply = '311622000000000000000000'; // 311622 * (10**18)

    context('PlayTimeProfit tests', () => {
        before(async () => {
            accounts = await ethers.getSigners();
            [owner, acc1, acc2, acc3, acc4, acc5, acc6] = accounts;
            weth9COnInstance = await waffle.deployContract(
                owner,
                {
                    bytecode: WETH9_BYTECODE,
                    abi: WETH9_ABI,
                },
            );
            uniswapFactoryConInstance = await waffle.deployContract(
                owner,
                {
                    bytecode: FACTORY_V2_BYTECODE,
                    abi: FACTORY_V2_ABI,
                },
                [owner.address]
            );
            uniswapRouterConInstance = await waffle.deployContract(
                owner,
                {
                    bytecode: ROUTER_V2_BYTECODE,
                    abi: ROUTER_V2_ABI,
                },
                [uniswapFactoryConInstance.address, weth9COnInstance.address]
            )
            const iterableMappingFactory = await ethers.getContractFactory('IterableMapping');
            const iterableMapping = await iterableMappingFactory.deploy();
            await iterableMapping.deployed();
            const playTimeProfitFactory = await ethers.getContractFactory('PlayTimeProfit', {
                libraries: {
                    IterableMapping: iterableMapping.address,
                },
            });
            playTimeProfitConInstance = await playTimeProfitFactory.deploy(uniswapRouterConInstance.address);
            dividentTrackerAddress = await playTimeProfitConInstance.dividendTracker();
            ptpDividendTrackerFactory = await ethers.getContractFactory('PTPDividendTracker', {
                libraries: {
                    IterableMapping: iterableMapping.address,
                },
            });
            dividentTrackerConInstance = ptpDividendTrackerFactory.attach(dividentTrackerAddress)
        });

        context('checks constructor invocation is successful', () => {
            it('should have token name to be `PlayTimeProfit`', async () => {
                expect(await playTimeProfitConInstance.name()).to.equal('PlayTimeProfit')
            })
            it('should have token symbol to be `PTP`', async () => {
                expect(await playTimeProfitConInstance.symbol()).to.equal('PTP')
            })
            it('should have token tokenDecimals to be 18', async () => {
                expect(await playTimeProfitConInstance.decimals()).to.equal(18)
            })
            it('should verify totalSupply is 311622 PTP', async () => {
                expect(await playTimeProfitConInstance.totalSupply()).to.equal(initialSupply)
            })
            it('should verify ETHRewardsFee is 11', async () => {
                expect(await playTimeProfitConInstance.ETHRewardsFee()).to.equal(11)
            })
            it('should verify liquidityFee is 5', async () => {
                expect(await playTimeProfitConInstance.liquidityFee()).to.equal(5)
            })
            it('should verify totalFees is 16', async () => {
                expect(await playTimeProfitConInstance.totalFees()).to.equal(16)
            })
            it('should verify liquidityWallet is set as expected', async () => {
                expect(await playTimeProfitConInstance.liquidityWallet()).to.equal(owner.address)
            })
            it('should verify uniswapV2Router is set as expected', async () => {
                expect(
                    await playTimeProfitConInstance.uniswapV2Router()
                ).to.equal(uniswapRouterConInstance.address)
            })
            it('should verify excludedFromDividends for dividendTracker is true', async () => {
                expect(await dividentTrackerConInstance.excludedFromDividends(dividentTrackerAddress)).to.equal(true)
            })
            it('should verify excludedFromDividends for PlayTimeProfit contract is true', async () => {
                expect(await dividentTrackerConInstance.excludedFromDividends(playTimeProfitConInstance.address)).to.equal(true)
            })
            it('should verify excludedFromDividends for owner is true', async () => {
                expect(await dividentTrackerConInstance.excludedFromDividends(owner.address)).to.equal(true)
            })
            it('should verify excludedFromDividends for uniswapV2Router is true', async () => {
                expect(await dividentTrackerConInstance.excludedFromDividends(uniswapRouterConInstance.address)).to.equal(true)
            })
            it('should verify isExcludedFromFees for owner is true', async () => {
                expect(await playTimeProfitConInstance.isExcludedFromFees(owner.address)).to.equal(true)
            })
            it('should verify isExcludedFromFees for PlayTimeProfit contract is true', async () => {
                expect(await playTimeProfitConInstance.isExcludedFromFees(playTimeProfitConInstance.address)).to.equal(true)
            })
        })

        context('Transfer DividendToken to the Owner', () => {
            let temp, now;
            before(async () => {
                await playTimeProfitConInstance.approve(uniswapRouterConInstance.address, ethers.utils.parseEther('250000000000000000000'));
                await weth9COnInstance.approve(uniswapRouterConInstance.address, ethers.utils.parseEther('250000000000000000000'));
                await weth9COnInstance.deposit({ value: ethers.utils.parseEther('100') });
                now = (new Date()).getTime() / 1000 | 0;
                await uniswapRouterConInstance.addLiquidity(
                    playTimeProfitConInstance.address,
                    weth9COnInstance.address,
                    ethers.utils.parseEther('100'),
                    ethers.utils.parseEther('100'),
                    0,
                    0,
                    acc6.address,
                    BigNumber.from(now + 60),
                );
                temp = await owner.getBalance();
            })
            it('should transfer dividend token to the owner', async () => {
                await playTimeProfitConInstance.transfer(acc6.address, ethers.utils.parseEther('20000'));
                // Balance of Owner
                expect(await playTimeProfitConInstance.balanceOf(owner.address)).to.equal('291522000000000000000000');
                for (let i = 0; i < 20; i++) {
                    await playTimeProfitConInstance.connect(acc6).transfer(acc5.address, ethers.utils.parseEther('100'));
                }
                expect(await playTimeProfitConInstance.balanceOf(acc5.address)).to.equal('1680000000000000000000');
                expect(await playTimeProfitConInstance.balanceOf(playTimeProfitConInstance.address)).to.equal('112000000000000000000');
                // Balance of owner increased, after going past 200 tokens on contract threshold
                expect((await owner.getBalance()).sub(temp)).at.gt(0);
            })
        })

        context('Transwer ETH to owner', () => {
            let now;
            before(async () => {
                await playTimeProfitConInstance.approve(uniswapRouterConInstance.address, ethers.utils.parseEther('250000000000000000000'));
                await weth9COnInstance.approve(uniswapRouterConInstance.address, ethers.utils.parseEther('250000000000000000000'));
                await weth9COnInstance.deposit({ value: ethers.utils.parseEther('100') });
                now = (new Date()).getTime() / 1000 | 0;
                await uniswapRouterConInstance.addLiquidity(
                    playTimeProfitConInstance.address,
                    weth9COnInstance.address,
                    ethers.utils.parseEther('10000'),
                    ethers.utils.parseEther('100'),
                    0,
                    0,
                    acc6.address,
                    BigNumber.from(now + 60),
                );
                temp = await owner.getBalance();
            })
            it('should transfer ETH to owner', async () => {
                await playTimeProfitConInstance.transfer(acc6.address, ethers.utils.parseEther('70000'));
                for (let i = 0; i < 20; i++) {
                    await playTimeProfitConInstance.connect(acc6).transfer(acc5.address, ethers.utils.parseEther('350'));
                }
                expect(await playTimeProfitConInstance.balanceOf(acc5.address)).to.equal('7560000000000000000000');
                expect(await playTimeProfitConInstance.balanceOf(acc6.address)).to.equal('81000000000000000000000');
                expect((await owner.getBalance()).sub(temp)).at.gt(0);
            })
        })

        context('updateDividendTracker', () => {
            it('reverts when updateDividendTracker is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).updateDividendTracker(dividentTrackerAddress)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when new & old dividend tracker address are the same', async () => {
                await expect(
                    playTimeProfitConInstance.updateDividendTracker(dividentTrackerAddress)
                ).to.be.revertedWith("PlayTimeProfit: The dividend tracker already has that address")
            })
            it('reverts when PlayTimeProfit contract is not the owner of the PTPDividendTracker', async () => {
                newDividendTrackerConInstance = await ptpDividendTrackerFactory.deploy()
                await expect(
                    playTimeProfitConInstance.updateDividendTracker(newDividendTrackerConInstance.address)
                ).to.be.revertedWith("PlayTimeProfit: The new dividend tracker must be owned by the PlayTimeProfit token contract")
                await newDividendTrackerConInstance.transferOwnership(playTimeProfitConInstance.address)
            })
            it('should updateDividendTracker successfully', async () => {
                txObject = await playTimeProfitConInstance.updateDividendTracker(newDividendTrackerConInstance.address)
                expect(txObject.confirmations).to.equal(1);
            })
            it('should verify excludedFromDividends for newDividendTracker is true', async () => {
                expect(await newDividendTrackerConInstance.excludedFromDividends(newDividendTrackerConInstance.address)).to.equal(true)
            })
            it('should verify excludedFromDividends for PlayTimeProfit contract is true', async () => {
                expect(await newDividendTrackerConInstance.excludedFromDividends(playTimeProfitConInstance.address)).to.equal(true)
            })
            it('should verify excludedFromDividends for owner is true', async () => {
                expect(await newDividendTrackerConInstance.excludedFromDividends(owner.address)).to.equal(true)
            })
            it('should verify excludedFromDividends for uniswapV2Router is true', async () => {
                expect(await newDividendTrackerConInstance.excludedFromDividends(uniswapRouterConInstance.address)).to.equal(true)
            })
            it('should verify dividendTracker in PlayTimeProfit contract is set to newDividendTracker', async () => {
                expect(await playTimeProfitConInstance.dividendTracker()).to.equal(newDividendTrackerConInstance.address)
            })
        })

        context('updateUniswapV2Router', () => {
            it('reverts when updateUniswapV2Router is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).updateUniswapV2Router(uniswapRouterConInstance.address)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when new & old newUniswapV2Router are the same', async () => {
                await expect(
                    playTimeProfitConInstance.updateUniswapV2Router(uniswapRouterConInstance.address)
                ).to.be.revertedWith("PlayTimeProfit: The router already has that address")
            })
            it('should update uniswapV2Router successfully', async () => {
                newUniswapRouterConInstance = await waffle.deployContract(
                    owner,
                    {
                        bytecode: ROUTER_V2_BYTECODE,
                        abi: ROUTER_V2_ABI,
                    },
                    [uniswapFactoryConInstance.address, weth9COnInstance.address]
                )
                txObject = await playTimeProfitConInstance.updateUniswapV2Router(newUniswapRouterConInstance.address);
                expect(txObject.confirmations).to.equal(1);
            })
            it('should verify uniswapV2Router is set to newUniswapRouter in PlayTimeProfit contract', async () => {
                expect(
                    await playTimeProfitConInstance.uniswapV2Router()
                ).to.equal(newUniswapRouterConInstance.address)
            })
        })

        context('excludeFromFees', () => {
            it('reverts when excludeFromFees is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).excludeFromFees(owner.address, true)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when account is already excluded', async () => {
                await expect(
                    playTimeProfitConInstance.excludeFromFees(owner.address, true)
                ).to.be.revertedWith("PlayTimeProfit: Account is already the value of 'excluded'")
            })
            it('should exclude acc1 from fees', async () => {
                txObject = await playTimeProfitConInstance.excludeFromFees(acc1.address, true);
                expect(txObject.confirmations).to.equal(1);
            })
            it('should verify isExcludedFromFees for acc1 is true', async () => {
                expect(await playTimeProfitConInstance.isExcludedFromFees(acc1.address)).to.equal(true)
            })
        })

        context('excludeMultipleAccountsFromFees', () => {
            it('reverts when excludeMultipleAccountsFromFees is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).excludeMultipleAccountsFromFees([acc2.address, acc3.address, acc4.address], true)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('should exclude acc2, acc3 & acc4 from fees', async () => {
                txObject = await playTimeProfitConInstance.excludeMultipleAccountsFromFees([acc2.address, acc3.address, acc4.address], true);
                expect(txObject.confirmations).to.equal(1);
            })
            it('should verify isExcludedFromFees for acc2 is true', async () => {
                expect(await playTimeProfitConInstance.isExcludedFromFees(acc2.address)).to.equal(true)
            })
            it('should verify isExcludedFromFees for acc3 is true', async () => {
                expect(await playTimeProfitConInstance.isExcludedFromFees(acc3.address)).to.equal(true)
            })
            it('should verify isExcludedFromFees for acc4 is true', async () => {
                expect(await playTimeProfitConInstance.isExcludedFromFees(acc4.address)).to.equal(true)
            })
        })

        context('setAutomatedMarketMakerPair', () => {
            it('reverts when setAutomatedMarketMakerPair is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).setAutomatedMarketMakerPair((await playTimeProfitConInstance.uniswapV2Pair()), true)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when trying to remove PancakeSwap pair', async () => {
                await expect(
                    playTimeProfitConInstance.setAutomatedMarketMakerPair((await playTimeProfitConInstance.uniswapV2Pair()), true)
                ).to.be.revertedWith("PlayTimeProfit: The PancakeSwap pair cannot be removed from automatedMarketMakerPairs")
            })
            it('should set AMM successfully', async () => {
                txObject = await playTimeProfitConInstance.setAutomatedMarketMakerPair(acc2.address, true);
                expect(txObject.confirmations).to.equal(1)
            })
            it('should verify AMM is set successfully for acc2', async () => {
                expect(
                    await playTimeProfitConInstance.automatedMarketMakerPairs(acc2.address)
                ).to.equal(true)
            })
        })

        context('updateLiquidityWallet', () => {
            it('reverts when updateLiquidityWallet is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).updateLiquidityWallet(acc3.address)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when old & new liquidity wallet are same', async () => {
                await expect(
                    playTimeProfitConInstance.updateLiquidityWallet(owner.address)
                ).to.be.revertedWith("PlayTimeProfit: The liquidity wallet is already this address")
            })
            it('should set acc5 as the new liquidity wallet', async () => {
                txObject = await playTimeProfitConInstance.updateLiquidityWallet(acc5.address)
                expect(txObject.confirmations).to.equal(1)
            })
            it('should verify the liquidity wallet is now acc5', async () => {
                expect(
                    await playTimeProfitConInstance.liquidityWallet()
                ).to.equal(acc5.address)
            })
        })

        context('updateGasForProcessing', () => {
            it('reverts when updateGasForProcessing is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).updateGasForProcessing(100000)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when newValue is less than 200000', async () => {
                await expect(
                    playTimeProfitConInstance.updateGasForProcessing(100000)
                ).to.be.revertedWith("PlayTimeProfit: gasForProcessing must be between 200,000 and 500,000")
            })
            it('should verify the old gas for processing to equal 300000', async () => {
                expect(
                    await playTimeProfitConInstance.gasForProcessing()
                ).to.equal(300000)
            })
            it('should update gas for processing to 400000', async () => {
                txObject = await playTimeProfitConInstance.updateGasForProcessing(400000)
                expect(txObject.confirmations).to.equal(1);
            })
            it('should verify the gas for processing to equal 400000', async () => {
                expect(
                    await playTimeProfitConInstance.gasForProcessing()
                ).to.equal(400000)
            })
        })

        context('updateClaimWait', () => {
            it('reverts when updateClaimWait is invoked by non-owner', async () => {
                await expect(
                    playTimeProfitConInstance.connect(acc1).updateClaimWait(3600)
                ).to.be.revertedWith("Ownable: caller is not the owner")
            })
            it('reverts when updateClaimWait is called with claimWait > 86400', async () => {
                await expect(
                    playTimeProfitConInstance.updateClaimWait(86450)
                ).to.be.revertedWith("PTP_Dividend_Tracker: claimWait must be updated to between 1 and 24 hours")
            })
            it('reverts when old & new claimWait are same', async () => {
                await expect(
                    playTimeProfitConInstance.updateClaimWait(3600)
                ).to.be.revertedWith("PTP_Dividend_Tracker: Cannot update claimWait to same value")
            })
            it('should get claimWait to be 3600 before update', async () => {
                expect(
                    await playTimeProfitConInstance.getClaimWait()
                ).to.equal(3600)
            })
            it('should update claimWait to be 7200', async () => {
                txObject = await playTimeProfitConInstance.updateClaimWait(7200)
                expect(txObject.confirmations).to.equal(1)
            })
            it('should get claimWait to be 7200 after update', async () => {
                expect(
                    await playTimeProfitConInstance.getClaimWait()
                ).to.equal(7200)
            })
            it('should again update claimWait to be 3600 & verify it is set as expected', async () => {
                await playTimeProfitConInstance.updateClaimWait(3600)
                expect(await playTimeProfitConInstance.getClaimWait()
                ).to.equal(3600)
            })
        })

        context('external view functions', () => {
            it('should getTotalDividendsDistributed to equal 0', async () => {
                expect(
                    await playTimeProfitConInstance.getTotalDividendsDistributed()
                ).to.equal(0)
            })
            it('should fetch getAccountDividendsInfo', async () => {
                const dividendsInfo = await playTimeProfitConInstance.getAccountDividendsInfo(acc1.address);
                expect([
                    acc1.address,
                    -1,
                    -1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]).to.deep.equal([
                    dividendsInfo[0],
                    dividendsInfo[1].toNumber(),
                    dividendsInfo[2].toNumber(),
                    dividendsInfo[3].toNumber(),
                    dividendsInfo[4].toNumber(),
                    dividendsInfo[5].toNumber(),
                    dividendsInfo[6].toNumber(),
                    dividendsInfo[7].toNumber()
                ])
            })
            it('should fetch getAccountDividendsInfoAtIndex', async () => {
                const dividendInfoAtIndex = await playTimeProfitConInstance.getAccountDividendsInfoAtIndex(0)
                expect(
                    ethers.constants.AddressZero,
                    -1,
                    -1,
                    0,
                    0,
                    0,
                    0,
                    0
                ).to.deep.equal(
                    dividendInfoAtIndex[0],
                    dividendInfoAtIndex[1].toNumber(),
                    dividendInfoAtIndex[2].toNumber(),
                    dividendInfoAtIndex[3].toNumber(),
                    dividendInfoAtIndex[4].toNumber(),
                    dividendInfoAtIndex[5].toNumber(),
                    dividendInfoAtIndex[6].toNumber(),
                    dividendInfoAtIndex[7].toNumber()
                )
            })
            it('should fetch getLastProcessedIndex', async () => {
                expect(
                    await playTimeProfitConInstance.getLastProcessedIndex()
                ).to.equal(0)
            })
            it('should fetch getNumberOfDividendTokenHolders', async () => {
                expect(
                    await playTimeProfitConInstance.getNumberOfDividendTokenHolders()
                ).to.equal(0)
            })
        })

        context('public view functions', () => {
            it('should fetch dividendTokenBalanceOf acc1 to equal 0', async () => {
                expect(
                    await playTimeProfitConInstance.dividendTokenBalanceOf(acc1.address)
                ).to.equal(0)
            })
            it('should fetch withdrawableDividendOf acc1 to equal 0', async () => {
                expect(
                    await playTimeProfitConInstance.withdrawableDividendOf(acc1.address)
                ).to.equal(0)
            })
        })
    })
})