;(function () {
    'use strict';

    const header = document.querySelector('.header');

    let isCanUnFixHeader = true;
 
    window.addEventListener('scroll', e => {
        const 
            scrollY = window.scrollY;

        if (scrollY > 0 && !header.classList.contains('fix')) {
            header.classList.add('fix');
        } else if (scrollY <= 0 && header.classList.contains('fix') && isCanUnFixHeader) {
            header.classList.remove('fix');
        }
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
    });

    // Открытие меню мобильного
    const 
        menuBtn = document.querySelector('.menu__btn'),
        menu = document.querySelector('.mobile_menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        menu.classList.toggle('open');

        if (menu.classList.contains('open'))
            isCanUnFixHeader = false;
        else
            isCanUnFixHeader = true;

        if (!header.classList.contains('fix')) {
            header.classList.add('fix');
        }
            
    });

    // 404
    setTimeout(() => {
        document.querySelector('.code_error').classList.add('active');
    }, 400);
})();