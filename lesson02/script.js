//1
const week = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

let lang = "ru";

let days = week[lang];

if (days) {
  console.log(days.join(", "));
} else {
  console.log("Неверное значение");
}

//1b

lang = "en";

days = week[lang];

switch (days) {
  case days:
    console.log(days.join(", "));
    break;
  default:
    console.log("Неверное значение");
}

//2
const namePerson = "Илья";

let role =
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент";

console.log(role);
