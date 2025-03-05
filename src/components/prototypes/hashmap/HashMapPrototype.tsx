import Container from '@components/container/Container';
import LinkedListPrototype from '../linked-list/LinkedListPrototype';
import { type HashMap, LinkedList } from '@services/data-structures';
import * as S from './HashMapPrototype.styles';

function HashMapPrototype({
  hashMap,
  isMain,
}: {
  hashMap: HashMap;
  isMain?: boolean;
}) {
  return isMain ? (
    <S.HashMapPrototype>
      {Object.keys(hashMap).map(
        (key) =>
          hashMap[key] instanceof LinkedList && (
            <Container key={`bucket-${key}`}>
              <div>{key}</div>
              <LinkedListPrototype linkedList={hashMap[key]} />
            </Container>
          )
      )}
    </S.HashMapPrototype>
  ) : (
    <S.HashMapResume>
      <header></header>
      {Object.keys(hashMap).map(
        (key) =>
          hashMap[key] instanceof LinkedList &&
          hashMap[key].head && (
            <div key={`hashmaresume-${key}-${hashMap[key].head.value}`}>
              {hashMap[key].head.value}
            </div>
          )
      )}
    </S.HashMapResume>
  );
}

export default HashMapPrototype;
