//add a currency symbol to prices

const productPrice = [100, 250, 500]

const currency = productPrice.map(price => `₹${price}`)

console.log(currency);