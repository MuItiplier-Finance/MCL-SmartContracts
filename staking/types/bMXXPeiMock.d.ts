/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction} from 'ethers';
import {Contract, ContractTransaction, Overrides, CallOverrides} from '@ethersproject/contracts';
import {BytesLike} from '@ethersproject/bytes';
import {Listener, Provider} from '@ethersproject/providers';
import {FunctionFragment, EventFragment, Result} from '@ethersproject/abi';

interface bMXXPeiMockInterface extends ethers.utils.Interface {
  functions: {
    '_manager()': FunctionFragment;
    '_rewards()': FunctionFragment;
    'claimRewards(address,tuple[])': FunctionFragment;
    'userPositionUpdate(address,address,uint256,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: '_manager', values?: void): string;
  encodeFunctionData(functionFragment: '_rewards', values?: void): string;
  encodeFunctionData(
    functionFragment: 'claimRewards',
    values: [
      string,
      {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'userPositionUpdate',
    values: [string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: '_manager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userPositionUpdate', data: BytesLike): Result;

  events: {
    'AssetConfigUpdated(address,uint256)': EventFragment;
    'AssetIndexUpdated(address,uint256)': EventFragment;
    'UserIndexUpdated(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AssetConfigUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AssetIndexUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UserIndexUpdated'): EventFragment;
}

export class bMXXPeiMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: bMXXPeiMockInterface;

  functions: {
    _manager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    _rewards(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  _manager(overrides?: CallOverrides): Promise<string>;

  _rewards(overrides?: CallOverrides): Promise<BigNumber>;

  claimRewards(
    user: string,
    stakes: {
      underlyingAsset: string;
      stakedByUser: BigNumberish;
      totalStaked: BigNumberish;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  userPositionUpdate(
    underlyingAsset: string,
    user: string,
    stakedByUser: BigNumberish,
    totalStaked: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    _manager(overrides?: CallOverrides): Promise<string>;

    _rewards(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<void>;

    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {
    AssetConfigUpdated(asset: null, emission: null): EventFilter;

    AssetIndexUpdated(asset: string | null, index: null): EventFilter;

    UserIndexUpdated(user: string | null, asset: string | null, index: null): EventFilter;
  };

  estimateGas: {
    _manager(): Promise<BigNumber>;
    _rewards(): Promise<BigNumber>;
    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ): Promise<BigNumber>;
    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _manager(): Promise<PopulatedTransaction>;
    _rewards(): Promise<PopulatedTransaction>;
    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ): Promise<PopulatedTransaction>;
    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
