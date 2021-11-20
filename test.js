var isToday = require('date-fns/isToday')


let newDate = new Date(2021, 10,15);
console.log(newDate, "the current date")

console.log(isToday(newDate))