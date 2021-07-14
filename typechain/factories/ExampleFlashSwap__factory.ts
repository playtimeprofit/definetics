/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ExampleFlashSwap } from "../ExampleFlashSwap";

export class ExampleFlashSwap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _factoryV1: string,
    router: string,
    overrides?: Overrides
  ): Promise<ExampleFlashSwap> {
    return super.deploy(
      _factory,
      _factoryV1,
      router,
      overrides || {}
    ) as Promise<ExampleFlashSwap>;
  }
  getDeployTransaction(
    _factory: string,
    _factoryV1: string,
    router: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _factoryV1,
      router,
      overrides || {}
    );
  }
  attach(address: string): ExampleFlashSwap {
    return super.attach(address) as ExampleFlashSwap;
  }
  connect(signer: Signer): ExampleFlashSwap__factory {
    return super.connect(signer) as ExampleFlashSwap__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleFlashSwap {
    return new Contract(address, _abi, signerOrProvider) as ExampleFlashSwap;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factoryV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV2Call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516116283803806116288339818101604052606081101561003357600080fd5b5080516020808301516040938401516001600160601b0319606083811b821660805285901b1660a05284516315ab88c960e31b815294519394919390926001600160a01b0384169263ad5c46489260048083019392829003018186803b15801561009c57600080fd5b505afa1580156100b0573d6000803e3d6000fd5b505050506040513d60208110156100c657600080fd5b50516001600160601b031960609190911b1660c05250505060805160601c60a05160601c60c05160601c6114e8610140600039806102e15280610316528061037552806103de528061044a528061078b52806108545280610a215250806101f652806107445280610b345250806104e552506114e86000f3fe6080604052600436106100225760003560e01c806310d1e85c1461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b506100d46004803603608081101561005157600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135916040820135919081019060808101606082013564010000000081111561009557600080fd5b8201836020820111156100a757600080fd5b803590602001918460018302840111640100000000831117156100c957600080fd5b5090925090506100d6565b005b604080516002808252606080830184529260208301908036833701905050905060008060003373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561014157600080fd5b505afa158015610155573d6000803e3d6000fd5b505050506040513d602081101561016b57600080fd5b5051604080517fd21220a70000000000000000000000000000000000000000000000000000000081529051919250600091339163d21220a7916004808301926020929190829003018186803b1580156101c357600080fd5b505afa1580156101d7573d6000803e3d6000fd5b505050506040513d60208110156101ed57600080fd5b5051905061021c7f00000000000000000000000000000000000000000000000000000000000000008383610cdc565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461025057fe5b88158061025b575087155b61026157fe5b881561026d578061026f565b815b8560008151811061027c57fe5b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015288156102ad57816102af565b805b856001815181106102bc57fe5b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101527f00000000000000000000000000000000000000000000000000000000000000008116908316146103105788610312565b875b93507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461036d578761036f565b885b925050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16836000815181106103b757fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16148061044057507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168360018151811061042057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16145b61044657fe5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168460008151811061048c57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16146104c957836000815181106104bc57fe5b60200260200101516104df565b836001815181106104d657fe5b60200260200101515b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306f2bf62836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561058057600080fd5b505afa158015610594573d6000803e3d6000fd5b505050506040513d60208110156105aa57600080fd5b5051905083156109c3576000878760208110156105c657600080fd5b50604080517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152602482018990529151923593509085169163095ea7b3916044808201926020929091908290030181600087803b15801561064457600080fd5b505af1158015610658573d6000803e3d6000fd5b505050506040513d602081101561066e57600080fd5b5050604080517f95e3c50b00000000000000000000000000000000000000000000000000000000815260048101879052602481018390527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6044820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916395e3c50b9160648082019260209290919082900301818787803b15801561070f57600080fd5b505af1158015610723573d6000803e3d6000fd5b505050506040513d602081101561073957600080fd5b50519050600061076a7f0000000000000000000000000000000000000000000000000000000000000000888a610dc7565b60008151811061077657fe5b6020026020010151905080821161078957fe5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107f157600080fd5b505af1158015610805573d6000803e3d6000fd5b5050604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101869052905173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350604480830193506020928290030181600087803b15801561089d57600080fd5b505af11580156108b1573d6000803e3d6000fd5b505050506040513d60208110156108c757600080fd5b50516108cf57fe5b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff8f1690838503906040518082805190602001908083835b6020831061094857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161090b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146109aa576040519150601f19603f3d011682016040523d82523d6000602084013e6109af565b606091505b50509050806109ba57fe5b50505050610cd0565b6000878760208110156109d557600080fd5b50604080517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810187905290519135925073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691632e1a7d4d9160248082019260009290919082900301818387803b158015610a6957600080fd5b505af1158015610a7d573d6000803e3d6000fd5b5050505060008273ffffffffffffffffffffffffffffffffffffffff1663f39b5b9b86847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518463ffffffff1660e01b815260040180838152602001828152602001925050506020604051808303818588803b158015610afe57600080fd5b505af1158015610b12573d6000803e3d6000fd5b50505050506040513d6020811015610b2957600080fd5b505190506000610b5a7f0000000000000000000000000000000000000000000000000000000000000000878a610dc7565b600081518110610b6657fe5b60200260200101519050808211610b7957fe5b604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101839052905173ffffffffffffffffffffffffffffffffffffffff87169163a9059cbb9160448083019260209291908290030181600087803b158015610bee57600080fd5b505af1158015610c02573d6000803e3d6000fd5b505050506040513d6020811015610c1857600080fd5b5051610c2057fe5b604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8f81166004830152838503602483015291519187169163a9059cbb916044808201926020929091908290030181600087803b158015610c9a57600080fd5b505af1158015610cae573d6000803e3d6000fd5b505050506040513d6020811015610cc457600080fd5b5051610ccc57fe5b5050505b50505050505050505050565b6000806000610ceb8585610f6a565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6060600282511015610e3a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff81118015610e5257600080fd5b50604051908082528060200260200182016040528015610e7c578160200160208202803683370190505b5090508281600183510381518110610e9057fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b8015610f6257600080610efd87866001860381518110610edc57fe5b6020026020010151878681518110610ef057fe5b60200260200101516110bd565b91509150610f1f848481518110610f1057fe5b602002602001015183836111a5565b846001850381518110610f2e57fe5b602090810291909101015250507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610ec0565b509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610ff2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806114666025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161061102c57828461102f565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff82166110b657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b60008060006110cc8585610f6a565b5090506000806110dd888888610cdc565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561112257600080fd5b505afa158015611136573d6000803e3d6000fd5b505050506040513d606081101561114c57600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff87811690841614611193578082611196565b81815b90999098509650505050505050565b60008084116111ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061143a602c913960400191505060405180910390fd5b60008311801561120f5750600082115b611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061148b6028913960400191505060405180910390fd5b60006112886103e861127c868863ffffffff6112c916565b9063ffffffff6112c916565b905060006112a26103e561127c868963ffffffff61135516565b90506112bf60018284816112b257fe5b049063ffffffff6113c716565b9695505050505050565b60008115806112e4575050808202828282816112e157fe5b04145b61134f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b92915050565b8082038281111561134f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b8082018281101561134f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220ec33db74ea00ab11796ada92d50bd9f2967086deb5a57306723ebb546eb734a164736f6c63430006060033";