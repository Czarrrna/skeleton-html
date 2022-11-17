const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if (email.validity.valueMissing) {
        email.setCustomValidity("Missing e-mail address!");
        email.reportValidity(); 
    } else {
        email.setCustomValidity("");
    }
});
