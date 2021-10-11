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
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITransferHookInterface extends ethers.utils.Interface {
  functions: {
    "onTransfer(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onTransfer",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "onTransfer", data: BytesLike): Result;

  events: {};
}

export class ITransferHook extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITransferHookInterface;

  functions: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onTransfer(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
