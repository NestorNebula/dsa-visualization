import styled from 'styled-components';

const Navbar = styled.nav`
  font-size: var(--fs-l);
  padding: 1rem 3rem;
  text-align: center;

  & > ul {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    & > * {
      width: 100%;
      display: grid;
      justify-content: center;
    }
  }
`;
const NavItem = styled.li`
  &:first-of-type {
    justify-content: start;
  }

  &:last-of-type {
    justify-content: end;
  }
`;
const Prev = styled.button`
  & > img {
    max-width: 5rem;
  }
`;
const Title = styled.div`
  font-family: 'Audiowide', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;
const Icon = styled.img`
  max-width: 10rem;
`;

export { Navbar, NavItem, Prev, Title, Icon };
