'use sctrict';

$(window).scroll((e) => {
	fixMenu();
});

// Фиксация меню
function fixMenu() {
	if ($(window).scrollTop() > 54 && $('.header').hasClass('not-fix')) {
		$('.header').removeClass('not-fix');
		$('.mobile-menu').removeClass('not-fix');
	} else if ($(window).scrollTop() <= 54 && !$('.header').hasClass('not-fix')) {
		$('.header').addClass('not-fix');
		$('.mobile-menu').addClass('not-fix');
	}
}
