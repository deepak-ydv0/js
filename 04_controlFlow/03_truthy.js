const userEmail = "Deepak@gmail.com"

if (userEmail) {
    // console.log("Got the user name");
}else{
    // console.log("Don't have user email");
}

//falsy value

// false , 0 , -0 , BigInt 0n, "" , undefined, null ,NaN


// truthy value

// "0" , "false" , " " , [] , {}, function(){}


const arr = []
if (arr.length === 0) {
    // console.log("Array is empty");
}


const obj = {}
if (Object.keys(obj).length === 0) {
    // console.log("Object is empty");
    
}



if (false == 0) {
    // console.log("true h");
}
if (false == "") {
    // console.log("true h");
}
if ("" == 0) {
    // console.log("true h");
}



// Nullisg Coalescing Operator (??)  null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? 15 ?? 10

// console.log(val1);




// Turniary Operatoe

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("Greater then 80");

