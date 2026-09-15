/* q1 -> select an element by id */
// let h1 = document.getElementById("#title")
// h1.textContent = "Hello JavaScript"


// q2 -> Select an Element Using querySelector()
// let p = document.querySelector(".description")
// p.textContent = "New Description"

// q3 -> Select Multiple Elements Using querySelectorAll()
// let items = document.querySelectorAll(".item")
// items.forEach(item => {
//     item.style.color = "blue"
// })

// q4 -> Change Content Using textContent
// let message = document.querySelector("#message")
// message.textContent = "Welcome to JAvaScript!"

// q5 -> add HTML using innerHTML
// let container = document.querySelector("#container")
// container.innerHTML = `<h2>My Website</h2>
//                     <p>Welcome to my website!</p>`

// q6 -> change an Attribute Using setAttribute()
// let profileImage = document.querySelector("#profileImage")
// profileImage.setAttribute("src", "new.jpg")
// profileImage.setAttribute("alt", "New Image")

// q7 -> Add and Remove Classes Using classList
// let btn = document.querySelector("#btn")
// btn.classList.add("added")
// btn.classList.remove("added")

// q8 -> Modify Element Styl
// let heading = document.querySelector("#heading")
// heading.style.color = "blue"
// heading.style.fontSize = "40px"
// heading.style.backgoundColor = "yellow"

// q9 -> Read Data Using dataset
// let productBtn = document.querySelector("#productBtn")
// console.log(productBtn.dataset.id);

// q10 -> Create an Element Using createElement()
// let create = document.createElement("p")
// create.textContent = "This para was created by using JavaScript"
// document.body.appendChild(create)

// q11 -> Add an Element Using appendChild(
// let skills = document.querySelector("#skills")
// const newItem = document.createElement("li")
// newItem.textContent = "JavaScript"
// skills.appendChild(newItem)


// // q12 -> Add Elements Using append() and prepend()
// const appendD = document.querySelector("#appendD")
// appendD.prepend("HTML")
// appendD.append("React")

//q13 ->  Insert an Element Using insertBefore()
// const insertBeforeD = document.querySelector("#insertBeforeD")
// const second = document.querySelector("#second")
// const newItem = document.createElement("li");
// newItem.textContent = "CSS";
// insertBeforeD.insertBefore(newItem, second)


//q14 -> Removing and Cloning Elements
// const removeD = document.querySelector("#removeD")
// const css = document.querySelector("#css")
// removeD.removeChild(css)

// q15 -> Clone an Element Using cloneNode()
const btn2 = document.querySelector("#btn2")
const clone = btn2.cloneNode(true)          //making duplicate

document.body.appendChild(clone)







