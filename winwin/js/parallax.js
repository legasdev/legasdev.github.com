;(function () {
    'use strict';

    const 
        canvas__img = document.querySelectorAll('.canvas__img'),
        screen = document.querySelector('.block--parallax'),
        speed = [0.1, 0.05, 0.2, 0.3, 0.4];
    
    let firstX = -1;
    screen.addEventListener('mousemove', e => {
        
        if (window.innerWidth > 1000) {
            if (firstX <= 0) {firstX = e.screenX};
            
            const deltaX = e.screenX - firstX;
            canvas__img.forEach( (item, i) => {
                const
                    style = getComputedStyle(item),
                    transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform,
                    posX = +transform.split(', ')[4];
                i === 1 
                    ? item.style.transform = `matrix(-1, 0, 0, 1, ${deltaX * speed[i] * 0.1}, 0)`
                    : item.style.transform = `matrix(1, 0, 0, 1, ${deltaX * speed[i] * 0.1}, 0)`;
                
            });
        }
    });
    
    function getTranslate(item) {
        var transArr = [];

        if (!window.getComputedStyle) return;
        var style     = getComputedStyle(item),
            transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
        var mat       = transform.match(/^matrix3d\((.+)\)$/);
        if (mat) return parseFloat(mat[1].split(', ')[13]);

        mat = transform.match(/^matrix\((.+)\)$/);
        mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0);
        mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0);

        return transArr;
    }

})();
    