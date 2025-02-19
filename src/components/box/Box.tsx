import * as S from './Box.styles';

function Box({
  value,
  onClick,
}: {
  value: number | string;
  onClick?: () => void;
}) {
  return <S.Box onClick={onClick ?? undefined}>{value}</S.Box>;
}

export default Box;
