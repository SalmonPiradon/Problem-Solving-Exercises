function capitalizeWords(sentence) {
    //Start Coding Here
    const array = sentence.split(" ");
    let newArray = [];
    for (let word of array) {
        newArray.push(word[0].toUpperCase() + word.slice(1));
    }
    const newWord = newArray.join(" ");
    return newWord;
 };
 
 let result1 = capitalizeWords("hello world");
 console.log(result1); // "Hello World"
 
 let result2 = capitalizeWords("techup career prep");
 console.log(result2); // "Techup Career Prep"