import PageList from '@components/page-list/PageList';
import PageLink from '@components/page-link/PageLink';
import { dataStructures } from '@assets/images';
import * as S from './DataStructures.styles';

function DataStructures() {
  return (
    <S.DataStructures>
      <PageList title="Data Structures">
        <PageLink title="Array" icon={dataStructures.array} path="array" />
        <PageLink
          title="HashMap"
          icon={dataStructures.hashMap}
          path="hashmap"
        />
        <PageLink title="Stack" icon={dataStructures.stack} path="stack" />
        <PageLink title="Queue" icon={dataStructures.queue} path="queue" />
        <PageLink
          title="Linked List"
          icon={dataStructures.linkedList}
          path="linked-list"
        />
        <PageLink
          title="Binary Tree"
          icon={dataStructures.binaryTree}
          path="binary-tree"
        />
        <PageLink title="Heap" icon={dataStructures.heap} path="heap" />
        <PageLink title="Graph" icon={dataStructures.graph} path="graph" />
      </PageList>
    </S.DataStructures>
  );
}

export default DataStructures;
