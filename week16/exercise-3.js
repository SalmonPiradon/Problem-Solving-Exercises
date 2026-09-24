function sumByType(numbers) {
    //Start Coding Here
    let result = {};
    let even = numbers.filter(number => number !== 0 && number % 2 === 0);
    let evenMultiply = even.reduce((acc, curr) => acc * curr, 1);
    result.even = evenMultiply;

    let odd = numbers.filter(number => number % 2 !== 0);
    let oddSum = odd.reduce((acc, curr) => acc + curr, 0);
    result.odd = oddSum;

    let zero = numbers.filter(number => number === 0);
    result.zero = zero.length;
    return result;
 };
 
 let result1 = sumByType([0, 2, 3, 0, 4, 5]);
 console.log(result1); // { even: 8, odd: 8, zero: 2 }
 
 let result2 = sumByType([0, 0, 1, 3, 5]);
 console.log(result2); // { even: 1, odd: 9, zero: 2 }
 
 let result3 = sumByType([2, 4, 6]);
 console.log(result3); // { even: 48, odd: 0, zero: 0 }