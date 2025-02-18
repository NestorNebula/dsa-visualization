import { LinkedList } from '@services/data-structures';

const linkedListOne = new LinkedList();
linkedListOne.add(1);
linkedListOne.add(2);
linkedListOne.add(3);
const linkedListTwo = new LinkedList();
linkedListTwo.add('Alice');
linkedListTwo.add('Bob');
linkedListTwo.add('Charlie');

const linkedLists: LinkedList[] = [linkedListOne, linkedListTwo];

export default linkedLists;
