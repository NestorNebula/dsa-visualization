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
const Item = styled.div<{
  $highlight?: boolean;
  $compared?: boolean;
  $done?: boolean;
  $valid?: boolean;
}>`
  & > div:first-child {
    border: 1px solid black;
    border-left: none;
    padding: 0.5rem 1.5rem;
    background-color: ${(props) =>
      props.$valid === false
        ? props.theme.lightRed
        : props.$valid
        ? props.theme.green
        : props.$done
        ? props.theme.darkBlue
        : props.$compared
        ? props.theme.lightGrey
        : props.$highlight
        ? props.theme.lightBlue
        : 'transparent'};
    text-align: center;
  }

  &:first-of-type > div:first-child {
    border-left: 1px solid black;
  }

  &:last-of-type {
    border-right: none;
  }
`;

export { Array, Item };
