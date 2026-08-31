function countVowels(text) {
    //Start Coding Here
    const vowel = "aeiouAEIOU";
    let count = 0;
    for (let char of text) {
        if (vowel.includes(char)) {
            count++;
        }
    }
    return count;
 };
 
 let result1 = countVowels("hello");
 console.log(result1); // 2
 
 let result2 = countVowels("TECHUP");
 console.log(result2); // 2