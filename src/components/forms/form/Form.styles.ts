import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: var(--fs-m);
`;
const SubmitButton = styled.button`
  & > img {
    min-width: 3rem;
  }
`;

export { Form, SubmitButton };
