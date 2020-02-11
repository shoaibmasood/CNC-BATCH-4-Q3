const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(' and '));
// expected output: "Fire and Air andWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


// var a = ['Wind', 'Water', 'Fire'];
// console.log(a.join( ));      // 'Wind,Water,Fire'
// a.join(', ');  // 'Wind, Water, Fire'
// a.join(' + '); // 'Wind + Water + Fire'
// a.join('');    // 'WindWaterFire'