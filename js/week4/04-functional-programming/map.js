//sytanx of a map
// const newArray = array.map(callback(currentValue[index[array]]){
//     //return element of new array
// });
//sample map
const crude = new Map([
    ["petrol", 193],
    ["diesel", 186],
    ["kerosene", 172]
]);

//console.log(crude.get("kerosene"));

//array - the original array that you to iterate over
//callback - function that will be executed on each element
//current emelement -  current value that is being processed

//USE CASES

//1. Data transformation example you want to double the number

    //without map
    const numbers = [1,2,3,4,5];

    const doubleNumbers = []; //initialize empty array to store our new values

    for (let i = 0; i < numbers.length; i++){
        
        //newValue = numbers[i] * 2;
        doubleNumbers.push(numbers[i] * 2);
    }
    //console.log(doubleNumbers);

    //with map
    const nums = [6,7,8,9];
    const doubleNums = nums.map(namba=> namba / 2);

    //console.log(doubleNums);

//2. object transformation
    const users =  [
        {id: 1, name: 'Shawn'},
        {id: 2, name: 'Jeremy'},
        {id: 3, name: 'Allan'}
    ];

    //without map
    const userName = [];

    for (let i = 0; i < users.length; i++){
        userName.push(users[i].name);
    }

    //console.log(userIds);

    //with map
    const userNames = users.map(user=> user.name);

    console.log(userNames);