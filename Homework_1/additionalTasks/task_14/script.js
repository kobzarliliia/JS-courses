const numberOfDay = parseInt(
    prompt("Введіть будь ласка поточний номер дня тижня", "1")
);
const daysShift = parseInt(
    prompt(
        "Введіть будь ласка на яку кількість днів ви хотіли б посунути поточну дату",
        "0"
    )
);

const COUNT_DAYS_IN_WEEK = 7;

const shiftedDay = (numberOfDay - 1 + daysShift) % COUNT_DAYS_IN_WEEK + 1;

document.write(`Через ${daysShift} днів буде ${shiftedDay} день тижня.`);
