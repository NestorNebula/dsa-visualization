import { type ChangeEvent, useEffect, useState } from 'react';
import { useBinarySearch } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import { OptionsButton, OptionsList } from '@components/options';
import { Form, Input } from '@components/forms';
import SpeedBar, { type Status } from '@components/speed-bar/SpeedBar';
import { Tree as Prototype } from '@components/prototypes';
import * as S from './BinarySearchMain.styles';
import type { BinaryTree } from '@services/data-structures';

function BinarySearchMain({ bst }: { bst: BinaryTree }) {
  const [status, setStatus] = useState<Status>('Paused');
  const updateStatus = (newStatus: Status) => {
    if (['Done', 'Failed'].includes(status)) return;
    setStatus(newStatus);
  };

  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState(Infinity);
  const [tempValue, setTempValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.currentTarget.value);
  };

  const binarySearch = useBinarySearch(bst, value);

  useEffect(() => {
    switch (status) {
      case 'Active':
        binarySearch.setDelay(1000);
        binarySearch.start();
        break;
      case 'Faster':
        binarySearch.setDelay(500);
        break;
      case 'Paused':
        binarySearch.stop();
        break;
    }
  }, [status]);

  useEffect(() => {
    if (binarySearch.done) {
      setStatus(binarySearch.found ? 'Done' : 'Failed');
    }
  }, [binarySearch.done]);

  return (
    <S.BinarySearchMain>
      <DSAHeader
        title="Binary Search"
        resource="https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/"
      />
      <OptionsList>
        {opened ? (
          <Form
            onSubmit={() => {
              if (tempValue && Number.isInteger(+tempValue)) {
                setValue(+tempValue);
                if (value !== +tempValue) setStatus('Paused');
              } else {
                setTempValue('');
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
            label="Update Searched Value"
          />
        )}
      </OptionsList>
      <S.Search>Searching: {value}</S.Search>
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype tree={bst} />
    </S.BinarySearchMain>
  );
}

export default BinarySearchMain;
