/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from '@ethersproject/providers';

import {IbMXXPei} from './IbMXXPei';

export class IbMXXPeiFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): IbMXXPei {
    return new Contract(address, _abi, signerOrProvider) as IbMXXPei;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'stake',
        type: 'bool',
      },
    ],
    name: 'claimRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getRewardsBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'userBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256',
      },
    ],
    name: 'handleAction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
