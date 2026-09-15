//simple calculator

let firstNum = 2;
let secondNum = 2;
let operator = "*";

switch (operator) {
    case "+":
        console.log(firstNum + secondNum);
        break;

    case "-":
        console.log(firstNum - secondNum);
        break;

    case "*":
        console.log(firstNum * secondNum);
        break;

    case "/":
        console.log(firstNum / secondNum);
        break;

    case "%":
        console.log(firstNum % secondNum);
        break;

    default:
        console.log("Invalid Operators");

}
