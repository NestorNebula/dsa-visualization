import { resource as resourceIcon } from '@assets/icons';
import * as S from './DSAHeader.styles';

function DSAHeader({ title, resource }: { title: string; resource: string }) {
  return (
    <S.DSAHeader>
      <S.Title>{title}</S.Title>
      <S.Link
        href={resource}
        aria-label={`${title.toLowerCase()} resource's link`}
      >
        <img
          src={resourceIcon}
          alt={`${title.toLowerCase()} resource's link`}
        />
      </S.Link>
    </S.DSAHeader>
  );
}

export default DSAHeader;
