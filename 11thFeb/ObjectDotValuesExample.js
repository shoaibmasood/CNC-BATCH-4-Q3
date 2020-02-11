// Object.values

//OLD WAY

// let student = { name: 'KRUNAL', education: 'BE IT' };
// let arr = [];
// for (const prop in student) {
//   arr.push(student[prop]);
// }
// console.log(arr);


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

// Object.keys(obj).map(function(key, index) {
//   obj[key] += 'App';
// });

// console.log(obj);

// let data = {
//     name: 'Eleven',
//     show: 'Stranger Things',
//     portrayedBy: 'Millie Bobby Brown'
//   }
  
//   for (let key in data) {
//       console.log(key)
//     if (data.hasOwnProperty(key)) {
//       console.log(data[key])
//     }
//   }