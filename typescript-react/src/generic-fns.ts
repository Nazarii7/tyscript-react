//generic function with one parametr
//<T> - you can use only one type parametr
//const reverse = <T>(array: T[]) => {
// return [...array].reverse();
//};

//console.log(reverse([1, 2, 3, 4, 5]));
// console.log(reverse(["Mango", "Poly", "Ajax", "Kiwi"]));
// console.log(reverse([{ a: 1 }, { b: 2 }, { c: 3 }]));

//generic function with several parametrs
//<T, Y> - you can use several type
//const isEqual = <T, Y>(a: T, b: Y) => {
// return Object.is(a, b);
//};

//console.log(isEqual(3, 3));
//console.log(isEqual(3, "3"));

//arrow function with generics
// const makeArray = <T, Y>(a: T, b: Y) => {
//   return [a, b];
// };

// function decleration with generics
// function add<T, Y>(a: T, b: Y) {}

//console.log(makeArray(2, "3"));
//console.log(makeArray("Mango", "Poly"));
//console.log(makeArray(true, 5));

// const foo = <N, T>(mult: N, ...rest: T[]) => {};

// console.log(foo(2, [3, 2, 1]));
// console.log(foo(3, [1, 2, 3]));
// console.log(foo("mango", ["a", "b", "c"]));

export {};
