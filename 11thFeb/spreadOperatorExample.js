//Old way

// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8]
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

//new ES6 way

// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)



function mySum(num1, num2, num3){
    console.log(num1 + num2+ num3)
}

let params = [10, 20, 30]
mySum(...params)