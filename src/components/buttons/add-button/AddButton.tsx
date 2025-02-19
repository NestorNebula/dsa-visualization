import { plus } from '@assets/icons';
import * as S from './AddButton.styles';

function AddButton({
  add,
  textVersion,
  label,
}: {
  add: () => void;
  textVersion?: boolean;
  label?: string;
}) {
  return (
    <S.AddButton aria-label={label ?? 'add'} onClick={add}>
      {textVersion ? label ?? 'Add' : <img src={plus} alt="add" />}
    </S.AddButton>
  );
}

export default AddButton;
