import { useArrays } from '@hooks';
import Prototype from '@components/prototypes/array/ArrayPrototype';
import Sidebar from '@components/sidebar/Sidebar';
import ArrayMain from './array-main/ArrayMain';
import * as S from './Array.styles';

function Array() {
  const { arrays, array, item } = useArrays();
  const getArray = (array: (typeof arrays)[0], index: number) => {
    return <Prototype key={`array${index}`} array={array} />;
  };

  return (
    <S.Array>
      <title>DSA Visualization - Array</title>
      <Sidebar
        dataStructures={arrays}
        methods={{
          active: array.active,
          set: array.set,
          remove: array.remove,
          add: array.add,
        }}
        getPrototype={getArray}
      />
      <ArrayMain arrays={arrays} array={array} item={item} />
    </S.Array>
  );
}

export default Array;
