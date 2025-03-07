import { ChangeEvent } from 'react';
import * as S from './Input.styles';

function Input({
  name,
  label = name,
  type = 'text',
  value,
  updateValue,
}: {
  name: string;
  label?: string;
  type?: string;
  value: string;
  updateValue: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <S.Container>
      <S.Input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={updateValue}
        placeholder=""
        autoComplete="off"
      />
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.Container>
  );
}

export default Input;
