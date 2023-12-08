const marvalHeros = ["thor","spiderman","ironman"];
const dcHeros = ["superman","flash","batman"];

// marvalHeros.push(dcHeros)
// console.log(marvalHeros);
// console.log(marvalHeros[3][1]);

// const myHeros = marvalHeros.concat(dcHeros)
// console.log(myHeros);

const allHero = [...marvalHeros,...dcHeros]
// console.log(allHero);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = anotherArr.flat(Infinity)
// console.log(realArr);


// console.log(Array.isArray("Deepak"));
// console.log(Array.from("Deepak"));
// console.log(Array.from({name : "Deepak"})); //intresting



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
