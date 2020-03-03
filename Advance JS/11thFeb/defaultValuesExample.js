/** ************************************************ */
// Try any part one at a time

// function welcomeMsg (name) {
//     const msg = 'Welcome ' + name
//     console.log(msg)
//   }

//   welcomeMsg('Asad')
//   welcomeMsg()

// Result:
// Welcome Asad
// Welcome undefined




/** ************************************************ */

//   function welcomeMsg(name = "Everyone") {
//       let msg = "Welcome " + name
//       console.log(msg)
//   }

//   welcomeMsg("Asad")
//   welcomeMsg()

// Result:
// Welcome Asad
// Welcome Everyone

/** ************************************************ */

//   function createIcecream({ scoops = 1, toppings = ['Dark Chocolate'] }) {
//       const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//       console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`)
//   }

//   createIcecream({});
//   createIcecream({ scoops: 2 });
//   createIcecream({ scoops: 2, toppings: ['Sprinkles', 'Smarties'] });
//   createIcecream({ toppings: ['Strawberry'] });
//   createIcecream();

// Result:
// Your sundae has 1 scoop with Dark Chocolate toppings
// Your sundae has 2 scoops with Dark Chocolate toppings.
// Your sundae has 2 scoops with Sprinkles and Smarties toppings.
// Your sundae has 1 scoop with Strawberry toppings.
// Error: cannot destructure property ‘scoops’ of ‘undefined’ or ‘null’

/** ************************************************ */

//   function createIcecream({ scoops = 1, toppings = ['Dark Chocolate'] } = {}) {
//       const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//       console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`)
//   }

//   createIcecream({});
//   createIcecream({ scoops: 2 });
//   createIcecream({ scoops: 2, toppings: ['Sprinkles', 'Smarties'] });
//   createIcecream({ toppings: ['Strawberry'] });
//   createIcecream();

// Result:
// Your sundae has 1 scoop with Dark Chocolate toppings
// Your sundae has 2 scoops with Dark Chocolate toppings.
// Your sundae has 2 scoops with Sprinkles and Smarties toppings.
// Your sundae has 1 scoop with Strawberry toppings.
// Your sundae has 1 scoop with Dark Chocolate toppings


// function myName(name) {
//     return `Welcome ${name}`
// }
// console.log(myName())

// function myName(name = 'Everyone'){
//     return `Welcome ${name}`
// }
// console.log(myName('Asad'))
// console.log(myName())

//TWO WAY BINDING
//DEFAULT VALUES WITH DESTRUCTURING

// function createIcecream({ scoops = 1, toppings = ['Dark Chocolate'] } = {}) {
//     const scoopText = scoops <= 1 ? 'scoop' : 'scoops';
//     console.log(`Your ice cream has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`)
// }
// createIcecream({});
// createIcecream({ scoops: 0 })
// createIcecream({ scoops: 2 });
// createIcecream({ scoops: 2, toppings: ['Bunties','Caramel'] });
// createIcecream({ toppings: ['Strawberry'], scoops: 5 });
// createIcecream();