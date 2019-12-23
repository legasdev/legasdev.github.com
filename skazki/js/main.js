;(function () {
    'use strict';
    
    const questions = document.querySelectorAll('.faq__question');

    questions && questions.forEach(item => {
        item.addEventListener('click', e => {       
            const clickItem = e.currentTarget;

            if (clickItem.classList.contains('active')) 
                clickItem.classList.remove('active');
            else
                questions.forEach(value => {
                    value.classList.remove('active');
                    if (clickItem === value) value.classList.add('active');
                });
        });
    });

    // Открытие меню мобильного
    const menuMob = document.querySelector('.mobile_menu_btn');

    menuMob && menuMob.addEventListener('touchend', e => {
        e.preventDefault();
        e.target.click();
    });

    menuMob && menuMob.addEventListener('click', e => {
        e.currentTarget.classList.toggle('active');
        document.querySelector('.mobile_menu').classList.toggle('active');     
    });

    // Открытие допменю
    const dopmenu = document.querySelector('.aside_btn');

    dopmenu && dopmenu.addEventListener('touchend', e => {
        e.preventDefault();
        e.target.click();
    });

    dopmenu && dopmenu.addEventListener('click', e => {
        e.currentTarget.classList.toggle('active');
        document.querySelector('.aside').classList.toggle('active');

        if (Array.from(e.currentTarget.classList).includes('active')) {
            e.currentTarget.innerHTML = 'Закрыть';
        } else {
            e.currentTarget.innerHTML = 'Выберите сказку здесь';
        }

    });

    // Скроллы
    const scrolls = document.querySelectorAll('.main__theme_wrapper');
    scrolls && scrolls.forEach(item => {
        item.addEventListener('click', e => {
            const num = e.currentTarget.dataset.scroll;
            const top = document.querySelectorAll('.slider__wrapper')[num - 1].getBoundingClientRect().top;
            window.scrollBy({top, behavior: 'smooth'});
        });
    });

    
    // Открытие подменю
    const asideMore = document.querySelectorAll('.aside__link_more.more');

    asideMore && asideMore.forEach(item => {
        item.addEventListener('click', e => {
            // Установка max-height у подменю
            const asideMoreHeight = document.querySelectorAll('.aside__more');
            asideMoreHeight && asideMoreHeight.forEach(item => {
                item.dataset.height = item.scrollHeight;
            });
            const arr = Array.from(e.currentTarget.classList);
            const obj = e.currentTarget.parentElement.querySelector('.aside__more');
            if (arr.includes('open')) {
                e.currentTarget.classList.remove('open');
                obj.style.maxHeight = '0px';
            } else {
                e.currentTarget.classList.add('open');
                obj.style.maxHeight = `${obj.dataset.height}px`;
            }
        });
    });

    // Кнопка открытие доп раскрасок
    const btnMore = document.querySelector('.coloring__showmore');
    btnMore && btnMore.addEventListener('click', () => {
        document.querySelectorAll('.coloring__wrapper').forEach(item => {
            item.dataset.height = item.scrollHeight;
        });
        document.querySelectorAll('.coloring__wrapper').forEach(item => {
            item.classList.remove('hide');
            item.style.maxHeight = `${item.dataset.height}px`;
        });
    });

    // Обновление оценки при выборе
    const elems = document.querySelectorAll('input[type="radio"]');

    elems && elems.forEach(item => {
        item.addEventListener('click', e => {
            document.querySelector('.rating_block__num').innerHTML = `${e.currentTarget.value}/5`;
        });
    });

    // Открытие подменю в списках раскрасок
    const colorAside = document.querySelectorAll('.aside_li');
    colorAside && colorAside.forEach(item => {
        item.addEventListener('click', e => {
            // Установка max-height у подменю
            const colorAsideInner = document.querySelectorAll('.aside_ul__inner');
            colorAsideInner && colorAsideInner.forEach(item => {
                item.dataset.height = item.scrollHeight;
            });
            const arr = Array.from(e.currentTarget.classList);
            const obj = e.currentTarget.querySelector('.aside_ul__inner');
            if (arr.includes('open')) {
                e.currentTarget.classList.remove('open');
                obj.style.maxHeight = '0px';
            } else {
                e.currentTarget.classList.add('open');
                obj.style.maxHeight = `${obj.dataset.height}px`;
            }
        });
    });
})();
