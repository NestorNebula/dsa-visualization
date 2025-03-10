import { useLinkedLists } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import LinkedListMain from './linked-list-main/LinkedListMain';
import { LinkedList as Prototype } from '@components/prototypes';
import * as S from './LinkedList.styles';

function LinkedList() {
  const { linkedLists, linkedList } = useLinkedLists();

  return (
    <S.LinkedList>
      <title>DSA Visualization - Linked List</title>
      <Sidebar
        dataStructures={linkedLists}
        methods={{
          active: linkedList.active,
          set: linkedList.set,
          add: linkedList.add,
          remove: linkedList.remove,
        }}
        getPrototype={(ds, i) => (
          <Prototype key={`linked-list${i}`} linkedList={ds} />
        )}
      />
      <LinkedListMain linkedLists={linkedLists} linkedList={linkedList} />
    </S.LinkedList>
  );
}

export default LinkedList;
