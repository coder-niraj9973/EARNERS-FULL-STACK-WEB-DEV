

// // // let h1 = document.getElementById("h1")
// // // let h1 = document.querySelector("h1");                       //tag
// // // let h1 = document.querySelector(".h1");                      //class
// // // let h1 = document.querySelector("#h1");                         //id



// // // let h1 = document.querySelectorAll("#h1");                         //id
// // // console.log(h1);


// let p = document.querySelector("p")

// // // p.textContent = "Hello bachhon kaise ho?"
// // // p.innerHTML = "<b> Hello Dostonn </b>"                          //very very risky

// // console.log(p.textContent);
// // console.log(p.innerHTML);
// // console.log(p.innerText);


// p.setAttribute("style", "background-color : pink; font-size : 50px")


// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled", "true")
// btn.textContent= "Remove"

// let res = p.getAttribute("style")
// console.log(res);

// p.removeAttribute("style")

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")                //on/off
// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "red"

// p.dataset.helloDoston = "hii"

// console.log(p.dataset.helloDoston = "hii");

// let div = document.createElement("div");
// let div1 = document.createElement("div");

// div.textContent = "Div 1"
// div1.textContent = "Div 2"

let body = document.querySelector("body")
// // body.appendChild(div);
// body.append(div, div1);                         //last in body
// body.prepend(div, div1);                        //start in body


let products = [
    {
        name: "Iphone 20",
        price: 123456,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },

    {
        name: "Samsung 15",
        price: 235423,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"

    },

    {
        name: "MI 23",
        price: 235445,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },

    {
        name: "Poco 25",
        price: 568776,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },

    {
        name: "Lava 12",
        price: 98765,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
    },
]

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct")


    card.innerHTML = `<div>
            <img src="${product.imgURL}" alt="">
    </div>

    <div class="productDetail">
            <p>${product.name}</p>
            <p>${product.price}</p>
    </div>`

    productList.append(card)
})



let h2 = document.querySelector("h2")
// body.removeChild(h2)                //you have to access the parent

h2.remove()                             //directly on the element you want to remove

let clone = productList.cloneNode(true);

console.log(clone);