{
  const a = 1;
  const b = 'some string';

  console.log(`a is a ${typeof a}, b is a ${typeof b}.`); // inferred types.
}

{
  let b = 'mutable';
  const a = 'immutable';
}

// custom types when need extra functionality.
{
  // literal type.
  type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista';
  const k: Kingdom = 'Protozoa'; // only one of above three values.
  // literals must be of the same shape, so a generic class eg Array needs more info.
  type Arbitrary = 'literally this' | 24 | true | Kingdom | Array<boolean>;
  const a: Arbitrary = true;

  if (a) console.log(`My kingdom is ${k}.`);
}

{
  // enumeration type.
  enum BoxSize {
    // indexed from 0, unless otherwise specified.
    Small = 12,
    Medium,
  }

  // enums are extendible.
  enum BoxSize {
    Large = 'ss',
    XLarge = 12,
    XXLarge = 14,
  }

  console.log(BoxSize);
}

{
  // mutable const literals, ok as long as its using some specific API!
  const array = [...'string'];
  array.splice(0, 3);
  console.log(array); // ['i','n','g']
}

{
  // Data types and functions, classes and interfaces.
  const numberToString = (n: number) => {
    // return n.toString(10);
    return `${n}`; // more efficient!
  };

  const sum = numberToString(10 + 30); // inferred string return type.
  console.log(`The sum is ${sum}, with a type of ${typeof sum}.`);

  type mishMash = boolean | number | string;
  const checkAge = (age: number): mishMash => {
    if (age > 100) return false;
    else if (age === 23) return 23;
    else return 'you what?';
  };

  console.log(checkAge(23), checkAge(101), checkAge(0));

  // optional parameters in TS.
  const optionalArgument = (option?: number): void => {
    if (option) {
      console.log(`Received an optional argument: ${option}.`);
    }
    console.log(`Received no optional arguments: ${option}.`); // option is undefined;
  };

  optionalArgument(1000);
  optionalArgument();
}

{
  // The TS Tuple.
  let poem: [number, boolean, string]; // A poem these types in this particular order.
  poem = [24, false, 'love'];
}
