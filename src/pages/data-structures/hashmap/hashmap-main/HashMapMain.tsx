import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import { HashMap as Prototype } from '@components/prototypes';
import { minus, plus } from '@assets/icons';
import * as S from './HashMapMain.styles';
import type { HashMap } from '@services/data-structures';
import type { HashMapMethods } from '#types/methods';

function HashMapMain({
  hashMaps,
  hashMap,
}: {
  hashMaps: HashMap[];
  hashMap: HashMapMethods;
}) {
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const [status, setStatus] = useState<'add' | 'remove' | null>(null);

  useEscape(() => {
    setStatus(null);
    setValue('');
  });

  return (
    <S.HashMapMain>
      <DSAHeader
        title="HashMap"
        resource="https://www.masaischool.com/blog/understanding-hashmap-data-structure-with-examples/"
      />
      <Informations>
        <div>
          Hashmap "keys" can be anything. For the sake of simplicity and better
          understanding of the concept, it was decided to use letters, but
          numbers or full words/expressions could also have been used.
        </div>
        <div>
          The process to attribute a bucket to a value is called Hashing and is
          using a Hash function. Here, the Hash function is looking at the
          word's first letter and add it to the corresponding bucket.
        </div>
      </Informations>
      <OptionsList>
        {status ? (
          <Form
            onSubmit={() => {
              if (value) {
                if (status === 'add') {
                  hashMap.addValue(value);
                } else {
                  hashMap.removeValue(value);
                }
                setStatus(null);
                setValue('');
              }
            }}
            name={`confirm ${
              status === 'remove' ? 'adding' : 'removing'
            } value`}
          >
            <Input
              name={`${status === 'remove' ? 'Remove' : 'Add'} value`}
              value={value}
              updateValue={updateValue}
            />
          </Form>
        ) : (
          <>
            <OptionsButton
              onClick={() => setStatus('add')}
              icon={plus}
              label="add value"
            />
            <OptionsButton
              onClick={() => setStatus('remove')}
              icon={minus}
              label="remove value"
            />
          </>
        )}
      </OptionsList>
      <Prototype hashMap={hashMaps[hashMap.active]} isMain />
    </S.HashMapMain>
  );
}

export default HashMapMain;
