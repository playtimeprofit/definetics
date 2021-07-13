/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ExampleSwapToPrice } from "../ExampleSwapToPrice";

export class ExampleSwapToPrice__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    factory_: string,
    router_: string,
    overrides?: Overrides
  ): Promise<ExampleSwapToPrice> {
    return super.deploy(
      factory_,
      router_,
      overrides || {}
    ) as Promise<ExampleSwapToPrice>;
  }
  getDeployTransaction(
    factory_: string,
    router_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(factory_, router_, overrides || {});
  }
  attach(address: string): ExampleSwapToPrice {
    return super.attach(address) as ExampleSwapToPrice;
  }
  connect(signer: Signer): ExampleSwapToPrice__factory {
    return super.connect(signer) as ExampleSwapToPrice__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleSwapToPrice {
    return new Contract(address, _abi, signerOrProvider) as ExampleSwapToPrice;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router01",
        name: "router_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    name: "computeProfitMaximizingTrade",
    outputs: [
      {
        internalType: "bool",
        name: "aToB",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router01",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpendTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpendTokenB",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapToPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610feb380380610feb8339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b811660a052911b1660805260805160601c60a05160601c610f5e61008d6000398061023452806105915250806102c4528061039b52806105b55250610f5e6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063bef90fd314610051578063c45a0155146100b5578063f887ea40146100e6578063fa653154146100ee575b600080fd5b6100b3600480360361010081101561006857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e00135610138565b005b6100bd61058f565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100bd6105b3565b61011d6004803603608081101561010457600080fd5b50803590602081013590604081013590606001356105d7565b60408051921515835260208301919091528051918290030190f35b851580159061014657508415155b6101b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4578616d706c6553776170546f50726963653a205a45524f5f50524943450000604482015290519081900360640190fd5b831515806101be57508215155b61022957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4578616d706c6553776170546f50726963653a205a45524f5f5350454e440000604482015290519081900360640190fd5b60008060008061025a7f00000000000000000000000000000000000000000000000000000000000000008d8d6106bc565b9150915061026a8a8a84846105d7565b9094509250600091508390506102805785610282565b865b905080821115610290578091505b60008361029d578a61029f565b8b5b90506000846102ae578c6102b0565b8b5b90506102be823330876107a4565b6102e9827f000000000000000000000000000000000000000000000000000000000000000086610974565b6040805160028082526060808301845292602083019080368337019050509050828160008151811061031757fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050818160018151811061035f57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed1739866000848c8c6040518663ffffffff1660e01b815260040180868152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561046e578181015183820152602001610456565b505050509050019650505050505050600060405180830381600087803b15801561049757600080fd5b505af11580156104ab573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405260208110156104f257600080fd5b810190808051604051939291908464010000000082111561051257600080fd5b90830190602082018581111561052757600080fd5b825186602082028301116401000000008211171561054457600080fd5b82525081516020918201928201910280838360005b83811015610571578181015183820152602001610559565b50505050905001604052505050505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008085836105ec868863ffffffff610b5116565b816105f357fe5b041091506000610609858563ffffffff610b5116565b9050600061065f61062f6103e586610621578a610623565b895b9063ffffffff610b5116565b6106526103e861062388610643578b610645565b8c5b879063ffffffff610b5116565b8161065957fe5b04610bdd565b905060006103e5856106825761067d876103e863ffffffff610b5116565b610694565b610694886103e863ffffffff610b5116565b8161069b57fe5b0490506106ae828263ffffffff610c2f16565b935050505094509492505050565b60008060006106cb8585610ca1565b5090506000806106dc888888610df4565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561072157600080fd5b505afa158015610735573d6000803e3d6000fd5b505050506040513d606081101561074b57600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff87811690841614610792578082610795565b81815b90999098509650505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061088257805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610845565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146108e4576040519150601f19603f3d011682016040523d82523d6000602084013e6108e9565b606091505b5091509150818015610917575080511580610917575080806020019051602081101561091457600080fd5b50515b61096c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610f056024913960400191505060405180910390fd5b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b60208310610a4a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610a0d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610aac576040519150601f19603f3d011682016040523d82523d6000602084013e610ab1565b606091505b5091509150818015610adf575080511580610adf5750808060200190516020811015610adc57600080fd5b50515b610b4a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5472616e7366657248656c7065723a20415050524f56455f4641494c45440000604482015290519081900360640190fd5b5050505050565b6000811580610b6c57505080820282828281610b6957fe5b04145b610bd757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b92915050565b60006003821115610c20575080600160028204015b81811015610c1a57809150600281828581610c0957fe5b040181610c1257fe5b049050610bf2565b50610c2a565b8115610c2a575060015b919050565b80820382811115610bd757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610ee06025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610d63578284610d66565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216610ded57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b6000806000610e038585610ca1565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd90920190975280519601959095209594505050505056fe556e697377617056324c6962726172793a204944454e544943414c5f4144445245535345535472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544a264697066735822122060f7694061dcb3757f6fb3a872fc8ef7a382cc130e1b259e7051c54f78e912d664736f6c63430006060033";
