import { github } from '@assets/icons';
import * as S from './Footer.styles';

function Footer() {
  return (
    <S.Footer>
      <S.Cr>
        <div>© Noa Houssier</div>
        <a
          href="https://github.com/NestorNebula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <div>2025</div>
      </S.Cr>
    </S.Footer>
  );
}

export default Footer;
