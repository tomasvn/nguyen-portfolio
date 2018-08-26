const jsBtn = document.querySelector('.jsBtn')
const jsClose = document.querySelector('.jsClose')
const jsMenu = document.querySelector('.jsMenu')

jsBtn.addEventListener('click', () => {
  jsMenu.classList.toggle('is-open')
})

jsClose.addEventListener('click', () => {
  jsMenu.classList.toggle('is-open')
})
