function reverseString(text) {
    //Start Coding Here
    const textArray = text.split("");
    const reverseArray = textArray.reverse();
    const reverseText = reverseArray.join("");
    return reverseText;
 };
 
 let result1 = reverseString("hello");
 console.log(result1); // "olleh"
 
 let result2 = reverseString("TechUp");
 console.log(result2); // "pUhceT"