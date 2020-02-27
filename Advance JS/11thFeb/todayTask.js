
function myFunc(a, b){return [...new Set([...a, ...b])].sort(function(a, b){return a - b})}
console.log(myFunc([1, 2, 50, 25, 5, 90], [6, 90, 2, 1 , 88, 100]))

//result [1, 2, 5, 6, 25, 50, 88, 90, 100]


//remove duplications
//merge both arrays
//sorting

// console.log(a.sort(function(a,b) { return a - b; }))


