'use strict';

slidingNav();
animationFadeIn();

function slidingNav() {
  const navBtn = document.querySelector('#header__nav-button');
  const navList = document.querySelector('#header__nav');

  navBtn.addEventListener('click', () => {
    navList.classList.toggle('nav--show');
    navBtn.classList.toggle('header__nav-button--close');
  });
}

function animationFadeIn() {
  const elements = document.querySelectorAll('.animate__fade-in--hidden');
  const browserHeight = document.documentElement.clientHeight;
  const browserWidth = document.documentElement.clientWidth;
  const threshold = (browserWidth > 1024) ? 200 : 100;

  fadeIn();

  document.addEventListener('scroll', fadeIn);

  function fadeIn() {
    elements.forEach(element => {
      const coord = element.getBoundingClientRect();

      if (browserHeight - coord.y > threshold) {
        element.classList.add('animate__fade-in--appeared');
        element.classList.remove('animate__fade-in--hidden');
      }
    });
  }
}
