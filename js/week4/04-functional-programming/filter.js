//syntax of filter
//const newArray = array.filter(callback[element[index[array]]]);

//Example: filter even numbers

const numbers = [1,2,3,4,5];

//without filter
const evenNumbers = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

//console.log(evenNumbers);

//with filter
const even = numbers.filter(num=> num % 2 === 0);

//console.log(even);