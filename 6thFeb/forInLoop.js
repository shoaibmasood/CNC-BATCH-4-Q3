// const myArray = { firstName: 'Asad', lastName: 'Ikhlas', degrees: 2 }
// for (let i = 0; i < 3; i++) {
//   console.log(myArray[i])
// }


// const object = {a: 1, b: 2, c: 3};

// for (const property in object) {
//   console.log(property)
//     // console.log(property)
//   console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"d

// const array = [1, 2, 3, 70]
// for(const index in array){
//   console.log(index)
//   console.log(array[index])
// }

// FOR IN LOOP

/** ************************************************ */
// Try any part one at a time

// OLD "for" loop
// const myArray = { firstName: 'Umair', lastName: 'Ahmed', degrees: 2 }

// for (let i = 0; i < 3; i++) {
//   console.log(myArray[i])
// }
// RESULT:
// Undefined
// Undefined
// undefined

/** ************************************************ */
// New "for in" loop on object values

// const myArray = { firstName: "Umair", lastName: "Ahmed", degrees: 2 }

// for (i in myArray) {
//     console.log(myArray[i])
// }

// RESULT
// Umair
// Ahmed
// 2

/** ************************************************ */
// "For in" loop on Object keys

// const myArray = { firstName: "Umair", lastName: "Ahmed", degrees: 2 }

// for (i in myArray) {
//     console.log(i)
// }

// RESULT
// firstName
// lastName
// degrees

/** ************************************************ */
// "For in" loop on array

// const digits = ["a", "b", "c", "d", "e", "f", "g", "h"]

// for ( index in digits) {
//    console.log(digits[index]);
// }
// RESULT
// a
// b
// c
// d
// e
// f
// g
// h
