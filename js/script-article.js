'use strict';

$(document).ready( () => {

	$('.aw-last-ui-div').on('click', (e) => {

		$('.aw-last-ui-div').removeClass('active');
		$(e.currentTarget).addClass('active');

		if ($(e.currentTarget).index() === 1) {
			$('.aw-last-second').removeClass('active');
			$('.aw-last-first').addClass('active');
		} else {
			$('.aw-last-second').addClass('active');
			$('.aw-last-first').removeClass('active');
		}


	});

});