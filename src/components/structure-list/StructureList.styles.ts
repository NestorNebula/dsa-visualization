import styled from 'styled-components';

const StructureList = styled.section`
  display: flex;
  flex-direction: column;
  font-size: var(--fs-s);
`;
const Structure = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  justify-items: center;
  padding: 2rem 0;
  &:not(:last-of-type) {
    border-bottom: ${(props) => `1px solid ${props.theme.darkGrey}`};
  }
`;
const StructureButton = styled.button``;
const Delete = styled.button`
  justify-self: start;
  & > img {
    min-width: 1.5rem;
  }
`;
const Add = styled.button`
  & > img {
    justify-self: center;
    max-width: 2rem;
  }
`;

export { StructureList, Structure, StructureButton, Delete, Add };
