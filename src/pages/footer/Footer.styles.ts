import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--fs-s);
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  padding: 1.5rem 0;
`;
const Cd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Cr = styled.div`
  font-size: var(--fs-m);
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & > a > img {
    min-width: 2.5rem;
  }
`;

export { Footer, Cd, Cr };
