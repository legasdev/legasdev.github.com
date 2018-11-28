'use strict'

var
    // Смена слайдов на главной
    changeMainSlider,
    // Подстраиваем размеры слайдов мини слайдера
    changeWidthMiniSlider,
    // Смена слайдов в наших работах
    changeUsWorkSlides,
    // Смена слайдов в портфолио на главной
    changeMainWork,
    // Смена слов 
    changeWord,
    // Изменить слова на спаны
    updatedWord,
    // Смена слайдов в портфолио на главной мобильной
    changeMainWorkMob,
    // Разрешение сдвинуть слайд в ценах
    checkMovePrice = true,
    // Смена слайдов в ценах
    changePriceSlides,
    // Смена слайдов в оборудовании
    changeEquipSlides,
    // Разрешение сдвинуть слайд в оборудовании
    checkMoveEquip = true;



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
    
    // Смена слайдов в портфолио на главной
    $('body').on('click', '.reviews-wb-btn', (e) => {
       if ($(e.currentTarget).parent().hasClass('right')) 
           changeMainWork(true, $(e.currentTarget).parent());
        else if ($(e.currentTarget).parent().hasClass('left'))
                 changeMainWork(false, $(e.currentTarget).parent());
    });
    
    setTimeout( () => {
        changeWidthMiniSlider();
    }, 500);
    
    // Запуск смены слов на главной
    updatedWord('.main-page-sw-w');
    changeWord('.main-page-sw-w');
    // Запуск смены слов на остальных
    updatedWord('.fs-stream-t-word');
    changeWord('.fs-stream-t-word');
    
    // Для мобильных
    
    // Отзывы на главной
    $('body').on('click', '.uis-left-l, .uis-left-r', (e) => {
        if ($(e.currentTarget).hasClass('uis-left-r')) {
            changeMainWork(true, 
                    $(e.currentTarget).parent().siblings('.reviews-wrapper').find('.reviews-w-block.right'));
            
            let 
                activeUi = $(e.currentTarget).siblings('.uis-center').find('.active'),
                nextUi = $(activeUi).next();
            $(nextUi).length === 0 ? nextUi = $(activeUi).siblings('.uis-tap:first') : true;
            
            $(activeUi).removeClass('active');
            $(nextUi).addClass('active');
            
        } else if ($(e.currentTarget).hasClass('uis-left-l')) {
            changeMainWork(false, 
                    $(e.currentTarget).parent().siblings('.reviews-wrapper').find('.reviews-w-block.left'));
            
            let 
                activeUi = $(e.currentTarget).siblings('.uis-center').find('.active'),
                nextUi = $(activeUi).prev();
            $(nextUi).length === 0 ? nextUi = $(activeUi).siblings('.uis-tap:last') : true;
            
            $(activeUi).removeClass('active');
            $(nextUi).addClass('active');
        }
    });
    
    // Услуги
    $('body').on('click', '.uis-left-p-l, .uis-left-p-r', (e) => {
        if ($(e.currentTarget).hasClass('uis-left-p-r')) {
            
            if ( $('.plus-ww').css('transform').split(', ')[4] > 0) {
                $('.plus-ww').css('transform', 'translate3d(-24%,0,0)');
                $(e.currentTarget).siblings('.uis-center').find('.uis-tap:first').removeClass('active');
                $(e.currentTarget).siblings('.uis-center').find('.uis-tap:last').addClass('active');
            }
            
        } else if ($(e.currentTarget).hasClass('uis-left-p-l')) {
            if ( $('.plus-ww').css('transform').split(', ')[4] < 0) {
                $('.plus-ww').css('transform', 'translate3d(26%,0,0)');
                $(e.currentTarget).siblings('.uis-center').find('.uis-tap:last').removeClass('active');
                $(e.currentTarget).siblings('.uis-center').find('.uis-tap:first').addClass('active');
            }
        }
    });
    
    // Конец анимации для цен
    $('.price-ww').on('transitionend', ()=>{ checkMovePrice = true; });
    
    // Конец анимации для оборудования
    $('.equip-ww-w').on('transitionend', ()=>{ checkMoveEquip = true; });
    
    // Смена ценовых предложений
    $('body').on('click', '.uis-left-pr-l, .uis-left-pr-r', (e) => {
        
        changePriceSlides(e);
        
    });
    
    // Смена слайдов в наших работах
    $('body').on('click', '.uis-left-w-l, .uis-left-w-r', (e) => {
       let
            obj = $(e.currentTarget).parent().siblings('.works-wrapper').find('.works-w-left');
       if ($(e.currentTarget).hasClass('uis-left-w-r')) {
           changeUsWorkSlides(true, $(obj));
           
           let 
                activeUi = $(e.currentTarget).siblings('.uis-center').find('.active'),
                nextUi = $(activeUi).next();
            $(nextUi).length === 0 ? nextUi = $(activeUi).siblings('.uis-tap:first') : true;
            
            $(activeUi).removeClass('active');
            $(nextUi).addClass('active');
           
       } else {
           changeUsWorkSlides(false, $(obj));
           
           let 
                activeUi = $(e.currentTarget).siblings('.uis-center').find('.active'),
                nextUi = $(activeUi).prev();
            $(nextUi).length === 0 ? nextUi = $(activeUi).siblings('.uis-tap:last') : true;
            
            $(activeUi).removeClass('active');
            $(nextUi).addClass('active');
       }
    });
    
    // Смена слайдов в оборудовании
    $('body').on('click', '.uis-equip-l, .uis-equip-r', (e) => {
        
        changeEquipSlides(e);
        
    });
    
    // Открыть форму заявки
    $('body').on('click', '.footer-main-t-order-btn, .fs-btn, .price-wbw-btn, .footer-order-btn', () => {
        $('.order').addClass('active');
    });
    
    // Закрыть форму заказа
    $('body').on('click', '.order-w-close', () => {
        $('.order').removeClass('active');
    });
    
});

