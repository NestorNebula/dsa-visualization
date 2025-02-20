import { Array } from '@services/data-structures';
import common from '../common/common';

const methods = {
  add(arrays: Array[]): Array[] {
    return common.add(arrays, () => new Array());
  },

  remove(arrays: Array[], index: number): Array[] {
    return common.remove(arrays, index);
  },

  updateItem(
    arrays: Array[],
    arrayIndex: number,
    itemIndex: number,
    value: any
  ): Array[] {
    if (!arrays[arrayIndex] || !arrays[arrayIndex][itemIndex]) return arrays;
    const updatedArray: Array = new Array();
    for (let i = 0; i < arrays[arrayIndex].length; i++) {
      updatedArray.push(i === itemIndex ? value : arrays[arrayIndex][i]);
    }
    const updatedArrays: Array[] = [];
    for (let j = 0; j < arrays.length; j++) {
      updatedArrays.push(j === arrayIndex ? updatedArray : arrays[j]);
    }
    return updatedArrays;
  },
};

export default methods;
