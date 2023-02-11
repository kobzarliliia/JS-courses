const seconds = parseInt(
    prompt(
        "Введіть будь ласка кількість секунд, що пройшла від початку доби",
        ""
    )
);

const ONE_MINUT_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = 3600;

const hours = Math.floor(seconds / ONE_HOUR_IN_SECONDS);
const minuts = Math.floor((seconds % ONE_HOUR_IN_SECONDS) / ONE_MINUT_IN_SECONDS);

document.write(`
    Від початку доби пройшло ${minuts + hours * 60} хвилин.</br>
    Від початку доби пройшло ${hours} годин.</br>
    Від початку доби пройшло ${hours} годин ${minuts} хвилин.
`);
