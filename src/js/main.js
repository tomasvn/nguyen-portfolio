const jsBtn = document.querySelector('.jsBtn')
const jsMenu = document.querySelector('.jsMenu')
const body = document.body

jsBtn.addEventListener('click', () => {
  body.classList.toggle('c-menu--is-open')
  if (body.classList.contains('c-menu--is-open')) {
    jsMenu.classList.remove('is-hidden')
  } else {
    jsMenu.classList.add('is-hidden')
  }
})
