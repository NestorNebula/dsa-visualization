import PageList from '@components/page-list/PageList';
import PageLink from '@components/page-link/PageLink';
import { algorithms } from '@assets/images';
import * as S from './Algorithms.styles';

function Algorithms() {
  return (
    <S.Algorithms>
      <title>DSA Visualization - Algorithms</title>
      <PageList title="Sorting Algorithms">
        <PageLink
          title="Bubble Sort"
          icon={algorithms.bubbleSort}
          path="bubble-sort"
        />
        <PageLink
          title="Selection Sort"
          icon={algorithms.selectionSort}
          path="selection-sort"
        />
        <PageLink
          title="Insertion Sort"
          icon={algorithms.insertionSort}
          path="insertion-sort"
        />
        <PageLink
          title="Merge Sort"
          icon={algorithms.mergeSort}
          path="merge-sort"
        />
      </PageList>
      <PageList title="Searching Algorithms">
        <PageLink
          title="Linear Search"
          icon={algorithms.linearSearch}
          path="linear-search"
        />
        <PageLink
          title="Binary Search"
          icon={algorithms.binarySearch}
          path="binary-search"
        />
      </PageList>
    </S.Algorithms>
  );
}

export default Algorithms;
