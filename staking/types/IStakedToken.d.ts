/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IStakedTokenInterface extends ethers.utils.Interface {
  functions: {
    "claimRewards(address,uint256)": FunctionFragment;
    "cooldown()": FunctionFragment;
    "redeem(address,uint256)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cooldown", values?: void): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cooldown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;

  events: {};
}

export class IStakedToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IStakedTokenInterface;

  functions: {
    claimRewards(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cooldown(overrides?: Overrides): Promise<ContractTransaction>;

    redeem(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stake(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  claimRewards(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cooldown(overrides?: Overrides): Promise<ContractTransaction>;

  redeem(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stake(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    claimRewards(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    cooldown(overrides?: Overrides): Promise<void>;

    redeem(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    stake(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claimRewards(to: string, amount: BigNumberish): Promise<BigNumber>;
    cooldown(): Promise<BigNumber>;
    redeem(to: string, amount: BigNumberish): Promise<BigNumber>;
    stake(to: string, amount: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    claimRewards(
      to: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    cooldown(): Promise<PopulatedTransaction>;
    redeem(to: string, amount: BigNumberish): Promise<PopulatedTransaction>;
    stake(to: string, amount: BigNumberish): Promise<PopulatedTransaction>;
  };
}
