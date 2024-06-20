function getMinMaxSum(numbers) {
    if (numbers.length === 0) {
        return { min: null, max: null, sum: 0 };
    }

    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;

    
