const innerScreen = document.querySelector(".innerScreen");
const resetAllBtn = document.querySelector(".acBtn");
const operateBtns = document.querySelector(".operateBtn");
const numberBtns = [...document.querySelectorAll('.num')];

function resetAll() {
  return innerScreen.textContent = "";
}

function returnNumber(){
    innerScreen.textContent += this.innerText
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  } else {
    return "error, no operator was selected";
  }
}

resetAllBtn.addEventListener("click", resetAll);
operateBtns.addEventListener("click", operate);
numberBtns.map(button => {
    return button.addEventListener("click", returnNumber)
});