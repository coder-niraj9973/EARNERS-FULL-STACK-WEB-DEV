//restaurant menu

let choice = 2;
let quantity = 3

switch (choice) {
    case 1:
        console.log("Total:", quantity * 150);
        break;
    case 2:
        console.log("Total:", quantity * 250);
        break;
    case 3:
        console.log("Total:", quantity * 180);
        break;
    case 4:
        console.log("Total:", quantity * 120);
        break;

    default: {
        console.log("Not available");
    }
}