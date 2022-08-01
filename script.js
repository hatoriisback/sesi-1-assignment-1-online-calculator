/* ONLINE CALCULATOR */

/* TASK : Creating a Online Simple Calculator withJavascript Fundamental include Arithmatics Operations! */

/* User Stories :
    ●   I can add, subtract, multiply and divide two numbers.
    ●   I can clear the input field with a clear button.
    ●   I can keep chaining mathematical operations together until I hit the equalbutton, and the calculator will tell me the correct output. */

let result = document.getElementById("result");
// let numb = "1234567890";
let operator = "/*-+";
let tampungSolve = "";

function display(val) {
  document.getElementById("result").value += val;
  if (Boolean(tampungSolve) === true) {
    console.log(Boolean(tampungSolve));
    reDisplay();
    console.log(Boolean(tampungSolve));
    return val;
  } else {
    if (Boolean(tampungSolve) === false || tampungSolve === "") {
      if (val === "+" || val === "-" || val === "*" || val === "/") {
        console.log(">> Operator :", val);
      } else {
        console.log(">> Angka :", val);
      }
    }
  }
  return val;
}

function reDisplay() {
  allClear();
  tampungSolve = "";
  return tampungSolve;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  if (y) {
    document.getElementById("result").value = y;
    tampungSolve += y;
  }
  console.log(">> Total :", y);
  return y;
}

function allClear() {
  console.log("ALL CLEAR");
  document.getElementById("result").value = "";
}

function clearEntry() {
  console.log("CLEAR ENTRY");
  let angkaDisplay = document.getElementById("result").value;
  document.getElementById("result").value = angkaDisplay.substr(
    0,
    angkaDisplay.length - 1
  );
}

if (Boolean(tampungSolve) === true || tampungSolve === 0) {
  display().allClear();
}
