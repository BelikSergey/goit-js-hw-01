"use strict";
// const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;
let userPassword = prompt("Введите пароль");
if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else {
  message = ACCESS_DENIED;
}
// Write code under this line

console.log(message);
