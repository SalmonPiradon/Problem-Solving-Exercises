function removeDuplicates(arr) {
    //Start Coding Here
    let result = [];
    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
 };
 
 let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
 console.log(result1); // [1, 2, 3]
 
 let result2 = removeDuplicates([5, 5, 5, 5]);
 console.log(result2); // [5]