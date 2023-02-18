const innerScreen = document.querySelector(".innerScreen");
const resetAllBtn = document.querySelector(".acBtn");
const operateBtns = [...document.querySelectorAll(".operateBtn")];
const numberBtns = [...document.querySelectorAll(".num")];
const equalsBtn = document.querySelector(".equalsBtn");

function resetAll() {
  return (innerScreen.textContent = "");
}

function returnNumber() {
  if (innerScreen.textContent.length < 14) {
    innerScreen.textContent += this.innerText;
  }
  return;
}
function returnOperator() {
    innerScreen.textContent += this.innerText
}
function isEqualTo() {
  let splitNumsAndOps = innerScreen.textContent.split("");
  let result = operate(splitNumsAndOps[1], parseInt(splitNumsAndOps[0]),parseInt(splitNumsAndOps[2]))
  innerScreen.textContent = result 
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
    console.log(add(a, b));
    return add(a, b);
  } else if (operator == "-") {
    console.log(subtract(a, b));
    return subtract(a, b);
  } else if (operator == "*") {
    console.log(multiply(a, b));
    return multiply(a, b);
  } else if (operator == "/") {
    console.log(divide(a, b));
    return divide(a, b);
  } else {
    return;
  }
}

resetAllBtn.addEventListener("click", resetAll);
equalsBtn.addEventListener("click", isEqualTo);
operateBtns.map((button) => {
  button.addEventListener("click", returnOperator);
});
numberBtns.map((button) => {
  return button.addEventListener("click", returnNumber);
});
