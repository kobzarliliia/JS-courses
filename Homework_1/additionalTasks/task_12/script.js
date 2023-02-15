const twoCents = parseInt(
    prompt("Введіть будь ласка кількість копійок номіналом 2 копійки", "0")
);
const fiveCents = parseInt(
    prompt("Введіть будь ласка кількість копійок номіналом 5 копійок", "0")
);
const twentyFiveCents = parseInt(
    prompt("Введіть будь ласка кількість копійок номіналом 25 копійок", "0")
);
const fiftyCents = parseInt(
    prompt("Введіть будь ласка кількість копійок номіналом 50 копійок", "0")
);

const COUNT_CENTS_IN_HRYVNA = 100;

const totalSumOfCents =
    twoCents * 2 + fiveCents * 5 + twentyFiveCents * 25 + fiftyCents * 50;

const hryvnasCount = Math.floor(totalSumOfCents / COUNT_CENTS_IN_HRYVNA);
const centsCount = Math.floor(totalSumOfCents % COUNT_CENTS_IN_HRYVNA);

document.write(
    `Загальна сума коштів становть ${hryvnasCount} гривень і ${centsCount} копійок.`
);
