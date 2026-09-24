
const movieDetail = document.querySelector("#movie-detail");

const params = new URLSearchParams(location.search)
const imdbID = params.get("id")

if (imdbID) {
    searchMovie(imdbID.trim())
}



async function searchMovie(imdbID) {

    let response = await fetch(`http://www.omdbapi.com/?apikey=efd58145&i=${imdbID}&plot=full`);
    let data = await response.json()
    console.log(data);

    if (data.Response === "True") {
        displayMovies(data);
    }
    else {
        movieHub.innerHTML = `<p>${data.Error} </p>`
    }
}


function displayMovies(data) {

    movieDetail.innerHTML = `<div>
            <img src=${data.Poster} alt="">
        </div>

        <div>
            <h2>${data.Title}</h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>IMDB: ${data.imdbRating} / 10</p>
            </section>

            <div>
                <p>PLOT OVERVIEW</p>
                <p>${data.Plot}</p>
            </div>

            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>

                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>

            <div>
                <p>Actors</p>
                <p>${data.Actors}</p>
            </div>

            <div>
                <section>
                    <p>LAnguage</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>


            </div>

            <button> 
            <a href=https://www.imdb.com/title/${data.imdbID} target =" _blank">View on IMDB</a>
            </button>

        </div>`
}
