// interface ILogLeng {
//   length: number;
// }

// const logLenght = <T extends ILogLeng>(arg: T) => {
//   console.log(arg.length);
// };

// console.log(logLenght([1, 2, 3, 4, 5]));
// console.log(logLenght("VanNic"));
// console.log(logLenght(""));

// interface IAddFullName {
//   firstName: string;
//   lastName: string;
// }

// const addFullName = <P extends IAddFullName>(person: P) => {
//   return {
//     ...person,
//     fullName: `${person.firstName} ${person.lastName}`,
//   };
// };

// console.log(
//   addFullName({
//     firstName: "Mango",
//     lastName: "Doge",
//   })
// );

// console.log(
//   addFullName({
//     firstName: "Mango",
//     lastName: "Doge",
//     age: 2,
//   })
// );

export {};
