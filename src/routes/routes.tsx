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
import Graph from '@pages/data-structures/graph/Graph';
import Algorithms from '@pages/algorithms/Algorithms';
import BubbleSort from '@pages/algorithms/bubble-sort/BubbleSort';
import SelectionSort from '@pages/algorithms/selection-sort/SelectionSort';
import InsertionSort from '@pages/algorithms/insertion-sort/InsertionSort';
import MergeSort from '@pages/algorithms/merge-sort/MergeSort';
import LinearSearch from '@pages/algorithms/linear-search/LinearSearch';
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
        path: 'data-structures/graph',
        element: <Graph />,
      },
      {
        path: 'algorithms',
        element: <Algorithms />,
      },
      {
        path: 'algorithms/bubble-sort',
        element: <BubbleSort />,
      },
      {
        path: 'algorithms/selection-sort',
        element: <SelectionSort />,
      },
      {
        path: 'algorithms/insertion-sort',
        element: <InsertionSort />,
      },
      {
        path: 'algorithms/merge-sort',
        element: <MergeSort />,
      },
      {
        path: 'algorithms/linear-search',
        element: <LinearSearch />,
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
