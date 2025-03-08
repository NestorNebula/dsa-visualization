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

  const isHighlighted = (value: number) => {
    return value === binarySearch.checked?.value && !binarySearch.done;
  };

  function checkValidity(subtree: typeof bst.root): boolean {
    if (!subtree) return true;
    const left = checkValidity(subtree.left);
    const right = checkValidity(subtree.right);
    const main = subtree.value !== binarySearch.checked?.value;
    return left && right && main;
  }

  const isValid = (value: number) => {
    if (value === binarySearch.checked?.value) {
      return true;
    } else {
      let node = bst.root;
      while (node && node.value !== value) {
        node = node.value > value ? node.left : node.right;
      }
      if (node) {
        const result = checkValidity(node);
        return !result ? result : undefined;
      }
    }
  };

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
      <Prototype tree={bst} isHighlighted={isHighlighted} isValid={isValid} />
    </S.BinarySearchMain>
  );
}

export default BinarySearchMain;