$(window).scroll( (e) => {
    
    $('.reviews-wrapper').css('height', $('.reviews-w-block.active').height() + 60 );
    $('.works-wrapper').css('height', $('.works-w-block.active').height() + 60 );
    changeWidthMiniSlider();
});

// Изменить слова на спаны
updatedWord = (activeClass) => {
    let
        words = $(activeClass);
    
    words.each( (i, e) => {
        
        let word = $(e).html().split('');
        
        word.forEach( (elem, j) => {
            if (i !== 0) {
                word[j] = '<span>'+elem+'</span>';
            } else {
                word[j] = '<span style="opacity: 1;">'+elem+'</span>';
            }
            
        });
        
        $(e).html(word);
        
    });
}

// Смена слов на главной
changeWord = (activeClass) => {
    let 
        changeFullWordTime = 2000,
        changeWordTime = 60,
        active = $(activeClass+'.active');
    
    // Слово выведено
    if ( $(active).hasClass('active') ) {
        setTimeout( () => {
            
            let 
                lengthWord = $(active).find('span').length,
                timeout = setInterval( () => {
                    
                    $(active).find('span:eq('+(--lengthWord)+')').css('opacity', 0);
                    if ( lengthWord === 0 ) {
                        clearInterval(timeout);
                        timeout = undefined;
                        
                        $(active).removeClass('active');
                        $(active).next().length === 0 ? 
                            active = $(active).siblings(activeClass+':first') : active = $(active).next();
                        $(active).addClass('active');
                        lengthWord = $(active).find('span').length;
                        let currentNum = 0;
                        
                        timeout = setInterval( () => {
                            $(active).find('span:eq('+(currentNum++)+')').css('opacity', 1);
                            if (currentNum === lengthWord) {
                                clearInterval(timeout);
                                timeout = undefined;
                                changeWord(activeClass);
                            }
                        }, changeWordTime);
                    }

                }, changeWordTime);
            
        }, changeFullWordTime);
    }
    
}

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
    $(window).width() < 1190 ? num = 5 : num;
    $(window).width() < 700 ? num = 3 : num;
    $(window).width() < 550 ? num = 1 : num;
    
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

