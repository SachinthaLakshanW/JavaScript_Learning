const display = document.getElementById("display")
const historyList = document.getElementById("historyList")

const operators = ["+", "-", "*", "/"]

function appendValue(value) {
  const lastChar = display.value.slice(-1)

  if (operators.includes(value) && operators.includes(lastChar)) {
    return
  }

  display.value += value
}

function clearDisplay() {
  display.value = ""
}

function calculate() {
  const expression = display.value

  try {
    let operator

    if (expression.includes("+")) operator = "+"
    else if (expression.includes("-")) operator = "-"
    else if (expression.includes("*")) operator = "*"
    else if (expression.includes("/")) operator = "/"
    else return

    const parts = expression.split(operator)
    const num1 = parseFloat(parts[0])
    const num2 = parseFloat(parts[1])

    if (operator === "/" && num2 === 0) {
      display.value = "Error"
      return
    }

    let result
    if (operator === "+") result = num1 + num2
    if (operator === "-") result = num1 - num2
    if (operator === "*") result = num1 * num2
    if (operator === "/") result = num1 / num2

    display.value = result
    addToHistory(expression, result)
  } catch {
    display.value = "Error"
  }
}

function addToHistory(expression, result) {
  const li = document.createElement("li")
  li.innerText = `${expression} = ${result}`
  historyList.prepend(li)
}

/* Keyboard support */
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || operators.includes(e.key) || e.key === ".") {
    appendValue(e.key)
  }

  if (e.key === "Enter") {
    calculate()
  }

  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1)
  }

  if (e.key === "Escape") {
    clearDisplay()
  }
})
