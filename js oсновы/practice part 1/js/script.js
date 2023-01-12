const questionHowManyFilms = prompt(`Сколько фильмов вы посмотрели`);
const numberOfFilms = `Я посмотрел всего фильмов ${questionHowManyFilms}`;
console.log(numberOfFilms);


const lastFilmOfUser = prompt(`Какой последний фильм вы посмотрели?`);
const raitingLastFilmOfUser = prompt(`Какой рейтинг вы поставите ему?`);

let personalMovieDB = {
    count: [questionHowManyFilms],
    movies: {
        [lastFilmOfUser]: raitingLastFilmOfUser
    },
    actors:{},
    genres: [],
    privat: false
};
console.log(personalMovieDB);
