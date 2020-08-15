"use strict";
const btnAdd = document.querySelector("button[data-add]");
const inputValeu = document.querySelector("input[data-input] ");
const outputEl = document.querySelector("span");

let total = 0;

btnAdd.addEventListener("click", function () {
  console.log("click kkkkk");
  const value = Number(inputValeu.value);
  total += value;
  outputEl.textContent = total;
  inputValeu.value = "";
});

// let total = 0;
// const CANCELED_BY_USER = "Отменено пользователем!";
// let input = prompt("Введите число");
// input = input * 1;

// if (input !== NaN) {
//   for (let i = 0; (i = null); i += 1) {
//     total += input;
//     alert(`Сумма введенных данных ${total}`);
//   }
//   alert(CANCELED_BY_USER);
// } else {
//   alert("Некорректный ввод");
// }

// if (input !== NaN) {
//   total = total + input;
//   alert(`Сумма введенных данных ${total}`);
// } else {
//   alert("Некорректный ввод");
// }
