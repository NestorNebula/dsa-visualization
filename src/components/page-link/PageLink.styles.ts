import styled from 'styled-components';

const PageLink = styled.button`
  display: grid;
  place-content: center;
  gap: 2rem;
`;
const Title = styled.div`
  font-size: var(--fs-l);
  transition: background-color 0.5s ease-in, color 0.25s ease-in;
  font-family: 'Comfortaa', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;
const IconContainer = styled.div`
  border: ${(props) => `10px solid ${props.theme.darkBlue}`};
  border-radius: 100%;
  transition: transform 0.2s ease-in;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;
const Icon = styled.img`
  padding: 5rem;
`;

export { PageLink, Title, IconContainer, Icon };
