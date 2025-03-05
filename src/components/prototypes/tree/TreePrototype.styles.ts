import styled from 'styled-components';

const TreePrototype = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
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

export { TreePrototype, Row, Container, EmptyNode, Link };
