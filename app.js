let currentValue = document.getElementById("current_value"),
    incrementValue = document.getElementById("increment"),
    decrementValue = document.getElementById("decrement"),
    inputValue = document.getElementById("input_value");


incrementValue.addEventListener("click", function(){
   let num1 = convertCurrentValueToInt(currentValue);
   let num2 = convertUserValueToInt(inputValue);
   currentValue.textContent = num1 + num2;
   if (currentValue.textContent < 0) {
    currentValue.style.color = "red"
} else (
    currentValue.style.color = "black"
)
})

decrementValue.addEventListener("click", function(){
   let num1 = convertCurrentValueToInt(currentValue);
   let num2 = convertUserValueToInt(inputValue);
    currentValue.textContent = num1 - num2;
    if (currentValue.textContent < 0) {
        currentValue.style.color = "red"
    } else (
        currentValue.style.color = "black"
    )
})

const convertCurrentValueToInt = (num) => {
    let strValue = num.textContent;
    let intValue = parseInt(strValue); 
    return intValue;
 
}

const convertUserValueToInt = (num) => {
    let strValue = num.value;
    let intValue = parseInt(strValue);    
    return intValue;
}


let changeValue = () => {
    
}