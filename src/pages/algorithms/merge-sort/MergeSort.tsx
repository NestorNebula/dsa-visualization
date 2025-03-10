import { useArrays } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import MergeSortMain from './merge-sort-main/MergeSortMain';
import { Array as Prototype } from '@components/prototypes';
import * as S from './MergeSort.styles';

function MergeSort() {
  const { arrays, array } = useArrays();

  return (
    <S.MergeSort>
      <title>DSA Visualization - Merge Sort</title>
      <Sidebar
        dataStructures={arrays}
        methods={{ active: array.active, set: array.set }}
        getPrototype={(ds, i) => <Prototype key={`array-${i}`} array={ds} />}
      />
      <MergeSortMain
        key={`merge-sort-${array.active}`}
        array={arrays[array.active]}
      />
    </S.MergeSort>
  );
}

export default MergeSort;
