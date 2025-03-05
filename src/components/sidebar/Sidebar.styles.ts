import styled from 'styled-components';

const Sidebar = styled.aside`
  margin: 0 2.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: 0.5rem;
  overflow: scroll;

  @media (min-width: 800px) {
    padding: 2.5rem;
  }
`;

export { Sidebar };
