import { useBinaryTrees } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import BinarySearchMain from './binary-search-main/BinarySearchMain';
import { Tree as Prototype } from '@components/prototypes';
import * as S from './BinarySearch.styles';

function BinarySearch() {
  const { binaryTrees, binaryTree } = useBinaryTrees();

  return (
    <S.BinarySearch>
      <title>DSA Visualization - Binary Search</title>
      <Sidebar
        dataStructures={binaryTrees}
        methods={{ active: binaryTree.active, set: binaryTree.set }}
        getPrototype={(ds, i) => (
          <Prototype key={`binary-tree-${i}`} tree={ds} resume />
        )}
      />
      <BinarySearchMain
        key={binaryTree.active}
        bst={binaryTrees[binaryTree.active]}
      />
    </S.BinarySearch>
  );
}

export default BinarySearch;
