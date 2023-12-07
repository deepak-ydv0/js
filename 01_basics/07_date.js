// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof(myDate));



// let myNewDate = new Date(2023,0,23)
// console.log(myNewDate.toDateString());

// let myNewDate = new Date(2023,0,23,5,3)
// console.log(myNewDate.toLocaleString());

let myNewDate = new Date("2023-01-14")
// console.log(myNewDate.toLocaleString());




// let time = Date.now()
// console.log(time);
// console.log(myDate.getTime());


// console.log(Math.floor(Date.now()/1000)); //In Seconds



let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1); //month start at 0 so month+1 = month
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());

// console.log(newDate.getDay()); // week day



const date = newDate.toLocaleString('default',{
    weekday : "short",
    day : "numeric",
    month: "long",
    year:"numeric"
})
console.log(date);