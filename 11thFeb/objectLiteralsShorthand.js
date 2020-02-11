// OBJECT LITERAL SHORTHAND

// const firstName = 'Asad'
// const lastName = 'Ikhlas'
// var degrees = 2

// /** ************************************************ */
// // Try any part one at a time

// const myObject = {
//   firstName: firstName,
//   lastName: lastName,
//   degrees: degrees
// }
// console.log(myObject) // RESULT: {firstName: "Asad", lastName: "Ikhlas", degrees: 2}

/** ************************************************ */

// const firstName = "Asad"
// let lastName = "Ikhlas"
// var degrees = 2

// let myObject = {
//     firstName,
//     lastName,
//     degrees
// }
// console.log(myObject)  //RESULT: {firstName: "Asad", lastName: "Ikhlas", degrees: 2}



// object literal initialization
const pet3 = {
    type: "guinea pig",
    name: "Holly",
    age: 6,
    greeting: "snuffle",
    sayHello: function() {
      return `${this.name} says 'hello' as ${this.greeting}`
    }
  }
  console.log(pet3);
  /* prints: { type: 'guinea pig',
  name: 'Holly',
  age: 6,
  greeting: 'snuffle',
  sayHello: [Function] } */
  console.log(pet3.sayHello());
  // prints: Holly says 'hello' as snuffle
  // object literal property and method assignment by variables
  const type = "fish";
  const name = "Nemo";
  const age = 2;
  const greeting = "bloop";
  function sayHello() {
    return `${this.name} says 'hello' as ${this.greeting}`;
  }
  const pet4 = {
    type: type,
    name: name,
    age: age,
    greeting: greeting,
    sayHello: sayHello
  }
  console.log(pet4);
  /* prints: { type: 'fish',
  name: 'Nemo',
  age: 2,
  greeting: 'bloop',
  sayHello: [Function: sayHello] } */
  console.log(pet4.sayHello()); 
  // prints: Nemo says 'hello' as bloop