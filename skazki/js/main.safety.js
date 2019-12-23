;

(function () {
  'use strict';

  var questions = document.querySelectorAll('.faq__question');
  questions && questions.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var clickItem = e.currentTarget;
      if (clickItem.classList.contains('active')) clickItem.classList.remove('active');else questions.forEach(function (value) {
        value.classList.remove('active');
        if (clickItem === value) value.classList.add('active');
      });
    });
  }); // Открытие меню мобильного

  var menuMob = document.querySelector('.mobile_menu_btn');
  menuMob && menuMob.addEventListener('touchend', function (e) {
    e.preventDefault();
    e.target.click();
  });
  menuMob && menuMob.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.mobile_menu').classList.toggle('active');
  }); // Открытие допменю

  var dopmenu = document.querySelector('.aside_btn');
  dopmenu && dopmenu.addEventListener('touchend', function (e) {
    e.preventDefault();
    e.target.click();
  });
  dopmenu && dopmenu.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.aside').classList.toggle('active');

    if (Array.from(e.currentTarget.classList).includes('active')) {
      e.currentTarget.innerHTML = 'Закрыть';
    } else {
      e.currentTarget.innerHTML = 'Выберите сказку здесь';
    }
  }); // Скроллы

  var scrolls = document.querySelectorAll('.main__theme_wrapper');
  scrolls && scrolls.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var num = e.currentTarget.dataset.scroll;
      var top = document.querySelectorAll('.slider__wrapper')[num - 1].getBoundingClientRect().top;
      window.scrollBy({
        top: top,
        behavior: 'smooth'
      });
    });
  }); // Открытие подменю

  var asideMore = document.querySelectorAll('.aside__link_more.more');
  asideMore && asideMore.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Установка max-height у подменю
      var asideMoreHeight = document.querySelectorAll('.aside__more');
      asideMoreHeight && asideMoreHeight.forEach(function (item) {
        item.dataset.height = item.scrollHeight;
      });
      var arr = Array.from(e.currentTarget.classList);
      var obj = e.currentTarget.parentElement.querySelector('.aside__more');

      if (arr.includes('open')) {
        e.currentTarget.classList.remove('open');
        obj.style.maxHeight = '0px';
      } else {
        e.currentTarget.classList.add('open');
        obj.style.maxHeight = "".concat(obj.dataset.height, "px");
      }
    });
  }); // Открытие подменю в списках раскрасок

  var colorAside = document.querySelectorAll('.aside_li');
  colorAside && colorAside.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Установка max-height у подменю
      var colorAsideInner = document.querySelectorAll('.aside_ul__inner');
      colorAsideInner && colorAsideInner.forEach(function (item) {
        item.dataset.height = item.scrollHeight;
      });
      var arr = Array.from(e.currentTarget.classList);
      var obj = e.currentTarget.querySelector('.aside_ul__inner');

      if (arr.includes('open')) {
        e.currentTarget.classList.remove('open');
        obj.style.maxHeight = '0px';
      } else {
        e.currentTarget.classList.add('open');
        obj.style.maxHeight = "".concat(obj.dataset.height, "px");
      }
    });
  }); // Кнопка открытие всех раскрасок

  var btnMore = document.querySelector('.coloring__showmore');
  btnMore && btnMore.addEventListener('click', function () {
    document.querySelectorAll('.coloring__wrapper').forEach(function (item) {
      item.dataset.height = item.scrollHeight;
    });
    document.querySelectorAll('.coloring__wrapper').forEach(function (item) {
      item.classList.remove('hide');
      item.style.maxHeight = "".concat(item.dataset.height, "px");
    });
  }); // Обновление оценки при выборе

  var elems = document.querySelectorAll('input[type="radio"]');
  elems && elems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      document.querySelector('.rating_block__num').innerHTML = "".concat(e.currentTarget.value, "/5");
    });
  });
})();