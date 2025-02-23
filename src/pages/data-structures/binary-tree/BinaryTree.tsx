import { useBinaryTrees } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import BinaryTreeMain from './binary-tree-main/BinaryTreeMain';
import { Tree as Prototype } from '@components/prototypes';
import * as S from './BinaryTree.styles';

function BinaryTree() {
  const { binaryTrees, binaryTree } = useBinaryTrees();

  return (
    <S.BinaryTree>
      <Sidebar
        dataStructures={binaryTrees}
        methods={{
          active: binaryTree.active,
          set: binaryTree.set,
          add: binaryTree.add,
          remove: binaryTree.remove,
        }}
        getPrototype={(ds, i) => (
          <Prototype key={`binary-tree-${i}`} tree={ds} />
        )}
      />
      <BinaryTreeMain binaryTrees={binaryTrees} binaryTree={binaryTree} />
    </S.BinaryTree>
  );
}

export default BinaryTree;
