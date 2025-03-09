import { useState } from 'react';
import { close } from '@assets/icons';
import * as S from './Informations.styles';
import type { JSX } from 'react';

function Informations({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [closed, setClosed] = useState(false);

  return closed ? (
    <></>
  ) : (
    <S.Informations>
      <S.Title>Did you know?</S.Title>
      <S.Content>{children}</S.Content>
      <S.CloseButton
        aria-label="close informations"
        onClick={() => setClosed(true)}
      >
        <img src={close} alt="close" />
      </S.CloseButton>
    </S.Informations>
  );
}

export default Informations;
