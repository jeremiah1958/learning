function getMinMaxSum(numbers) {
    if (numbers.length === 0) {
        return { min: null, max: null, sum: 0 };
    }

    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;

    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
        sum += number;
    }

    return { min, max, sum };
}

// Example usage
let numbers = [3, 5, 1, 9, 2, 8];
let result = getMinMaxSum(numbers);

console.log(result); // Output: { min: 1, max: 9, sum: 28 }
