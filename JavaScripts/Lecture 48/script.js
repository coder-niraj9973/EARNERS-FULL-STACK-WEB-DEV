

// localStorage.setItem("num", 1)
// localStorage.setItem("num2", 1)
// localStorage.setItem("num3", 1)
// localStorage.setItem("num4", 1)

// let result = localStorage.getItem("nishant")        //ye null dega qki nishant ki nhi hai local storage me
// console.log(result);

// let result2 = localStorage.key("0")
// console.log(result2);

// localStorage.removeItem("num")


// document.querySelector("#local-storage-clear").addEventListener("click", () => {
//     localStorage.clear()
// })


// document.querySelector("#session-storage").addEventListener("click", () => {
//     sessionStorage.setItem("session", "item")
// })


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// };

// xhttp.open("GET", "https://api.github.com/users/nishantsaini2331", true);
// xhttp.send();

// fetch("https://api.github.com/users/nishantsaini2331").
//     then(data => data.json()).
//     then(data => console.log(data))


async function getUser(username = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${username}`)

    const data = await response.json()
    return data
}

getUser()

document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML = `
        <img src="${data.avatar_url}" width="200" height="200" alt="">
        <h2>${data.name}</h2>
        <i>username: ${data.login}</i>
        <p>${data.bio}</p>
        <p>followers: ${data.followers}</p>
        <p>following: ${data.following}</p>
        <p>Public Repos: ${data.public_repos}</p>`

})