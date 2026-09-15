//student result

let maths = 60;
let sci = 50;
let eng = 85;

let totalMarks = maths + sci + eng;
let average = totalMarks / 3;

if(maths >= 40 && sci >= 40 && eng >= 40){
    if(average >= 75){
        console.log("Distinction");
    }
    else if(average >= 60){
        console.log("First Division");
    }
    else if (average >= 50){
        console.log("Second Division");
    }
    else {
        console.log("Pass");
    }
}
else{
    console.log("Fail");
}