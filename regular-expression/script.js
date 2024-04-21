// regex Vanu
let regexInputVan = document.querySelector("#regexInputVan");
let validationTextvan = document.querySelector("#validation-text-van");

const REGULAR_EXPRESSION_1 = /^[^\d]{10,}$/;

regexInputVan.addEventListener("input", function() {
    validationTextvan.textContent = REGULAR_EXPRESSION_1.test(regexInputVan.value) 
    ? "Valid" : "Invalid, minimum 10 characters required.";
});

// regex dua
let regexInputVan2 = document.querySelector("#regexInputVan2");
let validationTextvan2 = document.querySelector("#validation-text-Van2");

const REGULAR_EXPRESSION_2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

regexInputVan2.addEventListener("input", function() {
    validationTextvan2.textContent = REGULAR_EXPRESSION_2.test(regexInputVan2.value) 
    ? "Valid" : "Invalid, minimum 8 characters required with at least one uppercase, one lowercase, and one digit.";
});

// regex tiga
let regexInputVan3 = document.querySelector("#regexInputVan3");
let validationTextvan3 = document.querySelector("#validation-text-Van3");

const REGULAR_EXPRESSION_3 = /^[a-zA-Z0-9]{6,12}$/;

regexInputVan3.addEventListener("input", function() {
    validationTextvan3.textContent = REGULAR_EXPRESSION_3.test(regexInputVan3.value) 
    ? "Valid" : "Invalid, minimum 6 characters and maximum 12 characters allowed with only letters and numbers.";
});

// regex empat
let regexInputVan4 = document.querySelector("#regexInputVan4");
let validationTextvan4 = document.querySelector("#validation-text-Van4");

const REGULAR_EXPRESSION_4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

regexInputVan4.addEventListener("input", function() {
    validationTextvan4.textContent = REGULAR_EXPRESSION_4.test(regexInputVan4.value) 
    ? "Valid" : "Invalid email format.";
});

// regex lima
let regexInputVan5 = document.querySelector("#regexInputVan5");
let validationTextvan5 = document.querySelector("#validation-text-Van5");

const REGULAR_EXPRESSION_5 = /^\d{5}$/;

regexInputVan5.addEventListener("input", function() {
    validationTextvan5.textContent = REGULAR_EXPRESSION_5.test(regexInputVan5.value) 
    ? "Valid" : "Invalid, 5 digits required.";
});
