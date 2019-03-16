'use strict';

// Массив с интерьерами
const
	obj = [
		{
			'img' : '/img/photos/1.jpg',
			'title' : 'Квартира 1'
		},
		{
			'img' : '/img/photos/2.jpg',
			'title' : 'Квартира 2'
		},
		{
			'img' : '/img/photos/3.jpg',
			'title' : 'Квартира 3'
		},
		{
			'img' : '/img/photos/4.jpg',
			'title' : 'Квартира 4'
		},
		{
			'img' : '/img/photos/5.jpg',
			'title' : 'Квартира 5'
		}
	];

$(document).ready( () => {

	setInterval(changeBackground, 5000);

});

// Смена слайдов на фоне
function changeBackground() {

	const
		newNum = rand(1, 5);

	let
		w, h;

	$('.background-slider').append(`
		<div style="background-image: url(${obj[newNum-1].img});"></div>
	`);

	let img = new Image();
	img.src = obj[newNum-1].img;
	img.onload = function() {
		w = this.width;
		h = this.height;
		if (w/h != 16/9)
			$('.background-slider>div:last').addClass('notfull');
	}

	setTimeout( () => {
		$('.background-slider>div:last').addClass('active');
		setTimeout( () => {
			$('.background-slider>div:first').remove();
		}, 1000);
	}, 100);
	
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}