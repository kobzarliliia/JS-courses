const numberOfMonth = parseInt(
    prompt("Введіть будь ласка номер поточного місяця", "1")
);
const monthsShift = parseInt(
    prompt(
        "Введіть будь ласка на яку кількість місяців ви хотіли б посунути поточний місяць",
        "0"
    )
);

const COUNT_MONTH_IN_YEAR = 12;

const shiftedMonth = (numberOfMonth - 1 + monthsShift) % COUNT_MONTH_IN_YEAR + 1;

document.write(
    `Через ${monthsShift} місяців буде ${shiftedMonth} місяць року.`
);
