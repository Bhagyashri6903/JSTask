const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 30000,
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 2000,
    inStock: false,
    rating: 4.1
  },
  {
    id: 4,
    name: "Shoes",
    category: "Fashion",
    price: 2500,
    inStock: true,
    rating: 4.2
  },
  {
    id: 5,
    name: "Watch",
    category: "Fashion",
    price: 7000,
    inStock: false,
    rating: 4.3
  },
  {
    id: 6,
    name: "Book",
    category: "Stationery",
    price: 500,
    inStock: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Pen",
    category: "Stationery",
    price: 100,
    inStock: true,
    rating: 4.0
  },
  {
    id: 8,
    name: "Tablet",
    category: "Electronics",
    price: 15000,
    inStock: true,
    rating: 4.4
  },
  {
    id: 9,
    name: "Bag",
    category: "Fashion",
    price: 3000,
    inStock: true,
    rating: 4.6
  },
  {
    id: 10,
    name: "Printer",
    category: "Electronics",
    price: 12000,
    inStock: false,
    rating: 4.2
  }
];


console.log("Add new into existing");
const data = {
    id: 11,
    name: "ABC",
    category: "Electronics",
    price: 50000,
    inStock: true,
    rating: 4.5,
}


console.log("New entry");
products.push(data); // new entry at last
console.log(products);


console.log("Remove Item");
products.pop();//Remove last element
console.log(products);


console.log("Find");
const res = products.find((prd) => prd.rating===4.5); 
console.log(res);


console.log("Specific portion");
const sliceData = products.slice(3,5); //Start index include and end index exclude OR // Counting start as considering first element as 0 i.e Data(1,2,3) => Counting(0,1,2)
console.log(sliceData);


console.log("Every");
const isCorrect = products.every((prd) => prd.rating === 4.5); //Boolean o/p
console.log(isCorrect);


console.log("Some");
const some = products.some((prd) => prd.rating === 4.5); //Boolean o/p
console.log(some);



