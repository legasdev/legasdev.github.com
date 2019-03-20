'use strict';

let
	checkNextBack = true,
	timerBackground, int1, int2,
	sliderAp,
	checkNextAp = true,
	hideInfoActive = false;

// Сгенерированный фон
const
	back = `<div style="background-image: url(/img/photos/apartments/fil/1.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/fil/4.jpg);" data-title="<span>Чиптрип</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/4.jpg);" data-title="<span>Чиптрип</span> на Яузе"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/3.jpg);" data-title="<span>Япон</span>"></div>
				<div style="background-image: url(/img/photos/apartments/krasnop/1.jpg);" data-title="<span>Япон</span>" class="active"></div>`;

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

// Сгенерированные на сервере слайды домов
const
	about = `<div class="ap-slider">
			<div class="slides">
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/nadya/2.jpg); transform: translateX(600px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-info">
						<p><span>Клара</span> Цеткин</p>
						<p>Клининг</p>
					</div>
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/1.jpg" class="apss-ti-img">
						</div>
					</div>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/vodniki/5.jpg); transform: translateX(450px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-info">
						<p><span>Иванов</span> Иван</p>
						<p>Строитель</p>
					</div>
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/1.jpg" class="apss-ti-img">
						</div>
					</div>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/vodniki/3.jpg); transform: translateX(300px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-info">
						<p><span>Куперман</span> Яков</p>
						<p>Бухгалтер</p>
					</div>
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/1.jpg" class="apss-ti-img">
						</div>
					</div>
				</div>
				<div class="ap-s-slide inactive" style="background-image: url(/img/photos/houses/check/2.jpg); transform: translateX(150px) perspective(60px) rotateY(-1deg); border: none;">
					<div class="apss-info">
						<p><span>Сергей</span> Зайцев</p>
						<p>Главный</p>
					</div>
					<div class="apss-w-shadow hidden"></div>
					<div class="apss-wrapper hidden">
						<div class="apss-title">Сергей Зайцев <span>(Главный)</span></div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
							<img src="/img/1.jpg" class="apss-ti-img">
						</div>
					</div>
				</div>
				<div class="ap-s-slide" style="background-image: url(/img/photos/houses/check/1.jpg); border: none;">
					<div class="apss-info hidden">
						<p><span>Команда</span> за работой</p>
					</div>
					<div class="apss-w-shadow"></div>
					<div class="apss-wrapper">
						<div class="apss-title">Команда за работой</div>
						<div class="apss-t-inner">
							<p class="apss-ti-text">Мастерская, основанная в 1999 году двумя профессиональными архитекторами Сергеем Зайцевым и Мариной Сергеевой. С 1999 года мы преображаем облик мегаполиса, воплощая в жизнь оригинальные дизайн-проекты коттеджей и квартир.<br>Мы не стремимся на каждом объекте сразу же реализовать самые невероятные идеи. Хотя, поверьте, у нас их достаточно. Скорее, мы помогаем органично воплотить в жизнь ваши собственные представления о пространстве, в котором вам предстоит жить или работать. Гармония между вашими желаниями и нашим видением – главная цель AXIS при работе над проектом.</p>
						</div>
					</div>
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
		$('.menu').addClass('hidden');
		$('.page-menu').addClass('open');
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
	$('body').on('click', '.ap-s-slide.inactive', (e)=>{changeApSlide($(e.currentTarget));});

	// Нажатие на стрелочку в слайдере квартир
	$('body').on('click', '.ap-slider>.next', ()=>{
		changeApSlide($('.ap-s-slide.inactive:last'));
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

// Имитация загрузки страниц

// Публичные пространства
function loadPublicSpace() {

	$('.page-menu>p').html('Публичные пространства');
	$('.loading').addClass('active');

	setTimeout(() => {
		$('.wrapper').removeClass('hidden');
		$('.wrapper').html('');
		$('.background-slider>.next').removeClass('hidden');
		$('.background-slider>.prev').addClass('hidden');
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

// Дома и квартиры
function loadApHouseAbout(titleText, backgroundSlider, outerSlider) {

	$('.page-menu>p').html(titleText);
	$('.loading').addClass('active');

	setTimeout(() => {

		// Показываем общий блок
		$('.wrapper').removeClass('hidden');
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
		$(slider).html(backgroundSlider);

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides');
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
		$('.wrapper').html(`
		<div class="ap-wrapper">
			<div class="ap-more-slider">
				<div class="apm-slide" style="background-image: url(/img/photos/1.jpg);"></div>
				<div class="apm-slide" style="background-image: url(/img/photos/2.jpg);"></div>
				<div class="apm-slide" style="background-image: url(/img/photos/3.jpg);"></div>
				<div class="apm-slide" style="background-image: url(/img/photos/4.jpg);"></div>
				<div class="apm-slide active" style="background-image: url(/img/photos/2.jpg);"></div>
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

		const
			slider = $('.background-slider>.slides');

		$(slider).html(back);

		setTimeout(()=>{
			startBackgroundSlider();
		}, 8000);

		checkImgOnFormat('.background-slider>.slides');
	}, 500);

	setTimeout(()=>{
		$('.loading').removeClass('active');
	}, 300);
}