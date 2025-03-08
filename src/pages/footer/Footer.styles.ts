import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: var(--fs-s);
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  padding: 1.5rem 0;
`;
const Cd = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  gap: 0.5rem;

  & > * {
    min-width: max-content;
  }
`;
const Cr = styled.div`
  font-size: var(--fs-m);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  & > a > img {
    min-width: 2.5rem;
  }
`;

export { Footer, Cd, Cr };
