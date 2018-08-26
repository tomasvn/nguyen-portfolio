const jsBtn = document.querySelectorAll('.jsBtn')
const jsMenu = document.querySelector('.jsMenu')
const body = document.body

jsBtn.forEach((el) => {
  el.addEventListener('click', () => {
    jsMenu.classList.toggle('is-open')
    if (jsMenu.classList.contains('is-open')) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  })
})