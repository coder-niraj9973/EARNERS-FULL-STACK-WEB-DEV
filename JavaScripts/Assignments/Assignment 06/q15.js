//calculate the total cart price

const productPrices = [500, 1200, 300]

const totalPrice = productPrices.reduce((total, price) => total + price, 0)

console.log(totalPrice);