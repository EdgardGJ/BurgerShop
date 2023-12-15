document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 80)
})

// Open menu
let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navList.classList.toggle('open')
}

// Solution Scroll

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navList.classList.remove('open')
}

// ScrollReveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  reset: false
})

sr.reveal('.home-text', {delay: 300})
sr.reveal('.home-img', {delay: 400})
sr.reveal('.container', {delay: 300})

sr.reveal('.about-img', {})
sr.reveal('.about.text', {delay: 300})

sr.reveal('.middle-text', {})
sr.reveal('.row-btn, shop-content', {delay: 300})

sr.reveal('.review, .contact', {delay: 300})

})