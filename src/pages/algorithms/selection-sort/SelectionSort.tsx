import { useArrays } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import SelectionSortMain from './selection-sort-main/SelectionSortMain';
import { Array as Prototype } from '@components/prototypes';
import * as S from './SelectionSort.styles';

function SelectionSort() {
  const { arrays, array } = useArrays();

  return (
    <S.SelectionSort>
      <Sidebar
        dataStructures={arrays}
        methods={{ active: array.active, set: array.set }}
        getPrototype={(ds, i) => <Prototype key={`array-${i}`} array={ds} />}
      />
      <SelectionSortMain
        key={`selection-sort-${array.active}`}
        array={arrays[array.active]}
      />
    </S.SelectionSort>
  );
}

export default SelectionSort;
