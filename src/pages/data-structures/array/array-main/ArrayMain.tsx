import { useState, type ChangeEvent } from 'react';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Prototype from '@components/prototypes/array/ArrayPrototype';
import { OptionsButton, OptionsDialog, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import type { Array } from '@services/data-structures';
import type { ArrayMethods, ArrayItemMethods } from '#types/methods';
import { plus } from '@assets/icons';
import * as S from './ArrayMain.styles';

function ArrayMain({
  arrays,
  array,
  item,
}: {
  arrays: Array[];
  array: ArrayMethods;
  item: ArrayItemMethods;
}) {
  const [addItem, setAddItem] = useState(false);
  const updateAddItem = () => {
    setValue('');
    setAddItem(true);
    setUpdateItem(false);
  };
  const [updateItem, setUpdateItem] = useState(false);
  const updateUpdateItem = () => {
    setValue(arrays[array.active][item.active!]);
    setUpdateItem(true);
    setAddItem(false);
  };
  const [value, setValue] = useState('');

  const getItemOptions = (index: number) => {
    return index === item.active ? (
      <OptionsDialog>
        {updateItem ? (
          <Form
            onSubmit={() => {
              item.update(Number.isInteger(+value) ? +value : value);
              setUpdateItem(false);
            }}
            name="Confirm Update"
          >
            <Input
              name="update"
              label="Update Value"
              value={value}
              updateValue={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.currentTarget.value)
              }
            />
          </Form>
        ) : (
          <>
            <OptionsButton
              onClick={updateUpdateItem}
              textVersion
              label="Update"
            />
            {index === 0 || index === arrays[array.active].length - 1 ? (
              <OptionsButton
                onClick={() => (index === 0 ? array.shift() : array.pop())}
                textVersion
                label="Delete"
              />
            ) : (
              <></>
            )}
          </>
        )}
      </OptionsDialog>
    ) : (
      <></>
    );
  };

  return (
    <S.ArrayMain>
      <DSAHeader
        title="Array"
        resource="https://www.geeksforgeeks.org/array-data-structure-guide/"
      />
      <OptionsList>
        {addItem ? (
          <Form
            onSubmit={() => {
              array.push(Number.isInteger(+value) ? +value : value);
              setAddItem(false);
            }}
            name={`Confirm adding ${value} in the array`}
          >
            <Input
              name="add"
              label="Add Item"
              value={value}
              updateValue={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.currentTarget.value)
              }
            />
          </Form>
        ) : (
          <OptionsButton onClick={updateAddItem} icon={plus} label="Add Item" />
        )}
      </OptionsList>
      <Prototype
        array={arrays[array.active]}
        onItemClick={item.set}
        getOptions={getItemOptions}
      />
    </S.ArrayMain>
  );
}

export default ArrayMain;
