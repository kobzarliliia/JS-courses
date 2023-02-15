const cents = parseInt(
    prompt("Введіть будь ласка кількість копійок номіналом 1 копійка", "")
);

const COUNT_CENTS_IN_HRYVNA = 100;

const hryvnasCount = Math.floor(cents / COUNT_CENTS_IN_HRYVNA);
const centsCount = cents % COUNT_CENTS_IN_HRYVNA;

document.write(
    `У ${cents} копійках ${hryvnasCount} гривень і ${centsCount} копійок.`
);
