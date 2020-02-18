
//  PROMISES




// Run following ONE at a time


// const anyFunction = () => {
//     return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
// }
// const resolveFunction = () => console.log("success")
// const rejectFunction = () => console.log("failure")

// const result = new Promise((resolve, reject) => {
//     setTimeout(() => (anyFunction() ? resolve() : reject()), 2000)
// })
// result.then(resolveFunction).catch(rejectFunction)







//RESULT:
// success OR failure (this result would depend on the value received from anyFunction result)




/*********************************************** */

// const anyFunction = () => {
//     return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
// }

// const resolveFunction = () => console.log("success")
// const rejectFunction = () => console.log("failure")

// const result = new Promise((res, rej) => {
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// const resultFromNewPromise = () => new Promise((res, rej) => {
//     console.log("second promise")
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// result.then(resultFromNewPromise).then(resolveFunction).catch(rejectFunction)
// console.log("hello world")


//RESULT:
//Hello world  // first line
// second line of result could be indifferent combination
// if resultFromNewPromise return reject then result will be
// Failure

// if resultFromNewPromise return resolved then result will be
// second promise
// success OR failure (this result would depend on the value received from anyFunction result)


// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if(a === 2){
//         resolve('Success')
//     } else{
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('this is in then ' + message)
// }).catch((message) => {
//     console.log('this is in catch' + message)
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Video one recorded')
//     },2000)
// })


// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video Two recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video Three recorded')
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })


// const p = new Promise((resolve, reject) => {
//     const a = 5
//     if(a === 10){
//         resolve('Success')
//     }else{
//         reject('Failed')
//     }
// })
// p.then((message) => {
//     console.log(`THIS IS IN THEN BLOCK ${message}`)
// }).catch((message) => {
//     console.log(`THIS IS IN CATCH BLOCK ${message}`)
// })


// const recordVideoOne = new Promise((resolve, reject) => {
//    setTimeout(() =>  resolve('video one released'), 5000)
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('video Two released'), 2000)
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('video Three released')
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })