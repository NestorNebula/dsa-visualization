import * as S from './Box.styles';

function Box({
  value,
  onClick,
  active,
}: {
  value: number | string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <S.Box $active={active} onClick={onClick ?? undefined}>
      {value}
    </S.Box>
  );
}

export default Box;
