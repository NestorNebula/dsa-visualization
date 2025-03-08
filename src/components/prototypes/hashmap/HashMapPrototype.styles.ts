import styled from 'styled-components';

const HashMapPrototype = styled.div`
  display: grid;
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;
  gap: 0.5rem;

  & > div {
    display: flex;
    align-items: center;

    & > *:first-child {
      display: grid;
      place-content: center;
      border: 1px solid black;
      padding: 0.5rem 1.5rem;
      width: 5rem;
      height: 5rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    & > div > div::after {
      content: '' !important;
    }
  }
`;
const HashMapResume = styled.div`
  display: flex;
  gap: 0.5rem;

  &:has(div) > header::after {
    position: relative;
    content: 'HashMap: ';
  }

  &:not(:has(div)) > header::after {
    position: relative;
    content: 'Empty HashMap';
  }

  & > div {
    &::after {
      position: relative;
      content: ', ';
    }

    &:last-of-type::after {
      content: '...';
    }
  }
`;

export { HashMapPrototype, HashMapResume };
