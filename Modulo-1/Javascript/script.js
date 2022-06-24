"use strict";

const result = document.querySelector("[data-equal]");
const display = document.querySelector("[data-display]");
const buttonNumbers = document.querySelectorAll("[data-number]");
const floatNumber = document.querySelector("[data-floatNumber]");
const buttonOperations = document.querySelectorAll("[data-operation]");
const backspace = document.querySelector("[data-backspace]");
const clear = document.querySelector("[data-clear]");

let newNumber = true; // Uma variável para simular um estado do evento novo número se (falso) ou (verdadeiro).
let operator; // Armazena o operador selecionado.
let previousNumber; // Armazena o número anterior digitado.

// Verifica se o operador está vazio.
const pendingOperation = () => operator !== undefined;

// Função para efetuar a operação com verificação se existe operação pendente.
const calcOperation = () => {
  if (pendingOperation()) {
    const currentNumber = parseFloat(display.textContent);
    newNumber = true;
    const resultOperation = eval(
      `${previousNumber}${operator}${currentNumber}`
    );
    refreshDisplay(resultOperation);
  }
};

// Função para atualizar o display quando for realizar operações.
const refreshDisplay = (text) => {
  if (newNumber) {
    display.textContent = text;
    newNumber = false;
  } else {
    display.textContent += text;
  }
};

// Função que insere os novos números no display e evento adicionado ao click.
const insertNumbers = (event) => refreshDisplay(event.target.textContent);
buttonNumbers.forEach((number) =>
  number.addEventListener("click", insertNumbers)
);

// Função que adiciona o avento para armazenar o operador e o número anterior para realizar a operação desejada.
const selectOperation = (event) => {
  // Validação só pode calcular se houver um número na memória (pendente), ou seja não pode calcular se for um novo número.
  if (!newNumber) {
    calcOperation();
    newNumber = true;
    operator = event.target.textContent; // Armazena o operador para a operação que vai ser realizada.
    previousNumber = parseFloat(display.textContent);
  }
};
buttonOperations.forEach((operation) =>
  operation.addEventListener("click", selectOperation)
);

// Para evitar que ao clicar no operador continue chamando evento calcOperation, foi atribuído ao operador valor de undefined.
const activeResult = () => {
  calcOperation();
  operator = undefined;
};
result.addEventListener("click", activeResult);

// Função para limpar todo o cálculo.
const clearCalc = () => {
  display.textContent = "";
  operator = undefined;
  newNumber = true;
  previousNumber = undefined;
};
clear.addEventListener("click", clearCalc);

// Função para backspace.
const removeLastNumber = () => {
  display.textContent = display.textContent.slice(0, -1);
};
backspace.addEventListener("click", removeLastNumber);

// Tratamento de números decimais.
const floatNumbersExists = () => display.textContent.indexOf(".") !== -1; // Retornará falso (-1) se não existir decimal.
const valueExists = () => display.textContent.length > 0; // Verifica se existe valor.
const floatNumberFunction = () => {
  // Para validar melhor as hipóteses de números decimais!
  if (!floatNumbersExists() || operator !== undefined) {
    if (valueExists()) {
      refreshDisplay(".");
    } else {
      refreshDisplay("0.");
    }
  }
};
floatNumber.addEventListener("click", floatNumberFunction);
