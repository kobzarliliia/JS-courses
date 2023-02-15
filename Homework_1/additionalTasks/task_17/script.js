const userChart = prompt(
    "Введіть будь ласка будь-який один символ англійського алфавіту у верхньому реїстрі",
    "A"
);

const smallestCharIndex = "A".charCodeAt();
const largestCharIndex = "Z".charCodeAt();
const charShift = 2;

const indexOfUserChart = userChart.charCodeAt();

const modifiedChart = String.fromCharCode(
    ((indexOfUserChart - smallestCharIndex + charShift) %
        (largestCharIndex - smallestCharIndex + 1)) +
        smallestCharIndex
);

document.write(
    `Ви ввели букву ${userChart} яка за методом зміщення модифікується у букву ${modifiedChart}.`
);
