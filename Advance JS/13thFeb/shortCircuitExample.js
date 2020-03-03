//SHORT-CIRCUIT EVALUATION && ||

//Change gender value to see the different result
// let msg = (gender === 'male') && 'Short-circuit'
// console.log(msg)



// const gender = 'Female'
// let msg = (gender === 'male') || 'Short circuit'
// console.log(msg)


// const value = console.log("working") || 10
// console.log(value)
// console.log(value)




// const secondVal = console.log("second console") && 10
// console.log(secondVal)

// if (console.log("second console") && 10) {
//     console.log('yes')
// } else {
//     console.log('no')
// }


// var person = {
//     name: 'Jack',
//     age: 34,
//     job: 'abcd'
//   }
//   console.log(person.job || 'unemployed');




//   var person = {
//     name: 'Jack',
//     age: 34,
//     job: 'teacher'
//   }
//   console.log(person.job || 'unemployed');
  // teacher

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';

var f = a || b || c || d || e;

console.log(f);



// var a; // undefined (falsy value)
// var b = null; // null (falsy value)
// var c = undefined; undefined (falsy value)
// var d = 4; // number (NOT falsy)
// var e = 'five'; // assigment short circuits before reaching here