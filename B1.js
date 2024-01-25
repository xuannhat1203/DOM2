let input = document.getElementById("text");
let button = document.getElementById("btn");
input.style.borderRadius = "10px";
input.style.border = "1px solid black";
button.onclick = function(){
    let value = input.value;
    if(value.length >= 10){
        alert("Không hợp lệ");
    }else{
        alert("Khai báo hợp lệ");
    }
};