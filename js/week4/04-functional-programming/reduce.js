//sample example using forEach
const items = [
    {name: 'petrol', price: 193},
    {name: 'diesel', price: 184},
    {name: 'kerosene', price: 127}
];

let totalPrice = 0; //declaring price and assigning zero value

items.forEach(item => {
    totalPrice += item.price;
});

//console.log(totalPrice);

//Using reduce
const totalprice = items.reduce((accumulator, item) => {
    return accumulator += item.price;
}, 0);

//console.log(totalprice);

//removing duplicate values
const numbers = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const nonDuplicate = numbers.reduce((acc, item) => {
    if(!acc.includes(item)){ //includes checks if the value exists in 'acc'
        acc.push(item); //adds the number to the 'acc'
    }
    
    return acc;
    
    
}, []);

console.log(nonDuplicate);