
// function fun1(callback){
//     console.log("Hii");
//     callback();

// }

// function cb(){
//     console.log("This is callback function");
// }

// fun1(cb);

// let arr = ["a", "b", "c", "d"]


// function a(){
//     function b(){
//     }
//     return b            //returns a function
// }














function searchPizza(cb1){
    console.log("Pizza searching...");

    setTimeout(function (){
        console.log("Here is the Pizza's Menu");
        let price = 500;
        cb1(price)
    }, 2000)

}

function addToCart(cb2){
    console.log("Pizza adding to Cart...");

    setTimeout(function (){
        console.log("Pizza added to Cart");
        cb2()
    }, 3000)
}

function payment(price){
    console.log(`Payement Initiated , Amount: ${price}`)

    setTimeout(function (){
        console.log(`Payment Completed , Amount : ${price}`);
        console.log("Bas aa hi gya pizza");
    }, 5000)
}

searchPizza(function (price) {
    addToCart(function (){
        payment(price)
    })
})


