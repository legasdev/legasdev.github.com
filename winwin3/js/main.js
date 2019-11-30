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

    const menuMob = document.querySelector('.mobile_menu_btn');

    menuMob.addEventListener('touchend', e => {
        e.preventDefault();
        e.target.click();
    });

    menuMob.addEventListener('click', e => {
        e.currentTarget.classList.toggle('active');
        document.querySelector('.mobile_menu').classList.toggle('active');     
    });
    
})();