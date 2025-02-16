class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root: Node | null = null;
  insert(value: number): void {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let node = this.root;
      while (node) {
        if (node.value > value) {
          if (!node.left) {
            node.left = new Node(value);
            break;
          } else {
            node = node.left;
          }
        } else if (node.value < value) {
          if (!node.right) {
            node.right = new Node(value);
            break;
          } else {
            node = node.right;
          }
        } else break;
      }
    }
  }
  remove(value: number): Node | undefined {
    let previous: Node | null = null;
    let node = this.root;
    while (node) {
      if (node.value === value) {
        if (previous) {
          if (previous.value > node.value) {
            if (node.left) {
              previous.left = node.left;
              node.left.right = node.right;
            } else {
              previous.left = node.right;
            }
          } else {
            if (node.right) {
              previous.right = node.right;
              node.right.left = node.left;
            } else {
              previous.right = node.left;
            }
          }
        } else {
          if (node.left) {
            this.root = node.left;
            node.left.right = this.root.right;
          } else {
            this.root = node.right;
          }
        }
        return node;
      }
      previous = node;
      if (node.value > value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }
  rebalance(): void {
    if (this.root) {
      this.#balanceSubtree(this.root);
    }
  }
  #balanceSubtree(
    subtree: Node,
    previous?: Node,
    previousDirection?: 'left' | 'right'
  ): void {
    if (subtree.left) this.#balanceSubtree(subtree.left, subtree, 'left');
    if (subtree.right) this.#balanceSubtree(subtree.right, subtree, 'right');
    const leftSubtreeHeight = subtree.left
      ? this.#findTreeHeight(subtree.left)
      : 0;
    const rightSubtreeHeight = subtree.right
      ? this.#findTreeHeight(subtree.right)
      : 0;
    const diff = leftSubtreeHeight - rightSubtreeHeight;
    if (diff <= 1 && diff >= -1) return;
    if (diff > 1) {
      const left = subtree.left!;
      if (!left.right) {
        if (previous) {
          previous[previousDirection!] = left;
          left.right = subtree;
          subtree.left = null;
        } else {
          const oldRoot = this.root!;
          oldRoot.left = null;
          this.root = left;
          left.right = oldRoot;
        }
      } else {
        if (previous) {
          previous[previousDirection!] = left.right;
          left.right = null;
          previous[previousDirection!]!.left = left;
          previous[previousDirection!]!.right = subtree;
          subtree.left = null;
        } else {
          const oldRoot = this.root!;
          oldRoot.left = null;
          this.root = left.right;
          left.right = null;
          this.root.left = left;
          this.root.right = oldRoot;
        }
      }
    } else {
      const right = subtree.right!;
      if (!right.left) {
        if (previous) {
          previous[previousDirection!] = right;
          right.left = subtree;
          subtree.right = null;
        } else {
          const oldRoot = this.root!;
          oldRoot.right = null;
          this.root = right;
          right.left = oldRoot;
        }
      } else {
        if (previous) {
          previous[previousDirection!] = right.left;
          right.left = null;
          previous[previousDirection!]!.right = right;
          previous[previousDirection!]!.left = subtree;
          subtree.right = null;
        } else {
          const oldRoot = this.root!;
          oldRoot.right = null;
          this.root = right.left;
          right.left = null;
          this.root.right = right;
          this.root.left = oldRoot;
        }
      }
    }
  }
  #findTreeHeight(tree: Node): number {
    const leftHeight = tree.left ? this.#findTreeHeight(tree.left) : 0;
    const rightHeight = tree.right ? this.#findTreeHeight(tree.right) : 0;
    return leftHeight >= rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
  contains(value: number): boolean {
    let node = this.root;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.value > value ? node.left : node.right;
    }
    return false;
  }
}

export default BinaryTree;
