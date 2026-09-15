//electricity bill + discount

let units = 250;
let originalBill;
let discount;
let finalBill;


if (units <= 100) {
    originalBill = units * 5;
}
else if (units <= 200) {
    originalBill = (100 * 5) + ((units - 100) * 7);
}
else {
    originalBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

if (originalBill >= 2000) {
    discount = originalBill * 10 / 100;
}
else {
    discount = 0;
}

finalBill = originalBill - discount;

console.log("Units:", units);
console.log("Original Bill:", originalBill);
console.log("Discount:", discount);
console.log("Final Bill:", finalBill);