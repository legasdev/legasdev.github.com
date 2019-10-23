;(function () {
    'use strict';
 
    window.addEventListener('scroll', e => {
        const 
            scrollY = window.scrollY,
            header = document.querySelector('.header');

        if (scrollY > 0 && !header.classList.contains('fix')) {
            header.classList.add('fix');
        } else if (scrollY <= 0 && header.classList.contains('fix')) {
            header.classList.remove('fix');
        }
    });

    const menuMob = document.querySelector('.menu_mob');

    menuMob.addEventListener('touchend', e => {
        e.preventDefault();
        e.target.click();
    });

    menuMob.addEventListener('click', e => {
        e.currentTarget.classList.toggle('active');
        document.querySelector('.header__bottom').classList.toggle('active');     
    });

    // Открытие FAQ вопросов
    const questions = document.querySelectorAll('.faq__question');

    questions.forEach(item => {
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
    })
    
})();