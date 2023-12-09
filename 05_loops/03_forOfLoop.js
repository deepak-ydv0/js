// for  of



const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}


//Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United State of America")
map.set('Fr',"France")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,value);
}

// Obejct are not itreat in forof loop
// const myGame= {
//     game1:"NFS",
//     game2:"Spiderman"

// }

// for (const [key,value] of myGame) {
//     // console.log(key,value);
// }