import Photo from './Photo';
// consume data from https://jsonplaceholder.typicode.com/photos

{
  // method to fetch data from an API using generics (no access to API's return structure) and promises
  // using async/await for asynchronous code (non-blocking)
  const fetchPhotos = async <T>(): Promise<Array<T> | Error> => {
    const ApiEndPointUrl = `https://jsonplaceholder.typicode.com/photos`; // inject variables into string
    try {
      const response = await fetch(ApiEndPointUrl); // get request

      return response.json(); // see Response object documentation
    } catch (error) {
      if (error) return error;
    } finally {
    }
  };

  // exercise the code
  fetchPhotos<Photo>()
    .then((response: Array<Photo> | Error) => {
      if (response instanceof Error) {
        console.log('Error');
      } else {
        const c = document.getElementById('content'); // this is hte 'article' tag
        const i = document.getElementById('thumbnail'); // this is hte 'img' tag
        console.log(c);
        console.log(i);
        c.innerHTML = response[0]['title']; // if TS cannot resolve properties, use square-bracket notation
        i.setAttribute('src', response[0].thumbnailUrl); // if TS can resolve, use dot-notation
        i.setAttribute('title', response[0].title);
        i.setAttribute('alt', response[0].title);
        // console.log(`We received ${response}`);
      }
    })
    .catch(() => {});
}
