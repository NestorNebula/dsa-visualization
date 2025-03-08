import styled from 'styled-components';

const SpeedBar = styled.div`
  background-color: ${(props) => props.theme.lightGrey};
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
`;
const Status = styled.div``;

export { SpeedBar, Options, Button, Status };
