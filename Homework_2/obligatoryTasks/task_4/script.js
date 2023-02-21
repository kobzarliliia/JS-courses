//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseInt(prompt("Напишіть будь ласка скільки вам років.", ""))

const pupilAge = 6
const studentAge = 18
const workerAge = 24
const retiredAge = 60

if (userAge < pupilAge) document.write("Ви дитина у садочку.")
else if (userAge < studentAge) document.write("Ви школяр.")
else if (userAge < workerAge) document.write("Ви студент.")
else if (userAge < retiredAge) document.write("Ви працівник.")
else document.write("Ви пенсіонер.")

let c = 5
let b = ((15 + c) / 2) * c
console.log(b)
