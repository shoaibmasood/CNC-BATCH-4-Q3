//BRACKET NOTATIONS ACCESS THE VALUES INTO OBJECT THROUGHT VARIABLE


// const obj = {
//     123: 'digit',
//     name123: 'does not start with digit',
//     $name: '$ sign',
//     NAME: 'upper case',
//     name: 'lower case'
//   };


// console.log(obj['123']) //digit
// console.log(obj['name123']); // ✅ 'does not start with digit'
// console.log(obj['$name']);   // ✅ '$ sign'
// console.log(obj['NAME']); // ✅ 'upper case'
// console.log(obj['name']); // ✅ 'lower case'



// const variable = 'name';
// const obj = {
//   name: 'value'
// };

// // Bracket Notation
// console.log(obj[variable])
// console.log(obj.variable)

const variable = 'name';
const obj = {
  name: 'value',
  variable: '👻'
};
// Bracket Notation
console.log(obj[variable]);
console.log(obj.variable)