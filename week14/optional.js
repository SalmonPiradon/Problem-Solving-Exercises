function isPalindrome(word) {
    //Start Coding Here
    let reverseWord = word.split("").reverse().join("");
    return reverseWord === word;
 };
 
 let result1 = isPalindrome("madam");
 console.log(result1); // true
 
 let result2 = isPalindrome("hello");
 console.log(result2); // false
 