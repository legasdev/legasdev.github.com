"use strict";

;(function () {
  'use strict';

  window.addEventListener('scroll', function (e) {
    var scrollY = window.scrollY,
        header = document.querySelector('.header');

    if (scrollY > 0 && !header.classList.contains('fix')) {
      header.classList.add('fix');
    } else if (scrollY <= 0 && header.classList.contains('fix')) {
      header.classList.remove('fix');
    }
  });
  var menuMob = document.querySelector('.mobile_menu_btn');
  menuMob.addEventListener('touchend', function (e) {
    e.preventDefault();
    e.target.click();
  });
  menuMob.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.mobile_menu').classList.toggle('active');
  });
})();