import styled from 'styled-components';

const Informations = styled.div`
  background-color: ${(props) => props.theme.darkRed};
  color: ${(props) => props.theme.white};
  font-size: var(--fs-s);
  max-width: max(50%, 300px);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;
const Title = styled.div`
  font-size: var(--fs-m);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;

  & > img {
    filter: invert();
    min-width: 2rem;
  }
`;

export { Informations, Title, Content, CloseButton };
