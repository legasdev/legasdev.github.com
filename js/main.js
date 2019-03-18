'use strict';

let
	checkNextBack = true,
	timerBackground;

$(document).ready( () => {

	checkImgOnFormat('.background-slider>.slides');
	setTimeout(()=>{
		startBackgroundSlider();
	}, 8000);
	
	// Что делать при клике на следующий фон
	$('.background-slider>.next').on('click', () => {
		if (checkNextBack) {
			startBackgroundSlider();
		}
	});

	// Имитация переходов
	$('.link').on('click', (e) => {
		// Закрытие меню
		$('.link').addClass('hidden');
		$('.page-menu').addClass('open');

		// Подгрузка
		switch ($(e.target).attr('href')) {

			case '#public':
				loadPublicSpace();
			break;

			case '#apartments':
				loadApartments();
			break;

		}
	});

	// Открытие меню
	$('.menu-btn').on('click', (e) => {
		$('.link').removeClass('hidden');
		$('.page-menu').removeClass('open');
	});
});

// Запуск слайдера на фоне
function startBackgroundSlider() {
	clearInterval(timerBackground);
	changeBackground();
	timerBackground = setInterval(changeBackground, 8000);
}

// Смена слайдов на фоне
function changeBackground() {

	checkNextBack = false;

	const
		newNum = rand(0, $('.background-slider>.slides>div').length-2),
		title = $('.background-slider>.slides>div:eq('+newNum+')').attr('data-title'),
		newActive = $('.background-slider>.slides>div:eq('+newNum+')').detach();

	let
		int1, int2;

	changeTitleBackground(title);

	$('.background-slider>.slides').append(newActive);

	clearInterval(int1);
	clearInterval(int2);

	int1 = setInterval( () => {
		$('.background-slider>.slides>div:last').addClass('active');
		clearInterval(int1);
		int2 = setInterval( () => {
			$('.background-slider>.slides>div:eq('+
				($('.background-slider>.slides>div').length-2)+')')
				.removeClass('active');
			checkNextBack = true;
			clearInterval(int2);
		}, 1000);
	}, 100);
}

// Меняем название у фонового интерьера
function changeTitleBackground(title) {

	const
		time = 300;

	$('.background-slider>.title>p').css('opacity', 0);

	setTimeout(()=>{
		$('.background-slider>.title').css('width', 0);
		setTimeout(()=>{
			$('.background-slider>.title>p').html(title);
			$('.background-slider>.title').css('width', '250px');
			setTimeout(()=>{
				$('.background-slider>.title>p').css('opacity', 1);
			}, time);
		}, time);
	}, time);
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверить соотношение сторон фотки
function checkImgOnFormat(div) {
	let 
		img,
		w, h;

	$(div+'>div').each( (i, e) => {
		img = new Image();
		img.src = $(e).css('background-image').split('"')[1];
		img.onload = function() {
			w = this.width;
			h = this.height;
			if (w/h != 16/9)
				$(e).addClass('notfull');
		}
	});
}

// Имитация загрузки страниц

// Публичные пространства
function loadPublicSpace() {

	$('.page-menu>p').html('Публичные пространства');

	$('.loading').addClass('active');
	$('.wrapper').addClass('hidden');
	$('.wrapper').html('');
	$('.background-slider>.next').removeClass('hidden');
	$('.background-slider>.title').removeClass('hidden');
	$('.background-slider').removeClass('only-back');

	setTimeout(() => {
		const
			slider = $('.background-slider>.slides');

		$(slider).html(`<div style="background-image: url(/img/photos/office/chiptrip/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/office/chiptrip/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/office/chipyauza/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/office/chipyauza/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/office/yapon/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/office/yapon/1.jpg);" data-title="<span>Япон</span>" class="active"></div>`);

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 3000);
}

// Квартиры
function loadApartments() {

	$('.page-menu>p').html('Квартиры');
	$('.wrapper').removeClass('hidden');
	$('.background-slider>.next').addClass('hidden');
	$('.background-slider>.title').addClass('hidden');
	$('.background-slider').addClass('only-back');

	$('.loading').addClass('active');

	setTimeout(() => {
		const
			slider = $('.background-slider>.slides');

		$(slider).html(`<div style="background-image: url(/img/photos/apartments/fil/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/fil/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/pokrovsk/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/apartments/pokrovsk/1.jpg);" data-title="<span>Япон</span>" class="active"></div>`);

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 1000);
}