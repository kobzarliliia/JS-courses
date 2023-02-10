const seconds = parseInt(
    prompt(
        "Введіть будь ласка кількість секунд, що пройшла від початку доби",
        ""
    )
);

const minuts = Math.floor(seconds / 60);
const hours = Math.floor(minuts / 60);

document.write(`
    Від початку доби пройшло ${minuts} хвилин.</br>
    Від початку доби пройшло ${hours} годин.</br>
    Від початку доби пройшло ${hours} годин ${minuts - hours * 60} хвилин.
`);
