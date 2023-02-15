const seconds = parseInt(
    prompt(
        "Введіть будь ласка на яку кількість секунд треба збільшити поточний час",
        "0"
    )
);
const minuts = parseInt(
    prompt(
        "Введіть будь ласка на яку кількість хвилин треба збільшити поточний час",
        "0"
    )
);

const COUNT_HOURS_IN_DAY = 24;
const COUNT_SECONDS_IN_HOUR = 3600;
const COUNT_SECONDS_IN_MINUT = 60;
const COUNT_MINUTS_IN_HOUR = 60;

const timeShift = seconds + minuts * COUNT_SECONDS_IN_MINUT;

const currentTime = new Date();
const currentHours = currentTime.getHours();
const currentMinuts = currentTime.getMinutes();
const currentSeconds = currentTime.getSeconds();

const modifiedHours =
    (currentHours +
        Math.floor(
            (currentMinuts + timeShift / COUNT_SECONDS_IN_MINUT) /
                COUNT_MINUTS_IN_HOUR
        )) %
    COUNT_HOURS_IN_DAY;
const modifiedMinuts =
    (currentMinuts +
        Math.floor((currentSeconds + timeShift) / COUNT_SECONDS_IN_MINUT)) %
    COUNT_MINUTS_IN_HOUR;
const modifiedSeconds = (currentSeconds + timeShift) % COUNT_SECONDS_IN_MINUT;

document.write(
    `Якщо зараз ${currentHours}:${currentMinuts}:${currentSeconds}, то через ${minuts} хвилин і ${seconds} секунд буде ${modifiedHours}:${modifiedMinuts}:${modifiedSeconds}.`
);
