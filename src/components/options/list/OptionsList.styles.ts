import styled from 'styled-components';

const OptionsList = styled.div`
  display: flex;
  gap: 1rem;

  & > button {
    background-color: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.white};
    padding: 0.5rem 1rem;
    border-radius: 10px;

    & > img {
      filter: invert();
    }
  }
`;

export { OptionsList };
