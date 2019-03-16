'use strict';

$(document).ready( () => {

	$('.ui-li').on('click', (e) => {

		$('.ui-li').removeClass('active');
		$(e.currentTarget).addClass('active');

		const
			x = $(e.currentTarget).index() * -$('.pisw-img').width();

		$('.pis-w-inner').css('transform', 'translateX('+x+'px)');
		$('.pisw-img').removeClass('active');
		$('.pisw-img:eq('+$(e.currentTarget).index()+')').addClass('active');
	});

});