/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => { //чтобы сначала загружался документ и потом уже JS
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.getElementsByClassName('promoImage');
const ganre = document.querySelector('.promo__genre');
const backgroundImage = document.querySelector('.promo__bg');
const list = document.querySelectorAll('.promo__interactive-item');
const blockList = document.querySelector('.promo__interactive-list');
//Задача 1
// promo[0].remove();
// promo[0].remove();
// promo[0].remove();

// другой способ
const adv = document.querySelectorAll('.promo__adv img'); //  получаем все img в promo_adv
const deleteAdv = (arr) => {
    arr.forEach(item => {        //     ===== // adv.forEach(function(item)){
        item.remove();
});
};
deleteAdv(adv);


//Задача 2
//Два способа:
// ganre.textContent = "Драма";
// ganre.innerHTML = 'Драма';

// //Задача 3
// backgroundImage.style.background  = 'url("img/bg.jpg") center center/cover no-repeat';

const makeChanges =() => {
    ganre.innerHTML = 'Драма';

    backgroundImage.style.background  = 'url("img/bg.jpg") center center/cover no-repeat';

};
makeChanges();

//Задача 4
// movieDB.movies.sort();
const sortArr = (arr) => {
    arr.sort();
};
sortArr(movieDB.movies);

// blockList.innerHTML = ""; // УДАЛЯЕМ БЛОК-СПИСОК С ФИЛЬМАМИ

// movieDB.movies.forEach((film, i) => { //помещаем колл бэк  функцию где фильм и номер по порядку 
//     blockList.innerHTML += `
//     <li class="promo__interactive-item">${i+1}. ${film}
//         <div class="delete"></div>
//     `;
// });


// как работает forEach 
// forEach это коллбэк функция 
// forEach(function (element, index, array) { /* … */ }, thisArg)

////////////////////////////////////////////
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

const addForm = document.querySelector('form.add'); //находим форму с классом add
const addInput = addForm.querySelector('.adding__input'); //находим инпут по классу  в форме с классом add
const checkbox = addForm.querySelector('[type="checkbox"]'); //получаем элемент чекбокс с формы с атрибутом тайп-чекбокс

addForm.addEventListener('submit', function(event){
    event.preventDefault(); // обьект события. Отменяем стандартное поведение браузераю.
    let newFilm =  addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        
        if (favorite) {
            console.log('добавляем любимый фильм');
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, blockList);
    }

    event.target.reset();
});

function createMovieList(films, parent){
    parent.innerHTML = ""; // УДАЛЯЕМ БЛОК-СПИСОК С ФИЛЬМАМИ
    sortArr(films);

    films.forEach((film, i) => { //помещаем колл бэк  функцию где фильм и номер по порядку 
    parent.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
        </li>
    `;
});
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent); //вызываем функцию чтобы нумерация была правильная при  удаление
        });
    });
}

createMovieList(movieDB.movies, blockList);

});// Закрытие document.addEventListener('DOMContentLoaded', () =>