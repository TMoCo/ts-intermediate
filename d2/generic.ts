{
  const zeroethElement = (array: Array<any>): any => array[0];
}

{
  // Using generics.
  const zeroethElement = <T>(array: Array<T>): T => array[0];

  const stringArray: Array<string> = [
    'Strawberry',
    'Raspberry',
    'Blueberry',
    'Gooseberry',
  ];

  const numberArray: Array<number> = [2, 3, 5, 8];

  console.log(zeroethElement(numberArray), zeroethElement(stringArray));
}
