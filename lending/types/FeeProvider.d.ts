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

interface FeeProviderInterface extends ethers.utils.Interface {
  functions: {
    "FEE_PROVIDER_REVISION()": FunctionFragment;
    "calculateLoanOriginationFee(uint256)": FunctionFragment;
    "calculateRewards(uint256)": FunctionFragment;
    "getFeeRates()": FunctionFragment;
    "getFlashLoanFee()": FunctionFragment;
    "getRewardRates()": FunctionFragment;
    "initialize(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FEE_PROVIDER_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateLoanOriginationFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeRates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFlashLoanFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardRates",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "FEE_PROVIDER_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateLoanOriginationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFlashLoanFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;

  events: {};
}

export class FeeProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FeeProviderInterface;

  functions: {
    FEE_PROVIDER_REVISION(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "FEE_PROVIDER_REVISION()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    calculateLoanOriginationFee(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "calculateLoanOriginationFee(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    calculateRewards(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "calculateRewards(uint256)"(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    getFeeRates(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getFeeRates()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getFlashLoanFee(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getFlashLoanFee()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getRewardRates(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "getRewardRates()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    initialize(
      _addressesProvider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _addressesProvider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  FEE_PROVIDER_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  "FEE_PROVIDER_REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

  calculateLoanOriginationFee(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateLoanOriginationFee(uint256)"(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateRewards(
    _originationFee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  "calculateRewards(uint256)"(
    _originationFee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  getFeeRates(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getFeeRates()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  getFlashLoanFee(overrides?: CallOverrides): Promise<BigNumber>;

  "getFlashLoanFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  getRewardRates(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  "getRewardRates()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  initialize(
    _addressesProvider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _addressesProvider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_PROVIDER_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_PROVIDER_REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

    calculateLoanOriginationFee(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateLoanOriginationFee(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRewards(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "calculateRewards(uint256)"(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    getFeeRates(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getFeeRates()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getFlashLoanFee(overrides?: CallOverrides): Promise<BigNumber>;

    "getFlashLoanFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardRates(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "getRewardRates()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    initialize(
      _addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      _addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    FEE_PROVIDER_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_PROVIDER_REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

    calculateLoanOriginationFee(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateLoanOriginationFee(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRewards(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateRewards(uint256)"(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeRates(overrides?: CallOverrides): Promise<BigNumber>;

    "getFeeRates()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFlashLoanFee(overrides?: CallOverrides): Promise<BigNumber>;

    "getFlashLoanFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardRates(overrides?: CallOverrides): Promise<BigNumber>;

    "getRewardRates()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _addressesProvider: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address)"(
      _addressesProvider: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_PROVIDER_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "FEE_PROVIDER_REVISION()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateLoanOriginationFee(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateLoanOriginationFee(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRewards(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateRewards(uint256)"(
      _originationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeRates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getFeeRates()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFlashLoanFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getFlashLoanFee()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardRates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRewardRates()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _addressesProvider: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _addressesProvider: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}