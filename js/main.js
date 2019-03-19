'use strict';

let
	checkNextBack = true,
	timerBackground, int1, int2,
	sliderAp,
	checkNextAp = true;

// Сгенерированные на сервере слайды квартир
const
	ap = `<div class="ap-slider">
			<div class="slides">
				<div class="ap-s-slide inactive hidden" style="background-image: url(/img/photos/4.jpg); transform: translateX(1050px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>25</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive hidden" style="background-image: url(/img/photos/4.jpg); transform: translateX(900px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>35</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive hidden" style="background-image: url(/img/photos/5.jpg); transform: translateX(750px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>45</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/5.jpg); transform: translateX(600px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>55</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/4.jpg); transform: translateX(450px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>65</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/3.jpg); transform: translateX(300px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>85</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/2.jpg); transform: translateX(150px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>75</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide" style="background-image: url(/img/photos/1.jpg);">
					<div class="apss-info">
						<p><span>Квартира</span> на Юго-Западе</p>
						<p><span>95</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
			</div>
			<div class="next"><i></i><i></i></div>
		</div>`;

$(document).ready( () => {

	checkImgOnFormat('.background-slider>.slides');
	setTimeout(()=>{
		startBackgroundSlider();
	}, 8000);
	
	// Что делать при клике на следующий фон
	$('body').on('click', '.background-slider>.next', () => {
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

	// Событие при нажатии на следующий слайд
	// в слайдере квартир
	$('body').on('click', '.ap-s-slide.inactive', (e)=>{changeApSlide($(e.currentTarget));});

	// Нажатие на стрелочку в слайдере квартир
	$('body').on('click', '.ap-slider>.next', ()=>{
		if (checkNextAp) {
			checkNextAp = false;
			changeApSlide($('.ap-s-slide.inactive:last'));
		}
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

// Слайдер для квартир
function changeApSlide(e) {

	let
		obj = $(e),
		index = $(obj).index();

	// Скрыть все перед нажатым
	for (let i=$('.ap-s-slide').length - 1; i > index; i--) {
		$('.ap-s-slide:eq('+i+')').addClass('hidden').addClass('inactive');
	}

	// После скрытия
	clearInterval(sliderAp);
	sliderAp = setInterval(()=>{
		clearInterval(sliderAp);

		// Ставим активный на первое место
		$(obj).removeClass('inactive')
				.css('transform', 'translateX(0) perspective(0) rotateY(0)');

		// Все только что скрытые поставить назад
		for (let i=$('.ap-s-slide').length - 1; i > index; i--) {
			const
				_obj = $('.ap-s-slide:eq('+
					( $('.ap-s-slide').length - 1 )+')');
			$(_obj).detach();
			$('.ap-slider>.slides').prepend(_obj);
		}

		// Сдвинуть все активные после выбранного
		for (let i=$('.ap-s-slide').length - 2, j=1; i >= 0; i--, j++) {
			$('.ap-s-slide:eq('+i+')').css('transform',
				'translateX('+(j*150)+'px) perspective(60px) rotateY(-1deg)');
		}

		for (let i=$('.ap-s-slide').length - 2; i >= $('.ap-s-slide').length - 5; i--)
			$('.ap-s-slide:eq('+i+')').removeClass('hidden');

		checkNextAp = true;
	}, 500);
}

// Имитация загрузки страниц

// Публичные пространства
function loadPublicSpace() {

	$('.page-menu>p').html('Публичные пространства');
	$('.loading').addClass('active');

	setTimeout(() => {
		$('.wrapper').addClass('hidden');
		$('.wrapper').html('');
		$('.background-slider>.next').removeClass('hidden');
		$('.background-slider>.title').removeClass('hidden');
		$('.background-slider').removeClass('only-back');

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
	$('.loading').addClass('active');

	setTimeout(() => {

		$('.wrapper').removeClass('hidden');
		$('.background-slider>.next').addClass('hidden');
		$('.background-slider>.title').addClass('hidden');
		$('.background-slider').addClass('only-back');
		$('.wrapper').html(ap);

		const
			slider = $('.background-slider>.slides');

		$(slider).html(`<div style="background-image: url(/img/photos/apartments/fil/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/fil/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Япон</span>" class="active"></div>`);

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 1000);
}

