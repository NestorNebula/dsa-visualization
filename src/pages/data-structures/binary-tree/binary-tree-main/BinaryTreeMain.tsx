import { type ChangeEvent, useState } from 'react';
import DSAHeader from '@components/dsa-header/DSAHeader';
import { Form, Input } from '@components/forms';
import { OptionsButton, OptionsList, OptionsDialog } from '@components/options';
import { Tree as Prototype } from '@components/prototypes';
import { plus } from '@assets/icons';
import * as S from './BinaryTreeMain.styles';
import type { BinaryTree } from '@services/data-structures';
import type { BinaryTreeMethods } from '#types/methods';

function BinaryTreeMain({
  binaryTrees,
  binaryTree,
}: {
  binaryTrees: BinaryTree[];
  binaryTree: BinaryTreeMethods;
}) {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const [activeValue, setActiveValue] = useState<number | null>(null);

  const getOptions = (val: number) => {
    if (val === activeValue) {
      return (
        <OptionsDialog>
          <OptionsButton
            onClick={() => binaryTrees[binaryTree.active].remove(val)}
            textVersion
            label="Remove value"
          />
        </OptionsDialog>
      );
    } else {
      return <></>;
    }
  };

  return (
    <S.BinaryTreeMain>
      <DSAHeader
        title="Binary Tree"
        resource="https://www.geeksforgeeks.org/binary-tree-data-structure/"
      />
      <OptionsList>
        {opened ? (
          <Form
            onSubmit={() => {
              if (value && Number.isInteger(+value)) {
                binaryTree.addValue(+value);
              }
              setValue('');
              setOpened(false);
            }}
            name="Confirm adding value"
          >
            <Input name="Add Value" value={value} updateValue={updateValue} />
          </Form>
        ) : (
          <OptionsButton
            onClick={() => setOpened(true)}
            icon={plus}
            label="Add value"
          />
        )}
        <OptionsButton
          onClick={() => binaryTrees[binaryTree.active].rebalance()}
          textVersion
          label="Rebalance"
        />
      </OptionsList>
      <Prototype
        tree={binaryTrees[binaryTree.active]}
        onNodeClick={setActiveValue}
        getOptions={activeValue ? getOptions : undefined}
      />
    </S.BinaryTreeMain>
  );
}

export default BinaryTreeMain;
