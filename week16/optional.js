function groupBy(items, property) {
    const result = {};

    for (const item of items) {
        const key = item[property];   

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(item);
    }
    return result;
}
 
 let result1 = groupBy([
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" }
 ], "type");
 
 console.log(result1);
 // {
 //   fruit: [
 //     { name: "Apple", type: "fruit" },
 //     { name: "Banana", type: "fruit" }
 //   ],
 //   vegetable: [
 //     { name: "Broccoli", type: "vegetable" }
 //   ]
 // }