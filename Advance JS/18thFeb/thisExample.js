// THIS keyword

// Article to read
//https://alligator.io/js/this-keyword/
//https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c


// "this" is the global object in non-strict mode, and undefined in strict mode
// As a side note, variables declared with let or const at the global level are not 
// stored in the global object, but instead in an inaccessible declarative environment 
// record, so our following example will give us a different result when using 
// let name = "Asad" instead of var name = "Asad"


// try replacing following var name = "Asad" with let name = "Asad" for differnt result
// make sure you close your browser window after changing var with let
// because when at first you declared "var name" it went to global window object
// and when you changed it to "let name", the "var name" in global window object is already
// present. so same value will produced even after changing var to let.
// So close to browser tab and open a new window for fresh global window object



// var name = "Asad"
// 'use strict';
// let abc = {
//     name: "Ikhlas",
//     welcomeMsg: function () {
//         return console.log(this)
//     },
//     welcomeMsgArrow: () => {
//         return console.log(this.name)
//     }
// }   

// let msg = abc.welcomeMsgArrow()
// msg = abc.welcomeMsgArrow()
// console.log(msg)



// console.log(this.document === document)
// console.log(this === window)

// this.a = 37
// console.log(window.a)

// function myFunc(){
//     'use strict';
//     return this
// }

// console.log(myFunc())

// function newFunc(a){
//     this.a = 10
//     console.log(a)
// }

// newFunc(20)

// const obj = {
//     name: 10,
//     met: function(){
//      return console.log(this.name)
//     }
// }

// obj.met()


// const circle = {
//     radius: 10,
//     getArea: function () {
//         console.log('RADIUS IN GET AREA FUN', radius)
//         return Math.PI * this.radius * this.radius;
//     },
//     color: "orange",
//     getCircumference: function () {
//         console.log('RADIUS IN OBJ', this.radius)
//         return 2 * Math.PI * this.radius;
//     }
// };

// const { getArea, radius} = circle
// console.log(getArea())

// console.log(this);
// const { radius , getCircumference, color } = circle;
// console.log(circle.getArea());
// console.log(getCircumference())


// const sum = () => {
//         var add = 2 + 2
//         console.log(`sum of two num ${add}`)
//         console.log(this)
// } 

// sum()

// const myObj = {
//     name: 'Asad',
//     Qualification: 'software engineer',
//     sum: function(){
//         var add = 2 + 2
//         console.log(`sum of two num ${add}`)
//         console.log(this.name)
//         console.log(this)
//     }
// }

// myObj.sum()





// console.log(this)
// console.log(this === window)

// const newFunc = () => {
//     console.log(this)
// }

// const myFunc = () => {
//     return newFunc()
// }

// myFunc()

// var a = 50

// const sum = (a) => {
//     let a = 10
//     console.log(a)
// }

// sum(20)

// const myFunc = () => {
//     'use strict';
//     console.log(this)
// }

// myFunc()

// var lastName = 'Umair'

// const myObj = {
//     firstName: 'Asad',
//     lastName: 'Ikhlas',
//     myFunc: function(){
//         console.log(this)
//     }
// }

// myObj.myFunc()

// const name = 'Asad'
// var color = 'black'


// const circle = {
//     radius: 10,
//     color: "orange",
//     getArea: function () {
//         return Math.PI * radius * radius;
//     }
// };

// const { radius, getArea } = circle
// console.log(getArea())

// console.log(getArea())

// console.log(radius)