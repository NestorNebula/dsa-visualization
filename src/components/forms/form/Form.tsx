import { check } from '@assets/icons';
import * as S from './Form.styles';
import type { JSX } from 'react';

function Form({
  children,
  onSubmit,
  name,
}: {
  children: JSX.Element | JSX.Element[];
  onSubmit: () => void;
  name?: string;
}) {
  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
      <S.SubmitButton aria-label={name ?? 'submit'}>
        <img src={check} alt="submit" />
      </S.SubmitButton>
    </S.Form>
  );
}

export default Form;
