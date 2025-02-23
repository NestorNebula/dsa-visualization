import { Array, BinaryTree, Heap, Queue } from '@services/data-structures';

export type Tree = BinaryTree | Heap;

function getArrayRepresentation(tree: Tree): Array<number | null> {
  if (tree instanceof Heap) {
    return tree.heap;
  }
  const array: Array<number | null> = new Array();
  if (tree.root) {
    const queue: Queue<typeof tree.root | null> = new Queue();
    queue.add(tree.root);
    while (queue.head) {
      if (queue.head.value) {
        array.push(queue.head.value.value);
        queue.add(queue.head.value.left);
        queue.add(queue.head.value.right);
      } else {
        array.push(null);
      }
      queue.remove();
    }
  }
  return array;
}

export { getArrayRepresentation };
