import hamburguerMenu from './js/hamburguer-menu.js';

document.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('#header-btn', '.header-links', '.links-container a');
});
