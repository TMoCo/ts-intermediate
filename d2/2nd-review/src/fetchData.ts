const fetchData = async <T>(suffix: string): Promise<Array<T> | Error> => {
  const ApiEndPointUrl = `https://jsonplaceholder.typicode.com/${suffix}`;
  try {
    const response = await fetch(ApiEndPointUrl);

    return response.json();
  } catch (error) {
    if (error) return error;
  } finally {
  }
};

export default fetchData;
