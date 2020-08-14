"use strict";
const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line
// 1.сравнить введенное число и при null вывести отменено пользователем
totalPrice = pricePerDroid * orderPieces;
balanceCredit = credits - totalPrice;
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits < totalPrice) {
  message = ACCESS_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);

// 2. просчитать суммы 2.1 цена заказа кол-во на цену 2.2 разница между значением суммы и кредитом

//3.1 в зависимости от результата вывести то что получилось

// console.log(message);
//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
