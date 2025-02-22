import { Queue } from '@services/data-structures';

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
queueOne.add(3);
const queueTwo = new Queue();
queueTwo.add('Alice');
queueTwo.add('Bob');
queueTwo.add('Charlie');

const queues: Queue[] = [queueOne, queueTwo];

export default queues;
