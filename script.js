const innerScreen = document.querySelector(".innerScreen");
const resetAllBtn = document.querySelector(".acBtn");
const operateBtns = [...document.querySelectorAll(".operateBtn")];
const numberBtns = [...document.querySelectorAll(".num")];
const equalsBtn = document.querySelector(".equalsBtn");
const clearLastBtn = document.querySelector(".cBtn");

function resetAll() {
  return (innerScreen.textContent = "");
}

function clearLastOp() {
  return (innerScreen.textContent = innerScreen.textContent.slice(0, -1));
}

function returnNumber() {
  if (innerScreen.textContent.length < 14) {
    innerScreen.textContent += this.innerText;
  }
  return;
}
function returnOperator() {
  innerScreen.textContent += this.innerText;
}
function isEqualTo() {
  let splitOperator = innerScreen.textContent
    .split("")
    .filter((e) => e == "/" || e == "*" || e == "+" || e == "-");
  let operator = splitOperator[0];
  let splitNums = innerScreen.textContent.split(operator);
  let firstNum = parseFloat(splitNums[0]);
  let secondNum = parseFloat(splitNums[1]);
  innerScreen.textContent = operate(operator, firstNum, secondNum);
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return parseFloat((a * b).toFixed(4));
}
function divide(a, b) {
  return parseFloat((a / b).toFixed(4));
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
clearLastBtn.addEventListener("click", clearLastOp);
