'use strict';

$(window).scroll( () => {
	if ($(window).scrollTop() > 50 ) {
		if (!$('header').hasClass('fixed'))
			$('header').addClass('fixed');
	} else {
		if ($('header').hasClass('fixed'))
			$('header').removeClass('fixed');
	}
});