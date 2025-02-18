import type { JSX } from 'react';
import * as S from './OptionsList.styles';

function OptionsList({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <S.OptionsList>{children}</S.OptionsList>;
}

export default OptionsList;
