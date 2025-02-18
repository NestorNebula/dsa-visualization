import { Array } from '@services/data-structures';

const arrayOne = new Array();
arrayOne.push(4);
arrayOne.push(2);
arrayOne.push(1);
arrayOne.push(5);
const arrayTwo = new Array();
arrayTwo.push(3);
arrayTwo.push(2);
arrayTwo.push(1);
arrayTwo.push(0);

const arrays: Array[] = [arrayOne, arrayTwo];

export default arrays;
