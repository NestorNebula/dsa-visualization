import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
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

  useEscape(() => {
    setOpened(false);
    setValue('');
  });

  return (
    <S.QueueMain>
      <DSAHeader
        title="Queue"
        resource="https://www.geeksforgeeks.org/queue-data-structure/"
      />
      <Informations>
        <div>
          Just like an office queue, once an item has "joined" the queue, all
          the items that have joined before it must be handled first.
        </div>
      </Informations>
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
