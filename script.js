const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.getElementById('result-output');

let inputValue = "";
let number = "";
let binary = [];

input.addEventListener('input', (e) => {
    inputValue = e.target.value;
    let onlyNumberInput = inputValue.replace(/\D/g, "");
    e.target.value = onlyNumberInput;
    onlyNumberInput = inputValue;

});

form.addEventListener('submit', (event) => {
    event.preventDefault()

    number = Number(inputValue);
    toBinaryValidated(number);

    input.value = "";
});

function toBinaryValidated(number) {
    let novoArray = binary.slice();

    function exception(number) {
        if (number === 1) {
            novoArray.unshift(0, 0, 0, number);
            const finalArr = novoArray.join("");
            output.textContent = finalArr;
        }
    };

    if (number > 0) {
        number === 1 ? exception(number) : toBinary(number)
    }
    else if (number === 0) {
        novoArray.unshift(0, 0, 0, number);
        const finalArr = novoArray.join("")
        output.textContent = finalArr;

    }
    else {
        alert("Prrr... Somente números naturais!");
    }
};

function toBinary(number) {
    let copiedArray = binary.slice();

    while (number / 2 !== 0) {
        console.log("recebido:", number);
        let remainder = number % 2;
        copiedArray.unshift(remainder)
        let formatter = copiedArray.join("");
        output.textContent = formatter;
        number = Math.floor(number / 2);
    }
};
