//filter available products

const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
]

const stocked = products.filter(product => product.inStock)

console.log(stocked);