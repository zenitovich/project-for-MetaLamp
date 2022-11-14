const addAm = document.querySelector('#addAm')
const numContNamSel = document.querySelector('#numContNamSel')
const dowmArrow = document.querySelector('#downArrow')
addAm?.addEventListener("click", () => {
    numContNamSel.classList.toggle('numbers-container-name__select--block')
    dowmArrow.classList.toggle('up-arrow')
})