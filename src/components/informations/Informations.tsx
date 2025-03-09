import * as S from './Informations.styles';
import type { JSX } from 'react';

function Informations({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <S.Informations>
      <S.Title>Did you know?</S.Title>
      <S.Content>{children}</S.Content>
    </S.Informations>
  );
}

export default Informations;
