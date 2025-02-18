import { BinaryTree } from '@services/data-structures';

const binaryTreeOne = new BinaryTree();
binaryTreeOne.insert(5);
binaryTreeOne.insert(2);
binaryTreeOne.insert(7);
binaryTreeOne.insert(1);
binaryTreeOne.insert(9);
const binaryTreeTwo = new BinaryTree();
binaryTreeTwo.insert(1);
binaryTreeTwo.insert(3);
binaryTreeTwo.insert(5);
binaryTreeTwo.insert(6);
binaryTreeTwo.insert(2);

const binaryTrees: BinaryTree[] = [binaryTreeOne, binaryTreeTwo];

export default binaryTrees;
