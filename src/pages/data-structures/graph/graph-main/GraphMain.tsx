import { type ChangeEvent, useState } from 'react';
import { useEscape } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import { Form, Input } from '@components/forms';
import { OptionsButton, OptionsDialog, OptionsList } from '@components/options';
import { Graph as Prototype } from '@components/prototypes';
import { plus } from '@assets/icons';
import * as S from './GraphMain.styles';
import type { Graph } from '@services/data-structures';
import type { GraphMethods } from '#types/methods';

interface Vertex {
  type: 'Vertex';
  value: string | number;
}

interface Edge {
  type: 'Edge';
  values: (string | number)[];
}

function GraphMain({
  graphs,
  graph,
}: {
  graphs: Graph[];
  graph: GraphMethods;
}) {
  const [active, setActive] = useState<Vertex | Edge | null>(null);
  const [opened, setOpened] = useState<'Vertex' | 'Edge' | null>(null);
  const [value, setValue] = useState('');
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEscape(() => {
    setOpened(null);
    setValue('');
  });

  const onClick = (component: Vertex | Edge) => {
    if (
      active &&
      ((active.type === 'Vertex' &&
        component.type === 'Vertex' &&
        active.value === component.value) ||
        (active.type === 'Edge' &&
          component.type === 'Edge' &&
          active.values.toString() === component.values.toString()))
    ) {
      setActive(null);
    } else {
      setActive(component);
    }
  };

  const getOptions = (component: Vertex | Edge) => {
    if (
      component.type === 'Vertex' &&
      active?.type === 'Vertex' &&
      active.value === component.value
    ) {
      return (
        <OptionsDialog>
          {opened === 'Edge' ? (
            <Form
              onSubmit={() => {
                if (value) {
                  graph.addEdge(
                    active.value,
                    Number.isInteger(+value) ? +value : value
                  );
                }
                setValue('');
                setActive(null);
                setOpened(null);
              }}
              name="Confirm addind edge"
            >
              <Input
                name="Other vertex value"
                value={value}
                updateValue={updateValue}
              />
            </Form>
          ) : (
            <OptionsButton
              onClick={() => setOpened('Edge')}
              textVersion
              label="Add edge"
            />
          )}
          <OptionsButton
            onClick={() => {
              graph.removeVertex(active.value);
              setActive(null);
            }}
            textVersion
            label="Remove"
          />
        </OptionsDialog>
      );
    } else if (
      component.type === 'Edge' &&
      active?.type === 'Edge' &&
      JSON.stringify(active.values) === JSON.stringify(component.values)
    ) {
      return (
        <OptionsDialog>
          <OptionsButton
            onClick={() => {
              graph.removeEdge(component.values[0], component.values[1]);
              setActive(null);
            }}
            textVersion
            label="Remove edge"
          />
        </OptionsDialog>
      );
    } else {
      return <></>;
    }
  };

  return (
    <S.GraphMain>
      <DSAHeader
        title="Graph"
        resource="https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/"
      />
      <OptionsList>
        {opened === 'Vertex' ? (
          <Form
            onSubmit={() => {
              if (value) {
                graph.addVertex(Number.isInteger(+value) ? +value : value);
              }
              setValue('');
              setOpened(null);
            }}
            name="Confirm adding value"
          >
            <Input name="add value" value={value} updateValue={updateValue} />
          </Form>
        ) : (
          <OptionsButton
            onClick={() => setOpened('Vertex')}
            icon={plus}
            label="Add value"
          />
        )}
      </OptionsList>
      <Prototype
        key={`${graph.active}-${opened}-${active}`}
        graph={graphs[graph.active]}
        onClick={onClick}
        getOptions={getOptions}
      />
    </S.GraphMain>
  );
}

export default GraphMain;
