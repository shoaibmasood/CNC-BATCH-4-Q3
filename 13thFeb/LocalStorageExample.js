localStorage.setItem('firstname','Asad')
localStorage.setItem('lastname', 'Ikhlas')
console.log(localStorage.getItem('firstname'))
localStorage.removeItem('lastname')
localStorage.clear()

// localStorage.setItem("name", "asad")

// const person = {
//     firstname: "Asad",
//     lastname: "Ikhlas"
// }

// var value = "Asad ikhlas"
// localStorage.setItem('name', value)

// localStorage.setItem('bio', JSON.stringify(person))
// console.log(JSON.parse(localStorage.getItem('bio')))

// localStorage.setItem('user', JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem('user')))

// localStorage.removeItem('name');

//localStorage.clear();


//LOCAL STORAGE LIMITATIONS

//Do not store sensitive user information in localStorage
//It is not a substitute for a server based database as information is only stored on the browser
//LocalStorage is limited to 5MB across all major browsers
//LocalStorage is quite insecure as it has no form of data protection and can be accessed by any code on your web page
//LocalStorage is synchronous. Meaning each operation called would only execute one after the other