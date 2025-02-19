import { Array } from '@services/data-structures';

const methods = {
  add(arrays: Array[]): Array[] {
    return [...arrays, new Array()];
  },

  remove(arrays: Array[], index: number): Array[] {
    return arrays.filter((a, i) => a && i !== index);
  },

  addItem(arrays: Array[], arrayIndex: number, value: any): Array[] {
    if (!arrays[arrayIndex]) return arrays;
    const updatedArray: Array = new Array();
    for (let i = 0; i < arrays[arrayIndex].length; i++) {
      updatedArray.push(arrays[arrayIndex][i]);
    }
    updatedArray.push(value);
    const updatedArrays: Array[] = [];
    for (let j = 0; j < arrays.length; j++) {
      updatedArrays.push(j === arrayIndex ? updatedArray : arrays[j]);
    }
    return updatedArrays;
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
