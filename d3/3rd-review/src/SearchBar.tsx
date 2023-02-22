import { useCallback } from 'react';
import useObservableQuery from './useObservable';

const SearchBar = () => {
  const fetchSwapiData = useCallback(
    (value: string) => console.log(`subscription got ${value}`),
    []
  );

  const [query] = useObservableQuery('#search', fetchSwapiData);

  return <input id="search" placeholder="search" value={query} />;
};

export default SearchBar;
