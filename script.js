let namePattern = /^[A-Za-z ]{3,}$/;
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let mobilePattern = /^[0-9]{10}$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*]).{8,}$/;

function checkName() {
    let value = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (value === "") {
        error.innerText = "";
        error.style.color = "";
    } else if (namePattern.test(value)) {
        error.innerText = "Valid name";
        error.style.color = "green";
    } else {
        error.innerText = "Enter valid name";
        error.style.color = "";
    }

    checkAll();
}

function checkEmail() {
    let value = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    if (value === "") {
        error.innerText = "";
        error.style.color = "";
    } else if (emailPattern.test(value)) {
        error.innerText = "Valid email";
        error.style.color = "green";
    } else {
        error.innerText = "Enter valid email";
        error.style.color = "";
    }

    checkAll();
}

function checkMobile() {
    let value = document.getElementById("mobile").value;
    let error = document.getElementById("mobileError");

    if (value === "") {
        error.innerText = "";
        error.style.color = "";
    } else if (mobilePattern.test(value)) {
        error.innerText = "Valid mobile";
        error.style.color = "green";
    } else {
        error.innerText = "Enter 10-digit number";
        error.style.color = "";
    }

    checkAll();
}

function checkDob() {
    let value = document.getElementById("dob").value;
    let error = document.getElementById("dobError");

    if (value === "") {
        error.innerText = "Required";
        error.style.color = "";
    } else {
        error.innerText = "Valid date";
        error.style.color = "green";
    }

    checkAll();
}

function checkPassword() {
    let value = document.getElementById("password").value;
    let error = document.getElementById("passwordError");
    let strength = document.getElementById("strength");

    if (value === "") {
        error.innerText = "";
        error.style.color = "";
        strength.innerText = "";
    } else if (passwordPattern.test(value)) {
        error.innerText = "";
        strength.innerText = "Strong password";
        strength.style.color = "green";
    } else {
        error.innerText = "Weak password";
        error.style.color = "";
        strength.innerText = "Weak";
        strength.style.color = "";
    }

    checkConfirm();
    checkAll();
}

function checkConfirm() {
    let p = document.getElementById("password").value;
    let c = document.getElementById("confirm").value;
    let error = document.getElementById("confirmError");

    if (c === "") {
        error.innerText = "";
        error.style.color = "";
    } else if (p === c) {
        error.innerText = "Passwords match";
        error.style.color = "green";
    } else {
        error.innerText = "Passwords do not match";
        error.style.color = "";
    }

    checkAll();
}

function checkAll() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let btn = document.getElementById("btn");

    let isValid = false;

    if (
        namePattern.test(name) &&
        emailPattern.test(email) &&
        mobilePattern.test(mobile) &&
        dob !== "" &&
        passwordPattern.test(password) &&
        password === confirm &&
        confirm !== ""
    ) {
        isValid = true;
    }

    if (isValid === true) {
        btn.disabled = false;
        btn.style.backgroundColor = "green";
    } else {
        btn.disabled = true;
        btn.style.backgroundColor = "#6b7280";
    }
}