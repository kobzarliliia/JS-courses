//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseInt(prompt("Напишіть будь ласка скільки вам років.", ""));

if (userAge < 6) {
    document.write("Ви дитина у садочку.");
} else if (userAge >= 6 && userAge < 18) {
    document.write("Ви школяр.");
} else if (userAge >= 18 && userAge < 24) {
    document.write("Ви студент.");
} else if (userAge >= 24 && userAge < 60) {
    document.write("Ви працівник.");
} else {
    document.write("Ви пенсіонер.");
}
