//Old way

// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8]
// const newArray = arr1.concat(arr2)
// console.log(newArray)

//result: [1, 2, 3, 4,5, 6, 7, 8 ]



//new ES6 way

// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)
//result: [1, 2, 3, 4,5, 6, 7, 8 ]




// function mySum(num1, num2, num3){
//     console.log(num1 + num2+ num3)
// }

// let params = [10, 20, 30]
// mySum(...params)
//result:60

// const newObj = {fname: 'Asad', lname: 'Ikhlas'}
// const obj2 = { profession: 'Web developer' }
// const spreadObj = {...newObj, age: 20, degree: 3, ...obj2}
// console.log(spreadObj)

//result: fname: "Asad", lname: "Ikhlas", age: 20, degree: 3, profession: "Web developer"}