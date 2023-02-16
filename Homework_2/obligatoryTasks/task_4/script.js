//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseInt(prompt("Напишіть будь ласка скільки вам років.", ""))

const pupilAge = 6;
const studentAge = 18;
const workerAge = 24;
const retiredAge = 60;


if (userAge < pupilAge) document.write("Ви дитина у садочку.")
else if (userAge >= pupilAge && userAge < studentAge) document.write("Ви школяр.")
else if (userAge >= studentAge && userAge < workerAge) document.write("Ви студент.")
else if (userAge >= workerAge && userAge < retiredAge) document.write("Ви працівник.")
else document.write("Ви пенсіонер.")
