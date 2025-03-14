import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import { LinkedList as Prototype } from '@components/prototypes';
import { minus, plus } from '@assets/icons';
import * as S from './LinkedListMain.styles';
import type { LinkedList } from '@services/data-structures';
import type { LinkedListMethods } from '#types/methods';

function LinkedListMain({
  linkedLists,
  linkedList,
}: {
  linkedLists: LinkedList[];
  linkedList: LinkedListMethods;
}) {
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const [status, setStatus] = useState<'add' | 'delete' | null>(null);

  useEscape(() => {
    setStatus(null);
    setValue('');
  });

  return (
    <S.LinkedListMain>
      <DSAHeader
        title="Linked List"
        resource="https://www.geeksforgeeks.org/linked-list-data-structure/"
      />
      <Informations>
        <div>
          In a Linked List, every item is pointing at the next one. This makes
          it very useful for removing an element: You only have to link the
          previous element to the next element.
        </div>
        <div>
          In more complex Linked Lists (Doubly Linked List), nodes are also
          pointing to the node that precede them.
        </div>
      </Informations>
      <OptionsList>
        {status ? (
          <Form
            onSubmit={() => {
              if (value) {
                if (status === 'add') {
                  linkedList.addItem(value);
                } else if (status === 'delete') {
                  linkedList.removeItem(value);
                }
              }
              setStatus(null);
              setValue('');
            }}
            name={`Confirm ${
              status === 'delete' ? 'deleting item' : 'adding item'
            }`}
          >
            <Input
              name={status === 'delete' ? 'Remove item' : 'Add item'}
              value={value}
              updateValue={updateValue}
            />
          </Form>
        ) : (
          <>
            <OptionsButton
              onClick={() => setStatus('add')}
              icon={plus}
              label="Add Item"
            />
            <OptionsButton
              onClick={() => setStatus('delete')}
              icon={minus}
              label="Remove Item"
            />
          </>
        )}
      </OptionsList>
      <Prototype linkedList={linkedLists[linkedList.active]} />
    </S.LinkedListMain>
  );
}

export default LinkedListMain;
