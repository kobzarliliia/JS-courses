const yearOfBirth = parseInt(prompt("Введіть будь ласка рік вашого народження", ""));
const currentDate = new Date();

const birthDay = new Date(yearOfBirth, 0, 1);
const age = Math.floor(
    (currentDate - birthDay) / (1000 * 60 * 60 * 24 * 30 * 12)
);

document.write(`Вам ${age} років.`);
