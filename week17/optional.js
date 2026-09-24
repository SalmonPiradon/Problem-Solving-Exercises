function findLongestWord(text) {
    //Start Coding Here
    let words = text.split(" ");
    let wordLength = {};
    for (let word of words) {
        wordLength[word] = word.length;
    }

    let maxChar = 0;
    let maxWord = "";
    for (let key in wordLength) {
        if (wordLength[key] > maxChar) {
            maxChar = wordLength[key];
            maxWord = key;
        }
    }
    
    return maxWord;
 };
 
 let result1 = findLongestWord("I love programming very much");
 console.log(result1); // "programming"
 
 let result2 = findLongestWord("TechUp helps people switch careers");
 console.log(result2); // "careers"