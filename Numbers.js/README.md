You can represent larger numbers clearer, if you wish, with the numeric separator (_). For example:
```js
let nb = 1_000_000; // 1000000 (1 million)
```
- Convert from a number to string: value.toString()
- NaN stands for Not a Number
- NaN is often a sign of a bug.

- To convert from a string to a number, you'd have to use the Number.parseInt() method
- This Number.parseInt() method expects 2 parameters:
```js
Number.parseInt(string, radix);
```
- The first parameter is the string that you'd like to convert into a number. The second argument is the radix (the base of the numerical system) that will be used in the conversion.

```js
let str = "42";
Number.parseInt(str, 10); //42
```
- Even though the radix is an optional parameter, you should not skip it. That's because it does not always default to 10.
- Make sure to always specify the radix to avoid unpleasant surprises
- Number.parseInt() and parseInt() are exactly the same thing. Prefer Number.parseInt() over parseInt().

- Number methods
```js
Math.round(2.1); // 2
Math.round(2.6); // 3
Math.round(2.5); // 3

Math.floor(2.1); // 2
Math.floor(2.6); // 2
Math.floor(2.5); // 2

Math.ceil(2.1); // 3
Math.ceil(2.6); // 3
Math.ceil(2.5); // 3
```