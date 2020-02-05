// var ===> function-scope
//let, const ===> block-scope



// let a = 'Fred Flinstone'; // This is a global variable
// function alpha() {
//     console.log(a);
// }
// alpha(); // Outputs 'Fred Flinstone'



// window.b ='asad'
// console.log(b)


// let d = 'Asad';
// function zeta() {
//     console.log(d)
// 	if (d === undefined) {
//         d = 'Umair';
//         console.log(d)
// 	}
// 	console.log(d);
// }
// zeta()
// console.log(d)



// var a = 'Daffy Duck'; // a global variable
// function delta(b) {
//     // b is a locally scoped variable to delta
//     console.log(b);
// }
// function epsilon() {
//     // c is declared as a locally scoped variable to epsilon
//     var c = 'Bugs Bunny';
//     console.log(c);
// }
// delta(a); // Outputs 'Daffy Duck'
// epsilon(); // Outputs 'Bugs Bunny'
// console.log(b); // Throws an error as b is undefined in the global scope


// const a = 10
// a = 9
// console.log(a)


// CONST

// Excellent article on LET, CONST, Variable
// https://andy-carter.com/blog/variable-scope-in-modern-javascript



/************************************************** */
// Try any part one at a time

// const myname = 'Asad'; // Declare and Initialize variable
// console.log(myname)     // result: Asad





/************************************************** */
// const myname        // Declare variable
// myname = 'Asad';   // Initialize variable
// console.log(myname) // RESULT: Missing initializer in const declaration




/************************************************** */
// myname = 'Asad';   // Initialize variable
// console.log(myname) // RESULT: Missing initializer in const declaration
// const myname        // Declare variable





/************************************************** */
// myname = 'Asad';    // Initialize variable
// const myname         // Declare variable
// console.log(myname)  // RESULT: Missing initializer in const declaration


// const a = 10
// let b = 8

// a = 15
// b = 18

// console.log(b)
// console.log(a)

// const obj = {
//     name: 'asad',
//     age: 23
// }

// obj.name = 'umair'
// console.log(obj)

// const SomeArray = ['asad', 'age']
// SomeArray[0] = 'umair'
// console.log(SomeArray)
