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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPriceOracleGetterInterface extends ethers.utils.Interface {
  functions: {
    "getAssetPrice(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPriceOracleGetter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPriceOracleGetterInterface;

  functions: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  getAssetPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice(address)"(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}