import { type ChangeEvent, useState } from 'react';
import DSAHeader from '@components/dsa-header/DSAHeader';
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
  return (
    <S.LinkedListMain>
      <DSAHeader
        title="Linked List"
        resource="https://www.geeksforgeeks.org/linked-list-data-structure/"
      />
      <OptionsList>
        {status ? (
          <Form
            onSubmit={() => {
              if (status === 'add') {
                linkedList.addItem(value);
              } else if (status === 'delete') {
                linkedList.removeItem(value);
              }
              setStatus(null);
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
