import hamburguerMenu from './js/hamburguer-menu.js'
import { scrollSpy } from './js/scroll-spy.js'

document.addEventListener('DOMContentLoaded', () => {
  hamburguerMenu('#header-btn', '.header-links', '.links-container a')
  scrollSpy()
})
