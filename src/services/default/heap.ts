import { Heap } from '@services/data-structures';

const heapOne = new Heap();
heapOne.insert(3);
heapOne.insert(5);
heapOne.insert(10);
heapOne.insert(25);
heapOne.insert(50);
const heapTwo = new Heap();
heapTwo.insert(10);
heapTwo.insert(5);
heapTwo.insert(8);
heapTwo.insert(33);
heapTwo.insert(21);
heapTwo.revert();

const heaps: Heap[] = [heapOne, heapTwo];

export default heaps;
