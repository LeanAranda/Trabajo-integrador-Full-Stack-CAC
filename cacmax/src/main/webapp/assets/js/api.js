const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ1ZjUyOGJiMmFkOGNjNTI2NmQ4NmE3MWVhZTUwMyIsInN1YiI6IjY2NTBlY2FmOTRiNDkxYWVjNjRiNTcwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8lFZqLhhgmqRaAXUyDnzltWxq0_tClw6eVfzOw_KSqg'
    }
};

const IMG_MOVIE = "https://image.tmdb.org/t/p/w500/"

fetch('https://api.themoviedb.org/3/movie/popular',options)
.then(res=> res.json())
.then(data =>{
    mostrarPeliculas(data.results);
})

function mostrarPeliculas(movies){
    console.log(movies);

    movies.forEach(movie => {
        let { title, poster_path } = movie;
        let movieElement = document.getElementById("movies");
        movieElement.innerHTML += "";
        movieElement.innerHTML += `
            <a class="card" href="movie.html">
                <img src="${IMG_MOVIE + poster_path}">
                <p>${title}</p>
            </a>
        `
    });
};
