// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((directors) => directors.director);

  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;

  const films = moviesArray.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return films.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const average = moviesArray.reduce((accumulator, { score }) => {
    if (!score) return accumulator;

    return accumulator + score;
  }, 0);

  console.log(average / moviesArray.length);
  //return Math.round((average / moviesArray.length) * 100) / 100;
  return +(average / moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0;

  const movie = moviesArray.filter((movie) => movie.genre.includes("Drama"));

  return scoresAverage(movie);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movies = [...moviesArray].sort((a, b) => {
    if (!(a.year - b.year)) return a.title.localeCompare(b.title);
    return a.year - b.year;
  });

  return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titless
function orderAlphabetically(moviesArray) {
  const movies = [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .sort((a, b) => a.score - b.score)
    .map((title) => title.title)
    .filter((movies, index) => index < 20);

  return movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movies = [...moviesArray].map((movie) => ({
    duration: convertToMin(movie.duration),
  }));

  return movies;
}

function convertToMin(time) {
  let auxTime = time.split(" ");

  auxTime[0] = auxTime[0].replace("h", "");

  if (auxTime.length > 1) {
    auxTime[1] = auxTime[1].replace("min", "");
    return auxTime[0] * 60 + parseInt(auxTime[1]);
  }

  return auxTime[0] * 60;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  const yearScore = 
}

function yearAvg(moviesYears) {
  const avg = moviesYears.reduce((accumulator, score) => {
    return accumulator + score;
  }, 0);

  return avg / moviesYears;
}
