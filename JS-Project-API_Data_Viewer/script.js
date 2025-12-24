const loadBtn = document.getElementById("loadBtn")
const usersList = document.getElementById("users")

loadBtn.addEventListener("click", async () => {
    usersList.innerText = "Loading..."

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!res.ok) {
            throw new Error("Failed to fetch users")
        }

        const users = await res.json()
        usersList.innerText = ""

        users.forEach(user => {
            const li = document.createElement("li")
            li.innerText = user.name
            usersList.appendChild(li)
        })

    } catch (error) {
        usersList.innerText = error.message
    }
})
