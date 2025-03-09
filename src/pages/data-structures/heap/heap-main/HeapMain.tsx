import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import { Tree as Prototype } from '@components/prototypes';
import { plus, revert } from '@assets/icons';
import * as S from './HeapMain.styles';
import type { Heap } from '@services/data-structures';
import type { HeapMethods } from '#types/methods';

function HeapMain({ heaps, heap }: { heaps: Heap[]; heap: HeapMethods }) {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEscape(() => {
    setOpened(false);
    setValue('');
  });

  return (
    <S.HeapMain>
      <DSAHeader
        title={heaps[heap.active].type === 'MAX' ? 'Max Heap' : 'Min Heap'}
        resource="https://www.geeksforgeeks.org/heap-data-structure/"
      />
      <Informations>
        <div>
          Heaps are Binary Trees where each node childs are less than or equal
          to the node value in the case of a Max Heap, or bigger than or equal
          to the node value for a Min Heap.
        </div>
      </Informations>
      <OptionsList>
        {opened ? (
          <Form
            onSubmit={() => {
              if (value && Number.isInteger(+value)) {
                heap.addValue(+value);
              }
              setValue('');
              setOpened(false);
            }}
            name="Confirm adding value"
          >
            <Input name="add value" value={value} updateValue={updateValue} />
          </Form>
        ) : (
          <OptionsButton
            onClick={() => setOpened(true)}
            icon={plus}
            label="Add Value"
          />
        )}
        <OptionsButton
          onClick={heap.extract}
          textVersion
          label={`Extract ${heaps[heap.active].type.toLowerCase()} value`}
        />
        <OptionsButton
          onClick={heap.revert}
          icon={revert}
          label={`Revert to ${
            heaps[heap.active].type === 'MAX' ? 'min' : 'max'
          } heap`}
        />
      </OptionsList>
      <Prototype
        key={`${heaps[heap.active].heap}-${opened}`}
        tree={heaps[heap.active]}
      />
    </S.HeapMain>
  );
}

export default HeapMain;
