import PageList from '@components/page-list/PageList';
import PageLink from '@components/page-link/PageLink';
import * as S from './DataStructures.styles';

function DataStructures() {
  return (
    <S.DataStructures>
      <PageList title="Data Structures">
        <PageLink title="Array" icon="TBD" path="array" />
        <PageLink title="HashMap" icon="TBD" path="hashmap" />
        <PageLink title="Stack" icon="TBD" path="stack" />
        <PageLink title="Queue" icon="TBD" path="queue" />
        <PageLink title="Linked List" icon="TBD" path="linked-list" />
        <PageLink title="Binary Tree" icon="TBD" path="binary-tree" />
        <PageLink title="Heap" icon="TBD" path="heap" />
        <PageLink title="Graph" icon="TBD" path="graph" />
      </PageList>
    </S.DataStructures>
  );
}

export default DataStructures;
