import type { JSX } from 'react';
import * as S from './Container.styles';

function Container({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return <S.Container>{children}</S.Container>;
}

export default Container;
