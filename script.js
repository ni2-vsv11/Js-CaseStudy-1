
const form = document.getElementById("admissionForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");
const passwordStrength = document.getElementById("passwordStrength");

const input = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    mobile: document.getElementById("mobile"),
    dob: document.getElementById("dob"),
    password: document.getElementById("password"),
    confirmPassword: document.getElementById("confirmPassword")
};

const error = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    mobile: document.getElementById("mobileError"),
    dob: document.getElementById("dobError"),
    password: document.getElementById("passwordError"),
    confirmPassword: document.getElementById("confirmPasswordError")
};

const touched = { name: false, email: false, mobile: false, dob: false, password: false, confirmPassword: false };
const valid = { name: false, email: false, mobile: false, dob: false, password: false, confirmPassword: false };

const rules = {
    name: (v) => /^[A-Za-z ]{3,}$/.test(v.trim()),
    email: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v.trim()),
    mobile: (v) => /^\d{10}$/.test(v.trim()),
    dob: (v) => v.trim() !== "",
    password: (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(v),
    confirmPassword: () => input.confirmPassword.value !== "" && input.confirmPassword.value === input.password.value
};

function showState(key) {
    const hasValue = input[key].value.trim() !== "";

    if (!touched[key] || !hasValue) {
        input[key].style.borderColor = "";
        error[key].classList.add("hidden");
        return;
    }

    input[key].style.borderColor = valid[key] ? "green" : "red";
    error[key].classList.toggle("hidden", valid[key]);
}

function updatePasswordStrength(value) {
    if (value.length === 0) {
        passwordStrength.textContent = "Strength: N/A";
        passwordStrength.style.color = "#374151";
        return;
    }

    let score = 0;
    if (value.length >= 8) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^A-Za-z\d]/.test(value)) score++;

    const label = score >= 5 ? "Strong" : score >= 3 ? "Medium" : "Weak";
    const color = score >= 5 ? "green" : score >= 3 ? "#b45309" : "red";
    passwordStrength.textContent = "Strength: " + label;
    passwordStrength.style.color = color;
}

function checkField(key) {
    valid[key] = rules[key](input[key].value);
    showState(key);
}

function refreshSubmit() {
    const allValid = Object.values(valid).every(Boolean);
    submitBtn.disabled = !allValid;
    formStatus.classList.toggle("hidden", !allValid);
}

function onType(key) {
    touched[key] = true;
    checkField(key);

    if (key === "password") {
        updatePasswordStrength(input.password.value);
        checkField("confirmPassword");
    }

    refreshSubmit();
}

Object.keys(input).forEach(function (key) {
    input[key].addEventListener("input", function () {
        onType(key);
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

refreshSubmit();
