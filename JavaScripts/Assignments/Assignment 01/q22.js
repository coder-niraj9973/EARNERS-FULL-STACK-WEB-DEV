//menu-based calculator

let choice = 3;

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus

let firstNumber = 20;
let secondNumber = 5;

switch (choice) {
    case 1:
        console.log(firstNumber + secondNumber);
        break;

    case 2:
        console.log(firstNumber - secondNumber);
        break;

    case 3:
        console.log(firstNumber * secondNumber);
        break;

    case 4:
        console.log(firstNumber / secondNumber);
        break;

    case 5:
        console.log(firstNumber % secondNumber);
        break;

    default:
        console.log("Invalid choice");
}