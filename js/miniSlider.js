var 
	miniSliderTimer,
	// Текущий слайд
	currentSlide = 0;

$(document).ready(function() {
	
	startMiniSlider();
	
	// Нажатия на клавиши влево/вправо
	$('body').on('click', '.main-about-partner-right, .main-about-partner-left', function() {
		clearInterval(miniSliderTimer);
		var
			// Направление движения слайдера
			dirButton = $(this).hasClass('main-about-partner-left')?true:false,
			// Слайдер
			sliderMin = $('.main-about-partner-center'),
			// Всего слайдов
			maxSlides = $(sliderMin).find('.main-about-partner-center-logo').length,
			// Ширина слайдов
			widthSlides = $(sliderMin).find('.main-about-partner-center-logo').width() + parseFloat($(sliderMin).find('.main-about-partner-center-logo').css('margin-left')) * 2 + parseFloat($(sliderMin).find('.main-about-partner-center-logo').css('padding')) * 2;
				
		// Смотрим направление
		if (dirButton) {
			// Влево
			if (currentSlide > 0) {
				--currentSlide;
				$(sliderMin).css({
					'transform': 'translateX(-'+ currentSlide*widthSlides +'px)'
				});
			}
		} else {
			// Влево
			if (currentSlide < maxSlides - 5) {
				++currentSlide;
				$(sliderMin).css({
					'transform': 'translateX(-'+ currentSlide*widthSlides +'px)'
				});
			}
		}
		
		startMiniSlider();
	});
});

startMiniSlider = function() {
	var 
		// Слайдер
		sliderMin = $('.main-about-partner-center'),
		// Всего слайдов
		maxSlides = $(sliderMin).find('.main-about-partner-center-logo').length;

	miniSliderTimer = setInterval(function() {
		console.log(currentSlide)
		// Ширина слайдов
		var widthSlides = $(sliderMin).find('.main-about-partner-center-logo').width() + parseFloat($(sliderMin).find('.main-about-partner-center-logo').css('margin-left')) * 2 + parseFloat($(sliderMin).find('.main-about-partner-center-logo').css('padding')) * 2;
		
		if (currentSlide < maxSlides - 5) {
			// Если слайд НЕ последний
			++currentSlide;
			$(sliderMin).css('transform', 'translateX(-'+ currentSlide*widthSlides +'px)');
		} else {
			// Если последний
			currentSlide = 0;
			$(sliderMin).css('transform', 'translateX(0);');
		}
			
	}, 3000);
}