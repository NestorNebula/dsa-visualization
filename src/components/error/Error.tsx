import Sperror from 'sperror';
import * as S from './Error.styles';

function Error({ error }: { error: unknown }) {
  return error instanceof Sperror ? (
    <S.Error>
      <S.Title>{error.title}</S.Title>
      <S.Message>{error.msg}</S.Message>
    </S.Error>
  ) : (
    <S.Error>
      <S.Title>Unexpected Error</S.Title>
    </S.Error>
  );
}

export default Error;
