
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');
})

let celsRadio = document.getElementById('cels_to_far');
let farRadio = document.getElementById('far_to_cels');
let farInput = document.getElementById('far_number');
let celsInput = document.getElementById('cels_number');
let celsLabel = document.getElementById('cels_label');
let farLabel = document.getElementById('far_label');
let convertButton = document.getElementById('convert');
let resetButton = document.getElementById('reset');

celsRadio.addEventListener("click", () => farInput.disabled = true);
celsRadio.addEventListener("click", () => celsInput.disabled = false);
celsRadio.addEventListener("click", () => celsLabel.innerHTML = "Enter Celsius");
celsRadio.addEventListener("click", () => farLabel.innerHTML = "Degrees Celsius");

farRadio.addEventListener("click", () => celsInput.disabled = true);
farRadio.addEventListener("click", () => farInput.disabled = false);
farRadio.addEventListener("click", () => farLabel.innerHTML = "Enter Farenheit");
farRadio.addEventListener("click", () => celsLabel.innerHTML = "Degrees Celsius");

function convertFarenheitToCelsius(far) {
    const result = (far - 32) / 1.8;
    return result;
}

function convertCelsiusToFarenheit(cel) {
    const result = 1.8 * cel + 32
    return result;
}

function convert() {
    if (farInput.disabled) {
        const result = convertCelsiusToFarenheit(parseFloat(celsInput.value));
        farInput.value = result;
    }
    else {
        const result = convertFarenheitToCelsius(parseFloat(farInput.value));
        celsInput.value = result;
    }
}

function reset() {
    if (farInput.value!="" || celsInput.value!="") {
    farInput.value="";
    celsInput.value="";}
}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
