//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best no");
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer value is : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner value is ${j} and outer loop ${i}`);
        // console.log(`${i}*${j} = ${i*j}`);
    }
}


let myArray = ['flash','batman', 'superman']
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//brak and continue

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log("5 Detected");
        break;
    }
    // console.log(`Value is ${index}`);    
}
for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log("5 Detected");
        continue;
    }
    // console.log(`Value is ${index}`);    
}