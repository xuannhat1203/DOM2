let input = document.getElementById("text");
input.style.backgroundColor = "yellow";
let button = document.getElementById("btn");
button.onclick = function(){
    let value = input.value;
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
    input.value = " ";
};