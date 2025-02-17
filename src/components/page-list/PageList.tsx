import * as S from './PageList.styles';
import type { JSX } from 'react';

function PageList({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <S.PageList>
      <S.Title>{title}</S.Title>
      <S.Pages>{children}</S.Pages>
    </S.PageList>
  );
}

export default PageList;
