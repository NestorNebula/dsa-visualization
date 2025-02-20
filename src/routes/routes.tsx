import type { RouteObject } from 'react-router';
import Navbar from '@pages/navbar/Navbar';
import App from '../App';
import DataStructures from '@pages/data-structures/DataStructures';
import Array from '@pages/data-structures/array/Array';
import Error from '@pages/error/Error';
import Sperror from 'sperror';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/data-structures',
        element: <DataStructures />,
      },
      {
        path: '/data-structures/array',
        element: <Array />,
      },
      {
        path: '*',
        loader: () => {
          throw new Sperror('Not Found', 'Page not found', 404);
        },
      },
    ],
  },
];

export default routes;
