const yearOfBirth = parseInt(
    prompt("Введіть будь ласка рік вашого народження", "")
);
const currentDate = new Date();

const birthDay = new Date(yearOfBirth, 0, 1);
const currentYear = currentDate.getFullYear();

const age = currentYear - yearOfBirth;

document.write(`Вам ${age} років.`);
