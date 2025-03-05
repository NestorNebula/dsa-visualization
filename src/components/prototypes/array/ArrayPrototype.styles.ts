import styled from 'styled-components';

const Array = styled.div`
  & > div {
    display: flex;
    box-shadow: ${(props) => `0px 0px 5px ${props.theme.darkGrey}`};

    &:not(:has(div)) {
      box-shadow: none;

      &::after {
        position: relative;
        content: 'Empty Array';
      }
    }
  }
`;
const Item = styled.div`
  & > div:first-child {
    border: 1px solid black;
    border-left: none;
    padding: 0.5rem 1.5rem;
  }

  &:first-of-type > div:first-child {
    border-left: 1px solid black;
  }

  &:last-of-type {
    border-right: none;
  }
`;

export { Array, Item };
