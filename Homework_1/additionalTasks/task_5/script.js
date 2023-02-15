const salary = parseFloat(prompt("Введіть будь ласка зарплату у гривнях", ""));

const TAX_RATE = 0.2;

const netIncome = salary * (1 - TAX_RATE);

document.write(
    `Якщо заробітна плата до вирахування податків становить 
    ${salary.toFixed(2)}, то на руки працівник отримає 
    ${netIncome.toFixed(2)} гривень.`
);
