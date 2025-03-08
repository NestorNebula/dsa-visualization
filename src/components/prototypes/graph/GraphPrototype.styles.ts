import styled from 'styled-components';

const GraphPrototype = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 5rem;
`;
const Container = styled.div`
  position: relative;
  width: fit-content;

  & div:first-child:has(button) {
    z-index: 2;
    position: absolute;
    top: 100%;
  }
`;
const Edges = styled.div<{ $gap: number }>`
  position: absolute;
  top: ${(props) => `calc(50% + ${props.$gap}rem)`};
  left: ${(props) => `calc(50% + ${props.$gap}rem)`};
`;
const Edge = styled.div<{ $active?: boolean }>`
  & > svg {
    position: absolute;
    overflow: visible;
    height: 1px;
    width: 1px;

    & > line {
      stroke: ${(props) =>
        `${props.$active ? props.theme.lightBlue : 'black'}`};
    }
  }
`;
const GraphResume = styled.div`
  display: flex;
  gap: 0.5rem;

  &:has(div) > header::after {
    position: relative;
    content: 'Graph:';
  }

  &:not(:has(div)) > header::after {
    position: relative;
    content: 'Empty Graph';
  }

  & > div:not(:last-child)::after {
    position: relative;
    content: ', ';
  }
`;

export { GraphPrototype, Container, Edges, Edge, GraphResume };
