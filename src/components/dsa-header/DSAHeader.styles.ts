import styled, { keyframes } from 'styled-components';

const linkAnimation = keyframes`
from {
  transform: rotate(0deg);
}
33% {
  transform: rotate(30deg);
}
66% {
  transform: rotate(-30deg);
}
100% {
  transform: rotate(0deg);
}
`;

const DSAHeader = styled.header`
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
const Title = styled.div`
  font-size: var(--fs-l);
`;
const Link = styled.a`
  & > img {
    min-width: 3.5rem;
  }

  &:hover {
    animation: ${linkAnimation} 0.5s ease-in-out;
  }
`;

export { DSAHeader, Title, Link };
