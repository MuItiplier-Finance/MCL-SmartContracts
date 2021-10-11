import {tEthereumAddress} from '../../../helpers/types';
import {MintableErc20} from '../../../types/MintableErc20';
import {StakedbMXX} from '../../../types/StakedbMXX';

export const logmTokenBalanceOf = async (
  account: tEthereumAddress,
  mToken: MintableErc20
) => {
  console.log(
    `[mToken.balanceOf(${account})]: ${(await mToken.balanceOf(account)).toString()}`
  );
};

export const logStakedbMXXBalanceOf = async (staker: tEthereumAddress, stakedbMXX: StakedbMXX) => {
  console.log(
    `[stakedbMXX.balanceOf(${staker})]: ${(await stakedbMXX.balanceOf(staker)).toString()}`
  );
};

export const logGetStakeTotalRewardsBalance = async (
  staker: tEthereumAddress,
  stakedbMXX: StakedbMXX
) => {
  console.log(
    `[stakedbMXX.getTotalRewardsBalance(${staker})]: ${(
      await stakedbMXX.getTotalRewardsBalance(staker)
    ).toString()}`
  );
};

export const logRewardPerStakedbMXX = async (stakedbMXX: StakedbMXX) => {
  console.log(
    `[stakedbMXX.getRewardPerStakedbMXX()]: ${(
      await stakedbMXX.getRewardPerStakedbMXX()
    ).toString()}`
  );
};
