import { useEffect, useState, SetStateAction, Dispatch } from 'react';
import { fromEvent, debounceTime, map } from 'rxjs';

const useObservableQuery = (
  selector: string,
  onPublish: (query: string) => void
): [string, Dispatch<SetStateAction<string>>] => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchBox = document.querySelector<HTMLInputElement>(selector);
    if (!searchBox || !(searchBox instanceof HTMLInputElement))
      throw new Error('Bad selector: Could not select an input element!');

    const textInput$ = fromEvent<
      Event & {
        target: HTMLInputElement;
      }
    >(searchBox, 'input')
      .pipe(
        map((event) => {
          const input = event.target.value;
          setQuery(input); // update the state
          return input; // passed to subscribers
        }),
        debounceTime(200)
      )
      .subscribe(onPublish);

    return () => textInput$.unsubscribe();
  }, [selector, onPublish]);

  return [query, setQuery];
};

export default useObservableQuery;

// import { useEffect, useState, SetStateAction, Dispatch } from 'react';
// import { fromEvent, debounceTime, map, tap } from 'rxjs';

// const useObservableQuery = (
//   selector: string,
//   onPublish: (query: string) => void
// ): [string, Dispatch<SetStateAction<string>>] => {
//   const [query, setQuery] = useState('');
//   useEffect(() => {
//     const searchBox = document.querySelector<HTMLInputElement>(selector);
//     if (!searchBox)
//       throw new Error('Bad selector: Could not select an input element!');

//     const textInput$ = fromEvent(searchBox, 'input')
//       .pipe(
//         map<Event, string>((event) => {
//           const input = event.target as HTMLInputElement;
//           setQuery(input.value);
//           return input.value;
//         }),
//         tap((item) => console.log(`${item}`)),
//         debounceTime(500)
//       )
//       .subscribe((value) => console.log(`subscription got ${value}`));

//     return () => textInput$.unsubscribe();
//   }, [selector, onPublish]);

//   return [query, setQuery];
// };

// export default useObservableQuery;
