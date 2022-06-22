console.log("Комендат Андрій Русланович");

const a = 777;
const b = 888;
a = b;

document.write("Число №1: ", a, " Число №2: ", b);

const obj = {
  str: "string",
  bool: true,
  und: undefined,
  nul: null,
};

const isAdult = confirm("Вам є 18 років ?");
console.log(isAdult);

const name = "Комендат";
const lastName = "Андрій";
const studyGroup = true;
const age = 20;

console.log(typeof name);
console.log(typeof studyGroup);
console.log(typeof age);

const nickname = prompt("Вкажіть ваш nickname");
const mail = prompt("Вкажіть ваш e-mail");
const password = prompt("Вкажіть ваш пароль");

const hh = confirm(
  "Dear" +
    nickname +
    " your email is  " +
    mail +
    " your password is " +
    password
);

const minute = prompt("Скільки Хвилин");
const hour = prompt("Скільки годин");
const day = prompt("Скільки Днів");
const month = prompt("Скільки Місяців");
console.log(
  "Сикунд в хвилині: ",
  minute * 60,
  " В годині: ",
  hour * 3600,
  " В дні: ",
  day * 86400,
  " В місяці: ",
  month * 2592000
);
