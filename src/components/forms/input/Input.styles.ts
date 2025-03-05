import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;
const Input = styled.input`
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.darkGrey}`};
  outline: none;
  background-color: transparent;

  &:placeholder-shown + label {
    left: 0.5rem;
    top: 0.25rem;
  }

  &:not(:placeholder-shown) + label {
    display: none;
  }
`;
const Label = styled.label`
  position: absolute;
`;

export { Container, Input, Label };
