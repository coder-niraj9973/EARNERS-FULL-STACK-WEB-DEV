
const form = document.querySelector("#form")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")



const LIMIT = 150;

charCount.textContent = `${LIMIT} Character remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}

function ValidUsername(username) {

    if (username.value.trim().length === 0) {
        // errorMessage.textContent = "Enter your name"
        showError(username, "Please enter your name")
        return false
    }

    if (username.value.trim().length < 3) {
        showError(username, "Username must be at least 3 characters")
        return false
    }

    clearError(username);
    return true
}

function ValidPassword(password) {

    if (password.value.trim().length === 0) {
        // errorMessage.textContent = "Enter your name"
        showError(password, "Please enter your password")
        return false
    }

    if (password.value.trim().length < 8) {
        showError(password, "password must be at least 8 characters")
        return false
    }

    clearError(password);
    return true
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const password = document.querySelector("#password").value

    const isUsernameValid = ValidUsername(username)
    const isPasswordValid = ValidPassword(password)


    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h2").classList.remove("hidden")
    }
    else {
        document.querySelector("h2").classList.add("hidden")

    }


})

// bio.addEventListener("input" , (e) => {
//     const remaining = LIMIT - bio.value.length
//     charCount.textContent = `${remaining} Character remaining`
// })

// username.addEventListener("input" , (e) => {
//     console.log("Change event", username.value);
// })

// username.addEventListener("change" , (e) => {
//     console.log("Change event", username.value);
// })

// checkbox.addEventListener("change" , (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input" , (e) => {
//     console.log(country.value);
// })

// username.addEventListener("focus" , (e) => {
//     console.log("focus event", username.value);
// })

// username.addEventListener("blur" , (e) => {
//     console.log("Blur event", username.value);
// })

// password.addEventListener("focus" , (e) => {
//    passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur" , (e) => {
//    passwordHint.classList.add("hidden")
// })