import type { JSX } from 'react';
import { close, plus } from '@assets/icons';
import * as S from './StructureList.styles';

function StructureList({
  children,
  active,
  setActive,
  add,
  remove,
}: {
  active: number;
  setActive: (index: number) => void;
  remove: (index: number) => void;
  add: () => void;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <S.StructureList>
      {children ? (
        Array.isArray(children) ? (
          children.map((c, i) => (
            <S.Structure key={`array-structure${i}`}>
              <S.Delete
                aria-label="delete data structure"
                onClick={() => remove(i)}
              >
                <img src={close} alt="delete" />
              </S.Delete>
              <S.StructureButton
                aria-label={
                  i === active
                    ? 'active data structure'
                    : 'set data structure as active'
                }
                onClick={() => i !== active && setActive(i)}
              >
                {c}
              </S.StructureButton>
            </S.Structure>
          ))
        ) : (
          <S.Structure>
            <S.Delete
              aria-label="delete data structure"
              onClick={() => remove(0)}
            >
              <img src={close} alt="delete" />
            </S.Delete>
            <S.StructureButton aria-label="active data structure">
              {children}
            </S.StructureButton>
          </S.Structure>
        )
      ) : (
        <></>
      )}
      <S.Add aria-label="add new data structure" onClick={add}>
        <img src={plus} alt="add" />
      </S.Add>
    </S.StructureList>
  );
}

export default StructureList;
