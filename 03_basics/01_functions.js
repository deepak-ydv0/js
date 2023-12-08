function myName(){
    console.log("dk");
}

// myName()

function addNum(num1,num2){
    return num1+num2
}
// console.log(addNum(3,4));


function loginUser(username ="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }else{
        return `${username} just logged in`
    }
    
}

// console.log(loginUser());


//rest operators 
function cartPrice(...num){
    return num
} 

console.log(cartPrice(200,300,400,500));


const user = {
    name:"Deepak",
    age:19
}


function hanleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

// hanleObject(user)
hanleObject({
    name:"sam",
    age:18
})





const arr = [200,400,100,600]

function returnSecValue(getArray){
    return getArray[1]
}

// console.log(returnSecValue(arr));
console.log(returnSecValue([10,20,30]));