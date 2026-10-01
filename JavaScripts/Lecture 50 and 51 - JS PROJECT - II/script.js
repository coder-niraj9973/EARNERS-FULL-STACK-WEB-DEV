

// API = "http://www.omdbapi.com/?apikey=efd58145&t=avengers"

const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value.trim();

    if (!query) {
        return
    }

    console.log(query);
    searchMovies(query);

})


async function searchMovies(query) {

    movieHub.innerHTML = `<span class="loader"></span>`

    let response = await fetch(`http://www.omdbapi.com/?apikey=efd58145&s=${encodeURIComponent(query)}`);
    let data = await response.json()
    console.log(data);

    if(data.Response === "True"){
        displayMovies(data.Search);
    }
    else{
        movieHub.innerHTML = `<p>${data.Error} </p>`
    }
}


function displayMovies(movies) {
    movieHub.innerHTML = ""
    movies.forEach((movie) => {

        
        const div = document.createElement("div")

        div.dataset.imdbID = movie.imdbID
        div.setAttribute("class", "movie-card")

        div.innerHTML = `
            <div>
                <img src=${movie.Poster} alt="">
            </div>

            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>`
            
        movieHub.append(div)
    })

}


movieHub.addEventListener("click", (e) => {
    e.stopPropagation()

    const movieCard = e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    location.href = `movie-details.html?id=${imdbID}`
})

let data = [
    {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg"
    },
    {
        "Title": "Superman, Spiderman or Batman",
        "Year": "2011",
        "imdbID": "tt2084949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_QL75_UY562_CR21,0,380,562_.jpg"
    },
    {
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    },
    {
        "Title": "The Amazing Spiderman 2 Webb Cut",
        "Year": "2021",
        "imdbID": "tt18351128",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spiderman the Verse",
        "Year": "2019–",
        "imdbID": "tt12122034",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDBjNWY3OWYtMjk2ZS00NjA2LWE0NzAtOWQxNzBhNjZlMGYyXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spiderman in Cannes",
        "Year": "2016",
        "imdbID": "tt5978586",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4MDYyMWQtNjM5MS00NzQxLTg5MTktMjI1MTVmNDNmNTA4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_QL75_UY562_CR185,0,380,562_.jpg"
    },
    {
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjA0Yzk5MzAtYTc4ZS00MGVjLTliZmItMTU3MTY2MjIzZGUxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,92,1000,563_.jpg"
    },
    {
        "Title": "SpiderMan Aetherian Rise Film",
        "Year": "2025",
        "imdbID": "tt36455931",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDY5NjQ3Y2ItYzBhMS00ZTU4LTlhODQtODBkM2QzZTM4ZThlXkEyXkFqcGc@._V1_QL75_UY562_CR34,0,380,562_.jpg"
    },
    {
        "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
        "Year": "2007",
        "imdbID": "tt1132238",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
    }
]

displayMovies(data)


hamburger.addEventListener("click", (e) => {
    e.stopPropagation()

    options.classList.toggle("hidden")

    console.log("Hii");
    
})