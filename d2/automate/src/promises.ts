// Promises ES6 type

const go = (isOnIt: boolean) =>
  // Promises need a call-back function, either literal or named.
  new Promise((resolve, reject) => (isOnIt ? resolve('ok') : reject('oof')));

// exercise the code
go(true)
  .then((value) => {
    console.log(value);
  }) // promises are thenable, such that they can be chained together.
  .catch((error: Error) => {
    console.log(error.message);
  });

// promises are non blocking.
console.log('Excuse me coming through.');
