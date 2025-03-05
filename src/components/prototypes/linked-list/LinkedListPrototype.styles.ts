import styled from 'styled-components';

const LinkedList = styled.div`
  & > div {
    padding: 1rem;
    display: flex;
  }
`;
const Item = styled.div`
  display: flex;
  flex-shrink: 0;

  & > div {
    padding: 0.5rem 1.5rem;
    border: 1px solid black;
  }

  & > img {
    width: 3rem;
  }
`;

export { LinkedList, Item };
