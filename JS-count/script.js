const countEl = document.getElementById("count")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")

let count = 0

increaseBtn.addEventListener("click", () => {
    count++
    countEl.innerText = count
})

decreaseBtn.addEventListener("click", () => {
    count--
    countEl.innerText = count
})
