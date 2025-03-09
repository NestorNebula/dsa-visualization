import styled from 'styled-components';

const Sidebar = styled.aside`
  margin: 0 2.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.timberwolf};
  height: fit-content;
  border-radius: 0.5rem;

  @media (min-width: 800px) {
    padding: 2.5rem;
    max-width: 25vw;
    overflow-x: hidden;
  }
`;

export { Sidebar };
