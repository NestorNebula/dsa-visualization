import { RefObject } from 'react';
import * as S from './Node.styles';

function Node({
  value,
  onClick,
  ref,
  active,
}: {
  value: number | string;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement | null>;
  active?: boolean;
}) {
  return (
    <S.Node $active={active} $button={!!onClick} onClick={onClick} ref={ref}>
      {value}
    </S.Node>
  );
}

export default Node;
