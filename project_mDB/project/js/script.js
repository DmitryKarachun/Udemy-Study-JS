/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
            promoBg = document.querySelector('.promo__bg'),
            promoGenre = promoBg.querySelector('.promo__genre'),
            promoInteractiveList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            input = addForm.querySelector('.adding__input'),
            btn = addForm.querySelector('button'),
            checkbox = addForm.querySelector('[type="checkbox"]');
    

    const deletePromo = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };
    const makeChanges = () => {
        promoGenre.textContent = "Драма";
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    }
    const sortArr = (arr) => {
        arr.sort();
    };
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm =input.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log('Любимый фильм');
            }
                
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promoInteractiveList);
        }

        e.target.reset();
    });
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);
        films.forEach((film, i) => { 
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
            </li>`;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                console.log(btn.parentElement);
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
                
            });
        });
    }

    deletePromo(promoAdv);
    makeChanges();
    sortArr(movieDB.movies);

});