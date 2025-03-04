import styled from 'styled-components';

const App = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: var(--fs-m);
`;
const Header = styled.header`
  text-align: center;
`;
const Main = styled.main`
  line-height: 2;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  & > div {
    grid-column: 1 / 3;
  }

  & > a {
    text-decoration: underline;
    color: ${(props) => props.theme.darkBlue};

    &:hover {
      text-decoration: none;
    }
  }
`;

export { App, Header, Main, Links };
