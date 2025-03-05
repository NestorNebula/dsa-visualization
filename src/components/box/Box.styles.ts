import styled from 'styled-components';

const Box = styled.div<{ $active?: boolean }>`
  background-color: ${(props) =>
    props.$active ? props.theme.lightBlue : 'transparent'};
`;

export { Box };