// Смена слайдов в портфолио на главной
// True - смена вправо; false - влево
changeMainWork = (next, obj) => {
    if (next) {
        
        let
            active = $(obj).siblings('.active'),
            left = $(obj).siblings('.left'),
            right = $(obj);
        
        $(active).removeClass('active');
        $(active).addClass('left');
        
        $(right).removeClass('right');
        $(right).addClass('active');
        
        $(left).removeClass('left');
        $(left).addClass('right');
        
    } else {
        let
            active = $(obj).siblings('.active'),
            left = $(obj),
            right = $(obj).siblings('.right');
        
        $(active).removeClass('active');
        $(active).addClass('right');
        
        $(right).removeClass('right');
        $(right).addClass('left');
        
        $(left).removeClass('left');
        $(left).addClass('active');
    }
}

// Смена слайдов в ценах
changePriceSlides = (e) => {
    let 
        slides = $(e.currentTarget).parent().siblings('.price-wrapper').find('.price-ww'),
        widthSlides = $(slides).find('.price-w-block').width(),
        fullWidth = widthSlides * ($(slides).find('.price-w-block').length - 1),
        maxDOF = fullWidth / 2;
        
    if ($(e.currentTarget).hasClass('uis-left-pr-r')) {
        
        if ( parseFloat($(slides).css('transform').split(', ')[4]) > -maxDOF && checkMovePrice) {
            checkMovePrice = false;
            $(slides).css('transform', 
                          'translate3d('+ 
                          (parseFloat($(slides).css('transform').split(', ')[4]) - widthSlides) 
                          +'px, 0, 0)');
            
            if ($(e.currentTarget).siblings('.uis-center')
                .find('.active').next().length > 0) {
                $(e.currentTarget).siblings('.uis-center')
                    .find('.uis-tap.active').removeClass('active').next().addClass('active');
            }
        }
        
    } else if ($(e.currentTarget).hasClass('uis-left-pr-l')) {
        
        if ( parseFloat($(slides).css('transform').split(', ')[4]) < maxDOF && checkMovePrice) {
            checkMovePrice = false;
            $(slides).css('transform', 
                          'translate3d('+ 
                          (parseFloat($(slides).css('transform').split(', ')[4]) + widthSlides) 
                          +'px, 0, 0)');
            
            if ($(e.currentTarget).siblings('.uis-center')
                .find('.active').prev().length > 0) {
                $(e.currentTarget).siblings('.uis-center')
                    .find('.uis-tap.active').removeClass('active').prev().addClass('active');
            }
        }
        
    }
}

// Смена слайдов в оборудовании
changeEquipSlides = (e) => {
    
    let 
        slides = $(e.currentTarget).parent().siblings('.equip-wrapper').find('.equip-ww-w'),
        widthSlides = $(slides).find('.equip-w-block').width(),
        fullWidth = widthSlides * $(slides).find('.equip-w-block').length,
        maxDOF = fullWidth - widthSlides;
    
    if ($(e.currentTarget).hasClass('uis-equip-r')) {
        if ( parseFloat($(slides).css('transform').split(', ')[4]) > -maxDOF + 10 && checkMoveEquip) {
            checkMoveEquip = false;
            $(slides).css('transform', 
                          'translate3d('+ 
                          (parseFloat($(slides).css('transform').split(', ')[4]) - widthSlides) 
                          +'px, 0, 0)');
            if ($(e.currentTarget).siblings('.uis-center')
                .find('.active').next().length > 0) {
                $(e.currentTarget).siblings('.uis-center')
                    .find('.uis-tap.active').removeClass('active').next().addClass('active');
            }
        }
        
    } else if ($(e.currentTarget).hasClass('uis-equip-l')) {
        
        if ( parseFloat($(slides).css('transform').split(', ')[4]) < 0 && checkMoveEquip) {
            checkMoveEquip = false;
            $(slides).css('transform', 
                          'translate3d('+ 
                          (parseFloat($(slides).css('transform').split(', ')[4]) + widthSlides) 
                          +'px, 0, 0)');
            if ($(e.currentTarget).siblings('.uis-center')
                .find('.active').prev().length > 0) {
                $(e.currentTarget).siblings('.uis-center')
                    .find('.uis-tap.active').removeClass('active').prev().addClass('active');
            }
        }
        
    }
}