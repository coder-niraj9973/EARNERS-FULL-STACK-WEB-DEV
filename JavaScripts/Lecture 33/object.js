
// let product1 = [1, 2, 3, 4];

let product2 = {
    price: 5666,
    avgRating: 4.5,
    totalReviews: 75,
    disount: 10,
    productName: "iphone 20 pro max",

    printProductName: function () {
        console.log(this.productName);
    },

    priceDiscount() {
        console.log(this.disount);
    }
}

// let res = product2.printProductName();
// // console.log(res);
// console.log(product2.priceDiscount());

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// for(value of product1){
//     console.log(value);
// }

// product1.forEach(function(value, index){
//     console.log(value, index);
// })


// for (value in product2){
//     console.log(product2[value]);
// }


//destructuring karna

// let product1 = [1, 2, 3, 4];
// const [a, b, c, d, e] = product1
// console.log(e);

// let {price, priceDiscount, avgRating} = product2;

// // console.log(price, priceDiscount(), avgRating);

// for ([key, value] of Object.entries(product2)){
//     console.log(key, value);
// }


// let product1 = [1, 2, 3, 4];

// const [a, b] = product1;

let arr = [1, 23, 5, 4, 5, 64, 5, 51, 45]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));


// let x = [1,2];
// let y = [3,4];

// let z = [...x, ...y];           //merge
// console.log(...z);



// let product1 = [1, 2, 3, 4];

// const [a, b, ...c] = product1;
// console.log(c);

function add(...numbers){
    let total = 0;
    for(a of numbers){
        total += a;
    }
    return total;
}

console.log(add(4, 5, 2546, 254, 2));

