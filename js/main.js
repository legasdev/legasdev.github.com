'use strict';

let
	checkNextBack = true,
	timerBackground, int1, int2,
	sliderAp,
	checkNextAp = true,
	hideInfoActive = false,
	numCurrentMoreSlide = 0,
	checkNextMoreSlide = true,
	timerMoreSliderUi,
	canHideUi = true;

// Сгенерированный фон
const
	back = `<div style="background-image: url(/img/photos/apartments/fil/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/fil/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Япон</span>"></div>`;

const 
	backStart = `<div style="background-image: url(/img/photos/2.jpg);" data-title="<span>Название</span> 2"></div>
			<div style="background-image: url(/img/photos/3.jpg);" data-title="<span>Название</span> 3"></div>
			<div style="background-image: url(/img/photos/4.jpg);" data-title="<span>Название</span> 4"></div>`;

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

// Сгенерированные на сервере слайды домов
const
	houses = `<div class="ap-slider">
			<div class="slides">
				<div class="ap-s-slide inactive hidden" style="background-image: url(/img/photos/houses/gostevoy/1.jpg); transform: translateX(1050px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>25</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive hidden" style="background-image: url(/img/photos/houses/gostevoy/2.jpg); transform: translateX(900px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>35</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive hidden" style="background-image: url(/img/photos/houses/nadya/1.jpg); transform: translateX(750px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>45</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/nadya/2.jpg); transform: translateX(600px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>55</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/vodniki/5.jpg); transform: translateX(450px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>65</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/vodniki/3.jpg); transform: translateX(300px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>85</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/check/2.jpg); transform: translateX(150px) perspective(60px) rotateY(-1deg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>75</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
				<div class="ap-s-slide" style="background-image: url(/img/photos/houses/check/1.jpg);">
					<div class="apss-info">
						<p><span>Дом</span> на Юго-Западе</p>
						<p><span>95</span> м. кв.</p>
					</div>
					<a href="#nameapart" class="link-to-apart"></a>
				</div>
			</div>
			<div class="next"><i></i><i></i></div>
		</div>`;

// Сгенерированные на сервере слайды о нас
const
	about = `<div class="ap-slider">
			<div class="slides">
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/nadya/2.jpg); transform: translateX(600px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/10.jpg" class="apss-ti-img">
							<img src="/img/10.jpg" class="apss-ti-img-back">
						</div>
					</div>
					<div class="apss-info">
						<p><span>Клара</span> Цеткин</p>
						<p>Клининг</p>
					</div>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/vodniki/5.jpg); transform: translateX(450px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/11.jpg" class="apss-ti-img">
							<img src="/img/11.jpg" class="apss-ti-img-back">
						</div>
					</div>
					<div class="apss-info">
						<p><span>Иванов</span> Иван</p>
						<p>Строитель</p>
					</div>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/vodniki/3.jpg); transform: translateX(300px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/14.jpg" class="apss-ti-img">
							<img src="/img/14.jpg" class="apss-ti-img-back">
						</div>
					</div>
					<div class="apss-info">
						<p><span>Куперман</span> Яков</p>
						<p>Бухгалтер</p>
					</div>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/check/2.jpg); transform: translateX(150px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/12.jpg" class="apss-ti-img">
							<img src="/img/12.jpg" class="apss-ti-img-back">
						</div>
					</div>
					<div class="apss-info">
						<p><span>Сергей</span> Зайцев</p>
						<p>Главный</p>
					</div>
				</div>
				<div class="ap-s-slide" style="background-image: url(/img/photos/houses/check/1.jpg); border: none;">
					<div class="apss-wrapper">
						<div class="apss-title">Команда за работой</div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
						</div>
					</div>
					<div class="apss-info hidden">
						<p><span>Команда</span> за работой</p>
					</div>
				</div>
			</div>
			<div class="next"><i></i><i></i></div>
		</div>`;

