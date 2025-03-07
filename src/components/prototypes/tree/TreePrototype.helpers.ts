import { Array, BinaryTree, Heap, Queue } from '@services/data-structures';

export type Tree = BinaryTree | Heap;

function getArrayRepresentation(tree: Tree): Array<number> {
  if (tree instanceof Heap) {
    const array = new Array(tree.heap);
    let max = 1;
    while (array.length > max) {
      max = max * 2 + 1;
    }
    if (array.length < max) {
      array.length = max;
    }
    return array;
  }
  const array: Array<number> = new Array();
  if (tree.root) {
    const queue: Queue<{
      subtree: typeof tree.root;
      parentPosition?: number;
      isRightChild?: boolean;
    }> = new Queue();
    queue.add({ subtree: tree.root });
    while (queue.head) {
      const value = queue.head.value;
      if (value.parentPosition === undefined) {
        array.push(value.subtree.value);
        if (value.subtree.left)
          queue.add({ subtree: value.subtree.left, parentPosition: 0 });
        if (value.subtree.right)
          queue.add({
            subtree: value.subtree.right,
            parentPosition: 0,
            isRightChild: true,
          });
      } else {
        const position =
          value.parentPosition * 2 + (value.isRightChild ? 2 : 1);
        array[position] = value.subtree.value;
        if (value.subtree.left)
          queue.add({ subtree: value.subtree.left, parentPosition: position });
        if (value.subtree.right)
          queue.add({
            subtree: value.subtree.right,
            parentPosition: position,
            isRightChild: true,
          });
      }
      queue.remove();
    }
  }
  let max = 0;
  for (const key in array) {
    if (Number.isInteger(+key) && +key + 1 > max) {
      max = +key + 1;
    }
  }
  array.length = max;
  max = 1;
  while (array.length > max) {
    max = max * 2 + 1;
  }
  if (array.length < max) {
    array.length = max;
  }
  return array;
}

export { getArrayRepresentation };
