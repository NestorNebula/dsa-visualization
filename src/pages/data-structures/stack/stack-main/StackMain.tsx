import { type ChangeEvent, useState } from 'react';
import DSAHeader from '@components/dsa-header/DSAHeader';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import { Stack as Prototype } from '@components/prototypes';
import { plus } from '@assets/icons';
import * as S from './StackMain.styles';
import type { Stack } from '@services/data-structures';
import type { StackMethods } from '#types/methods';

function StackMain({
  stacks,
  stack,
}: {
  stacks: Stack[];
  stack: StackMethods;
}) {
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const [isOpened, setOpened] = useState(false);

  return (
    <S.StackMain>
      <DSAHeader
        title="Stack"
        resource="https://www.geeksforgeeks.org/stack-data-structure/"
      />
      <OptionsList>
        {isOpened ? (
          <Form
            onSubmit={() => {
              if (value) {
                stack.push(value);
                setValue('');
              }
              setOpened(false);
            }}
            name="Confirm adding item"
          >
            <Input name="add item" value={value} updateValue={updateValue} />
          </Form>
        ) : (
          <OptionsButton
            onClick={() => setOpened(true)}
            icon={plus}
            label="Add item"
          />
        )}
        <OptionsButton
          onClick={() => stack.pop()}
          textVersion
          label="Remove Last Item"
        />
      </OptionsList>
      <Prototype stack={stacks[stack.active]} />
    </S.StackMain>
  );
}

export default StackMain;
