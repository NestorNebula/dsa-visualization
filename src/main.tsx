import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from '@routes/routes';
import Footer from '@pages/footer/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global-style';
import theme from '@styles/theme';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  </StrictMode>
);
