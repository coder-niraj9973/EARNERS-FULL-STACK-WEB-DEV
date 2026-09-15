// electricity bill

let units = 250;
let finalBill;

if (units <= 100) {
    finalBill = units * 5;
}
else if (units <= 200) {
    finalBill = (100 * 5) + ((units - 100) * 7);
}
else {
    finalBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log(finalBill);