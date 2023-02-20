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
    const k = 'Protozoa'; // only one of above three values.
    const a = true;
    if (a)
        console.log(`My kingdom is ${k}.`);
}
{
    // enumeration type.
    let BoxSize;
    (function (BoxSize) {
        // indexed from 0, unless otherwise specified.
        BoxSize[BoxSize["Small"] = 12] = "Small";
        BoxSize[BoxSize["Medium"] = 13] = "Medium";
    })(BoxSize || (BoxSize = {}));
    // enums are extendible.
    (function (BoxSize) {
        BoxSize["Large"] = "ss";
        BoxSize[BoxSize["XLarge"] = 12] = "XLarge";
        BoxSize[BoxSize["XXLarge"] = 14] = "XXLarge";
    })(BoxSize || (BoxSize = {}));
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
    const numberToString = (n) => {
        // return n.toString(10);
        return `${n}`; // more efficient!
    };
    const sum = numberToString(10 + 30); // inferred string return type.
    console.log(`The sum is ${sum}, with a type of ${typeof sum}.`);
    const checkAge = (age) => {
        if (age > 100)
            return false;
        else if (age === 23)
            return 23;
        else
            return 'you what?';
    };
    console.log(checkAge(23), checkAge(101), checkAge(0));
    // optional parameters in TS.
    const optionalArgument = (option) => {
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
    let poem; // A poem these types in this particular order.
    poem = [24, false, 'love'];
}
