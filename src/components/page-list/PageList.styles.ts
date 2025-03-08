import styled from 'styled-components';

const PageList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Title = styled.div`
  font-size: var(--fs-l);
  text-align: center;
`;
const Pages = styled.div`
  padding: 0 5rem;
  font-size: var(--fs-m);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 5rem;
`;

export { PageList, Title, Pages };
