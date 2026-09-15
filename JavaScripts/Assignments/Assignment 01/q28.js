//simple atm menu

let menu = 2;
let balance = 0;

switch (menu) {
    case 1:
        console.log(balance);
        break;

    case 2:
        let add = 5;
        balance += add;
        console.log(balance);
        break;

    case 3:
        let withdrawAmount = 2;
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            console.log("Remaining Balance:", balance);
        }
        else {
            console.log("Insufficient Balance");
        }
        break;

    case 4:
        console.log("Good Bye");
        break;

    default:
        console.log("Invalid Choice");
        break;


}