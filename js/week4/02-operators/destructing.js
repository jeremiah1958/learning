// Simple array destructuring
let fruits = ["apple", "banana", "cherry"];
let [first, second, third] = fruits;

console.log(first);  // Output: apple
console.log(second); // Output: banana
console.log(third);  // Output: cherry

// Skipping elements
let numbers = [1, 2, 3, 4, 5];
let [one, , three, , five] = numbers;

console.log(one);  // Output: 1
console.log(three); // Output: 3
console.log(five); // Output: 5

// Using the rest operator to collect the remaining elements
let [head, ...tail] = numbers;

console.log(head); // Output: 1
console.log(tail); // Output: [2, 3, 4, 5]
