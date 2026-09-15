//create updated product prices

const productPrices = [100, 200, 300]

const newPrices = productPrices.map(productPrices => productPrices + (productPrices * 10 / 100))

console.log(`Original: `, productPrices);
console.log(`New: `, newPrices);