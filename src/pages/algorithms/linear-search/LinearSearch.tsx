import { useArrays } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import LinearSearchMain from './linear-search-main/LinearSearchMain';
import { Array as Prototype } from '@components/prototypes';
import * as S from './LinearSearch.styles';

function LinearSearch() {
  const { arrays, array } = useArrays();

  return (
    <S.LinearSearch>
      <Sidebar
        dataStructures={arrays}
        methods={{ active: array.active, set: array.set }}
        getPrototype={(ds, i) => <Prototype key={`array-${i}`} array={ds} />}
      />
      <LinearSearchMain array={arrays[array.active]} />
    </S.LinearSearch>
  );
}

export default LinearSearch;
