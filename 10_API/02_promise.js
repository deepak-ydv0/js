const prom1 = new Promise( (resolve,reject)=>{
    //do an async task
    //Db calls , cryptography, network

    setTimeout(() => {
        console.log('Async task complete ');
    }, 1000);
})

prom1.then( ()=>{
    console.log("Promise consumed");
})