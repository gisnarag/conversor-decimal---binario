const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.getElementById('result-output');

let number = ("");
let binary = [];

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let inputValue = input.value;
    number = Number(inputValue)
    toBinaryValidated(number)

    input.value = "";
})

function toBinaryValidated(number) {
    let novoArray = binary.slice()

    function exception(number) {
        if (number === 1) {
            novoArray.unshift(0, 0, 0, number);
            const finalArr = novoArray.join("")
            output.textContent = finalArr;
        }
    };

    if (number > 0) {
        number === 1 ? exception(number) : ToBinary(number)
    }
    else if (number === 0) {
        novoArray.unshift(0, 0, 0, number);
        const finalArr = novoArray.join("")
        output.textContent = finalArr;

    }
    else {
        alert("Prrr... Somente números naturais!")
    }
};

function ToBinary(number) {
    let copiedArray = binary.slice()

    while (number / 2 !== 0) {
        console.log("recebido:", number)
        let remainder = number % 2;
        copiedArray.unshift(remainder)
        let formatter = copiedArray.join("")
        output.textContent = formatter;
        number = Math.floor(number / 2)
    }
};


/*
teste de mesa com valor 10:

nº 1 -> Minha condição testa se 10 / 2 vai ser diferente de 0 - true
nº 2 -> a variável quociente recebe 10 / 2 - 5 
nº 3 -> minha variavel resto recebe o resto da divisão de 10 por 2 -> 0
nº 4 -> inclui dentro do array bin o valor de resto - [0]
nº 5 -> number recebe o valor do quociente - 5

nº 1 -> Minha condição testa se 5 / 2 vai ser diferente de 0 - true
nº 2 -> a variável quociente recebe 5 / 2 - 2.5 
nº 3 -> minha variavel resto recebe o resto da divisão de 5 por 2 -> 1
nº 4 -> inclui dentro do array bin o valor de resto - [1, 0]
nº 5 -> number recebe o valor do quociente - 2

nº 1 -> Minha condição testa se 2 / 2 vai ser diferente de 0 - true
nº 2 -> a variável quociente recebe 1 / 2 - 1
nº 3 -> minha variavel resto recebe o resto da divisão de 2 por 2 -> 0
nº 4 -> inclui dentro do array bin o valor de resto - [0, 1, 0]
nº 5 -> number recebe o valor do quociente - 1
*/







