/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelector('.promo__adv'),
      movieGenre = document.querySelector('.promo__genre'),
      bgImage = document.querySelector('.promo__bg'),
      moviesList = document.querySelectorAll('.promo__interactive-item');

ads.remove();
movieGenre.textContent = 'драма';
bgImage.style.background = 'url(./img/bg.jpg)';

let sortedMovieList = Array.from(moviesList);

sortedMovieList.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
});

let parent = sortedMovieList[0].parentNode;
parent.innerHTML = '';

sortedMovieList.forEach((movie, index) => {
    movie.textContent = `${index + 1}. ${movie.textContent}`;
    parent.append(movie)
});