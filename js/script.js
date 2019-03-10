'use strict';

$(window).scroll( () => {
	if ($(window).scrollTop() > 41 ) {
		if (!$('header').hasClass('fixed'))
			$('header').addClass('fixed');
	} else {
		if ($('header').hasClass('fixed'))
			$('header').removeClass('fixed');
	}
});

$(document).ready( () => {

	let 
		sliderTimer = startSlider(),
		isNotChange = true;

	$('.fssu-block').on('click', (e) => {

		if (isNotChange) {

			isNotChange = false;

			const
				num = $(e.currentTarget).index();

			clearInterval(sliderTimer);

			$('.fs-slider').find('.active').css({
				'transition-delay': '1s',
				'z-index': '0'
			});

			$('.fss-slide').removeClass('active');
			$('.fssu-block').removeClass('active');

			$('.fss-slide:eq(' + num + ')').addClass('active').css({
				'transition-delay': '0s',
				'z-index': '1'
			});
			$('.fssu-block:eq(' + num + ')').addClass('active');

			sliderTimer = startSlider();

			setTimeout(()=>{isNotChange=true;}, 1200);
		}
	});
});

function startSlider() {
	return setInterval( () => {
		const
			currentSlide = $('.fs-slider').find('.active'),
			currentUi = $('.fs-slider-ui').find('.active');

		$(currentSlide).removeClass('active');
		$(currentUi).removeClass('active');

		$(currentSlide).css({
			'transition-delay': '1s',
			'z-index': '0'
		});

		($(currentSlide).next().length) ?
			$(currentSlide).next().addClass('active') :
			$('.fss-slide:first').addClass('active');

		$('.fs-slider').find('.active').css({
			'transition-delay': '0s',
			'z-index': '1'
		});

		$('.fssu-block:eq(' + ($('.fs-slider').find('.active').index()) + ')')
			.addClass('active');
	}, 3000);
}