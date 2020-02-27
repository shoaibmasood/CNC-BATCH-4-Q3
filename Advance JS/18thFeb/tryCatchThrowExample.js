// TRY  CATCH THROW
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The JavaScript statements try and catch come in pairs:

// try {
//     aler("hello")   // Spelling mistake in alert to generate error
// }
// catch (error) {
//     console.log("There is some problem " + error)
// }

// try {
//     const a = 58 
//     if(typeof(a) == 'string'){
//         alert('this is an string')
//     }else {
//         throw 'we expect string instead of other data type'
//     }
// }
// catch (err) {
//     console.log("There is some problem " + err)
// }


// try {

//     alert('Start of try runs');  // (1) <--

//     // ...no errors here

//     alert('End of try runs');   // (2) <--

// } catch (err) {

//     alert('Catch is ignored, because there are no errors'); // (3)

// }

// let json = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json); // <-- no errors
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }
//   alert( user.name );
// } catch(error) {
//     console.log(error.abc)
// //   alert( "JSON Error: " + e ); // JSON Error: Incomplete data: no name
// }