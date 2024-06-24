// Define a human constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method for greeting
Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Create a human instance
const person = new Person('John', 30);

// Access the person's name attribute and output "John"
console.log(person.name);

//Access the greet method of person and output "Hi, my name is John and I'm 30"
person.greet()

//ways of creating object
//1 using object literal


//const emptyObj = {};//create an empty object

const obj = {
    name: "John",
    age: 45,
    great(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

console.log(obj.great());