// function add(x, y) {
//     return x + y;
//   }
  
//   add(1, 2, 3, 4, 5) // returns 3


//   function add(...args) {
//       console.log(args)
//     let result = 0;
  
//     for (let arg of args) result += arg;
  
//     return result
//   }
  
//   add(1) // returns 1
//   add(1,2) // returns 3
//   add(1, 2, 3, 4, 5) // returns 15


// function xyz(x, y, ...z) {
//     console.log(z)
//     console.log(x, ' ', y); // hey hello
  
//     console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
//     console.log(z[0]); // wassup
//     console.log(z.length); // 4
//   }
  
//   xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")

function bio(...bio){
    // console.log(fname)
    // console.log(lname)
    console.log(bio)
}
    
bio('Asad', 'ikhlas', 23, 'web developer', 'software engineer')