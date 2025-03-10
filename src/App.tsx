import { Link } from 'react-router';
import * as S from './App.styles';

function App() {
  return (
    <S.App>
      <title>DSA Visualization</title>
      <S.Header>Welcome to DSA Visualization!</S.Header>
      <S.Main>
        <div>
          This website was designed to help you visualize data structures and
          algorithms more easily.
        </div>
        <div>
          You will be able to see many data structures representations like
          Arrays, Binary Trees, Hashmaps... and to perform operations on them to
          see how they evolve.
        </div>
        <div>
          You will also see algorithms in action, like searching and sorting
          algorithms performed on these data structures.
        </div>
        <div>
          Each data structure can contain different values, that you can add,
          remove or change depending on the data structure (Try to interact with
          different parts of data structures to see what you can do!). You will
          also be able to create multiple variations of the same data structures
          to test them with different values.
        </div>
        <div>
          Everything you create or change will be saved for you to continue your
          work when you come back to the website.
        </div>
        <div>
          Each data structure/algorithm page will link to a resource to learn
          more about it.
        </div>
        <S.Links>
          <div>Start now!</div>
          <Link to="/data-structures">Data Structures</Link>
          <Link to="/algorithms">Algorithms</Link>
        </S.Links>
      </S.Main>
    </S.App>
  );
}

export default App;
