import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
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

  useEscape(() => {
    setOpened(false);
    setValue('');
  });

  const getOptions = (val: number) => {
    if (val === activeValue) {
      return (
        <OptionsDialog>
          <OptionsButton
            onClick={() => binaryTree.removeValue(val)}
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
      <Informations>
        <div>
          The trees represented here are Binary Search Trees, meaning that every
          left node is smaller and every right node greater. Normal Binary Trees
          don't have to use that logic but as BST are the most common, it was
          decided to use them as default.
        </div>
        <div>
          Rebalancing a tree means changing the position of its nodes to make
          sure that no subtree is too deep compared to the others.
        </div>
      </Informations>
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
          onClick={() => {
            binaryTree.rebalance();
            setActiveValue(activeValue ? null : 0.5);
          }}
          textVersion
          label="Rebalance"
        />
      </OptionsList>
      <Prototype
        key={`${binaryTree.active}-${value}-${
          binaryTrees[binaryTree.active].root?.value
        }-${activeValue}`}
        tree={binaryTrees[binaryTree.active]}
        onNodeClick={(val) => setActiveValue(activeValue !== val ? val : null)}
        getOptions={activeValue !== undefined ? getOptions : undefined}
      />
    </S.BinaryTreeMain>
  );
}

export default BinaryTreeMain;
