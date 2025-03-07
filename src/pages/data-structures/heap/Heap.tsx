import { useHeaps } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import { Tree as Prototype } from '@components/prototypes';
import HeapMain from './heap-main/HeapMain';
import * as S from './Heap.styles';

function Heap() {
  const { heaps, heap } = useHeaps();

  return (
    <S.Heap>
      <Sidebar
        dataStructures={heaps}
        methods={{
          active: heap.active,
          set: heap.set,
          add: heap.add,
          remove: heap.remove,
        }}
        getPrototype={(ds, i) => (
          <Prototype key={`heap-${i}`} tree={ds} resume />
        )}
      />
      <HeapMain heaps={heaps} heap={heap} />
    </S.Heap>
  );
}

export default Heap;
