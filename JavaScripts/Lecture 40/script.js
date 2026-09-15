
// // let div = document.querySelector("#reveal-gifts")
// // let h1 = document.querySelector("#gift")
// // let btn = document.querySelector("#btn")

// // function revealGifts(event) {
// //     h1.classList.remove("hidden")
// //     console.log(event);
// //     console.log(event.type);
// //     console.log(event.target);
// //     console.log(event.currentTarget);
// // }

// // // btn.addEventListener('dblclick', () => {
// // //     console.log("Hello Mic check");
// // // })

// // div.addEventListener('click', revealGifts)


// // // let counter = 0
// // // function fun1(e) {
// // //     if (counter < 3) {
// // //         console.log(e);
// // //         counter++
// // //     }
// // //     else {
// // //         btn.removeEventListener('click', fun1)
// // //     }
// // // }

// // // btn.addEventListener('click', fun1)





// let outer = document.querySelector("#outer")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Body");
// },)

// outer.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Outer");
// },)

// inner.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Btn2");
// })


let products = [
    {
        id: "1",
        name: "Iphone 20",
        price: 123456,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },

    {
        id: "2",
        name: "Samsung 15",
        price: 235423,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"

    },

    {
        id: "3",
        name: "MI 23",
        price: 235445,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },

    {
        id: "4",
        name: "Poco 25",
        price: 568776,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },

    {
        id: "5",
        name: "Lava 12",
        price: 98765,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },
]

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;

    const dltBtn = document.createElement("button")
    const addToCartBtn = document.createElement("button")
    dltBtn.textContent = "Remove Product Btn"
    addToCartBtn.textContent = "Add to Cart"

    // dltBtn.addEventListener("click", (e) => {
    //     card.remove();
    // })


    card.innerHTML = `<div>
            <img src="${product.imgURL}" alt="">
    </div>

    <div class="productDetail">
            <p>${product.name}</p>
            <p>${product.price}</p>
    </div>`

    card.append(dltBtn)
    card.append(addToCartBtn)
    productList.append(card)
})


productList.addEventListener("click", (e) => {              //use of event delegation
    e.stopPropagation();

    const dltBtn = e.target;

    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);

    // if(e.target.tagName === "BUTTON"){
    //     e.target.parentElement.remove();
    // }

    // console.log( dltBtn.parentElement.dataset.productId);

    if(dltBtn.textContent === "Remove Product Btn" && dltBtn.tagName === "BUTTON") {
        // dltBtn.parentElement.remove();
        dltBtn.closest(".singleProduct").remove();

    }

    // console.log(dltBtn.closest(".singleProduct"));
    

})