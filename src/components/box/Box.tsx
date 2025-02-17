import * as S from './Box.styles';

function Box({ value }: { value: number | string }) {
  return <S.Box>{value}</S.Box>;
}

export default Box;
