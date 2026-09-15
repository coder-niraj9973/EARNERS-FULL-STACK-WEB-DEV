//sum of even numbers by while loop

let i = 1;
let even = 0;

while(i <= 20){
    if(i % 2 === 0){
        even += i;
    }
    i++;
}

console.log(even);