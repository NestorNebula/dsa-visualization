import { Array } from '@services/data-structures';
import common from '../common/common';

const methods = {
  add(arrays: Array[]): Array[] {
    return common.add(arrays, () => new Array());
  },

  remove(arrays: Array[], index: number): Array[] {
    return common.remove(arrays, index);
  },
};

export default methods;
