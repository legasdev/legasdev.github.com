'use strict'

var
    allBlocks,          // Основные блоки
    hoverCompassLink,   // направление стрелки компаса
    addWheelEvent,      // добавить функцию при прокрутке мыши
    removeWheelEvent,   // Удалить отслеживание прокрутки
    onWheel,            // событие при прокрутке колесика
    currentBlock,       // Текущий блок
    checkScroll,        // Возможен ли скроллинг
    setCurrentBlock,    // Установка текущего блока
    scrollSecondBlock,  // Прокрутка во втором блоке
    openCloseMenu;      // Открыть/закрыть меню



$(document).ready( () => {
    $('.reviews-wrapper').css('height', $('.reviews-w-block.active').height() + 60 );
});

$(window).scroll( (e) => {
    
    $('.reviews-wrapper').css('height', $('.reviews-w-block.active').height() + 60 );
    
});

