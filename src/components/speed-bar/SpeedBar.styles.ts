import styled from 'styled-components';
import type { Status } from './SpeedBar';

const SpeedBar = styled.div`
  background-color: ${(props) => props.theme.timberwolf};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Button = styled.button`
  & > img {
    min-width: 5rem;
  }

  &:disabled {
    opacity: 0.25;
  }
`;
const Status = styled.div`
  color: transparent;
  position: absolute;
  z-index: -1;
`;

export { SpeedBar, Options, Button, Status };
