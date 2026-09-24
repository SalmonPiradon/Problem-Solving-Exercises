function filterProducts(products, targetCategory, targetPrice) {
    //Start Coding Here
    let result = products.filter(product => product.category === targetCategory && product.price <= targetPrice);
    return result;
 };
 
 let result = filterProducts([
    { name: "Notebook", category: "stationery", price: 50 },
    { name: "Pen", category: "stationery", price: 20 },
    { name: "Shoes", category: "fashion", price: 90 },
    { name: "Bag", category: "fashion", price: 300 },
    { name: "Pencil", category: "stationery", price: 10 }
 ], "stationery", 30);
 
 console.log(result);
 // Expected Output:
 // [
 //   { name: "Pen", category: "stationery", price: 20 },
 //   { name: "Pencil", category: "stationery", price: 10 }
 // ]