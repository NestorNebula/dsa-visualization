import { type ChangeEvent, useState } from 'react';
import DSAHeader from '@components/dsa-header/DSAHeader';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import { Queue as Prototype } from '@components/prototypes';
import * as S from './QueueMain.styles';
import type { Queue } from '@services/data-structures';
import type { QueueMethods } from '#types/methods';

function QueueMain({
  queues,
  queue,
}: {
  queues: Queue[];
  queue: QueueMethods;
}) {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <S.QueueMain>
      <DSAHeader
        title="Queue"
        resource="https://www.geeksforgeeks.org/queue-data-structure/"
      />
      <OptionsList>
        {opened ? (
          <Form
            onSubmit={() => {
              if (value) {
                queue.enqueue(value);
                setValue('');
              }
              setOpened(false);
            }}
            name="Confirm enqueuing "
          >
            <Input
              name="enqueue"
              label="Enqueue (Add new element)"
              value={value}
              updateValue={updateValue}
            />
          </Form>
        ) : (
          <OptionsButton
            onClick={() => setOpened(true)}
            textVersion
            label="Enqueue (Add new element)"
          />
        )}
        <OptionsButton
          onClick={queue.dequeue}
          textVersion
          label="Dequeue (Remove first element)"
        />
      </OptionsList>
      <Prototype queue={queues[queue.active]} />
    </S.QueueMain>
  );
}

export default QueueMain;