$(document).ready( () => {
	
	$('.background-slider>.slides').html(randomBackground(backStart));
	changeTitleBackground($('.background-slider>.slides>div.active').attr('data-title'));
	checkImgOnFormat('.background-slider>.slides>div');
	startBackgroundSlider();
	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 600);
	
	// Что делать при клике на следующий фон
	$('body').on('click', '.background-slider>.next', () => {
		if (checkNextBack) {
			clearInterval(timerBackground);
			clearInterval(int1);
			clearInterval(int2);
			startBackgroundSlider();
		}
	});

	// Имитация переходов
	$('.link').on('click', (e) => {
		// Закрытие меню
		$('.link').addClass('hidden');
		$('.menu').addClass('hidden');
		$('.page-menu').addClass('open');
		clearInterval(timerBackground);
		clearInterval(int1);
		clearInterval(int2);

		// Подгрузка
		switch ($(e.target).attr('href')) {

			case '#public':
				loadPublicSpace();
			break;

			case '#apartments':
				loadApHouseAbout('Квартиры', back, ap);
				hideInfoActive = false;
			break;

			case '#houses':
				loadApHouseAbout('Дома', back, houses);
				hideInfoActive = false;
			break;

			case '#about':
				loadApHouseAbout('О нас', back, about);
				hideInfoActive = true;
			break;
		}
	});

	$('.link-inner').on('click', (e)=>{
		// Закрытие меню
		$('.link').addClass('hidden');
		$('.menu').addClass('hidden');
		$('.page-menu').addClass('open');
		clearInterval(timerBackground);
		clearInterval(int1);
		clearInterval(int2);

		// Подгрузка
		switch ($(e.target).attr('href')) {

			case '#design':
				loadDesign('Дизайн-проект');
			break;
		}
	});

	// Имитация перехода в страницу подробнее о квартире
	$('body').on('click', '.link-to-apart', (e)=>{
		const
			href = $(e.currentTarget).attr('href');

		clearInterval(int1);
		clearInterval(int2);

		loadMore();
	});

	// Открытие меню
	$('.menu-btn').on('click', (e) => {
		$('.link').removeClass('hidden');
		$('.menu').removeClass('hidden');
		$('.page-menu').removeClass('open');
	});

	// Событие при нажатии на следующий слайд
	// в слайдере квартир
	$('body').on('click', '.ap-s-slide.inactive', (e)=>{
		changeApSlide($(e.currentTarget));
	});

	// Нажатие на стрелочку в слайдере квартир
	$('body').on('click', '.ap-slider>.next', ()=>{
		changeApSlide($('.ap-s-slide.inactive:last'));
	});

	// Нажатие далее в подробном слайдере квартир
	$('body').on('click', '.ap-wrapper>.next', ()=>{
		changeMoreSlide($('.apm-slide').length-2);
	});

	// Нажатие назад в подробном слайдере квартир
	$('body').on('click', '.ap-wrapper>.prev', ()=>{
		changeMoreSlide(0);
	});

	// Нажатие на нужный слайд в управлении слайдером
	$('body').on('click', '.apmis-wrapper>.slide', (e)=>{
		changeMoreSliderInUi($(e.currentTarget).index());
	});

	// Скрывать превью сладйера в квартирах
	$('body').on('mousemove', (e)=>{
		if ($('.ap-wrapper').length && canHideUi) {
			$('.ap-more-info').removeClass('hidden');
			clearTimeout(timerMoreSliderUi);
			timerMoreSliderUi = setTimeout(()=>{
				$('.ap-more-info').addClass('hidden');
			}, 2000);
		}
	});

	// Запрет скрытия, если навелись на информацию
	$('body').on('mouseenter', '.ap-more-info', ()=>{
		canHideUi = false;
		clearTimeout(timerMoreSliderUi);
	});

	// Разрешение скрытия, если убрали наведение с информации
	$('body').on('mouseleave', '.ap-more-info', ()=>{
		canHideUi = true;
	});

	// Листание при помощи клавиатуры
	$('body').on('keydown', (e)=>{
		if (e.which === 39 && $('.ap-wrapper').length) {
			changeMoreSlide($('.apm-slide').length-2);
		} else if (e.which === 37 && $('.ap-wrapper').length) {
			changeMoreSlide(0);
		}
	});

	// Промотка в подробном слайдере квартир (управление)
	$('body').on('click', '.apmis-next', moveMoreSliderUi);

	// Дизайн-проект калькулятор
	$('body').on('input', '.calc-in', (e)=>{
		let
			meters = $(e.currentTarget).val(),
			price = 3223;

		$('.calc-price>span').html(parseInt(price*meters));
	});
});

/********************

 Фоновый слайдер

********************/

