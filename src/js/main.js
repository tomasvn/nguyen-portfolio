const jsBtn = document.querySelector('.jsBtn')
const body = document.body

jsBtn.addEventListener('click', () => {
  body.classList.toggle('c-side-menu--is-open')
})