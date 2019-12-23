;

(function () {
  'use strict';

  window.onload = () => {
    // Открытие подменю

    var asideMore = Array.from(document.getElementsByClassName('aside__link_more'));
    asideMore && asideMore.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var arr = Array.from(e.currentTarget.classList);
        var obj = e.currentTarget.parentElement.getElementsByClassName('aside__more')[0];

        if (arr.includes('open')) {
          e.currentTarget.classList.remove('open');
        } else {
          e.currentTarget.classList.add('open');
        }
      });
    }); // Открытие подменю в списках раскрасок

    var colorAside = Array.from(document.getElementsByClassName('aside_li'));
    colorAside && colorAside.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var arr = Array.from(e.currentTarget.classList);

        if (arr.includes('open')) {
          e.currentTarget.classList.remove('open');
        } else {
          e.currentTarget.classList.add('open');
        }
      });
    }); 
  };

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