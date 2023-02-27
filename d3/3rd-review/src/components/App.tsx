import '../style/App.css';
import { useCallback, useState } from 'react';
import useObservableQuery from '../hooks/useObservable';
import { Paginated, categories, swapiBaseUrl, Queries } from '../types/Swapi';
import fetchData from '../util/fetchData';
import SearchResults from './SearchResults';

const emptyState = { count: 0, results: [] };

function App() {
  const [apiData, setApiData] = useState<
    Array<categories> | Paginated<categories>
  >(emptyState);

  const [page, setPage] = useState(1); // paginated results

  const fetchSwapiData = useCallback((query: string) => {
    // is valid query string?
    if (Object.keys(Queries).includes(query)) {
      fetchData<categories>(swapiBaseUrl, query).then(setApiData);
    }
  }, []);

  const [query] = useObservableQuery('#search', fetchSwapiData);

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter a swapi category</p>
        <input id="search" placeholder="search" value={query} />
        <SearchResults
          query={query}
          apiData={apiData}
          page={page}
        ></SearchResults>
      </header>
    </div>
  );
}

export default App;
