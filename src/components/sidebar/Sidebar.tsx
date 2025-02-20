import StructureList from '@components/structure-list/StructureList';
import * as S from './Sidebar.styles';
import type { JSX } from 'react';

function Sidebar<Type>({
  dataStructures,
  methods,
  getPrototype,
}: {
  dataStructures: Type[];
  methods: {
    active: number;
    set: (index: number) => void;
    remove: (index: number) => void;
    add: () => void;
  };
  getPrototype: (ds: Type, index: number) => JSX.Element;
}) {
  return (
    <S.Sidebar>
      <StructureList
        active={methods.active}
        setActive={methods.set}
        remove={methods.remove}
        add={methods.add}
      >
        {dataStructures.map((ds, i) => getPrototype(ds, i))}
      </StructureList>
    </S.Sidebar>
  );
}

export default Sidebar;
