const innerScreen = document.querySelector(".innerScreen");
const clearAllBtn = document.querySelector(".acBtn");
const operateBtns = [...document.querySelectorAll(".operateBtn")];
const numberBtns = [...document.querySelectorAll(".num")];
const equalsBtn = document.querySelector(".equalsBtn");
const clearLastBtn = document.querySelector(".cBtn");
const squareRootBtn = document.querySelector(".squareRootBtn");

function clearAll() {
  return (innerScreen.textContent = "");
}

function clearLastOperation() {
  return (innerScreen.textContent = innerScreen.textContent.slice(0, -1));
}

function returnNumber() {
  if (innerScreen.textContent.length < 13) {
    innerScreen.textContent += this.innerText;
  }
  return;
}
function returnOperator() {
  // remove tailing operators
  let screenText = innerScreen.textContent;
  if (screenText.match(/[+-/*]/)) {
    return;
  }
  innerScreen.textContent += this.innerText;
}
function isEqualTo() {
  if (
    // check if the operations ends with a number and does not begin with an operator
    innerScreen.textContent.slice(-1).match(/[0-9]/) &&
    !innerScreen.textContent.slice(0, 1).match(/[+-/*]/)
  ) {
    if (innerScreen.textContent.includes("√")) {
      let splitInnerText = innerScreen.textContent.split("");
      let num = splitInnerText.slice(1).join("");
      innerScreen.textContent = getSqrt(num);
    } else {
      let splitOperator = innerScreen.textContent
        .split("")
        .filter((e) => e == "/" || e == "*" || e == "+" || e == "-");
      let operator = splitOperator[0];
      let splitNums = innerScreen.textContent.split(operator);
      let firstNum = parseFloat(splitNums[0]);
      let secondNum = parseFloat(splitNums[1]);
      innerScreen.textContent = operate(operator, firstNum, secondNum);
    }
  } else if (innerScreen.textContent.slice(0, 1) == "-") {
    return;
  }
}

function squareRootScreenText() {
  innerScreen.textContent = this.innerText;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return parseFloat((a * b).toFixed(6));
}
function divide(a, b) {
  return parseFloat((a / b).toFixed(6));
}

function getSqrt(a) {
  return parseFloat(Math.sqrt(a).toFixed(6));
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
    return;
  }
}

clearAllBtn.addEventListener("click", clearAll);
equalsBtn.addEventListener("click", isEqualTo);
operateBtns.map((button) => {
  button.addEventListener("click", returnOperator);
});
numberBtns.map((button) => {
  return button.addEventListener("click", returnNumber);
});
clearLastBtn.addEventListener("click", clearLastOperation);
squareRootBtn.addEventListener("click", squareRootScreenText);
