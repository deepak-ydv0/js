const myObject = {
    js:"javasript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}



// for in always gives key not value
const programming = ["c","c++","js","java"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}