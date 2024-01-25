let input = document.getElementById("text");
let print = document.getElementById("print");
let button = document.getElementById("btn");
button.onclick = function(){
    print.innerHTML = input.value;
};