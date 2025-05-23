import { type ChangeEvent, useEffect, useState } from 'react';
import { useEscape, useLinearSearch } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import SpeedBar, { type Status } from '@components/speed-bar/SpeedBar';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import { Array as Prototype } from '@components/prototypes';
import * as S from './LinearSearchMain.styles';
import type { Array } from '@services/data-structures';

function LinearSearchMain({ array }: { array: Array }) {
  const [status, setStatus] = useState<Status>('Paused');
  const updateStatus = (newStatus: Status) => {
    if (['Done', 'Failed'].includes(status)) return;
    setStatus(newStatus);
  };

  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState<string | number>(Infinity);
  const [tempValue, setTempValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.currentTarget.value);
  };

  const linearSearch = useLinearSearch(array, value ?? '');

  useEscape(() => {
    setOpened(false);
    setTempValue('');
  });

  useEffect(() => {
    switch (status) {
      case 'Active':
        linearSearch.setDelay(1000);
        linearSearch.start();
        break;
      case 'Faster':
        linearSearch.setDelay(500);
        break;
      case 'Paused':
        linearSearch.stop();
        break;
    }
  }, [status]);

  useEffect(() => {
    if (linearSearch.done) {
      setStatus(linearSearch.found ? 'Done' : 'Failed');
    }
  }, [linearSearch.done, linearSearch.found]);

  const isHighlighted = (index: number) => {
    return index === linearSearch.checked;
  };

  const isValid = (index: number) => {
    if (index < linearSearch.checked) {
      return false;
    } else if (index === linearSearch.checked && linearSearch.found) {
      return true;
    }
  };

  return (
    <S.LinearSearchMain>
      <DSAHeader
        title="Linear Search"
        resource="https://www.geeksforgeeks.org/linear-search/"
      />
      <Informations>
        <div>
          The Linear Search algorithm searches a value by looking at all the
          items one by one, from "left" to "right".
        </div>
      </Informations>
      <OptionsList>
        {opened ? (
          <Form
            onSubmit={() => {
              if (tempValue) {
                setValue(Number.isInteger(+tempValue) ? +tempValue : tempValue);
                if (value !== tempValue) setStatus('Paused');
              }
              setOpened(false);
            }}
            name={`Confirm searching ${tempValue}`}
          >
            <Input
              name="searched value"
              value={tempValue}
              updateValue={updateValue}
            />
          </Form>
        ) : (
          <OptionsButton
            onClick={() => setOpened(true)}
            textVersion
            label="Update searched value"
          />
        )}
      </OptionsList>
      <S.Search>Searching: {value}</S.Search>
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype
        array={array}
        isHighlighted={isHighlighted}
        isValid={isValid}
      />
    </S.LinearSearchMain>
  );
}

export default LinearSearchMain;
