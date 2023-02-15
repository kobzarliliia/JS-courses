const months = parseInt(
    prompt("Введіть будь ласка кількість місяців", "1")
);

const COUNT_MONTH_IN_YEAR = 12;

const countOfYears = Math.floor(months / COUNT_MONTH_IN_YEAR);
const countOfMonth = months % COUNT_MONTH_IN_YEAR;

document.write(`${months} місяців це ${countOfYears} років і ${countOfMonth} місяців.`);
