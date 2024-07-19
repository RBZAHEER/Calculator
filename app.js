const btnEle = document.querySelectorAll("button");
const inputEle = document.getElementById("result");
// console.log(btnEle);

for (let i = 0; i < btnEle.length; i++) {
  btnEle[i].addEventListener("click", () => {
    let btnValue = btnEle[i].textContent;
    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateInput();
    } else {
      appendValue(btnValue);
    }
    // console.log(btnValue);1
  });
}

function clearResult() {
  inputEle.value = "";
}

function calculateInput() {
  inputEle.value = eval(inputEle.value);
}

function appendValue(btnValue) {
  inputEle.value += btnValue;
}
