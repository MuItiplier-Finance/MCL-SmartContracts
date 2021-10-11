/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IbMXXDistributionManager } from "./IbMXXDistributionManager";

export class IbMXXDistributionManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IbMXXDistributionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IbMXXDistributionManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "emissionPerSecond",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
        ],
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        name: "assetsConfigInput",
        type: "tuple[]",
      },
    ],
    name: "configureAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];