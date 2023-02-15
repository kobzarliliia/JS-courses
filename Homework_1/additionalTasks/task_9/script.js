const seconds = parseInt(
    prompt("Введіть будь ласка яка зараз секунда доби", "")
);

const COUNT_SECONDS_IN_HOUR = 3600;
const COUNT_SECONDS_IN_MINUT = 60;

const hours = Math.floor(seconds / COUNT_SECONDS_IN_HOUR);
const minuts = Math.floor(
    (seconds % COUNT_SECONDS_IN_HOUR) / COUNT_SECONDS_IN_MINUT
);

document.write(
    `З початку доби пройшло ${seconds} секунд, що становить ${hours} годин і ${minuts} хвилин.`
);
