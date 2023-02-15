const fractionalNumber = parseFloat(
    prompt("Введіть будь ласка дробове число", "")
);

const integerPart = Math.trunc(fractionalNumber);
const fractionalPart = fractionalNumber.toString().split(".")[1];

document.write(
    `Ціла частина числа ${fractionalNumber} становить ${integerPart}, дрібна 0.${fractionalPart}.`
);
