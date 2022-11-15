const burgerMenu=document.querySelector('#burgerMenu')
const burger=document.querySelector('#burger')

burgerMenu?.addEventListener("click", () => {
    burgerMenu.classList.toggle('change')
    burger.classList.toggle('display-block')
  })