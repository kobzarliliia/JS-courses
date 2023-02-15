const year = parseInt(prompt("Введіть будь ласка рік", ""));

const century = Math.ceil(year / 100);

document.write(`${year} рік це ${century} вік.`);
