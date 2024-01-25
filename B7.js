let functionButtons = document.getElementsByClassName("function");
let input = document.getElementById("text");
let numberButtons = document.getElementsByClassName("number");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function() {
        let value = this.innerText;
        input.value += value;
    };
}
for (let i = 0; i < functionButtons.length; i++) {
    functionButtons[i].onclick = function() {
        let value = this.innerText;
        if (value === "=") {
            let expression = input.value;
            let result = eval(expression); // hàm eval dùng để tính các biểu thức toán học do người dùng nhập vào
            input.value = result;
        }else if(value === "AC"){
            input.value = " ";
        }else {
            input.value += value;
        }
    };
}