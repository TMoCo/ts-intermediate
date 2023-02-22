import { fromEvent, debounceTime, map, tap } from 'rxjs';

{
  const testData: string[] = [
    'people',
    'planets',
    'species',
    'vehicles',
    'starships',
  ];

  // we need to grab som DOM elements using their id.
  const searchBox = <HTMLInputElement>document.querySelector('#search');
  const resultsList = document.querySelector('#results') as HTMLElement;

  const notEmpty = (input: string) => input && input.trim().length > 0;

  const sendRequest = (array: string[], query: string) => {
    return array.filter((item) => query.length > 0 && item.startsWith(query));
  };
  const appendResults = (container: HTMLElement, results: string[]) => {
    results.forEach((result) => {
      const li = document.createElement('li');
      const text = document.createTextNode(result);
      li.appendChild(text);
      container.appendChild(li);
    });
  };

  const cleanUp = (container: HTMLElement) => {
    while (container.childElementCount > 0) {
      container.removeChild(container.firstChild as HTMLElement);
    }
  };

  // we can make an observable calle keyStream$ where the dollar is conventional
  const keyStream$ = fromEvent(searchBox, 'input').pipe(
    debounceTime(500),
    map((event) => {
      const input = event.target as HTMLInputElement;
      return input.value;
    }),
    tap((item) => console.log(`Received ${item}`)),
    map((query) => sendRequest(testData, query))
  );

  keyStream$.subscribe((result) => {
    cleanUp(resultsList);
    appendResults(resultsList, result);
  });
}
