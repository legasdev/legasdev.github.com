'use strict'

var
    // Смена слайдов на главной
    changeMainSlider,
    // Подстраиваем размеры слайдов мини слайдера
    changeWidthMiniSlider,
    // Смена слайдов в наших работах
    changeUsWorkSlides;



$(document).ready( () => {
    $('.reviews-wrapper').css('height', $('.reviews-w-block.active').height() + 60 );
    $('.works-wrapper').css('height', $('.works-w-block.active').height() + 60 );
    
    // Нажатие на кнопку меню
    $('body').on('click', '.menu-l-menu-btn', (e) => {
        $('.menu').toggleClass('opened');
        $('.menu-l-menu-btn').toggleClass('opened');
    });
    
    // Смена слайдов на главной
    $('body').on('click', '.main-page-s', (e) => {
       ($(e.currentTarget).html() === 'Вперед') ? 
           changeMainSlider(true, $(e.currentTarget)) : changeMainSlider(false, $(e.currentTarget));
    });
    
    // Смена слайдов в наших работах
    $('body').on('click', '.works-w-left, .works-w-right', (e) => {
       ($(e.currentTarget).hasClass('works-w-right')) ? 
           changeUsWorkSlides(true, $(e.currentTarget)) : changeUsWorkSlides(false, $(e.currentTarget));
    });
    
    changeWidthMiniSlider();
});

$(window).scroll( (e) => {
    
    $('.reviews-wrapper').css('height', $('.reviews-w-block.active').height() + 60 );
    $('.works-wrapper').css('height', $('.works-w-block.active').height() + 60 );
    changeWidthMiniSlider();
    
});


// Смена слайдов на главной
// True - смена вперед; false - назад
changeMainSlider = (next, obj) => {
    if (next) {
        let 
            slideReady = $(obj).parent().siblings('.main-page-slides').find('.main-page-s-slide.ready'),
            slideActive = $(obj).parent().siblings('.main-page-slides').find('.main-page-s-slide.active');
        
        $(slideActive).removeClass('active'); 
        $(slideReady).removeClass('ready'); 
        $(slideReady).addClass('active'); 
        if ($(slideReady).next().length > 0) {
            $(slideReady).next().addClass('ready'); 
        } else {
            $(slideActive).siblings('.main-page-s-slide:first').addClass('ready'); 
        }
        
        // Меняем слова
        $('.main-page-sw-word').find('span').css('opacity', 0);
        setTimeout(()=>{
            $('.main-page-sw-word').find('span').html($(slideReady).attr('data-word'));
            $('.main-page-sw-current').html($(slideReady).attr('data-num'));
            $('.main-page-sw-word').find('span').css('opacity', 1);
        }, 200);
        
    } else {
        let 
            slideReady = $(obj).parent().siblings('.main-page-slides').find('.main-page-s-slide.ready'),
            slideActive = $(obj).parent().siblings('.main-page-slides').find('.main-page-s-slide.active');
        
        
        $(slideActive).removeClass('active'); 
        $(slideActive).addClass('ready');
        $(slideReady).removeClass('ready');
        
        if ($(slideActive).prev().length > 0) {
            $(slideActive).prev().addClass('active'); 
        } else {
            $(slideActive).siblings('.main-page-s-slide:last').addClass('active'); 
        }
        
        slideActive = $(obj).parent().siblings('.main-page-slides').find('.main-page-s-slide.active');
        
        // Меняем слова
        $('.main-page-sw-word').find('span').css('opacity', 0);
        setTimeout(()=>{
            $('.main-page-sw-word').find('span').html($(slideActive).attr('data-word'));
            $('.main-page-sw-current').html($(slideActive).attr('data-num'));
            $('.main-page-sw-word').find('span').css('opacity', 1);
        }, 200);
    }
}

// Подстраиваем размеры слайдов мини слайдера
changeWidthMiniSlider = () => {
    
    let num = 5;
    $(window).width() < 1190 ? num = 3 : num;
    $(window).width() < 700 ? num = 1 : num;
    
    let 
        width = $('.main-about-partner-center-wrapper').width() / num,
        margin = width * .1;
    width -= margin * 2;
    $('.main-about-partner-center-logo').css('width', width);
    $('.main-about-partner-center-logo').css('margin-left', margin);
    $('.main-about-partner-center-logo').css('margin-right', margin);
}

// Смена слайдов в наших работах
// True - смена вправо; false - влево
changeUsWorkSlides = (next, obj) => {
    if (next) {
        
        let
            active = $(obj).siblings('.active'),
            left = $(obj).siblings('.left'),
            right = $(obj).siblings('.right');
        
        $(active).removeClass('active');
        $(active).addClass('right');
        
        $(right).removeClass('right');
        $(right).addClass('left');
        
        $(left).removeClass('left');
        $(left).addClass('active');
        
    } else {
        let
            active = $(obj).siblings('.active'),
            left = $(obj).siblings('.left'),
            right = $(obj).siblings('.right');
        
        $(active).removeClass('active');
        $(active).addClass('left');
        
        $(left).removeClass('left');
        $(left).addClass('right');
        
        $(right).removeClass('right');
        $(right).addClass('active');
    }
}