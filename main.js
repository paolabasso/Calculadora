const screen = document.getElementById('screen')
const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')
const clean = document.getElementById('cleanScreen')

let value1 = null
let operator = ''

//currentTarget pega o objeto que disparou o evento
function imprimir(evento) {
  if (operator != '') {
    screen.innerText = ''
  }
  screen.innerText = `${screen.innerText}${evento.currentTarget.value}`
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', imprimir)
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', getOperator)
}

function getOperator(evento) {
  const operatorActual = evento.currentTarget.value
  let valueActual = Number(screen.innerText)
  if (operatorActual != '=') {
    if (value1 != null) {
      valueActual = calculate(valueActual)
      screen.innerText = valueActual
    }
    getValue1(valueActual)
    operator = operatorActual
  } else {
    screen.innerText = calculate(valueActual)
    operator = ''
  }
}

function getValue1(value) {
  value1 = value
}

function calculate(value) {
  switch (operator) {
    case '+':
      value += value1
      break
    case '-':
      value = value1 - value
      break
    case '/':
      value = value1 / value
      break
    case '*':
      value = value1 * value
      break
  }

  return value
}

clean.addEventListener('click', cleanScreen)

function cleanScreen() {
  value1 = null
  operator = ''
  screen.innerText = ''
}
