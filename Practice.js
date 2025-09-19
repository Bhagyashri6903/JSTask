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


console.log("=====");
console.log("==Get all products names in the stock");
const inStockNames = products
  .filter(product => product.inStock)
  .map(product => product.name);
  console.log(inStockNames);
console.log("====");


console.log("==List names of all products==");
const allNames = products.map(product => product.name);
console.log(allNames);
console.log("====");

console.log("==Get products above 10,000==");
const expensiveProducts = products
  .filter(product => product.price > 10000)
  .map(product => product.name);
console.log(expensiveProducts);
console.log("====");

console.log("==Get names of products with rating ≥ 4.5==");
const highRated = products
  .filter(product => product.rating >= 4.5)
  .map(product => product.name);
console.log(highRated);
console.log("====");

console.log("==Get discounted prices (10% off on all products)==");
const discountedPrices = products.map(product => ({
  name: product.name,
  price: product.price * 0.9,
}));
console.log(discountedPrices);
console.log("====");

console.log("==List categories of in-stock products");
const inStockCategories = products
  .filter(product => product.inStock)
  .map(product => product.category);
console.log(inStockCategories);
console.log("====");

console.log("==Get products under 5000 with only name and price==");
const under5000 = products
  .filter(product => product.price < 5000)
  .map(product => ({ name: product.name, price: product.price }));
console.log(under5000);
console.log("====");