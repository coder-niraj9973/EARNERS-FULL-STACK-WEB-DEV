//count total products

const productNames = ["Laptop", "Mouse", "Keyboard"]

const totalProducts = productNames.reduce((total, product) => total + 1, 0)

console.log(totalProducts);