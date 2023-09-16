//!GLOBAL VARIABLES
const apiKey = "9fa6930b930e84f99ee4b7654fb3e0f9";
const apiUrl = "https://api.themoviedb.org/3/movie/top_rated/?";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function searchMovie() {
  const response = await fetch(apiUrl + `api_key=${apiKey}`);
  var data = await response.json();

  //!LOCAL VARIABLES
  let releaseDate = `Release Date: ${data.results[0].release_date}` ;
  let runtime = `Runtime: ${data.results[0].runtime}`;
  let title = `Title: ${data.results[0].title}`;
  let overview = data.results[0].overview;
  let posterPath = data.results[0].poster_path;
  let scrUrl = "https://image.tmdb.org/t/p/original$";
  let poster = scrUrl + posterPath;

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original + ${Posterpath}`;

  if (response.status === 404 || response.status === 34) {
    alert("Error!!! Movie not found or Check Internet Network ");
  } 
  else {    
    document.querySelector("#movieTitle").innerHTML = title;
    document.querySelector("#movieReleaseDate").innerHTML = releaseDate;    
    document.querySelector("#movieRuntime").innerHTML = runtime;
    document.querySelector("#movieverview").innerHTML = overview;
    // document.querySelector("#moviePoster").appendChild(img);
  }

  console.log(data);
} 
searchMovie();

// https://image.tmdb.org/t/p/original${movie.poster_path}

// searchButton.addEventListener("click", () => {
//   searchMovie(searchInput.value);
// });