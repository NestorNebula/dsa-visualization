import { useArrays } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import InsertionSortMain from './insertion-sort-main/InsertionSortMain';
import { Array as Prototype } from '@components/prototypes';
import * as S from './InsertionSort.styles';

function InsertionSort() {
  const { arrays, array } = useArrays();

  return (
    <S.InsertionSort>
      <title>DSA Visualization - Insertion Sort</title>
      <Sidebar
        dataStructures={arrays}
        methods={{ active: array.active, set: array.set }}
        getPrototype={(ds, i) => <Prototype key={`array-${i}`} array={ds} />}
      />
      <InsertionSortMain
        key={`insertion-sort-${array.active}`}
        array={arrays[array.active]}
      />
    </S.InsertionSort>
  );
}

export default InsertionSort;
