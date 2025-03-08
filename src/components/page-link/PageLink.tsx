import { useNavigate } from 'react-router';
import * as S from './PageLink.styles';

function PageLink({
  title,
  icon,
  path,
}: {
  title: string;
  icon: string;
  path: string;
}) {
  const navigate = useNavigate();
  const go = () => navigate(path);
  return (
    <S.PageLink onClick={go}>
      <S.Title>{title}</S.Title>
      <S.IconContainer>
        <S.Icon src={icon} alt={`${title.toLowerCase()}'s icon`} />
      </S.IconContainer>
    </S.PageLink>
  );
}

export default PageLink;
