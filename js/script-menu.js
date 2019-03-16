'use strict';

$(document).ready( () => {

	$('.menu-mobile').on('click', () => {
		$('.menu-mobile').toggleClass('active');

		$('.mobile-menu-wrapper').toggleClass('active');
		$('.mobile-menu-wrapper').css('transform', 'translateY('+
			($('.header').height() + $('.header').position().top)+'px)');
	});

	$('.info-btn, .fi-btn').on('click', () => {
		$('.pop-up').addClass('active');
	});

	$('.pu-close').on('click', () => {
		$('.pop-up').removeClass('active');
		$('.pop-up-buy').removeClass('active');
	});

	$('.btn-buy').on('click', () => {
		$('.pop-up-buy').toggleClass('active');
	});
});