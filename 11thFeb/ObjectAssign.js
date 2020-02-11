// let o1 = { a: 21, b: 22, c: 24 };
// let o2 = { b: 22, c: 24 };
// let o3 = { c: 24 };

// let finalObj = Object.assign({}, o1, o2, o3);
// console.log(finalObj);

// let o1 = { a: 21 };
// let o2 = { b: 22 };
// let o3 = { c: 24 };

// Object.assign(o1, o2, o3);
// console.log(o2);

let obj = {
    eleven: 'Millie Bobby Brown',
    mike: 'Finn Wolfhard',
  };
  let objCopy = Object.assign({}, obj);
  console.log(objCopy);

//   objCopy.mike = 'Noah Schnapp';
//   console.log(objCopy);
//   console.log(obj);

// var a = [ 1, 100, 50, 2, 5, 200];
// console.log(a.sort(function(a,b) { return a - b; }))


// Object.assign(target, source)

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4, a: 7, b: 8 }
const obj3 = { e: 5, f: 6 }

const newObj = Object.assign({}, obj1, obj2, obj3)

console.log('OBJ 1', obj1)
console.log('OBJ 2', obj2)
console.log('OBJ 3', obj3)
console.log('NEW OBJECT', newObj )