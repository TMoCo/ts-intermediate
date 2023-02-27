import Swapi, { Paginated } from '../types/Swapi';

const fetchData = async <T extends Swapi>(
  baseUrl: string,
  query: string
): Promise<Array<T> | Paginated<T>> => {
  return fetch(`${baseUrl}${query}`)
    .then((response) => response.json())
    .catch((error) => {});
};

export default fetchData;
