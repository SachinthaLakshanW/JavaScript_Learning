const input = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("todoList")
const counter = document.getElementById("counter")
const filters = document.querySelectorAll(".filters button")
const clearCompleted = document.getElementById("clearCompleted")

let todos = JSON.parse(localStorage.getItem("todos")) || []
let filter = "all"

render()

addBtn.onclick = addTodo
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo()
})

filters.forEach(btn => {
  btn.onclick = () => {
    filters.forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
    filter = btn.dataset.filter
    render()
  }
})

clearCompleted.onclick = () => {
  todos = todos.filter(t => !t.completed)
  save()
  render()
}

function addTodo() {
  const text = input.value.trim()
  if (!text) return

  todos.push({ id: Date.now(), text, completed: false })
  input.value = ""
  save()
  render()
}

function render() {
  list.innerHTML = ""

  let filtered = todos
  if (filter === "active") filtered = todos.filter(t => !t.completed)
  if (filter === "completed") filtered = todos.filter(t => t.completed)

  filtered.forEach(todo => {
    const li = document.createElement("li")
    if (todo.completed) li.classList.add("completed")

    const span = document.createElement("span")
    span.innerText = todo.text
    span.onclick = () => toggle(todo.id)

    const actions = document.createElement("div")
    actions.className = "actions"

    const edit = document.createElement("span")
    edit.innerText = "✏️"
    edit.onclick = () => editTodo(todo.id)

    const del = document.createElement("span")
    del.innerText = "❌"
    del.onclick = () => remove(todo.id)

    actions.append(edit, del)
    li.append(span, actions)
    list.appendChild(li)
  })

  counter.innerText = `${todos.filter(t => !t.completed).length} tasks remaining`
}

function toggle(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  )
  save()
  render()
}

function editTodo(id) {
  const todo = todos.find(t => t.id === id)
  const newText = prompt("Edit task", todo.text)
  if (newText && newText.trim()) {
    todo.text = newText.trim()
    save()
    render()
  }
}

function remove(id) {
  todos = todos.filter(t => t.id !== id)
  save()
  render()
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos))
}
