import type { JSX } from 'react';
import { close } from '@assets/icons';
import * as S from './StructureList.styles';

function StructureList({
  children,
  active,
  setActive,
  remove,
}: {
  active: number;
  setActive: (index: number) => void;
  remove: (index: number) => void;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <S.StructureList>
      {children ? (
        Array.isArray(children) ? (
          children.map((c, i) => (
            <S.Structure>
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
    </S.StructureList>
  );
}

export default StructureList;
