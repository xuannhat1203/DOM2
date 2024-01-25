let age = document.getElementById("age");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let button = document.getElementById("btn");
button.onclick = function() {
    let value_id = id.value;
    let value_names = names.value;
    let value_age = age.value;
    let value_phone = phone.value;
    let value_email = email.value;
    if (value_id.length !== 6) {
        alert("ID không hợp lệ. Vui lòng nhập đúng 6 ký tự.");
        return;
    }
    if (value_names.trim() === "") {
        alert("Tên không hợp lệ. Vui lòng nhập tên.");
        return;
    }
    if (isNaN(value_age) || value_age < 18) {
        alert("Tuổi không hợp lệ. Vui lòng nhập tuổi lớn hơn 18.");
        return;
    }
    if (!value_phone.startsWith("0") || value_phone.length !== 10) {
        alert("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại bắt đầu bằng 0 và có độ dài là 10.");
        return;
    }
    alert("Đã hoàn thành thông tin!");
};