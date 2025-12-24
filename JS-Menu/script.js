const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open")

    if (menu.classList.contains("open")) {
        menuBtn.innerText = "Close Menu"
    } else {
        menuBtn.innerText = "Menu"
    }
})
