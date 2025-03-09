import { forward, pause, play } from '@assets/icons';
import * as S from './SpeedBar.styles';

export type Status = 'Active' | 'Faster' | 'Paused' | 'Done' | 'Failed';

function SpeedBar({
  status,
  setStatus,
}: {
  status: Status;
  setStatus: (status: Status) => void;
}) {
  return (
    <S.SpeedBar>
      <S.Options>
        <S.Button
          aria-label={status !== 'Paused' ? 'pause' : 'paused'}
          disabled={['Paused', 'Done', 'Failed'].includes(status)}
          onClick={() => setStatus('Paused')}
        >
          <img src={pause} alt="Pause" />
        </S.Button>
        <S.Button
          aria-label={status !== 'Active' ? 'play' : 'active'}
          disabled={['Active', 'Done', 'Failed'].includes(status)}
          onClick={() => setStatus('Active')}
        >
          <img src={play} alt="Play" />
        </S.Button>
        <S.Button
          aria-label="faster"
          disabled={['Faster', 'Done', 'Failed'].includes(status)}
          onClick={() => setStatus('Faster')}
        >
          <img src={forward} alt="Forward" />
        </S.Button>
      </S.Options>
      <S.Status>{status}</S.Status>
    </S.SpeedBar>
  );
}

export default SpeedBar;
