const data = [
    { name: "Umair", Amt: 100 },
    { name: "Asad", Amt: 150 }
];

// 1. Create a functionality that adds a new user to our data array
// with the default amount as 100 if no amount is explicitly provided

// const openAccount = (accountName, amount = 100) => data.concat({ name: accountName, Amt: amount })
// console.log(openAccount("ali"))

// 2. create a feature as such it allows us to remove a particular account
// from our data just by passing in the account name

// const removeAccount = (accountName) => data.filter(item => item.name !== accountName)
// console.log(removeAccount("Umair"))

// 3. Create a feature that allows us to search a particular user from our
// given array just by giving in the name or amount

// const searchUser = ({ accountName = "", amount = 0 } = {}) => data.filter(item => item.name === accountName || item.Amt === amount)
// console.log(searchUser({ amount: 100 }))