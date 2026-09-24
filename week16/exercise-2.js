function getAdults(people) {
    //Start Coding Here
    let adults = people.filter(person => person.age >= 18).map(person => person.name);
    return adults;
 };
 
 let result1 = getAdults([
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
 ]);
 console.log(result1); // ["Alice", "Charlie"]