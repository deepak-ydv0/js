// Primitive

// 7 type : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue =100.3
const isLoggedIn = false;
const temperature = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id ===anotherId);

const bigNumber = 89473277547594379882n;







//************************************* */



// Reference (Non primitive)
// Array ,Objects,Functions 


// const heros = ["shaktiman","nagraj","doga"];


// let myObj = {
//     name:"Deepak",
//     age:19,
// }



// const myFunction = function(){
//     console.log("myFunction");
// }

// console.log(typeof bigNumber);




//**************************************** */



// memories 

//stack (primitive), Heap(Non Primitive)

let myName = "Deepak"

let anotherName = myName;
anotherName = "Yadav"

console.log(myName);
console.log(anotherName);




let userOne ={
    email : "sadj@jn.com",
    upi:"nsiudh@ybl"
}

let userTwo = userOne;

userTwo.email = "jsfdh@jfgh.com"

console.log(userOne.email);
console.log(userTwo.email);