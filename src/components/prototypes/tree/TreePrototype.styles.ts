import styled from 'styled-components';

const TreePrototype = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
  gap: 1rem;
`;
const Container = styled.div`
  position: relative;
`;
const EmptyNode = styled.div`
  width: 5rem;
`;
const Link = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: visible;
`;
const TreeResume = styled.div`
  display: flex;
  gap: 0.5rem;

  & > div:not(:last-child)::after {
    position: relative;
    content: ', ';
  }
`;

export { TreePrototype, Row, Container, EmptyNode, Link, TreeResume };
