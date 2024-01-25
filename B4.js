let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let sum = document.getElementById("sum");
let button = document.getElementById("btn");
button.onclick = function(){
    let value1 = parseFloat(number1.value);
    let value2 = parseFloat(number2.value);
    let result = value1 + value2;
    sum.value = result;
    sum.innerHTML = result;
};

