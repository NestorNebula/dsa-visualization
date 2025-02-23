import { RefObject } from 'react';
import * as S from './Node.styles';

function Node({
  value,
  onClick,
  ref,
}: {
  value: number | string;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <S.Node onClick={onClick} ref={ref}>
      {value}
    </S.Node>
  );
}

export default Node;
