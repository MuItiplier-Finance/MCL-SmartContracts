/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MToken } from "../MToken";

export class MTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _addressesProvider: string,
    _underlyingAsset: string,
    _underlyingAssetDecimals: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<MToken> {
    return super.deploy(
      _addressesProvider,
      _underlyingAsset,
      _underlyingAssetDecimals,
      _name,
      _symbol,
      overrides || {}
    ) as Promise<MToken>;
  }
  getDeployTransaction(
    _addressesProvider: string,
    _underlyingAsset: string,
    _underlyingAssetDecimals: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _addressesProvider,
      _underlyingAsset,
      _underlyingAssetDecimals,
      _name,
      _symbol,
      overrides || {}
    );
  }
  attach(address: string): MToken {
    return super.attach(address) as MToken;
  }
  connect(signer: Signer): MTokenFactory {
    return super.connect(signer) as MTokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MToken {
    return new Contract(address, _abi, signerOrProvider) as MToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_underlyingAssetDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toIndex",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "BurnOnLiquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "InterestRedirectionAllowanceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "InterestStreamRedirected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "MintOnDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalanceAdded",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalanceRemoved",
        type: "uint256",
      },
    ],
    name: "RedirectedBalanceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "UINT_MAX_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "allowInterestRedirectionTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burnOnLiquidation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getInterestRedirectionAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getRedirectedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "isTransferAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintOnDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "principalBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "principalTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "redirectInterestStream",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "redirectInterestStreamOf",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferOnLiquidation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "underlyingAssetAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026fc380380620026fc833981810160405260a08110156200003757600080fd5b8151602083015160408085015160608601805192519496939591949391820192846401000000008211156200006b57600080fd5b9083019060208201858111156200008157600080fd5b82516401000000008111828201881017156200009c57600080fd5b82525081516020918201929091019080838360005b83811015620000cb578181015183820152602001620000b1565b50505050905090810190601f168015620000f95780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011d57600080fd5b9083019060208201858111156200013357600080fd5b82516401000000008111828201881017156200014e57600080fd5b82525081516020918201929091019080838360005b838110156200017d57818101518382015260200162000163565b50505050905090810190601f168015620001ab5780820380516001836020036101000a031916815260200191505b506040525050508181848260039080519060200190620001cd929190620003da565b508151620001e3906004906020850190620003da565b506005805460ff191660ff929092169190911790555050600a80546001600160a01b0319166001600160a01b0387811691909117918290556040805163076b7fbb60e51b81529051929091169163ed6ff76091600480820192602092909190829003018186803b1580156200025757600080fd5b505afa1580156200026c573d6000803e3d6000fd5b505050506040513d60208110156200028357600080fd5b5051600b80546001600160a01b0319166001600160a01b03928316179055600a5460408051630261bf8b60e01b815290519190921691630261bf8b916004808301926020929190829003018186803b158015620002df57600080fd5b505afa158015620002f4573d6000803e3d6000fd5b505050506040513d60208110156200030b57600080fd5b5051600c80546001600160a01b0319166001600160a01b03928316179055600a5460408051632f58b80d60e01b815290519190921691632f58b80d916004808301926020929190829003018186803b1580156200036757600080fd5b505afa1580156200037c573d6000803e3d6000fd5b505050506040513d60208110156200039357600080fd5b5051600d80546001600160a01b0319166001600160a01b0392831617905560058054610100600160a81b031916610100969092169590950217909355506200047f92505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200041d57805160ff19168380011785556200044d565b828001600101855582156200044d579182015b828111156200044d57825182559160200191906001019062000430565b506200045b9291506200045f565b5090565b6200047c91905b808211156200045b576000815560010162000466565b90565b61226d806200048f6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80635eae177c116100de578063a9059cbb11610097578063db006a7511610071578063db006a7514610516578063dd62ed3e14610533578063ee9907a414610561578063f866c319146105875761018e565b8063a9059cbb146104bc578063c634dfaa146104e8578063d0fc81d21461050e5761018e565b80635eae177c1461040257806370a082311461042e57806389d1a0fc1461045457806394362e8b1461045c57806395d89b4114610488578063a457c2d7146104905761018e565b806323b872dd1161014b578063325a9b1311610125578063325a9b131461033a57806339509351146103685780633edb7cb814610394578063445e8010146103c05761018e565b806323b872dd146102de57806330d7e19814610314578063313ce5671461031c5761018e565b806306fdde0314610193578063095ea7b3146102105780630e49072d1461025057806312c87c2d1461027857806318160ddd1461029e5780631d51e7cf146102b8575b600080fd5b61019b6105bd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d55781810151838201526020016101bd565b50505050905090810190601f1680156102025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023c6004803603604081101561022657600080fd5b506001600160a01b038135169060200135610654565b604080519115158252519081900360200190f35b6102766004803603602081101561026657600080fd5b50356001600160a01b0316610672565b005b6102766004803603602081101561028e57600080fd5b50356001600160a01b031661067f565b6102a661071e565b60408051918252519081900360200190f35b6102a6600480360360208110156102ce57600080fd5b50356001600160a01b03166107e0565b61023c600480360360608110156102f457600080fd5b506001600160a01b038135811691602081013590911690604001356107ff565b6102a661088c565b61032461089b565b6040805160ff9092168252519081900360200190f35b6102766004803603604081101561035057600080fd5b506001600160a01b03813581169160200135166108a4565b61023c6004803603604081101561037e57600080fd5b506001600160a01b03813516906020013561090a565b610276600480360360408110156103aa57600080fd5b506001600160a01b03813516906020013561095e565b6103e6600480360360208110156103d657600080fd5b50356001600160a01b0316610a5c565b604080516001600160a01b039092168252519081900360200190f35b61023c6004803603604081101561041857600080fd5b506001600160a01b038135169060200135610a7a565b6102a66004803603602081101561044457600080fd5b50356001600160a01b0316610b15565b6103e6610bc8565b6102766004803603604081101561047257600080fd5b506001600160a01b038135169060200135610bdc565b61019b610cba565b61023c600480360360408110156104a657600080fd5b506001600160a01b038135169060200135610d1b565b61023c600480360360408110156104d257600080fd5b506001600160a01b038135169060200135610d89565b6102a6600480360360208110156104fe57600080fd5b50356001600160a01b0316610d9d565b6102a6610da8565b6102766004803603602081101561052c57600080fd5b5035610dae565b6102a66004803603604081101561054957600080fd5b506001600160a01b0381358116916020013516610ff1565b6102a66004803603602081101561057757600080fd5b50356001600160a01b031661101c565b6102766004803603606081101561059d57600080fd5b506001600160a01b03813581169160208101359091169060400135611037565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106495780601f1061061e57610100808354040283529160200191610649565b820191906000526020600020905b81548152906001019060200180831161062c57829003601f168201915b505050505090505b90565b6000610668610661611090565b8484611094565b5060015b92915050565b61067c3382611180565b50565b6001600160a01b0381163314156106c75760405162461bcd60e51b81526004018080602001828103825260258152602001806120346025913960400191505060405180910390fd5b3360008181526009602052604080822080546001600160a01b0319166001600160a01b03861690811790915590519092917fc2d6a42a9d5273283f73009a07aacfb043f2f91173a8d9d33b504afe898db08b91a350565b60008061072961136f565b90508061073a576000915050610651565b600b546005546040805163d15e005360e01b81526001600160a01b036101009093048316600482015290516107da936107d593169163d15e0053916024808301926020929190829003018186803b15801561079457600080fd5b505afa1580156107a8573d6000803e3d6000fd5b505050506040513d60208110156107be57600080fd5b50516107c984611375565b9063ffffffff61138b16565b6113d6565b91505090565b6001600160a01b0381166000908152600860205260409020545b919050565b600061080c8484846113ef565b61088284610818611090565b61087d8560405180606001604052806028815260200161207a602891396001600160a01b038a16600090815260016020526040812090610856611090565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61145e16565b611094565b5060019392505050565b600061089661136f565b905090565b60055460ff1690565b6001600160a01b038281166000908152600960205260409020541633146108fc5760405162461bcd60e51b815260040180806020018281038252603a8152602001806121ff603a913960400191505060405180910390fd5b6109068282611180565b5050565b6000610668610917611090565b8461087d8560016000610928611090565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6114f516565b600c546001600160a01b031633146109a75760405162461bcd60e51b81526004018080602001828103825260328152602001806121a86032913960400191505060405180910390fd5b6109b08261154f565b60008060006109be856115c1565b935093509350506109d08583866116b8565b6109da85856117ef565b60006109ec848663ffffffff6118eb16565b6109fc576109f98661192d565b90505b856001600160a01b03167f90e5d3d68ec162d9c7de393037a3ede04dd44f68e051bf2ace4a73c299dbc4db868584610a345785610a37565b60005b60408051938452602084019290925282820152519081900360600190a2505050505050565b6001600160a01b039081166000908152600760205260409020541690565b600d54600554604080516376e9d61560e01b81526101009092046001600160a01b039081166004840152858116602484015260448301859052905160009391909116916376e9d615916064808301926020929190829003018186803b158015610ae257600080fd5b505afa158015610af6573d6000803e3d6000fd5b505050506040513d6020811015610b0c57600080fd5b50519392505050565b600080610b21836119df565b6001600160a01b03841660009081526008602052604090205490915081158015610b49575080155b15610b59576000925050506107fa565b6001600160a01b0384811660009081526007602052604090205416610baa57610ba181610b9586610b90868463ffffffff6114f516565b6119fa565b9063ffffffff6118eb16565b925050506107fa565b610ba1610bbb82610b9587856119fa565b839063ffffffff6114f516565b60055461010090046001600160a01b031681565b600c546001600160a01b03163314610c255760405162461bcd60e51b81526004018080602001828103825260328152602001806121a86032913960400191505060405180910390fd5b610c2e8261154f565b600080610c3a846115c1565b935093505050610c5e84610c5785856114f590919063ffffffff16565b60006116b8565b610c688484611aaf565b604080518481526020810184905280820183905290516001600160a01b038616917fbe7799898ca2d813ff902b487c1b434ab45b47edd8f38b77ad5e99aae8341b7a919081900360600190a250505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106495780601f1061061e57610100808354040283529160200191610649565b6000610668610d28611090565b8461087d856040518060600160405280602581526020016121da6025913960016000610d52611090565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61145e16565b6000610668610d96611090565b84846113ef565b600061066c826119df565b60001981565b60008111610e03576040805162461bcd60e51b815260206004820181905260248201527f416d6f756e7420746f2072656465656d206e6565647320746f206265203e2030604482015290519081900360640190fd5b610e0c3361154f565b6000806000610e1a336115c1565b91955093509150849050600019811415610e315750825b83811115610e705760405162461bcd60e51b8152600401808060200182810382526032815260200180611fba6032913960400191505060405180910390fd5b610e7a3382610a7a565b610ecb576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b610ed63384836116b8565b610ee033826117ef565b6000610ef2858363ffffffff6118eb16565b610f0257610eff3361192d565b90505b600c546005546001600160a01b0391821691639895e3d8916101009004163385610f328a8263ffffffff6118eb16565b6040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b03168152602001838152602001828152602001945050505050600060405180830381600087803b158015610fa157600080fd5b505af1158015610fb5573d6000803e3d6000fd5b50505050336001600160a01b03167fbd5034ffbd47e4e72a94baa2cdb74c6fad73cb3bcdc13036b72ec8306f5a7646838684610a345786610a37565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b031660009081526006602052604090205490565b600c546001600160a01b031633146110805760405162461bcd60e51b81526004018080602001828103825260328152602001806121a86032913960400191505060405180910390fd5b61108b838383611b9f565b505050565b3390565b6001600160a01b0383166110d95760405162461bcd60e51b81526004018080602001828103825260248152602001806121846024913960400191505060405180910390fd5b6001600160a01b03821661111e5760405162461bcd60e51b8152600401808060200182810382526022815260200180611fec6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0380831660009081526007602052604090205481169082168114156111dd5760405162461bcd60e51b815260040180806020018281038252602a8152602001806120a2602a913960400191505060405180910390fd5b6000806000806111ec876115c1565b9350935093509350600083116112335760405162461bcd60e51b81526004018080602001828103825260428152602001806120cc6042913960600191505060405180910390fd5b6001600160a01b0385161561124e5761124e876000866116b8565b866001600160a01b0316866001600160a01b031614156112da576001600160a01b038716600081815260076020908152604080832080546001600160a01b03191690558051878152918201869052818101859052519192917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a35050505050610906565b6001600160a01b03878116600090815260076020526040812080546001600160a01b0319169289169290921790915561131690889085906116b8565b604080518481526020810184905280820183905290516001600160a01b0380891692908a16917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a350505050505050565b60025490565b600061066c82633b9aca0063ffffffff611ce016565b60006113cf6b033b2e3c9fd0803ce80000006113c36113b0868663ffffffff611ce016565b6b019d971e4fe8401e74000000906114f5565b9063ffffffff611d3916565b9392505050565b6000631dcd65006113cf633b9aca006113c383866114f5565b82816113fb8282610a7a565b61144c576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b611457858585611b9f565b5050505050565b600081848411156114ed5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114b257818101518382015260200161149a565b50505050905090810190601f1680156114df5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156113cf576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600c546005546040805163b8ccc17560e01b81526101009092046001600160a01b0390811660048401528481166024840152905192169163b8ccc1759160448082019260009290919082900301818387803b1580156115ad57600080fd5b505af1158015611457573d6000803e3d6000fd5b60008060008060006115d2866119df565b905060006115e382610b9589610b15565b905080156115f5576115f58782611aaf565b600b546005546040805163d15e005360e01b81526101009092046001600160a01b0390811660048401529051600093919091169163d15e0053916024808301926020929190829003018186803b15801561164e57600080fd5b505afa158015611662573d6000803e3d6000fd5b505050506040513d602081101561167857600080fd5b50516001600160a01b03891660009081526006602052604090208190559050826116a8818463ffffffff6114f516565b9099909850919650945092505050565b6001600160a01b0380841660009081526007602052604090205416806116de575061108b565b6000806116ea836115c1565b6001600160a01b03871660009081526008602052604090205491955093506117209250869150610b95908863ffffffff6114f516565b6001600160a01b03808516600090815260086020908152604080832094909455600790529190912054168015611793576001600160a01b038116600090815260086020526040902054611779908463ffffffff6114f516565b6001600160a01b0382166000908152600860205260409020555b60408051848152602081018490528082018890526060810187905290516001600160a01b038616917f70ff8cf632603e2bfd1afb7e4061acce53d95356b1be9726b99fa22ba733b01f919081900360800190a250505050505050565b6001600160a01b0382166118345760405162461bcd60e51b815260040180806020018281038252602181526020018061213e6021913960400191505060405180910390fd5b61187781604051806060016040528060228152602001611f98602291396001600160a01b038516600090815260208190526040902054919063ffffffff61145e16565b6001600160a01b0383166000908152602081905260409020556002546118a3908263ffffffff6118eb16565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60006113cf83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061145e565b6001600160a01b038116600081815260076020908152604080832080546001600160a01b03191690558051838152918201839052818101839052519192839290917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a7348735594919081900360600190a36001600160a01b0382166000908152600860205260409020546119d757506001600160a01b03811660009081526006602052604081205560016107fa565b5060006107fa565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03808316600090815260066020908152604080832054600b54600554835163d15e005360e01b815261010090910487166004820152925194956113cf956107d5959394611aa394939092169263d15e00539260248082019391829003018186803b158015611a6e57600080fd5b505afa158015611a82573d6000803e3d6000fd5b505050506040513d6020811015611a9857600080fd5b50516107c987611375565b9063ffffffff611d7b16565b6001600160a01b038216611b0a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254611b1d908263ffffffff6114f516565b6002556001600160a01b038216600090815260208190526040902054611b49908263ffffffff6114f516565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008111611bde5760405162461bcd60e51b815260040180806020018281038252603081526020018061210e6030913960400191505060405180910390fd5b611be78361154f565b611bf08261154f565b6000806000611bfe866115c1565b93509350935050600080611c11876115c1565b935093505050611c228885886116b8565b611c3687610c57848963ffffffff6114f516565b611c41888888611db3565b6000611c53868863ffffffff6118eb16565b611c6357611c608961192d565b90505b876001600160a01b0316896001600160a01b03167f89a178eaa27e0cd201bd795ca8ff716ac0df9618494510ca79771cfc66ffcde889888786611ca65789611ca9565b60005b60408051948552602085019390935283830191909152606083015260808201879052519081900360a00190a3505050505050505050565b600082611cef5750600061066c565b82820282848281611cfc57fe5b04146113cf5760405162461bcd60e51b81526004018080602001828103825260218152602001806120596021913960400191505060405180910390fd5b60006113cf83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611f0f565b600060028204611dab836113c3611d9e876b033b2e3c9fd0803ce8000000611ce0565b849063ffffffff6114f516565b949350505050565b6001600160a01b038316611df85760405162461bcd60e51b815260040180806020018281038252602581526020018061215f6025913960400191505060405180910390fd5b6001600160a01b038216611e3d5760405162461bcd60e51b8152600401808060200182810382526023815260200180611f756023913960400191505060405180910390fd5b611e808160405180606001604052806026815260200161200e602691396001600160a01b038616600090815260208190526040902054919063ffffffff61145e16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611eb5908263ffffffff6114f516565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008183611f5e5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156114b257818101518382015260200161149a565b506000838581611f6a57fe5b049594505050505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f742072656465656d206d6f7265207468616e2074686520617661696c61626c652062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f74206769766520616c6c6f77616e636520746f2068696d73656c66536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365496e74657265737420697320616c7265616479207265646972656374656420746f207468652075736572496e7465726573742073747265616d2063616e206f6e6c79206265207265646972656374656420696620746865726520697320612076616c69642062616c616e63655472616e7366657272656420616d6f756e74206e6565647320746f2062652067726561746572207468616e207a65726f45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6c45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f43616c6c6572206973206e6f7420616c6c6f77656420746f2072656469726563742074686520696e746572657374206f66207468652075736572a265627a7a723158208998467f10e223f75377d796d825b7089db5fd509fa86c33d1da0233bb34572d64736f6c63430005110032";
