// const tinderUser = new Object() //singalton objets
const tinderUser = {}  //Non Singalton objects
tinderUser.id = "123"
tinderUser.name = "Deepak"
tinderUser.isLogedIn = false


// console.log(tinderUser); 



const regularUser ={
    email : "dk806020@gmail.com ",
    fullNmae:{
        userFullNmae:{
            firstNmae:"Deepak",
            lastName:"Yadav"
        }
    }
}

// console.log(regularUser.fullNmae.userFullNmae.firstNmae);

const obj1  = {
    1:"a",
    2:"b"
}
const obj2  = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj1);
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj1);
// console.log(obj3);


const obj3 = {...obj1,...obj2}
// console.log(obj3);


const user = [
    {
        email:1
    },
    {
        email:2
    },
    {
        email:3
    },
    {
        email:4
    },
]

// console.log(user[1].email);



// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

 

const course = {
    courseName:"js",
    price:2999,
    courseInstructor:"Deepak"
}


const {courseInstructor : instructor} = course
console.log(instructor);