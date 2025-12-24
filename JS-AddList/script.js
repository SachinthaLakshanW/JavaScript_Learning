const input = document.getElementById("itemInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")

addBtn.addEventListener("click", () => {
    const text = input.value.trim()

    if (text === "") return

    const li = document.createElement("li")
    li.innerText = text

    const removeBtn = document.createElement("button")
    removeBtn.innerText = "Remove"
    removeBtn.style.marginLeft = "10px"

    removeBtn.addEventListener("click", () => {
        list.removeChild(li)
    })

    li.appendChild(removeBtn)
    list.appendChild(li)

    input.value = ""
})
