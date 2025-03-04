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
      <S.Cd>
        <a
          href="https://www.flaticon.com/free-icons/machine-learning"
          title="machine learning icons"
        >
          Machine learning icons created by Becris - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/arrows"
          title="arrows icons"
        >
          Arrows icons created by Creative Stall Premium - Flaticon
        </a>
      </S.Cd>
    </S.Footer>
  );
}

export default Footer;
