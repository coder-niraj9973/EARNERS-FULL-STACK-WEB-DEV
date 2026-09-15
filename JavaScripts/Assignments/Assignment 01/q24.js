//ATM transaction

let balance = 10000;
let withdrawAmount = 3000;

if (withdrawAmount > 0 && withdrawAmount <= balance) {
    let remainingBalance = balance - withdrawAmount;
    console.log("Withdraw Successfully");
    console.log("Remaining Balance: ", remainingBalance);
}
else {
    console.log("Invalid");
}



