
// var c = 300
let a = 100
if (true) {
    let a = 10;
    const b = 20;
    // console.log(a);

}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Deepak";

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    two();
}

one()


/********************************** */

console.log(addone(5));
function addone(num){
    return num+1
}


// console.log(addTwo(5));
const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5));