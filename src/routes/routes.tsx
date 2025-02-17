import type { RouteObject } from 'react-router';
import App from '../App';
import DataStructures from '@pages/data-structures/DataStructures';
import Error from '@pages/error/Error';
import Sperror from 'sperror';

const routes: RouteObject[] = [
  {
    index: true,
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/data-structures',
    element: <DataStructures />,
    errorElement: <Error />,
  },
  {
    path: '*',
    errorElement: <Error />,
    loader: () => {
      throw new Sperror('Not Found', 'Page not found', 404);
    },
  },
];

export default routes;
