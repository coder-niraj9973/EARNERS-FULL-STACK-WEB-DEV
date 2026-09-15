//filter expensive products

const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
]

const greaterThan1000 = products.filter(product => product.price > 1000)

console.log(greaterThan1000);