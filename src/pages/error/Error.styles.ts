import styled from 'styled-components';

const Error = styled.main`
  display: grid;
  place-content: center;
  text-align: center;
  font-size: var(--fs-l);
  min-height: 100vh;

  & > a {
    color: ${(props) => props.theme.darkBlue};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  & + footer {
    position: relative;
    top: 10vh;
  }
`;

export { Error };
