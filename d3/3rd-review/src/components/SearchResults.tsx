import {
  categories,
  categoryKeys,
  Paginated,
  People,
  Planet,
  Species,
} from '../types/Swapi';

import Swapi from '../types/Swapi';

const Profiles = {
  planets: (profile: Planet) => {
    return <h2>{profile.name}</h2>;
  },
  people: (profile: People) => {
    return <h2>{profile.name}</h2>;
  },
  species: (profile: Species) => {
    return <h2>{profile.name}</h2>;
  },
};

const Profile = <T extends Swapi>({ profile }: { profile: T }) => {
  return <h2>{profile.name}</h2>;
};

const SearchResults: React.FunctionComponent<{
  query: string;
  apiData: Array<categories> | Paginated<categories>;
  page?: number;
}> = ({ query, apiData, page }) => {
  if ('results' in apiData) {
    return (
      <ul>
        {apiData.results.map((result, index) => (
          <li key={`${index}`}>{Profiles[query as categoryKeys](result)}</li>
        ))}
      </ul>
    );
  }

  return <p>Hello</p>;
};

export default SearchResults;
