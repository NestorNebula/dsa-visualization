import PageList from '@components/page-list/PageList';
import PageLink from '@components/page-link/PageLink';
import * as S from './Algorithms.styles';

function Algorithms() {
  return (
    <S.Algorithms>
      <PageList title="Sorting Algorithms">
        <PageLink title="Bubble Sort" icon="TBD" path="bubble-sort" />
        <PageLink title="Selection Sort" icon="TBD" path="selection-sort" />
        <PageLink title="Insertion Sort" icon="TBD" path="insertion-sort" />
        <PageLink title="Merge Sort" icon="TBD" path="merge-sort" />
      </PageList>
      <PageList title="Searching Algorithms">
        <PageLink title="Linear Search" icon="TBD" path="linear-search" />
        <PageLink title="Binary Search" icon="TBD" path="binary-search" />
      </PageList>
    </S.Algorithms>
  );
}

export default Algorithms;
