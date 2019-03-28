'use strict';

let
	secSlider = 5,
	sliderTimer;

$(document).ready(()=>{
	startSlider(secSlider);

	// Ручное управление слайдером
	$('.ui-btn').on('click', (e)=>{
		changeUiSlide($(e.target).index());
	});

	// Ручное управление слайдером влево
	$('.s-prev').on('click', (e)=>{
		changeNextUiSlide(false);
	});

	// Ручное управление слайдером вправо
	$('.s-next').on('click', (e)=>{
		changeNextUiSlide(true);
	});

	// Переключение слайдера по превью
	$('.fg').on('click', (e)=>{
		changeUiSlide($(e.target).index());
		$('html, body').animate({scrollTop: 0}, 500);
	});

	// Открытие всплывающего окна
	$('.buy-btn').on('click', ()=>{
		$('.pop-up').addClass('open');
	});

	// Закрытие всплывающего окна
	$('.close-btn').on('click', ()=>{
		$('.pop-up').removeClass('open');
	});

	// Открыть и закрыть меню в мобильной версии
	$('.menu-btn').on('click', ()=>{
		$('.menu-btn').toggleClass('open');
		$('.mobile-menu').toggleClass('open');
	});
});

// Старт слайдера на главной
// @seconds: время в секундах, через которое будет смена слайда
function startSlider(seconds) {
	clearInterval(sliderTimer);
	sliderTimer = setInterval(changeSlide, seconds*1000);
}

// Смена слайда
function changeSlide() {

	let
		current = $('.slides>.slide.active'),
		next =  $('.slides>.slide.active').next();

	if ($(next).length == 0) next = $('.slides>.slide:first');

	$(current).removeClass('active');
	$(next).addClass('active');
	$('.slides-ui>.ui-btn').removeClass('active');
	$('.slides-ui>.ui-btn:eq('+
		($(next).index())
		+')').addClass('active');
}

// Ручное изменение слайдов
// @num: номер выбранного слайда
function changeUiSlide(num) {
	if (num < 0 && num > $('.slides>.slide').length - 1) num = 0;

	clearInterval(sliderTimer);

	$('.slides>.slide').removeClass('active');
	$('.slides>.slide:eq('+num+')').addClass('active');
	$('.slides-ui>.ui-btn').removeClass('active');
	$('.slides-ui>.ui-btn:eq('+num+')').addClass('active');

	startSlider(secSlider);
}

// Ручное изменение слайдов влево или право
// @dir: true - вправо, false - влево
function changeNextUiSlide(dir) {

	clearInterval(sliderTimer);

	let
		current = $('.slides>.slide.active'),
		next =  $('.slides>.slide.active').next(),
		prev = $('.slides>.slide.active').prev();

	if ($(next).length == 0) next = $('.slides>.slide:first');
	if ($(prev).length == 0) prev = $('.slides>.slide:last');

	$('.slides>.slide').removeClass('active');

	(dir) ? $(next).addClass('active') : $(prev).addClass('active');

	startSlider(secSlider);
}