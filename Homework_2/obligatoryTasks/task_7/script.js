//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

const month = parseInt(prompt("Напишіть будь ласка номер місяця.", ""));

if (month == 12 || month < 3) {
    document.write(`${month} це зима.`);
} else if (month > 2 && month < 6) {
    document.write(`${month} це весна.`);
} else if (month > 5 && month < 9) {
    document.write(`${month} це літо.`);
} else if (month > 8 && month < 12) {
    document.write(`${month} це осінь.`);
} else {
    document.write('Ви ввели некорректні дані, спробуйте знову.');
}
