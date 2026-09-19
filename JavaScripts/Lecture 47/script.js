

// async function fun2() {
//     // console.log("Hii");
//     return 11;
// }

// function fun1() {
//     // console.log("Hello");

//     // return Promise.resolve(10)
//     return 10;
// }

// // console.log(fun2());
// fun2().then((data) => {             //we are using the promising/consuming
//     console.log(data);
// })
// console.log(fun1());


// console.log("a");

// async function fun3() {
//     return "Hellooooooooooo"
// }
// function fun4() {
//     return Promise.resolve("Hiiiiii")
// }

// console.log("1");

// async function fun5() {

//     console.log("2");
//     let data = await fun3()             //easy and clean use of awaits
//     console.log("3");
//     let data2 = await fun4()             //easy and clean use of awaits
//     console.log("4");

//     console.log(data, data2);
// }

// console.log("nishnat");

// fun5()

// console.log("5");


// console.log("a");

// async function random(){
//     console.log("b");

//     await 1;

//     console.log("c");

// }


// random()

// console.log("d");



// async function fun3() {
//     return "Hellooooooooooo"
// }

// function fun4() {
//     return Promise.reject("error hao ye")
// }

// async function fun5() {
//     try {
//         let data = await fun3()             //easy and clean use of awaits
//         let data2 = await fun4()             //easy and clean use of awaits
//         console.log(data, data2);
//     }
//     catch (error) {
//         console.log(error);
//     } finally{
//         console.log("mai to hamesa run karunga samjhe laddle");
//     }


// }

// fun5()







function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");

        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu");
            let price = 500;
            resolve(price)
        }, 2000)
    })


}



function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to Cart...");

        setTimeout(function fun2() {
            console.log("Pizza added to Cart");
            resolve(price)
        }, 3000)
    })
}



function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payement Initiated , Amount: ${price}`)

        setTimeout(function fun3() {
            let isPaymentSuccess = true;

            if (isPaymentSuccess) {
                console.log(`Payment Completed , Amount : ${price}`);
                resolve();
            } else {
                reject("Bhaiya payment falied")
            }
        }, 5000)
    })
}


// let res = searchPizza()

// res.then(function (price) {
//     console.log(price);
//     return addToCart(price)

// }).then(function (price) {
//     return payment(price);
// }).then(function () {
//     console.log("Bas aa hi gya pizza");
// }).catch(function (err) {
//     console.log(err);
// })


async function orderFood(){
    try{

        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("Bas aa hi gya pizza!!");

    }catch(error){
        console.log(error);
    }
}

orderFood();