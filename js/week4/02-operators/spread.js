//iterable
//1. spreading out elements of iterable object
let first = [1,3,5];
let second = [2,4,6];

second = [...first, ...second];

console.log("second: ", second);//[1,3,5,2,4,6]

//2. shallow copyig objects
let hero = {
    name: "Deadpool",
    color: "red"
}

let villen = {
    name: "Thanos",
    color: "purple"
}

let colnedHero = {...hero, specialPower: 'accelerated healing'}

console.log("Hero: ", colnedHero);//{name: deadpool, color: red, specialpower: accelerated healing}