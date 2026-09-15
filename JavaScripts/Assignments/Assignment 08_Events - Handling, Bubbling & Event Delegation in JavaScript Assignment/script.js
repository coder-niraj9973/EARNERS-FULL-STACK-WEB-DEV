// q1 - Handle a Button Click

const btn = document.querySelector("#btn")
btn.addEventListener("click", function(){
    console.log("Button Clicked");
})

// q2 - change text on click
let oldv = document.querySelector("#old")
btn.addEventListener("click", function(){
    oldv.textContent = "Thanks for visiting!"
})

// q3 - Handle a Mouseover Event
const mouseOver = document.querySelector("#mouseOver")
mouseOver.addEventListener("mouseover", function(){
    mouseOver.textContent = "Mouse is over the heading!"
})

// q4 - Display the Clicked Element
btn.addEventListener("click", function(event){
    console.log(event.target.tagName);
})

// q5 - Display Mouse Coordinates
const mouseCoordinates = document.querySelector("#mouseCoordinates")
mouseCoordinates.addEventListener("mousemove", function(event){
    console.log(event.clientX);
    console.log(event.clientY);
})

// q6 - Get the Value of an Input Using the Event Object
const inputBox = document.querySelector("#inputBox")
inputBox.addEventListener("input", function(event){
    console.log(event.target.value);
})

// q7 - Remove an Event Listener
const btn2 = document.querySelector("#btn2")
function handleClick(){
    console.log("Button clicked");
}
btn2.addEventListener("click", handleClick)         //lagaye
btn2.removeEventListener("click",handleClick)       //hata diye

// q8 - Run an Event Only Once
const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", function(e){
    console.log("Welcome!");
    
}, {once : true})                       //ek hi baar code chalega


// q9 - Stop Event Propagation
const div = document.querySelector("#div")
const btn4 = document.querySelector("#btn4")
div.addEventListener("click", function(){
    console.log("Parent Clicked");
})

btn4.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("Child Clicked");
})


// q10 - Demonstrate Event Bubbling
const div2 = document.querySelector("#div2")
const btn5 = document.querySelector("#btn5")
div2.addEventListener("click", function(){
    console.log("Parent Clicked");
})

btn5.addEventListener("click", function(e){
    console.log("Button Clicked");
})

// q11 - Demonstrate Event Capturing
const div3 = document.querySelector("#div3")
const btn6 = document.querySelector("#btn6")
div3.addEventListener("click", function(){
    console.log("Parent Clicked");
}, true)

btn6.addEventListener("click", function(e){
    console.log("Button Clicked");
}, true)


//q12 - Handle Multiple Buttons Using Event Delegation
const buttons = document.querySelector("#buttons")
buttons.addEventListener("click", function(e){
    console.log(e.target.textContent);
})


//q13 - Handle a Dynamic List Using Event Delegation
const skills = document.querySelector("#skills")
skills.addEventListener("click", function(e){
    console.log(`You clicked: `,e.target.textContent);
})