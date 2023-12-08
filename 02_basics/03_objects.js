// singalton 

// objet literals
const mySymbol = Symbol("key1")
const jsUser ={
    name:"Deepak",
    [mySymbol]:"mykey1",
    age:19,
    loc : "jaipur",
    email:"dk806020@gmail.com",
    isLogedIn : false,
    lastLogin:["Mon","Sat"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySymbol]);


jsUser.email = "jkdsfhku@jhgsc.com"
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.email = "fhku@jhgsc.com"
// console.log(jsUser);


jsUser.greeting = function () {
    console.log("Hello Js User");
}
jsUser.greetingTwo = function () {
    console.log(`Hello Js User,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

