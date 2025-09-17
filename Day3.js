console.log("==== MAP ====");

console.log("Iteration");
let numbers=[1,2,3,4,5,6]
numbers.map((num)=> console.log(num))
console.log("======");

//[ 2, 4, 6, 8, 10, 12 ]
console.log("Transformation");
let double = numbers.map((num) => num*2)
console.log(double);
console.log("======")

// [ 'BHUMI', 'SWARA', 'BHAGYASHRI' ]
let studentsName = ['bhumi','swara','bhagyashri']
let capital = studentsName.map((name) => name.toUpperCase()); 
console.log(capital);
console.log("=====")

let products=[{id:1,name:'laptop',price:70000},
    {id:2,name:'t.v',price:45000},
    {id:1,name:'a.c',price:56000}
]
// [ 'LAPTOP', 'T.V', 'A.C' ]
let capitalProductName = products.map((product) => product.name.toUpperCase());
console.log(capitalProductName );
console.log("=====")

//[{ id: 1, name: 'LAPTOP', price: 70000 },{ id: 2, name: 'T.V', price: 45000 },{ id: 1, name: 'A.C', price: 56000 }]
let updatedProducts = products.map((product) => ({
...product,name:product.name.toUpperCase() , discountedPrice:product.price*0.9
}))
console.log(updatedProducts);
console.log("=====")

console.log("FILTER");
let filteredProducts = products.filter((product) => product.price>55000);
console.log(filteredProducts);
console.log("=====")