/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MintableERC20 } from "../MintableERC20";

export class MintableERC20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MintableERC20> {
    return super.deploy(overrides || {}) as Promise<MintableERC20>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MintableERC20 {
    return super.attach(address) as MintableERC20;
  }
  connect(signer: Signer): MintableERC20Factory {
    return super.connect(signer) as MintableERC20Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableERC20 {
    return new Contract(address, _abi, signerOrProvider) as MintableERC20;
  }
}

const _abi = [
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
        name: "account",
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
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
];

const _bytecode =
  "0x6080604052610967806100136000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806370a082311161006657806370a0823114610154578063a0712d681461017a578063a457c2d714610197578063a9059cbb146101c3578063dd62ed3e146101ef57610093565b8063095ea7b31461009857806318160ddd146100d857806323b872dd146100f25780633950935114610128575b600080fd5b6100c4600480360360408110156100ae57600080fd5b506001600160a01b03813516906020013561021d565b604080519115158252519081900360200190f35b6100e061023a565b60408051918252519081900360200190f35b6100c46004803603606081101561010857600080fd5b506001600160a01b03813581169160208101359091169060400135610240565b6100c46004803603604081101561013e57600080fd5b506001600160a01b0381351690602001356102cd565b6100e06004803603602081101561016a57600080fd5b50356001600160a01b0316610321565b6100c46004803603602081101561019057600080fd5b503561033c565b6100c4600480360360408110156101ad57600080fd5b506001600160a01b038135169060200135610350565b6100c4600480360360408110156101d957600080fd5b506001600160a01b0381351690602001356103be565b6100e06004803603604081101561020557600080fd5b506001600160a01b03813581169160200135166103d2565b600061023161022a6103fd565b8484610401565b50600192915050565b60025490565b600061024d8484846104ed565b6102c3846102596103fd565b6102be8560405180606001604052806028815260200161089d602891396001600160a01b038a166000908152600160205260408120906102976103fd565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61064916565b610401565b5060019392505050565b60006102316102da6103fd565b846102be85600160006102eb6103fd565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6106e016565b6001600160a01b031660009081526020819052604090205490565b60006103483383610741565b506001919050565b600061023161035d6103fd565b846102be8560405180606001604052806025815260200161090e60259139600160006103876103fd565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61064916565b60006102316103cb6103fd565b84846104ed565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104465760405162461bcd60e51b81526004018080602001828103825260248152602001806108ea6024913960400191505060405180910390fd5b6001600160a01b03821661048b5760405162461bcd60e51b81526004018080602001828103825260228152602001806108556022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166105325760405162461bcd60e51b81526004018080602001828103825260258152602001806108c56025913960400191505060405180910390fd5b6001600160a01b0382166105775760405162461bcd60e51b81526004018080602001828103825260238152602001806108326023913960400191505060405180910390fd5b6105ba81604051806060016040528060268152602001610877602691396001600160a01b038616600090815260208190526040902054919063ffffffff61064916565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546105ef908263ffffffff6106e016565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156106d85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561069d578181015183820152602001610685565b50505050905090810190601f1680156106ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561073a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b03821661079c576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546107af908263ffffffff6106e016565b6002556001600160a01b0382166000908152602081905260409020546107db908263ffffffff6106e016565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a72315820494cf994234dd91ba6494e82f9113344efd9be745061ed71ea18a56a05975d7a64736f6c63430005110032";
