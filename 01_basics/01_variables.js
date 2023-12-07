const accId = 100;
let email = "dk806020@gmail.com";
var accPass = "1234"
accCity = "jaipur";
email = "bhdsg@jdwh.com";
accPass = "3874813"
let accState;

// accId = 2;  //not allowed

// {
//     scope
// }

console.log(accId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accId,accPass,email,accCity,accState]);