// Запуск слайдера на фоне
function startBackgroundSlider() {
	clearInterval(timerBackground);
	clearInterval(int1);
	clearInterval(int2);
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

// Рандом при загрузке страницы
// str: строка со слайдами
function randomBackground(str) {
	let
		strArray = str.split('</div>');

	strArray.pop();

	strArray.forEach((e, i)=>{
		strArray[i] = e + '</div>';
	});

	strArray.sort(function(){ return 0.5-Math.random() });

	strArray[strArray.length-1] = 
		strArray[strArray.length-1].replace('><', ' class="active"><');

	return strArray.join('');
}

/********************

 Доп функции

********************/

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверить соотношение сторон фотки
function checkImgOnFormat(div) {
	let 
		img,
		w, h;

	$(div).each( (i, e) => {
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

/********************

Слайдер квартир, о нас и т.п.

********************/

// Слайдер для квартир
function changeApSlide(e) {

	let
		obj = $(e),
		index = $(obj).index();

	if (checkNextAp) {
		checkNextAp = false;

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

			// В слайдере "О нас"
			if (hideInfoActive) {
				$(obj).find('.apss-info').addClass('hidden');
				$(obj).find('.apss-wrapper').removeClass('hidden');
				$(obj).find('.apss-w-shadow').removeClass('hidden');
			}

			// Все только что скрытые поставить назад
			for (let i=$('.ap-s-slide').length - 1; i > index; i--) {
				const
					_obj = $('.ap-s-slide:eq('+
						( $('.ap-s-slide').length - 1 )+')');
				$(_obj).detach();
				$('.ap-slider>.slides').prepend(_obj);

				if (hideInfoActive) {
					$(_obj).find('.apss-info').removeClass('hidden');
					$(_obj).find('.apss-w-shadow').addClass('hidden');
					$(_obj).find('.apss-wrapper').addClass('hidden');
				}
			}

			// Сдвинуть все активные после выбранного
			for (let i=$('.ap-s-slide').length - 2, j=1; i >= 0; i--, j++) {
				$('.ap-s-slide:eq('+i+')').css('transform',
					'translateX('+(j*150)+'px) perspective(60px) rotateY(-1deg)');
				$('.ap-s-slide:eq('+i+')').find('.apss-info').removeClass('hidden');
			}

			setTimeout(() => {
				for (let i=$('.ap-s-slide').length - 2; i >= $('.ap-s-slide').length - 5; i--)
					$('.ap-s-slide:eq('+i+')').removeClass('hidden');

				checkNextAp = true;
			}, 200);

		}, 500);
	}
}

/********************

 Слайдер в подробнее о квартире

********************/

// Смена слайдов
// num: Номер слайда
function changeMoreSlide(num) {
	if (checkNextMoreSlide) {

		checkNextMoreSlide = false;

		const
			currentSlide = $('.apm-slide.active'),
			nextSlide = $('.apm-slide:eq('+num+')').detach();

		changeMoreSliderUi(parseInt($(nextSlide).attr('data-num')));
		$('.ap-more-slider').append(nextSlide);
		setTimeout(()=>{
			$(nextSlide).addClass('active');
			setTimeout(() => {
				$(currentSlide).removeClass('active');
				if (num > 0) {
					$(currentSlide).detach();
					$('.ap-more-slider').prepend(currentSlide);
				}
				checkNextMoreSlide = true;

			}, 500);
		}, 100);
	}
}

// Смена слайда по превью
function changeMoreSliderInUi(num) {
	if (checkNextMoreSlide) {

		checkNextMoreSlide = false;

		const
			currentSlide = $('.apm-slide.active'),
			length = $('.apm-slide').length - 1;

		let
			nextSlide;

		for (let i = $('.apm-slide').length - 1; i >= 0; i--) {
			if ( parseInt($('.apm-slide:eq('+i+')').attr('data-num')) 
					=== length - num )
				nextSlide = $('.apm-slide:eq('+i+')');
		}

		num = $(nextSlide).index();

		for (let i = $('.apm-slide').length - 1; i > num; i--) {
			const
				_obj = $('.apm-slide:eq('+length+')').detach();
			$('.ap-more-slider').prepend(_obj);
		}

		changeMoreSliderUi(parseInt($(nextSlide).attr('data-num')));
		setTimeout(()=>{
			$(nextSlide).addClass('active');
			setTimeout(() => {
				$(currentSlide).removeClass('active');
				checkNextMoreSlide = true;

			}, 500);
		}, 100);
	}
}

// Управление слайдером
function changeMoreSliderUi(num) {
	let
		width = 235,
		x = num * -width,
		all = $('.apmis-wrapper>.slide').length,
		maxX = (all - 3) * -width;

	if ( x < maxX ) x = maxX;

	$('.apmis-wrapper').css('transform', 'translate3d('+ x +'px,0,0)');
	$('.apmis-wrapper>.slide').removeClass('active');
	$('.apmis-wrapper>.slide:eq('+
		($('.apmis-wrapper>.slide').length - 1 - num )
		+')').addClass('active');
}

// Управление слайдером через кнопку в ui
function moveMoreSliderUi() {

	let
		width = 235,
		x = $('.apmis-wrapper').css('transform').split(',')[4] - width,
		all = $('.apmis-wrapper>.slide').length,
		maxX = (all - 3) * -width;

	if ( x < maxX ) x = 0;

	$('.apmis-wrapper').css('transform', 'translate3d('+ x +'px,0,0)');
}

/********************

 Имитация загрузки страниц 

********************/

// Публичные пространства
function loadPublicSpace() {

	$('.page-menu>p').html('Публичные пространства');
	$('.loading').addClass('active');

	setTimeout(() => {
		$('.wrapper').addClass('hidden');
		$('.wrapper').removeClass('design');
		$('.wrapper').html('');
		$('.background-slider>.next').removeClass('hidden');
		$('.background-slider>.prev').addClass('hidden');
		$('.background-slider>.title').removeClass('hidden');
		$('.background-slider').removeClass('only-back');

		const
			slider = $('.background-slider>.slides'),
			slidesStr = `<div style="background-image: url(/img/photos/office/chiptrip/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/office/chiptrip/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/office/chipyauza/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/office/chipyauza/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/office/yapon/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/office/yapon/1.jpg);" data-title="<span>Япон</span>"></div>`;

		$(slider).html(randomBackground(slidesStr));
		changeTitleBackground($('.background-slider>.slides>div.active').attr('data-title'));

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides>div');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 3000);
}

// Дома, квартиры, о нас
function loadApHouseAbout(titleText, backgroundSlider, outerSlider) {

	$('.page-menu>p').html(titleText);
	$('.loading').addClass('active');

	setTimeout(() => {

		// Показываем общий блок
		$('.wrapper').removeClass('hidden');
		$('.wrapper').removeClass('design');
		// Скрываем управление слайдера-фона
		$('.background-slider>.next').addClass('hidden');
		$('.background-slider>.title').addClass('hidden');
		$('.background-slider>.prev').addClass('hidden');
		// Показываем только темные картинки
		$('.background-slider').addClass('only-back');
		// Показываем слайдер домов
		$('.wrapper').html(outerSlider);

		const
			slider = $('.background-slider>.slides');

		// Добаввляем картинки на фоновый слайд
		$(slider).html(randomBackground(backgroundSlider));
		changeTitleBackground($('.background-slider>.slides>div.active').attr('data-title'));

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides>div');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 1000);
}

// Страница подробнее
function loadMore() {
	$('.loading').addClass('active');

	setTimeout(() => {
		$('.wrapper').removeClass('hidden');
		$('.wrapper').removeClass('design');
		$('.wrapper').html(`
		<div class="ap-wrapper">
			<div class="ap-more-slider">
				<div class="apm-slide" data-num="4" style="background-image: url(/img/photos/1.jpg);"></div>
				<div class="apm-slide" data-num="3" style="background-image: url(/img/photos/2.jpg);"></div>
				<div class="apm-slide" data-num="2" style="background-image: url(/img/photos/3.jpg);"></div>
				<div class="apm-slide" data-num="1" style="background-image: url(/img/photos/4.jpg);"></div>
				<div class="apm-slide active" data-num="0" style="background-image: url(/img/photos/2.jpg);"></div>
			</div>
			<div class="prev"><i></i><i></i></div>
			<div class="next"><i></i><i></i></div>
			<div class="ap-more-info">
				<div class="apmi-title">
					<p><span>Квартира</span> на Покровке</p>
				</div>
				<div class="apmi-slider">
					<div class="apmis-wrapper">
						<div class="slide" style="background-image: url(/img/photos/1.jpg);"></div>
						<div class="slide" style="background-image: url(/img/photos/2.jpg);"></div>
						<div class="slide" style="background-image: url(/img/photos/3.jpg);"></div>
						<div class="slide" style="background-image: url(/img/photos/4.jpg);"></div>
						<div class="slide active" style="background-image: url(/img/photos/2.jpg);"></div>
					</div>
				</div>
				<div class="apmis-next"><i></i><i></i></div>
				<p class="apmi-desk">Нам необходимо было создать атмосферу, насыщенную цветом уютом и аристократическим лоском, а также функционально разместить все зоны.<br>В данном случае зона кухни столовой и гостиной были объединены вокруг абсолютно эксклюзивной встроенной кухни, которая выглядит как высококачественный и технологичный шкаф. Его задача - добавить утонченности и сдержанной роскоши к общему восприятию интерьера.</p>
			</div>
		</div>
		`);
		$('.background-slider>.next').addClass('hidden');
		$('.background-slider>.title').addClass('hidden');
		$('.background-slider').addClass('only-back');

		checkImgOnFormat('.ap-more-slider>.apm-slide');
		checkImgOnFormat('.apmis-wrapper>.slide');

		const
			slider = $('.background-slider>.slides');

		$(slider).html(back);

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides>div');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 1000);
}

// Страница Дизайн-проект
function loadDesign(titleText) {
	$('.page-menu>p').html(titleText);
	$('.loading').addClass('active');

	setTimeout(() => {
		$('.wrapper').removeClass('hidden');
		$('.wrapper').addClass('design');
		$('.wrapper').html(`
		<div class="design-wrapper">
			<div class="info">
				<p class="title">
					Общий проект<br><span>включает в себя:</span>
				</p>
				<div class="info-wrapper">
					<div class="label">
						<div class="label-title">
							Колористическое<br>решение
							<div style="background-image: url('/img/icons/ico_color.png');"></div>
						</div>
						<p class="text">
							В зависимости от назначения комнаты, необходимо подбирать подходящее освещение. Чаще всего хозяева начинают с обустройства гостиной. Для этого типа комнаты нужен достаточно хороший свет, ведь именно здесь семья проводит время вместе, принимает гостей. В последнее время популярно разделение комнаты на так называемые зоны.
						</p>
					</div>
					<div class="label">
						<div class="label-title">
							Мебель
							<div style="background-image: url('/img/icons/ico_furniture.png');"></div>
						</div>
						<p class="text">
							В зависимости от назначения комнаты, необходимо подбирать подходящее освещение. Чаще всего хозяева начинают с обустройства гостиной. Для этого типа комнаты нужен достаточно хороший свет, ведь именно здесь семья проводит время вместе, принимает гостей. В последнее время популярно разделение комнаты на так называемые зоны.
						</p>
					</div>
					<div class="label">
						<div class="label-title">
							Свет
							<div style="background-image: url('/img/icons/ico_light.png');"></div>
						</div>
						<p class="text">
							В зависимости от назначения комнаты, необходимо подбирать подходящее освещение. Чаще всего хозяева начинают с обустройства гостиной. Для этого типа комнаты нужен достаточно хороший свет, ведь именно здесь семья проводит время вместе, принимает гостей. В последнее время популярно разделение комнаты на так называемые зоны.
						</p>
					</div>
					<div class="label">
						<div class="label-title">
							Аксессуары
							<div style="background-image: url('/img/icons/ico_accessories.png');"></div>
						</div>
						<p class="text">
							В зависимости от назначения комнаты, необходимо подбирать подходящее освещение. Чаще всего хозяева начинают с обустройства гостиной. Для этого типа комнаты нужен достаточно хороший свет, ведь именно здесь семья проводит время вместе, принимает гостей. В последнее время популярно разделение комнаты на так называемые зоны.
						</p>
					</div>
					<div class="label">
						<div class="label-title">
							Скидки<br>от партнеров
							<div style="background-image: url('/img/icons/ico_discounts.png');"></div>
						</div>
						<p class="text">
							В зависимости от назначения комнаты, необходимо подбирать подходящее освещение. Чаще всего хозяева начинают с обустройства гостиной. Для этого типа комнаты нужен достаточно хороший свет, ведь именно здесь семья проводит время вместе, принимает гостей. В последнее время популярно разделение комнаты на так называемые зоны.
						</p>
					</div>
				</div>
			</div>
			<div class="calc">
				<div class="calc-wrapper-in">
					<div class="label">Введите общее количество метров</div>
					<div class="input-text">
						<input type="text" class="calc-in" value="76" minlength="1" maxlength="3">
						<p>кв. м.</p>
					</div>
				</div>
				<div class="calc-wrapper-in">
					<div class="label">Финальная стоимость</div>
					<div class="calc-price"><span>244948</span> р.</div>
				</div>
			</div>
		</div>
		`);
		$('.background-slider>.next').removeClass('hidden');
		$('.background-slider>.title').removeClass('hidden');
		$('.background-slider').removeClass('only-back');

		const
			slider = $('.background-slider>.slides'),
			slidesStr = `<div style="background-image: url(/img/photos/office/chiptrip/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/office/chiptrip/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/office/chipyauza/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/office/chipyauza/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/office/yapon/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/office/yapon/1.jpg);" data-title="<span>Япон</span>"></div>`;

		$(slider).html(randomBackground(slidesStr));
		changeTitleBackground($('.background-slider>.slides>div.active').attr('data-title'));

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides>div');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 1000);
}