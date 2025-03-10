import { useHashMaps } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import HashMapMain from './hashmap-main/HashMapMain';
import { HashMap as Prototype } from '@components/prototypes';
import * as S from './HashMap.styles';

function HashMap() {
  const { hashMaps, hashMap } = useHashMaps();

  return (
    <S.HashMap>
      <title>DSA Visualization - HashMap</title>
      <Sidebar
        dataStructures={hashMaps}
        methods={{
          active: hashMap.active,
          set: hashMap.set,
          add: hashMap.add,
          remove: hashMap.remove,
        }}
        getPrototype={(ds, i) => (
          <Prototype key={`hashmap-${i}`} hashMap={ds} />
        )}
      />
      <HashMapMain hashMaps={hashMaps} hashMap={hashMap} />
    </S.HashMap>
  );
}

export default HashMap;
