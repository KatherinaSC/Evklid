const swiper = new Swiper('.swiper-container', {
  // Цикличность слайдов

  loop: true,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Перевод названия слайдов на русский
  a11y: {
    paginationBulletMessage: 'Тут слайд {{index}}',
  }

});

let tabsBtn = document.querySelectorAll(`.tabs-nav__btn`);
let tabsItem = document.querySelectorAll(`.tabs-item`);

tabsBtn.forEach(function (element) {
  element.addEventListener(`click`, function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove(`tabs-nav__btn--active`) });
    e.currentTarget.classList.add(`tabs-nav__btn--active`);

    tabsItem.forEach(function (element) { element.classList.remove(`tabs-item--active`) });
    document.querySelector(`[data-target="${path}"]`).classList.add(`tabs-item--active`);
  });
});

new Accordion('.accordion-container');

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__item-link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');
    menu.getElementsByClassName.transition = `visibility 0.3s ease-in-out, transform 0.3s ease-in-out`;

    document.body.classList.toggle('stop-scroll');
  })

menu.addEventListener(`transitionend`, function () {
  if (!menu.classList.contains('header__nav--active')) {
    menu.removeAttribute(`style`);
  }
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
})

let search_open = document.querySelector('.header__btn-svg');
let menu__search = document.querySelector('.header__menu_search');
let search__close = document.querySelector('.header__btn-close');

search_open.addEventListener('click',

  function () {
    search_open.classList.toggle('.header__btn-svg--active');

    menu__search.classList.toggle('header__menu_search--active');

    document.body.classList.toggle('stop-scroll');
  })

  search__close.addEventListener('click',

  function () {
    search__close.classList.remove('.header__btn-close--active');

    menu__search.classList.remove('header__menu_search--active');
  })
