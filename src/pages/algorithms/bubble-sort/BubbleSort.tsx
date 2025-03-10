import { useArrays } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import BubbleSortMain from './bubble-sort-main/BubbleSortMain';
import { Array as Prototype } from '@components/prototypes';
import * as S from './BubbleSort.styles';

function BubbleSort() {
  const { arrays, array } = useArrays();

  return (
    <S.BubbleSort>
      <title>DSA Visualization - Bubble Sort</title>
      <Sidebar
        dataStructures={arrays}
        methods={{ active: array.active, set: array.set }}
        getPrototype={(ds, i) => <Prototype key={`array-${i}`} array={ds} />}
      />
      <BubbleSortMain
        key={`bubble-sort-${array.active}`}
        array={arrays[array.active]}
      />
    </S.BubbleSort>
  );
}

export default BubbleSort;
