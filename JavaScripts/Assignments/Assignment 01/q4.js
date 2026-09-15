//shopping bill

let productPrice = 100;
let quantity = 5;

let totalBill = productPrice * quantity;

let discountedAmount = (totalBill * 10) /100;

let finalBill = totalBill - discountedAmount;

console.log(totalBill);
console.log(discountedAmount);
console.log(finalBill);
