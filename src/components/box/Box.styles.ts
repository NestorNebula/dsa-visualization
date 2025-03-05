import styled from 'styled-components';

const Box = styled.div<{ $active?: boolean; $button?: boolean }>`
  background-color: ${(props) =>
    props.$active ? props.theme.lightBlue : 'transparent'};

  &:hover {
    cursor: ${(props) => (props.$button ? 'pointer' : 'default')};
  }
`;

export { Box };
