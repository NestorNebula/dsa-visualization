import styled from 'styled-components';
import { CommonDSAMain } from '@styles/common-styles';

const MergeSortMain = styled(CommonDSAMain)`
  & > div:last-child > div::after {
    content: '';
  }
`;
const Level = styled.div`
  display: flex;
  gap: 2.5rem;

  & div::after {
    color: transparent;
  }
`;

export { MergeSortMain, Level };
