// if

// if (condition) {
    
// }

const isUserLoggedIn = false
if (isUserLoggedIn) {
    console.log("Login Successfully");
}else{
    // console.log("Login Failed");
}

// <, >, <=, >=, ==, ===, !=, !==

const temperature  = 41
if (temperature < 50) {
    // console.log("temperature less then 50");
}else{
    // console.log("temperature greater then 50");

}

const score = 200;
if (score > 100) {
    const power = "fly"
    // console.log(`User power : ${power}`);
}

const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less then 500");
// }else if(balance < 750){
//     console.log("less then 750");

// }else if(balance < 900){
//     console.log("less then 900");

// }else {
//     console.log("less then 1200");

// }
    


const userLoggedIn = true;
const UPI = true
const userLoggedInGoogle = false
const userLoggedInEmail = true

if (userLoggedIn && UPI) {
    console.log("Allow to buy course");
}

if (userLoggedInEmail || userLoggedInGoogle) {
    console.log("Login Successfully");
}