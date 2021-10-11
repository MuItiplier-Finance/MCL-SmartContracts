import {task} from 'hardhat/config';
import {setBRE} from '../../helpers/misc-utils';

task(`set-bre`, `Inits the BRE, to have access to all the plugins' objects`).setAction(
  async (_, _BRE) => {
    await setBRE(_BRE);
    return _BRE;
  }
);
