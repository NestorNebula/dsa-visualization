import { Outlet, useLocation, useNavigate } from 'react-router';
import { arrowLeft, icon } from '@assets/icons';
import * as S from './Navbar.styles';

function Navbar() {
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter((p) => p);
  let previous = '';
  if (pathArray.length) {
    previous =
      '/' +
      pathArray.filter((p, i) => p && i !== pathArray.length - 1).join('/');
  }
  const navigate = useNavigate();
  const go = () => navigate(previous);

  return (
    <>
      <S.Navbar>
        <ul>
          <S.NavItem>
            {previous ? (
              <S.Prev onClick={go} aria-label="Go to previous page">
                <img src={arrowLeft} alt="previous" />
              </S.Prev>
            ) : (
              <></>
            )}
          </S.NavItem>
          <S.NavItem>
            <S.Title>DSA Visualization</S.Title>
          </S.NavItem>
          <S.NavItem>
            <S.Icon src={icon} alt="Icon" />
          </S.NavItem>
        </ul>
      </S.Navbar>
      <Outlet />
    </>
  );
}

export default Navbar;
