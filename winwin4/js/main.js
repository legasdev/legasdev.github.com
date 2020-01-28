$(function(){

    let show = true;

    $('.circlestat').circliful();

    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        let e_top = $('.timers').offset().top; // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height(); // Высота окна браузера
        let d_height = $(document).height(); // Высота всего документа
        let e_height = $('.timers').outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.timer__counter').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
           show = false;
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
});