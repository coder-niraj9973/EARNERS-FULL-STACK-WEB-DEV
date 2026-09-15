

function outer(){
    const a = 5;

    function inner(){
        console.log(a);
    }
    return inner;           //pura function copy ho gya / return karta kuchh bhi
}


const response = outer();
console.log(outer);
console.log(response());