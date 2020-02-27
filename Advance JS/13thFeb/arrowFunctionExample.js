// function sum(a, b){
//     return a + b
// }
// console.log(sum(2, 5))

// const sum2 = (a, b) => (a + b)
// console.log(sum2(2, 7))


// function positiveNum(number){
//     return number >= 0
// }

// const positiveNum2 = number => number + 10
// console.log(positiveNum2(10))

// function randomNum(){
//     return Math.random()
// }

// const randomNumber = () => Math.random()





// // ES5
// var multiplyES5 = function(x, y) {
//     return x * y;
//   };
  
//   // ES6
//   const multiplyES6 = (x, y) => { return x * y };



  // function myName(){
  //     console.log("NORMAL FUN",this)
  // }

  // const myName2 = () => {
  //     console.log("ARROW FUNC",this)
  // }
  // myName()
  // myName2()

// let user = { 
//     name: "GFG", 
//     gfg1:() => { 
//         console.log("hello " + this.name); // no 'this' binding here 
//     }, 
//     gfg2(){        
//         console.log("Welcome to " + this.name); // 'this' binding works here 
//     }   
//  }; 
// user.gfg1(); 
// user.gfg2(); 

// var name = 'Ikhlas'

// const abc = {
//   name: 'Asad',

//   welcomeMsg: function () {
//     return 'Welcome ' + this.name
//   },
//   welcomeMsgArrow: () => {
//     return 'Welcome to' + this.name
//   }
// }
// let msg = abc.welcomeMsg()
// console.log(msg)

// msg = abc.welcomeMsgArrow()
// console.log(msg)


// function abc(){
//   console.log("NORMAL FUNCTION THIS",this)
// }
// abc()

// const abc2 = () => {
//   console.log("ARROW FUNC THIS", this)
// }
// abc2()
