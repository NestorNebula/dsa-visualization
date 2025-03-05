import styled from 'styled-components';

const PageLink = styled.button`
  padding: 2rem;
  display: grid;
  place-content: center;
  position: relative;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;
const Title = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  font-size: var(--fs-l);
  background-color: rgba(145, 163, 176, 0.4);
  border-radius: 3rem;
  transition: background-color 0.5s ease-in, color 0.25s ease-in;

  &:hover {
    background-color: transparent;
    color: transparent;
  }
`;
const Icon = styled.img``;

export { PageLink, Title, Icon };
