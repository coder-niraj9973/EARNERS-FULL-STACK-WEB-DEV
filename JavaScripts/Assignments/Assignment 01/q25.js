//movie ticket system

let age = 25;
let numberOfTickets = 3;
let onePrice;
let totalPrice;

if(age < 12){
    onePrice = 100;
}

else if(age >= 12 && age <= 59){
    onePrice = 200;
}

else if (age >= 60){
    onePrice = 120;
    
}

else{
    console.log("Invalid age");
}



totalPrice = onePrice * numberOfTickets;

console.log("Total Price:", totalPrice);