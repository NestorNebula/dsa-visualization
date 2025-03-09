import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
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

  useEscape(() => {
    setOpened(false);
    setValue('');
  });

  return (
    <S.StackMain>
      <DSAHeader
        title="Stack"
        resource="https://www.geeksforgeeks.org/stack-data-structure/"
      />
      <Informations>
        <div>
          A stack works like a stack of books. You can add as much books as you
          want (even though there is generally a limit, e.g. the size of your
          home) but you must remove all the books on top of the book you want to
          access it.
        </div>
      </Informations>
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
          label="Remove Top of the Stack"
        />
      </OptionsList>
      <Prototype stack={stacks[stack.active]} />
    </S.StackMain>
  );
}

export default StackMain;
