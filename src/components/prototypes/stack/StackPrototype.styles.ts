import styled from 'styled-components';

const StackPrototype = styled.div`
  & > div {
    border: 1px solid black;
    border-top: none;
    display: flex;
    flex-direction: column-reverse;
    min-width: 10rem;
    padding: 1rem;

    & > div {
      text-align: center;
      width: 100%;
      padding: 0.5rem;
      border: 1px solid black;
    }
  }

  & > div:not(:has(div))::after {
    position: relative;
    content: 'Empty Stack';
  }
`;

export { StackPrototype };
