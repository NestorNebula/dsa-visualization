import { arrowLeft, icon } from '@assets/icons';
import * as S from './Navbar.styles';

function Navbar() {
  const pathArray = window.location.pathname.split('/').filter((p) => p);
  let previous = '';
  if (pathArray.length) {
    previous =
      '/' +
      pathArray.filter((p, i) => p && i !== pathArray.length - 1).join('/');
  }

  return (
    <S.Navbar>
      <ul>
        <S.NavItem>
          {previous ? (
            <S.PrevLink href={previous} aria-label="Go to previous page">
              <img src={arrowLeft} alt="previous" />
            </S.PrevLink>
          ) : (
            <></>
          )}
        </S.NavItem>
        <S.NavItem>DSA Visualization</S.NavItem>
        <S.NavItem>
          <S.Icon src={icon} alt="Icon" />
        </S.NavItem>
      </ul>
    </S.Navbar>
  );
}

export default Navbar;
