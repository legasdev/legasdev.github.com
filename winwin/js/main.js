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
    
})();