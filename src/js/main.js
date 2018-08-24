const jsBtn = document.querySelector('.jsBtn')
const jsClose = document.querySelector('.jsClose')
const jsMenu = document.querySelector('.jsMenu')
const body = document.body

jsBtn.addEventListener('click', () => {
  jsBtn.classList.toggle('is-active')
  jsMenu.classList.toggle('is-open')
})

jsClose.addEventListener('click', () => {
  jsMenu.classList.toggle('is-open')
  if (jsMenu.classList.contains('is-open')) {
    body.style.overflow = 'hidden'
  }
})
