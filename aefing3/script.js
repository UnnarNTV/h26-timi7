function sayHello() {
  const name = document.getElementById("nameInput").value;
  const output = document.getElementById("nameOutput");
  output.innerText = `Halló ${name}!`;
}

function checkAge() {
  const age = Number(document.getElementById("ageInput").value);
  const output = document.getElementById("ageOutput");
  if (age >= 18) {
    return (output.innerText = "Þú ert fullorðinn");
  }
  return (output.innerText = "Þú ert barn");
  // Þetta tvennt er það sama í rauninni en ef við
  // værum með else if þá myndum við þurfa else
  //   else {
  //     return (output.innerText = "Þú ert barn");
  //   }
}

function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operator").value;

  let result;
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  const output = document.getElementById("calcOutput");
  output.innerText = result;
}

function compliment() {
  document.getElementById("complimentOutput").innerText =
    "Þú ert frábær forritari!";
}

function einkunn(stig) {
  if (stig >= 90) {
    return "Frábært";
  } else if (stig >= 70) {
    return "Gott";
  } else if (stig >= 50) {
    return "Staðið";
  } else {
    return "Fall";
  }
}

function showGrade() {
  const stig = Number(document.getElementById("scoreInput").value);
  document.getElementById("gradeOutput").innerText = einkunn(stig);
}
