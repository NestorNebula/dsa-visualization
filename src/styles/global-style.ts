import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Afacad';
    src: url('/fonts/Afacad/static/Afacad-Regular.ttf');
  }

  @font-face {
    font-family: 'Audiowide';
    src: url('/fonts/Audiowide/Audiowide-Regular.ttf');
  }

  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa/static/Comfortaa-Regular.ttf');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    font-family: inherit;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.white};
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  :root {
    font-size: 62.5%;
    --fs-l: clamp(2.25rem, 2.5vw + 1rem, 5rem);
    --fs-m: clamp(1.25rem, 1.5vw + 0.25rem, 2.5rem);
    --fs-s: clamp(0.85rem, 1vw + 0.05rem, 1.75rem);
    font-family: 'Afacad', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.darkBlue};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: inherit;
    padding: 0;
  }

  button:hover {
    cursor: pointer;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
