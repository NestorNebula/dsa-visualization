import styled from 'styled-components';

const CommonDSA = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const CommonDSAMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  font-size: var(--fs-m);
`;

export { CommonDSA, CommonDSAMain };
