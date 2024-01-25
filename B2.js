let button = document.getElementById("btn");
let isOn = false;
button.onclick = function(){
    if(isOn){
        button.innerHTML = "OFF";
    }else{
        button.innerHTML = "ON";
    }
    isOn = !isOn;
};