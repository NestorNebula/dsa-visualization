import { useStacks } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import StackMain from './stack-main/StackMain';
import { Stack as Prototype } from '@components/prototypes';
import * as S from './Stack.styles';

function Stack() {
  const { stacks, stack } = useStacks();

  return (
    <S.Stack>
      <title>DSA Visualization - Stack</title>
      <Sidebar
        dataStructures={stacks}
        methods={{
          active: stack.active,
          set: stack.set,
          add: stack.add,
          remove: stack.remove,
        }}
        getPrototype={(ds, i) => <Prototype key={`stack-${i}`} stack={ds} />}
      />
      <StackMain stacks={stacks} stack={stack} />
    </S.Stack>
  );
}

export default Stack;
