// Object.values
//OLD WAY

// let student = { name: 'Asad', education: 'BE SE' };
// let arr = [];
// for (const prop in student) {
// console.log(prop)
//   arr.push(student[prop]);
  
// }
// console.log(arr);
//output: ['Asad', 'BS SE']

// const obj = {
//     fname: 'Asad',
//     lname: 'Ikhlas',
//     degrees: 2
//   }
//   const newArray = Object.values(obj)
//   console.log(newArray) // RESULT: ["Asad", "Ikhlas", 2]

// const obj = {
//     fname: 'Asad',
//     lname: 'Ikhlas',
//     degrees: 2
//   }

// for(let i = 0; i < Object.keys(obj).length ; i++){
//     console.log(Object.values(obj)[i])
// }



// let obj = { name: "Millie", age: 15, city: "London" };
// Object.keys(obj).map((key) => {
//   obj[key] += ' application';
// });
// console.log(obj);
//Output: { name: "Millie application", age: 15 application, city: "London application" }

// let data = {
//     name: 'Eleven',
//     show: 'Stranger Things',
//     portrayedBy: 'Millie Bobby Brown'
//   }
  
//   for (let key in data) {
//     if (data.hasOwnProperty(key)) {
//       console.log(data[key])
//     }
//   }

//OutPut:
// Eleven
// Stranger Things 
// Millie Bobby Brown