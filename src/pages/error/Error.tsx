import { Link, useRouteError } from 'react-router';
import Err from '@components/error/Error';
import Sperror from 'sperror';
import * as S from './Error.styles';

function Error() {
  const error = useRouteError();
  return error instanceof Sperror ? (
    <S.Error>
      <title>DSA Visualization - Error</title>
      <Err error={error} />
      {error.statusCode === 404 ? (
        <Link to="/">Go back to home page</Link>
      ) : (
        <></>
      )}
    </S.Error>
  ) : (
    <S.Error>
      <title>DSA Visualization - Error</title>
      <Err error={error} />
    </S.Error>
  );
}

export default Error;
