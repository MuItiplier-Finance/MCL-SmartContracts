/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BMXXDistributionManagerInterface extends ethers.utils.Interface {
  functions: {
    "DISTRIBUTION_END()": FunctionFragment;
    "EMISSION_MANAGER()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "assets(address)": FunctionFragment;
    "configureAssets(tuple[])": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "EMISSION_MANAGER",
    values?: void
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: void): string;
  encodeFunctionData(functionFragment: "assets", values: [string]): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [
      {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMISSION_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;

  events: {
    "AssetConfigUpdated(address,uint256)": EventFragment;
    "AssetIndexUpdated(address,uint256)": EventFragment;
    "UserIndexUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

export class BMXXDistributionManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BMXXDistributionManagerInterface;

  functions: {
    DISTRIBUTION_END(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    EMISSION_MANAGER(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    PRECISION(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      emissionPerSecond: BigNumber;
      lastUpdateTimestamp: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    configureAssets(
      assetsConfigInput: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

  PRECISION(overrides?: CallOverrides): Promise<number>;

  assets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    emissionPerSecond: BigNumber;
    lastUpdateTimestamp: BigNumber;
    index: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  configureAssets(
    assetsConfigInput: {
      emissionPerSecond: BigNumberish;
      totalStaked: BigNumberish;
      underlyingAsset: string;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getUserAssetData(
    user: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  staticCall: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

    PRECISION(overrides?: CallOverrides): Promise<number>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      emissionPerSecond: BigNumber;
      lastUpdateTimestamp: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    configureAssets(
      assetsConfigInput: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[],
      overrides?: Overrides
    ): Promise<void>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    AssetConfigUpdated(asset: string | null, emission: null): EventFilter;

    AssetIndexUpdated(asset: string | null, index: null): EventFilter;

    UserIndexUpdated(
      user: string | null,
      asset: string | null,
      index: null
    ): EventFilter;
  };

  estimateGas: {
    DISTRIBUTION_END(): Promise<BigNumber>;
    EMISSION_MANAGER(): Promise<BigNumber>;
    PRECISION(): Promise<BigNumber>;
    assets(arg0: string): Promise<BigNumber>;
    configureAssets(
      assetsConfigInput: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[]
    ): Promise<BigNumber>;
    getUserAssetData(user: string, asset: string): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_END(): Promise<PopulatedTransaction>;
    EMISSION_MANAGER(): Promise<PopulatedTransaction>;
    PRECISION(): Promise<PopulatedTransaction>;
    assets(arg0: string): Promise<PopulatedTransaction>;
    configureAssets(
      assetsConfigInput: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[]
    ): Promise<PopulatedTransaction>;
    getUserAssetData(
      user: string,
      asset: string
    ): Promise<PopulatedTransaction>;
  };
}