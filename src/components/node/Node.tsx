import { RefObject } from 'react';
import * as S from './Node.styles';

function Node({
  value,
  onClick,
  ref,
  active,
  gap,
  valid,
}: {
  value: number | string;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement | null>;
  active?: boolean;
  gap?: number;
  valid?: boolean;
}) {
  return (
    <S.Node
      $active={active}
      $button={!!onClick}
      $valid={valid}
      onClick={onClick}
      ref={ref}
      style={
        gap
          ? {
              top: `${gap}rem`,
              left: `${gap}rem`,
            }
          : undefined
      }
    >
      {value}
    </S.Node>
  );
}

export default Node;
