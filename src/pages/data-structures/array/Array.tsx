import { useArrays } from '@hooks';
import ArraySidebar from './array-sidebar/ArraySidebar';
import ArrayMain from './array-main/ArrayMain';
import * as S from './Array.styles';

function Array() {
  const { arrays, array, item } = useArrays();

  return (
    <S.Array>
      <ArraySidebar arrays={arrays} array={array} />
      <ArrayMain arrays={arrays} array={array} item={item} />
    </S.Array>
  );
}

export default Array;
