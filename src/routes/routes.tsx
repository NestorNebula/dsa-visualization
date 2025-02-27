import type { RouteObject } from 'react-router';
import Navbar from '@pages/navbar/Navbar';
import App from '../App';
import DataStructures from '@pages/data-structures/DataStructures';
import Array from '@pages/data-structures/array/Array';
import LinkedList from '@pages/data-structures/linked-list/LinkedList';
import HashMap from '@pages/data-structures/hashmap/HashMap';
import Stack from '@pages/data-structures/stack/Stack';
import Queue from '@pages/data-structures/queue/Queue';
import BinaryTree from '@pages/data-structures/binary-tree/BinaryTree';
import Heap from '@pages/data-structures/heap/Heap';
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
        path: '/data-structures/linked-list',
        element: <LinkedList />,
      },
      {
        path: '/data-structures/hashmap',
        element: <HashMap />,
      },
      {
        path: '/data-structures/stack',
        element: <Stack />,
      },
      {
        path: 'data-structures/queue',
        element: <Queue />,
      },
      {
        path: 'data-structures/binary-tree',
        element: <BinaryTree />,
      },
      {
        path: 'data-structures/heap',
        element: <Heap />,
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
