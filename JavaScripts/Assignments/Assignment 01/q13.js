//student grade

let num = 165;

if (num >= 90 && num <= 100){
    console.log("Grade A");
    
}
else if (num >= 80 && num < 90) {
    console.log("Grade B");

}
else if (num >= 70 && num < 80) {
    console.log("Grade C");
}
else if (num >= 60 && num < 70) {
    console.log("Grade D");
}
else if (num >= 40 && num < 60) {
    console.log("Grade E");
}
else if(num < 40 && num >= 0){
    console.log("Grade F");
}
else {
    console.log("Invalid Data");
}