//q1 - Handle Form Submit Event
// const form = document.querySelector("#form")
// const message = document.querySelector("#message")

// form.addEventListener("submit", function(e){
//     message.textContent = "Form Submitted Successfully"
// })



//q2 - Prevent Form Submission
// const form = document.querySelector("#form")
// const message = document.querySelector("#message")

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     message.textContent = "Form Submitted Successfully"
// })


// q3 - Display Input Using the input Event
// const message = document.querySelector("#message")
// const name = document.querySelector("#name")

// name.addEventListener("input", function(e){
//     e.preventDefault();
//     message.textContent = `You enetered: ${name.value}`;
// })


//q4 - Detect Changes Using the change Event
// const select = document.querySelector("#select")
// const message = document.querySelector("#message")

// select.addEventListener("change", function(e){
//     message.textContent = `Selected Language: ${select.value}`
// })


//q5 - Handle the focus Event
// const input = document.querySelector("#name")
// input.addEventListener("focus", function(e){
//     input.style.border = "2px solid blue"
// })


//q6 - Handle the blur Event
// const input = document.querySelector("#name")
// const message = document.querySelector("#message")
// input.addEventListener("blur", function(e){
//     message.textContent = "You left the input filed"
// })



//q7 - Validate a Required Name Field
// const input = document.querySelector("#name")
// const message = document.querySelector("#message")
// const form = document.querySelector("#form")

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     if(input.value.trim().length === 0){
//         message.textContent = "Name is required";
//     }
// })


// //q8 - Validate Email Field
// const email = document.querySelector("#name")
// const message = document.querySelector("#message")
// const form = document.querySelector("#form")

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     if(email.value.trim().length === 0){
//         message.textContent = "email is required";
//     }
// })



// //q9 - Validate Password Length
// const password = document.querySelector("#password")
// const message = document.querySelector("#message")
// const form = document.querySelector("#form")

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     if(password.value.length < 6){
//         message.textContent = "Password must be at least 6 characters";
//     }
// })


//q10 - Validate Multiple Form Fields
const form = document.querySelector("#form")
const input = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector("#message")

// form.addEventListener("submit", function(e){
//     e.preventDefault();
    
//     if(input.value.trim().length === 0){
//         message.textContent = "Name is required";
//     }

//     if(password.value.length < 6){
//         message.textContent = "Password must be at least 6 characters";
//     }

//     if(email.value.trim().length === 0){
//         message.textContent = "Email is required";
//     }
// })


function validateName(){
    return input.value.trim().length !== 0;
}
function validateEmail(){
    return email.value.trim().length !== 0;
}
function validatePassword(){
    return password.value.trim().length >= 6;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(!validateName()){
        message.textContent = "Name is required";
    }

    else if(!validateEmail){
        message.textContent = "Email is requirede"
    }

    else if(!validatePassword){
        message.textContent = "Password must be at least 6 characters"
    }
    else{
        message.textContent = "Form Submitted Succsss"
    }
})


