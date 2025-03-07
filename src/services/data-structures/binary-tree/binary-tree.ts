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
            this.#replaceByGreater(previous, node);
          } else {
            this.#replaceBySmaller(previous, node);
          }
        } else {
          if (node.left && node.right) {
            let smaller = node.left;
            while (smaller.right) {
              smaller = smaller.right;
            }
            let greater = node.right;
            while (greater.left) {
              greater = greater.left;
            }
            if (node.value - smaller.value > greater.value - node.value) {
              this.#replaceByGreater(previous, node);
            } else {
              this.#replaceBySmaller(previous, node);
            }
          } else {
            this.root = node.left ?? node.right;
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
  #replaceBySmaller(previous: Node | null, node: Node): void {
    if (node.left) {
      let newNode = node.left;
      let prev = node;
      while (newNode.right) {
        prev = newNode;
        newNode = newNode.right;
      }
      if (prev.value !== node.value) {
        prev.right = null;
      }
      if (newNode.left) {
        let lastNode = newNode.left;
        while (lastNode.left) {
          lastNode = lastNode.left;
        }
        if (prev.value !== node.value) {
          lastNode.left = node.left;
        }
      } else {
        if (prev.value !== node.value) {
          newNode.left = node.left;
        }
      }
      newNode.right = node.right;
      if (previous) {
        previous.right = newNode;
      } else {
        this.root = newNode;
      }
    } else {
      if (previous) {
        previous.right = node.right;
      } else {
        this.root = node.right;
      }
    }
  }
  #replaceByGreater(previous: Node | null, node: Node): void {
    if (node.right) {
      let newNode = node.right;
      let prev = node;
      while (newNode.left) {
        prev = newNode;
        newNode = newNode.left;
      }
      if (prev.value !== node.value) {
        prev.left = null;
      }
      if (newNode.right) {
        let lastNode = newNode.right;
        while (lastNode.right) {
          lastNode = lastNode.right;
        }
        if (prev.value !== node.value) {
          lastNode.right = node.right;
        }
      } else {
        if (prev.value !== node.value) {
          newNode.right = node.right;
        }
      }
      newNode.left = node.left;
      if (previous) {
        previous.left = newNode;
      } else {
        this.root = newNode;
      }
    } else {
      if (previous) {
        previous.left = node.left;
      } else {
        this.root = node.left;
      }
    }
  }
  rebalance(): void {
    if (this.root) {
      while (!this.#isBalanced(this.root)) {
        this.#balanceSubtree(this.root);
      }
    }
  }
  #isBalanced(node: Node): boolean {
    const leftResult = node.left ? this.#isBalanced(node.left) : true;
    const rightResult = node.right ? this.#isBalanced(node.right) : true;
    const left = this.#findTreeHeight(node.left);
    const right = this.#findTreeHeight(node.right);
    return leftResult && rightResult && left - right <= 1 && left - right >= -1;
  }
  #balanceSubtree(
    subtree: Node,
    previous?: Node,
    previousDirection?: 'left' | 'right'
  ): void {
    if (subtree.left) this.#balanceSubtree(subtree.left, subtree, 'left');
    if (subtree.right) this.#balanceSubtree(subtree.right, subtree, 'right');
    let leftHeight = this.#findTreeHeight(subtree.left);
    let rightHeight = this.#findTreeHeight(subtree.right);
    let diff = leftHeight - rightHeight;
    if (diff <= 1 && diff >= -1) return;
    while (diff > 1 || diff < -1) {
      let left = subtree.left;
      let right = subtree.right;
      if (diff > 1) {
        while (left!.right) {
          subtree.left = left!.right;
          left!.right.left = left;
          left!.right = null;
          left = subtree.left;
        }
        left!.right = subtree;
        subtree.left = null;
        subtree = left!;
        left = subtree.left;
      } else {
        while (right!.left) {
          subtree.right = right!.left;
          right!.left.right = right;
          right!.left = null;
          right = subtree.right;
        }
        right!.left = subtree;
        subtree.right = null;
        subtree = right!;
        right = subtree.right;
      }
      leftHeight = this.#findTreeHeight(subtree.left);
      rightHeight = this.#findTreeHeight(subtree.right);
      diff = leftHeight - rightHeight;
    }
    if (previous) {
      previous[previousDirection!] = subtree;
    } else {
      this.root = subtree;
    }
  }
  #findTreeHeight(tree: Node | null): number {
    if (!tree) return 0;
    const leftHeight = this.#findTreeHeight(tree.left);
    const rightHeight = this.#findTreeHeight(tree.right);
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

  constructor(binaryTree?: BinaryTree) {
    if (binaryTree) {
      this.root = binaryTree.root;
    }
  }
}

export default BinaryTree;
