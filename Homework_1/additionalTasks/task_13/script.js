const days = parseInt(prompt("Введіть будь ласка кількість днів", "0"));

const COUNT_DAYS_IN_WEEK = 7;

const weeks = Math.floor(days / COUNT_DAYS_IN_WEEK);

document.write(`У ${days} днях є ${weeks} повних тижнів.`);
