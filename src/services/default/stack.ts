import { Stack } from '@services/data-structures';

const stackOne = new Stack();
stackOne.push(1);
stackOne.push(2);
stackOne.push(3);
const stackTwo = new Stack();
stackTwo.push('Alice');
stackTwo.push('Bob');
stackTwo.push('Charlie');

const stacks: Stack[] = [stackOne, stackTwo];

export default stacks;
