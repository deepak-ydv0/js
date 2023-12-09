const coding = ["c","cpp","js","java"]


coding.forEach( (item)=> {
    // console.log(item);
})


coding.forEach( (item,index,arr) =>{
    // console.log(item,index,arr);
})


const myCoding = [
    {
        languageName:'javascript',
        fileName:'js'
    },
    {
        languageName:'java',
        fileName:'java'
    },
    {
        languageName:'CPP',
        fileName:'c++'
    },
]


myCoding.forEach( (item) =>{
    console.log(`language : ${ item.languageName} and fileName : ${item.fileName}`);
})