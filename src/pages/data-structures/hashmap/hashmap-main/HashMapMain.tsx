import { type ChangeEvent, useState } from 'react';
import DSAHeader from '@components/dsa-header/DSAHeader';
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

  return (
    <S.HashMapMain>
      <DSAHeader
        title="HashMap"
        resource="https://www.masaischool.com/blog/understanding-hashmap-data-structure-with-examples/"
      />
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
