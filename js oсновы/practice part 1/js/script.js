'use strict';
// const numberOfFilms = `Я посмотрел всего фильмов ${questionHowManyFilms}`;
// console.log(numberOfFilms);


let personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        }
    },
    rememberMyFilms: function(){ 
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
    },
    detectPersonalLevel: function(){ 
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        while (personalMovieDB.privat === false){
            console.log(personalMovieDB);
            return personalMovieDB;
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++){
            const questionAboutGenre = prompt(`Ваш любимый жарн под нормер ${i}`);
            personalMovieDB.genres.push(questionAboutGenre);
            // personalMovieDB.genres[i - 1] = questionAboutGenre; вариант учителя
            if(questionAboutGenre === null || questionAboutGenre === ""){
                i--;
             }
             personalMovieDB.genres.forEach(function(){
                console.log(`Любимый жарн #${i} - это ${questionAboutGenre}`);
            });
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
};
