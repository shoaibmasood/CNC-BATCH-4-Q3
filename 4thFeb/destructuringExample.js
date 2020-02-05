// let myArray = ["Asad",,2]
// let [firstName, lastName = 'No name', degrees] = myArray

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)
// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees.`
// console.log(sentence)











// function sumAndMultiply(a, b){
//     return [a+b, a*b]
// }
// const [sum, multiply, devision = 'no devision' ] = sumAndMultiply(2, 3)
// const newArray = sumAndMultiply(2, 3)
// console.log(newArray)
// const [sum, multiply, devision] =  sumAndMultiply(2,3)
// console.log(sum)
// console.log(multiply)
// console.log(devision)







// const firstPerson = {
//     fitstName: 'asad',
//     agee: 23,
//     address: {
//         city: 'Karachi',
//         province: 'Sindh'
//     }
// }

// const secondPerson = {
//     name: 'Umair',
//     age: 22,
//     favoriteFood: 'Biryani',
//     address: {
//         city: 'Lahore',
//         province: 'Punjab'
//     }
// }

// const {name, age, abc} = firstPerson
// let {address : {city, province} , fitstName, age, favoriteFood = 'Rice'} = firstPerson
// const {address, name, age} = secondPerson
// console.log(name)
// console.log(city)
// console.log(province)
// console.log(age)
// console.log(favoriteFood)
// console.log(city)
// console.log(province)
// console.log(address)










// const {name: firstName, age, favoriteFood = 'Rice', address: {city, province}} = secondPerson
// // console.log(name)
// console.log(firstName)
// console.log(age)
// console.log(favoriteFood)
// console.log(city)
// console.log(province)


// const someArray = ['Asad']
// const [a = "newName"] = someArray

// console.log(a)
// console.log(secondName)
// console.log(b)
// console.log(someArray[0])
// console.log(someArray[1])
// console.log(someArray[2])

// const newArray = ['Asad','Ali', "umair"]
// const [firstName, thirdName = 'No Name'] = newArray
// console.log(firstName)
// // console.log(secondName)
// console.log(thirdName)

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference, color} = circle;
  console.log(radius)
  console.log(getArea)
  console.log(getCircumference)
  console.log(color)