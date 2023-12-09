const myNums  = [1,2,3]

const myTotal = myNums.reduce( (acc,currVal) =>{
    // console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc+ currVal
},0)

// console.log(myTotal);


const cart = [
    {
        itemName:"js",
        price:999
    },
    {
        itemName:"java",
        price:9900
    },
    {
        itemName:"cpp",
        price:599
    }
]

const totalPrice = cart.reduce( (acc,item) =>{
    return acc+item.price
},0)

console.log(totalPrice);