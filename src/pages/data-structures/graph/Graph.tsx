import { useGraphs } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import GraphMain from './graph-main/GraphMain';
import { Graph as Prototype } from '@components/prototypes';
import * as S from './Graph.styles';

function Graph() {
  const { graphs, graph } = useGraphs();

  return (
    <S.Graph>
      <title>DSA Visualization - Graph</title>
      <Sidebar
        key={graphs.length}
        dataStructures={graphs}
        methods={{
          active: graph.active,
          set: graph.set,
          add: graph.add,
          remove: graph.remove,
        }}
        getPrototype={(ds, i) => (
          <Prototype key={`graph-${i}`} graph={ds} resume />
        )}
      />
      <GraphMain
        key={`${graphs.length}-${graph.active}`}
        graphs={graphs}
        graph={graph}
      />
    </S.Graph>
  );
}

export default Graph;
