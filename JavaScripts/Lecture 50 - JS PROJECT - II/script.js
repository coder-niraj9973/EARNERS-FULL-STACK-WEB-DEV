

// API = "http://www.omdbapi.com/?apikey=efd58145&t=avengers"

const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");

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

    let response = await fetch(`http://www.omdbapi.com/?apikey=efd58145&s=${query}`);
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