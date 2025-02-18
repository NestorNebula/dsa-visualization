import type { JSX } from 'react';
import * as S from './OptionsDialog.styles';

function OptionsDialog({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <S.OptionsDialog>{children}</S.OptionsDialog>;
}

export default OptionsDialog;
