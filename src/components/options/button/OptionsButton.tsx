import * as S from './OptionsButton.styles';

type ButtonProps = ImgButton | TextButton;

interface ImgButton {
  onClick: () => void;
  textVersion?: undefined;
  icon: string;
  label: string;
}

interface TextButton {
  onClick: () => void;
  textVersion: true;
  icon?: undefined;
  label: string;
}

function OptionsButton({ onClick, textVersion, icon, label }: ButtonProps) {
  return (
    <S.OptionsButton aria-label={label ?? 'add'} onClick={onClick}>
      {textVersion ? label : <img src={icon} alt="add" />}
    </S.OptionsButton>
  );
}

export default OptionsButton;
