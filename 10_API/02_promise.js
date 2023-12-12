const prom1 = new Promise((resolve, reject) => {
    //do an async task
    //Db calls , cryptography, network

    setTimeout(() => {
        // console.log('Async task complete ');
        resolve();
    }, 1000);
})

prom1.then(() => {
    // console.log("Promise consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    // console.log("Async 2 resolved");
})


const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Deepak", email: "example.com" })
    }, 1000);
})

prom3.then((user) => {
    // console.log(user);
})



// const prom4 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({username : "Deepak",email:"example.com"})
//         }else{
//             reject({msg:"error"})
//         }
//     }, 1000);
// })

// prom4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("The promise either resolve or rejected");
// })

const prom5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "1234" })
        } else {
            reject({ err: 'Error' })
        }
    }, 1000);
})


async function consumeProm5() {
    try {
        const response = await prom5
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumeProm5();





// async function getUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))