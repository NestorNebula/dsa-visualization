import styled from 'styled-components';

const OptionsDialog = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  position: absolute;
  display: flex;
  background-color: ${(props) => props.theme.lightGrey};

  & > * {
    padding: 0 0.5rem;
    border-right: ${(props) => `1px solid ${props.theme.darkGrey}`};
  }

  & > *:last-child {
    border-right: none;
  }

  & > form {
    font-size: var(--fs-s);
  }
`;

export { OptionsDialog };
