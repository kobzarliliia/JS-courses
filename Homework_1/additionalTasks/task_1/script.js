const monitorWidth = parseInt(
    prompt("Введіть будь ласка ширину екрана у пікселях", "")
);
const itemsCount = parseInt(
    prompt(
        "Введіть будь ласка кількість елементів, які необхідно відобразити в одному рядку",
        ""
    )
);

const itemsWidth = Math.floor(monitorWidth / itemsCount);

document.write(
    `Якщо ширина екрану становить ${monitorWidth}px і потрібно вивести ${itemsCount} елементів, то ширина одного елемента у рядку буде складати ${itemsWidth}px.`
);
