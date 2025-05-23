import styled from 'styled-components';

const Node = styled.div<{
  $active?: boolean;
  $button?: boolean;
  $valid?: boolean;
}>`
  --size: 6rem;
  border: 1px solid black;
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: ${(props) =>
    props.$active
      ? props.theme.lightBlue
      : props.$valid
      ? props.theme.green
      : props.$valid === false
      ? props.theme.lightRed
      : 'white'};

  &:hover {
    cursor: ${(props) => (props.$button ? 'pointer' : 'default')};
  }

  & + div:not(:has(svg)) {
    z-index: 2;
  }
`;

export { Node };
