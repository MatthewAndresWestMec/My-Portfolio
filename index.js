const navButton = document.querySelector('.nav-button');
const closeButton = document.querySelector('.close-button');
const sideNav = document.querySelector('.side-nav');

navButton.addEventListener('click', () => {
  sideNav.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  sideNav.classList.toggle('open');
});