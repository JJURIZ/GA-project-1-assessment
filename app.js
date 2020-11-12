let currentValue = document.getElementById("current_value"),
  incrementValue = document.getElementById("increment"),
  decrementValue = document.getElementById("decrement"),
  inputValue = document.getElementById("input_value");

let changeValue = (btnType) => {
  let num1 = convertCurrentValueToInt(currentValue);
  let num2 = convertUserValueToInt(inputValue);

  if (btnType.textContent === `-`) {
    currentValue.textContent = num1 - num2;
  } else if (btnType.textContent === `+`) {
    currentValue.textContent = num1 + num2;
  }

  if (currentValue.textContent < 0) {
    currentValue.style.color = "red";
  } else currentValue.style.color = "black";
};

incrementValue.addEventListener("click", function () {
  changeValue(incrementValue);
});

decrementValue.addEventListener("click", function () {
  changeValue(decrementValue);
});

const convertCurrentValueToInt = (num) => {
  let strValue = num.textContent;
  let intValue = parseInt(strValue);
  return intValue;
};

const convertUserValueToInt = (num) => {
  let strValue = num.value;
  let intValue = parseInt(strValue);
  return intValue;
};
