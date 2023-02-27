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
        target: HTMLInputElement; // ok, because the event is guaranteed to have a input element as target
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
