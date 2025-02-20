import Prototype from '@components/prototypes/array/ArrayPrototype';
import StructureList from '@components/structure-list/StructureList';
import type { Array } from '@services/data-structures';
import type { ArrayMethods } from '#types/methods';

function ArraySidebar({
  arrays,
  array,
}: {
  arrays: Array[];
  array: ArrayMethods;
}) {
  return (
    <StructureList
      active={array.active}
      setActive={array.set}
      remove={array.remove}
      add={array.add}
    >
      {arrays.map((a, i) => (
        <Prototype key={`array-prototype${i}`} array={a} />
      ))}
    </StructureList>
  );
}

export default ArraySidebar;
