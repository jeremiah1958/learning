//create an object

const person = {
    name: "John Doe",
    age: 35,
    nationality: "Spanish",
    hobbies: ["Swimming", "Cooking"]
};

//destructuring
let {name, nationality, age} = person;

//document.getElementById("demo").innerHTML = name + " is from " + nationality + " and he's " + age +" years old"; 


//Array destructuring
const fruits = ["orange", "mango", "avocado", "banana"];

let [fruit1, fruit2, fruit3, fruit4] = fruits;

document.getElementById("demo").innerHTML = fruit2 +" "+ fruit4;