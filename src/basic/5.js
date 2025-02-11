"use strict";
// Оголошення enum для днів тижня
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Monday"] = 0] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 1] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 2] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 3] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 4] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 5] = "Saturday";
    DayOfWeek[DayOfWeek["Sunday"] = 6] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
// Функція, яка перевіряє, чи є день вихідним
const isWeekend = (day) => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
// Виклик функції
console.log(isWeekend(DayOfWeek.Monday)); // false
console.log(isWeekend(DayOfWeek.Saturday)); // true
