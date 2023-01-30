'use strict';
let questionHowManyFilms;
// const numberOfFilms = `Я посмотрел всего фильмов ${questionHowManyFilms}`;
// console.log(numberOfFilms);

function start() {
    questionHowManyFilms = +prompt('Сколько фильмов вы посмотрели?');

    while (questionHowManyFilms == '' || questionHowManyFilms == null || isNaN(questionHowManyFilms)){
        questionHowManyFilms = +prompt('Сколько фильмов вы посмотрели?');
    }
}
start();

let personalMovieDB = {
    count: [questionHowManyFilms],
    movies: {},
    actors:{},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

function rememberMyFilms(){ 
    for (let i = 0; i < 2; i++) {
    const a = prompt('Какой последний фильм вы посмотрели?').trim(),
          b = prompt('Какой рейтинг вы поставите ему?');

    if (a != null && b != null && a != '' && b != '' ** a.length < 50){ 
          personalMovieDB.movies[a] = b;
          console.log('done');
    }   else {
          console.log('error');
          i--;
     }
    }
}
rememberMyFilms();

function detectPersonalLevel(){ 
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB() {
    while (personalMovieDB.privat === false){
        console.log(personalMovieDB);
        return personalMovieDB;
    }
}
showMyDB();

function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        const questionAboutGenre = prompt(`Ваш любимый жарн под нормер ${i}`);
        personalMovieDB.genres.push(questionAboutGenre);
        // personalMovieDB.genres[i - 1] = questionAboutGenre; вариант учителя
    }
}
writeYourGenres();